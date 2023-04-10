import React, { useContext } from "react";
import { ApiContext } from "../../components/screens/templates/MainTamplate/MainTemplate";
import { useQuery } from "react-query";



export const useGetUserById = ({id}:{id:string}) => {

    const GET_USER_BY_ID = `GET_USER_BY_ID_${id}`;
   
    const {apiService} = useContext(ApiContext);

    const getUserById = async () => await apiService.getUserById({id});

    const {data: userData, isLoading} = useQuery([GET_USER_BY_ID], getUserById);

    return{
        userData,
        isLoading,
    }


}




