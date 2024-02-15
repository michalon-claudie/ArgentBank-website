import { loginSuccess } from '../Reducers/AuthReducers';
import { setGetProfile } from '../Reducers/ProfileSlice';

export const FetchHandleLogin = async(email, password, dispatch, navigate) => {
    try{
        const response = await fetch ("http://localhost:3001/api/v1/user/login",{
        method: "POST",
        headers:{"Content-type" :"application/json"},
        body: JSON.stringify({email, password})
    })
    const data = await response.json()
    const token = data.body.token
    if(token){
    dispatch(loginSuccess({token}))
    localStorage.setItem('token', token)
    navigate("/user")
}
    }catch(error) {
        console.log(error)
        alert("Nom d'utilisateur ou mot de passe incorrect");}
    }

export const fetchUserData = async (token, dispatch, navigate) => {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        const data = await response.json();
        dispatch(setGetProfile({data}));
    } catch (error) {
        console.log(error);
        await localStorage.removeItem('token')
        navigate('/sign-in')
    }
}


export const editUserName = async (newUserName, token, dispatch) => {
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