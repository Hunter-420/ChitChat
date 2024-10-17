"use client";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import GoogleButton from 'react-google-button'

export default function Login() {
    const { data: session } = useSession();
    return session?.user?.name == null ? (
        <GoogleButton onClick={() => signIn("google")}>Sign In</GoogleButton>
    ) : (
        <button onClick={() => signOut()}>Sign Out</button>
    );
}
