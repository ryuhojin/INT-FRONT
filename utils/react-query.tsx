import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

export const ReactQueryProvider = ({ children }: any) => {
    return (
        <QueryClientProvider client={queryClient} >
            {children}
        </QueryClientProvider>
    )
}