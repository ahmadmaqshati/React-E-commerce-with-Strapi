import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                // palette values for light mode
                iconsection: {
                    main: '#fff'
                },

                herobackground: {
                    main: '#F6F6F6'
                    /*   main: '#93A6AD' */
                },
                /* #93A6AD */
                mycolor: {
                    main: '#f6f9fc'
                },
                text: {
                    primary: "#2B3445",
                },
                neutral: {
                    main: "#64748B",
                },

                favColor: {
                    main: grey[300],
                },
            }
            : {
                // palette values for dark mode
                iconsection: {
                    main: '#000'
                },

                herobackground: {
                    main: '#1C1E20'
                },
                mycolor: {
                    main: '#252b32'
                },
                neutral: {
                    main: "#64748B",
                },

                favColor: {
                    main: grey[800],
                },
                text: {
                    primary: "#fff",
                },
            }),
    },
});

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => { },
});

export const useMode = () => {
    const [mode, setMode] = useState(
        localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
    );

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    return [theme, colorMode];
};