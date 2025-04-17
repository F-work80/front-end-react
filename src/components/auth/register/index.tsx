import React, {JSX} from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsRegistration} from "../../../common/types/auth";


const Register:React.FC <IPropsRegistration>= (props:IPropsRegistration):JSX.Element => {

    const{
        setEmail,
        setUser,
        setName,
        setPass
    }=props

    const setValue=(e:any):void=>{
        if(e.target.name==='pass')setPass(e.target.value)
        if(e.target.name==='user')setUser(e.target.value)
        if(e.target.name==='email')setEmail(e.target.value)
        if(e.target.name==='name')setName(e.target.value)
    }

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
                onChange={setValue}
                name='name'
                margin='normal' fullWidth={true}  label="First name" variant="outlined" placeholder='Enter your First name' />
            <TextField
                onChange={setValue}
                name='user'
                margin='normal' fullWidth={true}  label="User name" variant="outlined" placeholder='Enter your User name' />
            <TextField
                onChange={setValue}
                name='email'
                type='email' margin='normal' fullWidth={true}  label="Email" variant="outlined" placeholder='Enter your Email' />
            <TextField
                onChange={setValue}
                name='pass'
                type='password' margin='normal' fullWidth={true} label="Password" variant="outlined" placeholder='Enter your Password' />
            <TextField
                onChange={setValue}
                name='conf_pass'
                type='password' margin='normal' fullWidth={true} label="Confirm Password" variant="outlined" placeholder='Enter the same Password' />
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