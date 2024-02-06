import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setEditUsernameProfile } from "../Redux/Reducers/ProfileSlice"
import TextArea from "../Component/TextArea"
import Button from "../Component/Button"

export default function UserNameButton() {
    const token = useSelector(state => state.userAuth.token)
    const profile = useSelector((state) => state.profile)
    const [isChanging, setIsChanging] = useState(false)
    const [newUserName, setNewUserName] = useState(profile.userName)

    const dispatch = useDispatch()

    useEffect(() => {
    setNewUserName(profile.userName)
    }, [profile.userName])
    
    const editUserName = async (e) => {
        e.preventDefault()
        if (!newUserName) {
            setError("The field cannot be empty.")
        return
        }
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ userName: newUserName })
            })
            if (!response) {
                throw new Error("Échec de la mise à jour du nom d'utilisateur")
            }
            dispatch(setEditUsernameProfile(newUserName))
            setIsChanging(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {isChanging ? (
                <div>
                    <TextArea
                        label="Username"
                        id="username"
                        type="text"
                        onChange={(e) => {
                            setNewUserName(e.target.value)
                        }}
                        value={newUserName} />
                    <br />
                    <Button
                        className="edit-button"
                        onClick={editUserName}>
                        Save
                    </Button>
                </div>
            ) : (
                <Button
                    className="edit-button"
                    onClick={() => setIsChanging(true)}>
                    Edit UserName
                </Button>
            )}
        </div>
    )
}