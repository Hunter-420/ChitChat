import { SessionProvider } from "next-auth/react";
import Providers from "./chakra/providers";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SessionProvider>
            <html lang="en">
                <body>
                    <Providers>{children}</Providers>
                </body>
            </html>
        </SessionProvider>
    );
}
