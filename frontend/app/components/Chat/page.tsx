"use client"
import { signOut } from "next-auth/react";
import React from "react";
const Chat = () => {
    return (
        <>
        <h1>CHAT</h1>
       <button onClick={() => signOut()}>LogOut</button>
        </>
    )
};

export default Chat;
