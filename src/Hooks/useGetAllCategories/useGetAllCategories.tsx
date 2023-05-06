import React, { useContext } from "react";
import { ApiContext } from "../../components/screens/templates/MainTamplate/MainTemplate";
import { useQuery } from "react-query";

const GET_ALL_CATEGORIES_QUERY = "GET_ALL_CATEGORIES_QUERY";

export const useGetAllCategories = () => {

    const {apiService} = useContext(ApiContext);

    const getAllCategories = async () => await apiService.getAllCategories();

    const {data: categoriesData, isLoading} = useQuery([GET_ALL_CATEGORIES_QUERY], getAllCategories);

    return{
        categoriesData,
        isLoading,
    }


}




