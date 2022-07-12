import axios from "axios";
import React, { createContext } from "react";
import { BASE_URL } from "../utils/config";

export const AuthContext = createContext();

export const login = (email, password) => {
    console.log("bazalni");
    console.log(email)
    console.log(password)
    axios.post(`${BASE_URL}/auth/login`, {
        username: email,
        password: password
    }, {
        headers: {
            'Content-type': 'application/json'
        },
    }
    ).then(res => {
        let userInfo = res.data;
        console.log(userInfo);
    }).catch(e => {
        console.log(`register error ${e}`)
    });

};
export const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
    );
};

