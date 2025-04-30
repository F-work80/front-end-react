import React, {useContext} from 'react';
import {Box, Grid, IconButton, InputBase, Theme, useTheme} from "@mui/material";
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

    const theme:Theme=useTheme()
    const colors = themTokens(theme.palette.mode)
    const colorMode:any=useContext(ColorModeContext)
    return (
        <Box className={classes.mainBox}>
            <Grid className={classes.userText}>Welcome {user.user.userName} !</Grid>
            <Box className={classes.d_flex} >
                <Grid>
                    <IconButton  className={classes.mr_25}
                        onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode==='dark'?(<DarkModeIcon/>):(<LightModeIcon/>)}
                    </IconButton>
                    <IconButton className={classes.mr_45}>
                        <NotificationIcon/>
                    </IconButton>
                </Grid>
                <Grid >
                    <IconButton className={classes.search}>
                        <SearchIcon/>
                    </IconButton>
                    <InputBase className={classes.searchBase}
                        sx={{
                            bgcolor:colors.mine_shaft.DEFAULT,
                            color:colors.white.DEFAULT,}}
                    placeholder='Search'
                    />
                </Grid>
            </Box>

        </Box>
    );
};

export default TopBarComponent;