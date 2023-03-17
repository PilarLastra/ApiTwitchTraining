import React, { useContext } from "react";
import { ApiContext } from "../../components/screens/templates/MainTamplate/MainTemplate";
import { useQuery } from "react-query";


const GET_STREEMS_QUERY = "GET_STREEMS_QUERY";

export const useGetStreems = () =>{

        const {apiService} = useContext(ApiContext);

        const getStreams = async () => await apiService.getStreams();

        const {data: streamsData, isLoading} = useQuery([GET_STREEMS_QUERY], getStreams);

        return {
            streamsData,
            isLoading,
        }

}