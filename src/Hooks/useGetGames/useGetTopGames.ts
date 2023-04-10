import React, { useContext } from "react";
import { ApiContext } from "../../components/screens/templates/MainTamplate/MainTemplate";
import { useQuery } from "react-query";

const GET_GAMES_QUERY = "GET_GAMES_QUERY";

export const useGetTopGames = () => {

    const {apiService} = useContext(ApiContext);

    const getGames = async () => await apiService.getGames();

    const {data: gamesData, isLoading} = useQuery([ GET_GAMES_QUERY], getGames);

    return{
        gamesData,
        isLoading,
    }


}




