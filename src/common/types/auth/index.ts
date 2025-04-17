export interface IPropsLogin {
    setPass: (value: string) => void,
    setEmail: (vlaue1: string) => void,
    switchStat?: () => void
}

export interface IPropsRegistration {
    switchStat: () => void,
    setPass: (value: string) => void,
    setEmail: (vlaue1: string) => void,
    setName: (value2: string) => void,
    setUser: (vlaue3: string) => void,
    cngStat?: () => void
}

export interface IUserDataState{
    user:IPublicUser,
    isLogged:boolean
}

interface IPublicUser{
    id:number|null,
    firstName:string,
    userName:string,
    userEmail:string,
    watchlist:[IWatchList ],
    token:string
}

interface IWatchList{
    id:number|null,
    name: string,
    assetId: string,
    createdAt: string,
    updatedAt: string,
    user: number|null
}

