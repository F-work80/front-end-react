import React, {JSX} from "react";

import {Button, TextField, Typography} from "@mui/material";
import {IPropsLogin} from "../../../common/types/auth";

const Login:React.FC<IPropsLogin>=(props:IPropsLogin):JSX.Element=>{

    const {setPass,setEmail}=props

    const setValue=(e:any):void=>{
        e.target.name==='pass'?setPass(e.target.value):setEmail(e.target.value)
    }

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
            <TextField id='email' name='email' onChange={(event)=>{setEmail(event.target.value)}} type='email' margin='normal' fullWidth={true}  label="Email" variant="outlined" placeholder='Enter your Email' />
            <TextField id='pass' name='pass' onChange={setValue} type='password' margin='normal' fullWidth={true} label="Password" variant="outlined" placeholder='Enter your Password' />
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
                }} onClick={props.switchStat}>   Registeration</span>
            </Typography>
        </>
    )
}
export default Login