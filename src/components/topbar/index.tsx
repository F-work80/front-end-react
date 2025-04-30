import React, {useContext} from 'react';
import {AppBar, Box, Grid, IconButton, InputBase, Theme, Toolbar, Typography, useTheme} from "@mui/material";
import {useAppSelector} from "../../utils/hook";
import {LightMode,
        DarkMode,
        MenuOutlined,
        Search,
} from '@mui/icons-material'
// import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
// import DarkModeIcon from '@mui/icons-material/DarkMode'
import NotificationIcon from '@mui/icons-material/Notifications'
// import SearchIcon from '@mui/icons-material/Search'
import {ColorModeContext, themTokens} from "../../theme";
import {useStyle} from "./styles";
import FlexBetween from "../../flex-between";



const TopBarComponent = (props:any) => {
    const{isOpen,setIsOpen}=props

    const user=useAppSelector(state=>state.auth)
    const classes=useStyle()

    const theme:Theme=useTheme()
    const colors = themTokens(theme.palette.mode)
    const colorMode:any=useContext(ColorModeContext)
    return (
        <AppBar position='static' className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <Grid className={classes.userText}>
                    <FlexBetween>
                        <MenuOutlined
                            onClick={()=>{if(isOpen===false){setIsOpen(true)}}}
                            className={classes.menuItem}/>
                        <Typography variant='h3'>
                            Welcome {user.user.userName} !
                        </Typography>
                    </FlexBetween>
                </Grid>

                <Box className={classes.d_flex} >
                             <Grid>
                                 <IconButton  className={classes.mr_25}
                                onClick={colorMode.toggleColorMode}>
                                {theme.palette.mode==='dark'?(<DarkMode/>):(<LightMode/>)}
                            </IconButton>
                            <IconButton className={classes.mr_45}>
                                <NotificationIcon/>
                            </IconButton>
                        </Grid>
                        <Grid >
                            <IconButton className={classes.search}>
                                <Search/>
                            </IconButton>
                            <InputBase className={classes.searchBase}
                                sx={{
                                    bgcolor:colors.mine_shaft.DEFAULT,
                                    color:colors.white.DEFAULT,}}
                            placeholder='Search'
                            />
                        </Grid>
                    </Box>
            </Toolbar>
        </AppBar>
        // <Box className={classes.mainBox}>
        //     <Grid className={classes.userText}>Welcome {user.user.userName} !</Grid>
        //     <Box className={classes.d_flex} >
        //         <Grid>
        //             <IconButton  className={classes.mr_25}
        //                 onClick={colorMode.toggleColorMode}>
        //                 {theme.palette.mode==='dark'?(<DarkModeIcon/>):(<LightModeIcon/>)}
        //             </IconButton>
        //             <IconButton className={classes.mr_45}>
        //                 <NotificationIcon/>
        //             </IconButton>
        //         </Grid>
        //         <Grid >
        //             <IconButton className={classes.search}>
        //                 <SearchIcon/>
        //             </IconButton>
        //             <InputBase className={classes.searchBase}
        //                 sx={{
        //                     bgcolor:colors.mine_shaft.DEFAULT,
        //                     color:colors.white.DEFAULT,}}
        //             placeholder='Search'
        //             />
        //         </Grid>
        //     </Box>
        // </Box>
    );
};

export default TopBarComponent;