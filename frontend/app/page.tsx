import Auth from "./components/Auth/page";
import Chat from "./components/Chat/page";
import { Box } from "@chakra-ui/react";
import getSession from "./lib/getSession";

export default async function Page() {
    const session = await getSession();
    console.log("Hesre is s : ",session);
    return (
        <Box>
            {session?.user?.username ? (
                <Chat />
            ) : (
                <Auth session={session} />
            )}
        </Box>
    );
}
