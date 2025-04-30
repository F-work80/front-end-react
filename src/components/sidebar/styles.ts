import {makeStyles} from "@mui/styles";


export const useStyles: any=makeStyles({
    root_nav:{

},
    logoIcon:{
        height:'50px',
        width:'50px'
    },
    flexBetween:{
        display:'flex',
        alignItems:'center',
        gap:'10px',
        cursor:'pointer',

    },
    navItemL:{
        '&:hover':{
            borderRadius:'5px',
            backgroundColor:'#1900d5 !important',
            color:'#ffffff',
            "& .MuiSvgIcon-root	":{
                'backgroundColor':'#ffffff !important',
                "borderRadius":'35%'
            }
        }
    },
    navItemD:{
        '&:hover':{
            borderRadius:'5px',
            backgroundColor:'#1900d5 !important ',
            color:'#c5c5c5',
            "& .MuiSvgIcon-root":{
                'backgroundColor':'#c7c7c7 !important',
                "borderRadius":'35%',
                "color":'#000000'
            }
        }
    },
    // '&:hover':{
    //     backgroundColor:'transparent !important'
    // }

})