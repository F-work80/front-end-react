import React, {JSX} from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsRegistration} from "../../../common/types/auth";


const Register:React.FC <IPropsRegistration>= (props:IPropsRegistration):JSX.Element => {

    const{
       register
    }=props

    return (
        <>
            <Typography variant="h4"
                        padding={3}
                        fontFamily='Poppins'
                        textAlign='center'
            >Registration</Typography>

            <Typography variant="body1"
                        fontFamily='Poppins'
                        textAlign='center'
                        marginBottom={3}
            >Create your new account</Typography>
            <TextField
                margin='normal'
                fullWidth={true}
                label="First name"
                variant="outlined"
                placeholder='Enter your First name'
                {...register('name',{
                    required:'Enter your name'
                })}
            />
            <TextField
                margin='normal'
                fullWidth={true}
                label="User name"
                variant="outlined"
                placeholder='Enter your User name'
                {...register('user',{
                    required:'Enter your user-name'
                })}
            />
            <TextField
                type='email'
                margin='normal'
                fullWidth={true}
                label="Email"
                variant="outlined"
                placeholder='Enter your Email'
                {...register('email',{
                    required:'Enter your Email'
                })}
            />
            <TextField
                type='password'
                margin='normal'
                fullWidth={true}
                label="Password"
                variant="outlined"
                placeholder='Enter your Password'
                {...register('pass',{
                    required:'Enter your password'
                })}
            />
            <TextField
                type='password'
                margin='normal'
                fullWidth={true}
                label="Confirm Password"
                variant="outlined"
                placeholder='Enter the same Password'
                {...register('confpass',{
                    required:'Confirm your password'
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
                Do you have account ?
                <span style={{
                    color:'#1565c0',
                    cursor:'pointer',
                    marginLeft:'10px'
                }} onClick={props.switchStat}>Login</span>
            </Typography>
        </>
    );
};

export default Register;