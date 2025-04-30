import {makeStyles} from "@mui/styles";

export const useStyle = makeStyles(()=>{

    return({
        userText:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'lightblue',
            width:'60%',
            minWidth:'30%',
            borderRadius:'45%'
        },
        search:{
            '&:hover':{
                'backgroundColor':'transparent ! important'
            },
        },
        searchBase:{
            fontStyle:'italic',
            borderRadius:'8px',
            paddingLeft:'10px',
        },
        mainBox:{
            padding:'15px 10px 25px 10px',

            border:'1px solid grey',
            display:'flex',
            justifyContent:'space-between',
            px:'32px',
            py:'24px',
        },
        d_flex:{
            display:'flex'
        },
        mr_45:{
            marginRight:'45px'
        },
        mr_25:{
            marginRight:'25px'
        }

    })
})