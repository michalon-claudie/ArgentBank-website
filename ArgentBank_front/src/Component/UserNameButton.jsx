import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import TextArea from "../Component/TextArea"
import Button from "../Component/Button"
import { editUserName } from "../Redux/Api/userApi"

export default function UserNameButton() {
    const token = useSelector(state => state.auth.token)
    const profile = useSelector((state) => state.profile)
    const [isChanging, setIsChanging] = useState(false)
    const [newUserName, setNewUserName] = useState(profile.userName)
    const [error,setError] = useState("");

    const dispatch = useDispatch()

    
    useEffect(() => {
        setNewUserName(profile.userName);
        setIsChanging(false);
    }, [profile.userName]);

    const handleEditUserName = async () => {
        if (!newUserName) {
            setError("The field cannot be empty.");
            return;
        }
        try {
            await editUserName(newUserName, token, dispatch,setIsChanging,setError);
            setIsChanging(false);
        } catch (error) {
            console.log(error);
        }
    };
    

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
                        onClick={handleEditUserName}
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