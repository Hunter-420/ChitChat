import { signIn, signOut } from "@/auth";
import getSession from "../lib/getSession";
export default async function Login() {
    const session = await getSession();
    console.log("Here is the data ", session);
    return session?.user?.name == null ? (
        <form
            action={async () => {
                "use server";
                await signIn("google");
            }}
        >
            <button>Sign In</button>
        </form>
    ) : (
        <form
            action={async () => {
                "use server";
                await signOut();
            }}
        >
        
            <button>Sign Out {session?.user?.name}</button>
        </form>
    );
}
