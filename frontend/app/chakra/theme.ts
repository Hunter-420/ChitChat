import { StyleFunctionProps, extendTheme } from "@chakra-ui/react";

import { mode } from "@chakra-ui/theme-tools";

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

export const theme = extendTheme({
    config,
    brand: {
        100: "#3d84f7",
    },
    breakpoints: {
        sm: "320px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
    },

    colors: {
        primary: {
            dark: "#003100",
            light: "#e6f6e6",
        },
        secondary: "#009400",
        text: {
            dark: "#000",
            light: "#fff",
        },
        icon: "#ffd700",
    },

    keyframes: {
        spin: {
            from: { transform: "rotate(0deg)" },
            to: { transform: "rotate(360deg)" },
        },
    },

    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                bg: mode("blackAlpha.800", "blackAlpha.800")(props),

                color: mode("whiteAlpha.800", "blackAlpha.800")(props),
            },
        }),
    },
});
