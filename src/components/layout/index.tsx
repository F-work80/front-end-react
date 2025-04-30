import React, {useState} from 'react';
import {ILayout} from "../../common/types/layout";
import TopBarComponent from "../topbar";
import {useLocation} from "react-router-dom";
import {Box, useMediaQuery} from "@mui/material";
import SideBarComponent from "../sidebar";
import {useStyles} from "../layout/styles";

const LayoutComponent= ({children}:ILayout) => {
    const location = useLocation()
    const isNotMobile=useMediaQuery('(min-wight:600px)')

    const classes=useStyles()

    const[isOpen,setIsOpen]=useState(true)

    return (
            location.pathname==='/login' || location.pathname==='/register'?
               (
                   <>
                       {children}
                   </>
               ):
             (   <Box display={isNotMobile?('flex'):('block')}
                      width='100%'
                      justifyContent='space-between'
                      height='100%'
                      // bgcolor='grey'
                 >
                     <SideBarComponent
                         isNotMobile={isNotMobile}
                         drawerWight='250px'
                         isOpen={isOpen}
                         setIsOpen={setIsOpen}
                     />
                     <Box className={classes.mainSection}>
                         <TopBarComponent/>
                         {children}
                     </Box>
             </Box>
                )
    );
};

export default LayoutComponent;