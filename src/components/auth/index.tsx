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
import {useForm} from "react-hook-form";

const AuthComponent:React.FC = ():JSX.Element => {
    const navigate=useNavigate()
    const location = useLocation()
    const dispatch = useAppDispatch()
    const{
        register,
        formState:{
            errors
        },
        handleSubmit,

       }=useForm()


    const switchLogOrReg=()=>{
        if (location.pathname==='/register'){ navigate('/login')}
        if (location.pathname==='/login'){ navigate('/register')}
    }


    const [email,setEmail]= useState('')
    const [pass,setPass]= useState('')

    const [name,setName]= useState('')
    const [user,setUser]= useState('')


    const formHandler = async (data:any)=>{

        // console.log(data.pass)
        // console.log(data.email)

        if(location.pathname==='/login'){
            try {
                const userData={
                    userEmail:data.email,
                    userPass:data.pass
                }
                const user=await instance.post('/auth/login',userData)

                await dispatch(login(user.data))
                navigate('/')
            }
            catch (e:any){
                alert(e.response.data.message)
            }

        }
        if(location.pathname==='/register'){
            try {
                if(data.pass===data.confpass){
                    const userData={
                        firstName:data.name,
                        userName:data.user,
                        userEmail:data.email,
                        userPass:data.pass
                    }
                    const user=await instance.post('/auth/registerUser',userData)

                    console.log(user)
                    await dispatch(login(user.data))
                    alert('Rewards you are registered !')
                    navigate('/')
                }
                else{
                    alert(AppErrors.PussNotMutch)
                }

            }
            catch (err){
                alert(err)
            }


        }
    }

    return(
        <div className='root'>
            <form onSubmit={handleSubmit(formHandler)} className='form'>
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
                            register={register}
                            errors={errors}
                        />:
                        location.pathname==='/register'?
                            <Register
                                switchStat={switchLogOrReg}
                                register={register}
                                errors={errors}
                            />:
                            null}
                </Box>
            </form>
        </div>
    )

    // return (location.pathname==='/login'?<Login />:location.pathname==='/register'?<Register />:null );
};

export default AuthComponent;