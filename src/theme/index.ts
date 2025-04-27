import {useState,createContext,useMemo} from "react";
import {createTheme} from "@mui/material";

export const themTokens=(mode:string)=>({
    ...(mode==='dark')?
        {
            white:{
                DEFAULT:'#FFFFFF',
                100:'#F7f7f7',
            },
            dark_blue: {
           DEFAULT: '#1565C0',
           50: '#99C3F4',
           100: '#86B9F2',
           200: '#62A3EE',
           300: '#3D8EEA',
           400: '#1978E5',
           500: '#1565C0',
           600: '#0F4A8D',
           700: '#0A305B',
           800: '#041528',
           900: '#000000',
           },
            lime: {  DEFAULT: '#C1EF00',
                50: '#EEFFA8',
                100: '#EAFF93',
                200: '#E2FF6A',
                300: '#DBFF42',
                400: '#D3FF19',
                500: '#C1EF00',
                600: '#94B700',
                700: '#667F00',
                800: '#394700',
                900: '#0C0F00',
               },
            cinnabar: {
            DEFAULT: '#E8502F',
            50: '#FADBD4',
            100: '#F8CCC2',
            200: '#F4AD9D',
            300: '#F08E78',
            400: '#EC6F54',
            500: '#E8502F',
            600: '#C93616',
            700: '#962811',
            800: '#641B0B',
            900: '#310D05',
        },
            black:{
                DEFAULT: '#000000',
                50: '#5C5C5C',
                100: '#525252',
                200: '#3D3D3D',
                300: '#292929',
                400: '#141414',
                500: '#000000',
                600: '#000000',
                700: '#000000',
                800: '#000000',
                900: '#000000',
            },
            mine_shaft: {
                DEFAULT: '#8c8c8c',
                50: '#989898',
                100: '#8E8E8E',
                200: '#797979',
                300: '#656565',
                400: '#505050',
                500: '#3C3C3C',
                600: '#202020',
                700: '#040404',
                800: '#000000',
                900: '#000000',
            },
            boulder: {
                DEFAULT: '#7C7C7C',
                50: '#D8D8D8',
                100: '#CECECE',
                200: '#B9B9B9',
                300: '#A5A5A5',
                400: '#909090',
                500: '#7C7C7C',
                600: '#606060',
                700: '#444444',
                800: '#282828',
                900: '#0C0C0C',
            },
            mint_green: {
                DEFAULT: '#A9FFA7',
                50: '#FFFFFF',
                100: '#FFFFFF',
                200: '#FFFFFF',
                300: '#F9FFF9',
                400: '#D1FFD0',
                500: '#A9FFA7',
                600: '#72FF6F',
                700: '#3BFF37',
                800: '#06FE00',
                900: '#04C600',
            },

        }:
        {
            white:{
                DEFAULT:'#FFFFFF',
                100:'#F7f7f7',
            },
            lime: {  DEFAULT: '#C1EF00',
                900: '#EEFFA8',
                800: '#EAFF93',
                700: '#E2FF6A',
                600: '#DBFF42',
                500: '#D3FF19',
                400: '#C1EF00',
                300: '#94B700',
                200: '#667F00',
                100: '#394700',
                50: '#0C0F00',
            },
            cinnabar: {
                DEFAULT: '#E8502F',
                900: '#FADBD4',
                800: '#F8CCC2',
                700: '#F4AD9D',
                600: '#F08E78',
                500: '#EC6F54',
                400: '#E8502F',
                300: '#C93616',
                200: '#962811',
                100: '#641B0B',
                50: '#310D05',
            },
            black:{
                DEFAULT: '#000000',
                900: '#5C5C5C',
                800: '#525252',
                700: '#3D3D3D',
                600: '#292929',
                500: '#141414',
                400: '#0f0e0e',
                300: '#000000',
                200: '#000000',
                100: '#000000',
                50: '#000000',
            },
            mine_shaft: {
                DEFAULT: '#9c9c9c',
                900: '#989898',
                800: '#8E8E8E',
                700: '#797979',
                600: '#656565',
                500: '#505050',
                400: '#3C3C3C',
                300: '#202020',
                200: '#040404',
                100: '#000000',
                50: '#000000',
            },
            boulder: {
                DEFAULT: '#7C7C7C',
                9000: '#D8D8D8',
                800: '#CECECE',
                700: '#B9B9B9',
                600: '#A5A5A5',
                500: '#909090',
                400: '#7C7C7C',
                300: '#606060',
                200: '#444444',
                100: '#282828',
                50: '#0C0C0C',
            },
            mint_green: {
                DEFAULT: '#A9FFA7',
                900: '#FFFFFF',
                800: '#FFFFFF',
                700: '#FFFFFF',
                600: '#F9FFF9',
                500: '#D1FFD0',
                400: '#A9FFA7',
                300: '#72FF6F',
                200: '#3BFF37',
                100: '#06FE00',
                50: '#04C600',
            },
        }
})

export const themeSettings:any=(mode:string)=>{
    const colors=themTokens(mode)
    return{
        palette: {
            mode: mode,
            ...(mode === "dark" ?
                {
                    primary: {
                        main: colors.black.DEFAULT,
                    },
                    secondary: {
                        main: colors.white.DEFAULT,
                    },
                    neutral: {
                        dark: colors.black[400],
                        light: colors.white[100]
                    }
                } :
                {
                    primary: {
                        main: colors.white.DEFAULT,
                    },
                    secondary: {
                        main: colors.boulder.DEFAULT
                    },
                    neutral: {
                        dark: colors.black[400],
                        light: colors.white[100]
                    }
                }
                )},
        typography:{
            fontFamily:['Poppins','sans-serif'].join(','),
            fontSize:14,
            fontWeight:500,
            h1:{
                fontFamily:['Poppins','sans-serif'].join(','),
                fontsize:28,
                fontWeight:600
            },
            h2:{
                fontFamily:['Poppins','sans-serif'].join(','),
                fontSize:20,
                fontWeight:600
            },
            h3:{
                fontFamily:['Poppins','sans-serif'].join(','),
                fontSize:18,
                fontWeight:600
            },
            p:{
                fontFamily:['Poppins','sans-serif'].join(','),
                fontSize:14,
                fontWeight:500
            },
        }
    }
}

export const ColorModeContext:any = createContext({
    toggleColorMode:()=>{}
})

export const  useMode=()=>{
    const [mode,setMode]=useState('light')

    const colorMode:any=useMemo(
        ()=>({
            toggleColorMode:()=>setMode((prev:string)=>(
                prev==='light'?'dark':'light'
            ))
        }),[]
    )

    const theme=useMemo(
        ()=> createTheme(themeSettings(mode)),[mode]
    )
    return[colorMode,theme]
}







