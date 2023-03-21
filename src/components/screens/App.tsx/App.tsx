import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MainTemplate } from "../templates/MainTamplate/MainTemplate";
import { LogInTemplate } from "../templates/LogInTemplate/LogInTemplate";

export const App = () => {

    const queryClient = new QueryClient();

    return(
        <QueryClientProvider client={queryClient} >
            <MainTemplate/>
        </QueryClientProvider>
    )
}