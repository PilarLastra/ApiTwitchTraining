import axios, { AxiosInstance } from "axios";

export const SCOPES = "user:read:email";
export const CLIENT_ID = '';
export const CLIENT_SECRET = '';


export class ApiClient {

    protected readonly servicesAxiosInstance: AxiosInstance;

    constructor(token: string){
        this.servicesAxiosInstance = axios.create({
            baseURL: 'https://api.twitch.tv/',
            headers: {Authorization: `Bearer ${token}`, 'Client-Id': CLIENT_ID }
        })
    }

    public async getStreams() {
        try {
            const result = await this.servicesAxiosInstance.get('helix/streams')
            return result.data;
        } catch(e) {
            return Promise.reject(e);
        }
    }

}