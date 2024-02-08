import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setGetProfile } from "../Redux/Reducers/ProfileSlice"
import TextArea from "../Component/TextArea"
import Button from "../Component/Button"

export default function UserNameButton() {
    const token = useSelector(state => state.auth.token)
    const profile = useSelector((state) => state.profile)
    const [isChanging, setIsChanging] = useState(false)
    const [newUserName, setNewUserName] = useState(profile.userName)
    const [error,setError] = useState("");

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
            const data = await response.json();
            dispatch(setGetProfile({data}));
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
                        onClick={editUserName}
                        buttonText="Save"/>
                </div>
            ) : (
                <Button
                    className="edit-button"
                    onClick={() => setIsChanging(true)}
                    buttonText="Edit UserName"/>
            )}
        </div>
    )
}