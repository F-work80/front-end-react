import{
    ChairOutlined,
    WaterfallChartOutlined,
    SettingsOutlined,
    MeetingRoomOutlined,
} from '@mui/icons-material';

export const navMenu=[
    {
        name:'Home',
        path:'/',
        icon:<ChairOutlined/>
    },
    {
        name:'Watch list',
        path:'/watchList',
        icon:<WaterfallChartOutlined/>
    },
    {
        name:'Fresh news',
        path:'/news',
        icon:<MeetingRoomOutlined/>
    },
    {
        name:'Settings',
        path:'/settings',
        icon:<SettingsOutlined/>
    },

]