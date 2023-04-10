import React, { useContext } from "react";
import { ApiContext } from "../../components/screens/templates/MainTamplate/MainTemplate";
import { useQuery } from "react-query";



export const useGetStreamFilterByGame = ({id}:{id:string}) => {

    const GET_STREAMS_FILTER_BY_GAME_QUERY = `GET_STREAMS_FILTER_BY_GAME_QUERY_${id}`;
   
    const {apiService} = useContext(ApiContext);

    const getStreamFilterByGame = async () => await apiService.getStreemFilterByGame({id});

    const {data: streamsData, isLoading} = useQuery([ GET_STREAMS_FILTER_BY_GAME_QUERY], getStreamFilterByGame);

    return{
        streamsData,
        isLoading,
    }


}




