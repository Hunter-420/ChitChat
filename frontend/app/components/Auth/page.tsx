"use client"
import { Button, Center, Input, Stack, Text } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useState } from "react";

interface IAuthProps {
    session: Session | null;
    reloadSession: () => void;
}

const Auth: React.FunctionComponent<IAuthProps> = ({
    session,
    reloadSession,
}) => {
    console.log("Session: ",session);
    const [username, setUsername] = useState("");
    const onSave = async() => {
        try {
           /**
               * createUsername mutation to send our username to GraphQL API 
           */

        } catch (error) {
            console.log("onSave error : ",error);
        }
    }
    console.log(username);
    return (
        <Center height="100vh" border="1px solid red">
            <Stack>
                {session ? (
                    <>
                    <Text fontSize="4xl" >Create a Username</Text>
                    <Input
                        fontSize="2xl"
                        placeholder="Enter a username"
                        value={username}
                        onChange={(event) => setUsername((event.target as HTMLInputElement).value )}
                    />
                    <Button onClick={()=>onSave()}>Save</Button>
                    </>
                ) : (
                    <>
                     <Center> <Text fontSize="4xl">Chit-Chat</Text></Center>
                        <Button fontSize="2xl" onClick={() => signIn("google")}>Continue with Google</Button>
                    </>
                )}
            </Stack>
        </Center>
    );
};

export default Auth;
