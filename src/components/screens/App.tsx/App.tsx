import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MainTemplate } from "../templates/MainTamplate/MainTemplate";

export const App = () => {

    const queryClient = new QueryClient();

    return(
        <QueryClientProvider client={queryClient} >
            <MainTemplate/>
        </QueryClientProvider>
    )
}