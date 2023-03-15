import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const App = () => {

    const queryClient = new QueryClient();

    return(
        <QueryClientProvider client={new QueryClient} >
            
        </QueryClientProvider>
    )
}