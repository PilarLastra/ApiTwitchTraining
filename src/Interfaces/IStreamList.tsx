import { IStream } from "./IStreams";

export interface IStreamList{
    data: Array<IStream>
    pagination: ICursor,
}

interface ICursor{
    cursor: string
}