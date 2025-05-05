import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";

export interface IPropsLogin <
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    TTransformedValues extends FieldValues | undefined = undefined,
>{
    switchStat?: () => void,
    register:  UseFormRegister<TFieldValues>,
    errors:  FieldErrors<TFieldValues>
}

export interface IPropsRegistration <
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    TTransformedValues extends FieldValues | undefined = undefined,
>
{
    switchStat: () => void,
    register:  UseFormRegister<TFieldValues>,
    errors: FieldErrors<TFieldValues>
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

