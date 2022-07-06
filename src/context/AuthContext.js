import axios from "axios";
import React, {createContext} from "react";
import { auth } from "../../firebase";
import { BASE_URL } from "../config";

export const AuthContext= createContext();

/*export const AuthProvider = ({children}) => {
    const register =(name,email,password)=> {
        axios.post(`${BASE_URL}/register`, {
            name,email, password
        }).then(res => {
            let userInfo =res.data;
            console.log(userInfo);
        }).catch(e => {
            console.log(`register error ${e}`)
        });
    };*/
export const register =() => {
    auth
    .createUserWithEmailAndPassword(name,email,password)
    .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.email);
    })
    .catch (error => alert(error.message))
}

export const handleLogin =() => {
    auth
    .signInWithEmailAndPassword(email,password)
    .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.email);
    })
    .catch(error => alert(error.message))
}


    return (
        <AuthContext.Provider value={{register}}>{children}</AuthContext.Provider>
    );
    


 