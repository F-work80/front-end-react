import React, {useState} from 'react';
import {ILayout} from "../../common/types/layout";
import TopBarComponent from "../topbar";
import {Outlet, useLocation} from "react-router-dom";
import {Box, useMediaQuery} from "@mui/material";
import SideBarComponent from "../sidebar";
import {useStyles} from "../layout/styles";

const LayoutComponent= () => {
    const location = useLocation()
    const isNotMobile=useMediaQuery('(min-wight:600px)')

    const classes=useStyles()

    const[isOpen,setIsOpen]=useState(false)

    return (
            location.pathname==='/login' || location.pathname==='/register'?
               (
                   <>
                        <Outlet/>
                   </>
               ):
             (   <Box display={isNotMobile?('block'):('flex')}
                      width='100%'
                      justifyContent='space-between'
                      height='100%'
                 >
                     <SideBarComponent
                         isNotMobile={isNotMobile}
                         drawerWight='250px'
                         isOpen={isOpen}
                         setIsOpen={setIsOpen}
                     />
                     <Box className={classes.mainSection}>
                         <TopBarComponent
                             isOpen={isOpen}
                             setIsOpen={setIsOpen}
                         />
                         <Outlet/>
                     </Box>
             </Box>
                )
    );
};

export default LayoutComponent;