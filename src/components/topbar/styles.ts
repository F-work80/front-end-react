import {makeStyles} from "@mui/styles";
import {hover} from "@testing-library/user-event/dist/hover";

export const useStyle = makeStyles(()=>{

    return({
        menuItem:{
            cursor:'pointer',
            marginRight:'20px'
        },
        appbar:{
            borderBottom:'1px solid grey',
            boxShadow:'none !important'
        },
        toolbar:{
          justifyContent:'space-between',
            padding:'25px 45px'
        },
        userText:{
            alignItems:'center',
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

            borderBottom:'1px solid grey',
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