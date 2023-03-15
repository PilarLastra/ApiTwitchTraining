export interface IStream{
    id: string,
    user_id: string,
    user_login:string,
    user_name: string,
    game_id:string,
    game_name:string,
    type:string,
    title:string,
    tags: Array<String>,
    viewer_count: number,
    started_at: string,
    lenguage:string,
    thumbnail_url:string,
    tag_ids: Array<String>,
    is_mature: boolean,
   
}