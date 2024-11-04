"use client";
import { SessionProvider } from "next-auth/react";
import Providers from "./chakra/providers";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const client = new ApolloClient({
        uri: process.env.NEXTAUTH_URL,
        cache: new InMemoryCache(),
    });

    return (
        <SessionProvider>
            <html lang="en">
                <body>
                    <ApolloProvider client={client}>
                        <Providers>{children}</Providers>
                    </ApolloProvider>
                </body>
            </html>
        </SessionProvider>
    );
}
