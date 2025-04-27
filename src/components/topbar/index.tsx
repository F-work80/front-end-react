import React, {useContext} from 'react';
import {Box, Grid, IconButton, InputBase,useTheme} from "@mui/material";
import {useAppSelector} from "../../utils/hook";
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import NotificationIcon from '@mui/icons-material/Notifications'
import SearchIcon from '@mui/icons-material/Search'
import {ColorModeContext, themTokens} from "../../theme";
import {useStyle} from "./styles";



const TopBarComponent = () => {
    const user=useAppSelector(state=>state.auth)
    const classes=useStyle()

    const theme=useTheme()
    const colors = themTokens(theme.palette.mode)
    // const colors= themeSettings(theme.palette.mode)
    const colorMode:any=useContext(ColorModeContext)
    return (
        <Box
            display='flex'
            justifyContent='space-between'
            px='32px'
            py='24px'
        >
            <Grid>Welcome {user.user.userName} !</Grid>
            <Box
                sx={{
                    display:'flex',
                }}
            >
                <Grid>
                    <IconButton
                        sx={{mr: '25px'}}
                        onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode==='dark'?(<DarkModeIcon/>):(<LightModeIcon/>)}
                    </IconButton>
                    <IconButton
                        sx={{mr: '25px'}}
                    >
                        <NotificationIcon/>
                    </IconButton>
                </Grid>
                <Grid
                    display='flex'
                >
                    <IconButton
                        className={classes.root}
                    >
                        <SearchIcon

                        />
                    </IconButton>
                    <InputBase
                        sx={{
                            fontStyle:'italic',
                            borderRadius:'8px',
                            bgcolor:colors.mine_shaft.DEFAULT,
                            color:colors.white.DEFAULT,
                            paddingLeft:'10px',

                        }}
                    placeholder='Search'
                    />
                </Grid>
            </Box>

        </Box>
    );
};

export default TopBarComponent;