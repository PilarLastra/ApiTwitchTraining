import { useState } from "react";
import { useQuery } from "react-query"
import { getToken } from "simple-twitch-api";
import { CLIENT_ID, CLIENT_SECRET, SCOPES } from "../../services/apiService";

const GET_API_TOKEN_QUERY = 'GET_API_TOKEN_QUERY';

export const useGetToken = () => {

    const getApiToken = async () => await getToken(CLIENT_ID, CLIENT_SECRET, SCOPES);

    const {data: twitchApiToken, isLoading } = useQuery([GET_API_TOKEN_QUERY], getApiToken);

    return {
        twitchApiToken,
        isLoading,
    }
}