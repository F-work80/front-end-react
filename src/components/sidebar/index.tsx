import React, { useEffect, useState} from 'react';
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
 import {
    ChevronLeftOutlined,
    ChevronRightOutlined,
    FeedOutlined, LoginOutlined,
} from '@mui/icons-material';
import {useLocation, useNavigate} from "react-router-dom";
import FlexBetween from "../../flex-between";
import {navMenu} from "../../common/moks/navigate_menu";

import Logo from "../../assets/images/sidebar/icon.png"



const SideBarComponent = (props:any) => {
    const classes=useStyles()
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
                        <Box
                            sx={{
                                borderBottom:`1px solid ${theme.palette.mode==='light'?
                                    '#3c3c3c':
                                    '#ffffff'
                                }`
                            }}
                        >
                            <Box width='100%'
                                marginTop='20px'
                            >
                            <FlexBetween>
                                <Box className={classes.flexBetween}>
                                    <img
                                        className={classes.logoIcon}
                                        src={Logo}
                                         alt='Logo image'
                                    />
                                    <Typography variant='h2'>Demo</Typography>
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
                            <List
                                sx={{
                                    marginBottom:'55px'
                                }}
                            >
                                {
                                    navMenu.map((item:any,index:number)=>{
                                        return (
                                            <ListItem
                                                onClick={()=>{navigate(item.path)}}
                                                key={index+1}
                                            >
                                                <ListItemButton
                                                    className={theme.palette.mode==='light'?classes.navItemL:classes.navItemD}
                                                >
                                                    <IconButton>
                                                        {item.icon}
                                                    </IconButton>
                                                    <ListItemText>
                                                        <Typography variant='body1'>{item.name}</Typography>
                                                    </ListItemText>
                                                </ListItemButton>
                                            </ListItem>
                                        )
                                    })
                                }
                            </List>
                        </Box>
                        <Box>
                            <List>
                                <ListItem>
                                    <ListItemButton
                                        className={theme.palette.mode==='light'?classes.navItemL:classes.navItemD}
                                    >
                                        <ListItemIcon>
                                            <LoginOutlined/>
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography>
                                                Logout
                                            </Typography>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>

                    </Drawer>
                )}
            </Box>
    );
};

export default SideBarComponent;