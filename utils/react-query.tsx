import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

export const ReactQueryProvider = ({ children, pageProps }: any) => {
    return (
        <QueryClientProvider client={queryClient} >
            <Hydrate state={pageProps.dehydratedState}>
                {children}
            </Hydrate>
        </QueryClientProvider>
    )
}