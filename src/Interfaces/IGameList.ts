import { IGames } from "./IGames";

export interface IGameList{
    data: Array<IGames>, 
    pagination: ICursor,
}

interface ICursor{
    cursor: string
}