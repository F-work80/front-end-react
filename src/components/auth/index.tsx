import React, { JSX, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import Login from "./login";
import Register from "./register";
import './style.css'
import {Box} from "@mui/material";
import {instance} from "../../utils/axios";
import {useAppDispatch} from "../../utils/hook";
import {login} from "../../store/slice/auth";
import {AppErrors} from "../../common/errors";

const AuthComponent:React.FC = ():JSX.Element => {
    const navigate=useNavigate()
    const location = useLocation()
    const dispatch = useAppDispatch()

    const switchLogOrReg=()=>{
        if (location.pathname==='/register'){ navigate('/login')}
        if (location.pathname==='/login'){ navigate('/register')}
    }


    const [email,setEmail]= useState('')
    const [pass,setPass]= useState('')

    const [name,setName]= useState('')
    const [user,setUser]= useState('')

    const formHandler = async (e:any)=>{
        e.preventDefault()

        if(location.pathname==='/login'){
            try {
                const userData={
                    userEmail:e.target[0].value,
                    userPass:e.target[2].value
                }
                const user=await instance.post('/auth/login',userData)

                await dispatch(login(user.data))
                navigate('/')
            }
            catch (e){
                return e
            }

        }
        if(location.pathname==='/register'){
            const clear=()=>{
                e.target[0].value=''
                e.target[2].value=''
                e.target[4].value=''
                e.target[6].value=''
                e.target[8].value=''
            }
            try {
                if(e.target[6].value===e.target[8].value){
                    const userData={
                        firstName:e.target[0].value,
                        userName:e.target[2].value,
                        userEmail:e.target[4].value,
                        userPass:e.target[6].value
                    }
                    const user=await instance.post('/auth/registerUser',userData)
                   clear()
                    await dispatch(login(user.data))
                    alert('Rewards you are registered !')
                    navigate('/')

                    // console.log(user.data)
                }
                else{
                    alert(AppErrors.PussNotMutch)
                    e.target[6].value=''
                    e.target[8].value=''
                }

            }
            catch (err){
                alert(err)
            }


        }
    }

    return(
        <div className='root'>
            <form onSubmit={formHandler} className='form'>
                <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
                maxWidth={640}
                margin='auto'
                padding={5}
                borderRadius={5}
                boxShadow={'5px 5px 10px #ccc'}

                >
                    {location.pathname==='/login'?
                        <Login
                            switchStat={switchLogOrReg}
                            setEmail={setEmail}
                            setPass={setPass} />:
                        location.pathname==='/register'?
                            <Register
                                switchStat={switchLogOrReg}
                                setEmail={setEmail}
                                setPass={setPass}
                                setName={setName}
                                setUser={setUser}
                            />:
                            null}
                </Box>
            </form>
        </div>
    )

    // return (location.pathname==='/login'?<Login />:location.pathname==='/register'?<Register />:null );
};

export default AuthComponent;