import axios, { AxiosInstance } from "axios";
import { IStreamList } from "../Interfaces/IStreamList";
import { IGameList } from "../Interfaces/IGameList";

export const SCOPES = "user:read:email";
export const CLIENT_ID = 'os4f56sxpvljkkph063ln94l9znudp';
export const CLIENT_SECRET = 'zg8au0zrfb5pqbt5r73om9tk5m0v7k';


export class ApiClient {

    protected readonly servicesAxiosInstance: AxiosInstance;

    constructor(token: string){
        this.servicesAxiosInstance = axios.create({
            baseURL: 'https://api.twitch.tv/',
            headers: {Authorization: `Bearer ${token}`, 'Client-Id': CLIENT_ID }
        })
    }

    public async getStreams(): Promise<IStreamList> {
        try {
            const result = await this.servicesAxiosInstance.get('helix/streams')
           
            return result.data;
            
        } catch(e) {
            return Promise.reject(e);
        }
    }

    public async getGames(): Promise<IGameList> {
        try {
            const result = await this.servicesAxiosInstance.get('helix/games/top')
           
            return result.data;
            
        } catch(e) {
            return Promise.reject(e);
        }
    }


    public async getStreemFilterByGame({id}:{id:string}): Promise<IStreamList> {
        
        try {
            const result = await this.servicesAxiosInstance.get(`helix/streams?game_id=${id}`)
           
            return result.data;
            
        } catch(e) {
            return Promise.reject(e);
        }
    }

    public async getUserById({id}:{id:string}): Promise<IStreamList> {
        
        try {
            const result = await this.servicesAxiosInstance.get(`helix/user?id=${id}`)
           
            return result.data;
            
        } catch(e) {
            return Promise.reject(e);
        }
    }



}