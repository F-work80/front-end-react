import React, {useEffect, useState} from 'react';
import {useStyles} from "./styles";
import {
    Box,
    Drawer,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material";
 import{
    ChairOutlined,
    ChevronLeftOutlined,
    ChevronRightOutlined,
    WaterfallChartOutlined,
    FeedOutlined,
    SettingsOutlined,
    MeetingRoomOutlined,
 } from '@mui/icons-material';
import {useLocation, useNavigate} from "react-router-dom";
import FlexBetween from "../../flex-between";



const SideBarComponent = (props:any) => {
    // const classes=useStyles()
    const [actLink,setActLink]=useState('')
    const navigate=useNavigate()
    const {pathname}=useLocation()
    const theme = useTheme()

   const{
       isNotMobile,
       drawerWight,
       isOpen,
       setIsOpen
   }=props

    useEffect(()=>{
        setActLink(pathname.substring(1))
    },[pathname]
    )



    return (
            <Box component='nav'>
                {isOpen && (
                    <Drawer
                        anchor='left'
                        open={isOpen}
                        onClose={()=>{
                            setIsOpen(false)
                        }}
                        variant='persistent'
                        sx={{
                            width:drawerWight,
                            '& .MuiDrawer-paper':{
                                color:theme.palette.secondary.main,
                                backgroundColor:theme.palette.primary.main,
                                boxSizing:'border-box',
                                width:drawerWight,

                            }
                        }}
                    >
                        <Box width='100%'>
                            <FlexBetween>
                                <Box
                                display='flex'
                                alignItems='center'
                                gap='10px'
                                >
                                    <Typography>Demo</Typography>
                                </Box>
                                {!isNotMobile && (
                                    <IconButton onClick={()=>{
                                        setIsOpen(!isOpen)
                                    }}>
                                        <ChevronLeftOutlined/>
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                    </Drawer>
                )}
            </Box>
    );
};

export default SideBarComponent;