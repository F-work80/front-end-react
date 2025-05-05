import React, {JSX} from "react";

import {Button, TextField, Typography} from "@mui/material";
import {IPropsLogin} from "../../../common/types/auth";


const Login:React.FC<IPropsLogin>=(props:IPropsLogin):JSX.Element=>{

    const {register,errors}=props

    return(
        <>
            <Typography variant="h4"
            padding={3}
            fontFamily='Poppins'
            textAlign='center'
            >Login</Typography>

            <Typography variant="body1"
                        fontFamily='Poppins'
                        textAlign='center'
                        marginBottom={3}
            >Enter your email and password</Typography>
            <TextField
                error={!!errors.email}
                helperText={errors.email?errors.email.message?.toString():''}
                id='email'
                margin='normal'
                fullWidth={true}
                label="Email"
                variant="outlined"
                placeholder='Enter your Email'
                {...register("email",{
                    required:'Enter your email',
                    pattern:
                        /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/

                })}
            />
            <TextField
                error={!!errors.pass}
                helperText={errors.pass?errors.pass.message?.toString():''}
                type='password'
                id='pass'
                margin='normal'
                fullWidth={true}
                label="Password"
                variant="outlined"
                placeholder='Enter your Password'
                {...register("pass",{
                    required:'Enter your password',
                    minLength:2,
                    maxLength:3,
                })}
            />
            <Button
                type='submit'
                sx={{
                    fontFamily:'Poppins',
                    marginTop:'25px',
                    alignContent:'center',
                    width:'60%'

                }}
                variant="contained">Confirm</Button>
            <Typography variant="body2" sx={{
                fontFamily:'Poppins',
                marginTop:2,
            }} >
                You don't have account ?
                <span style={{
                    color:'#1565c0',
                    cursor:'pointer',
                    marginLeft:'10px'
                }} onClick={props.switchStat}>   Registration</span>
            </Typography>
        </>
    )
}
export default Login