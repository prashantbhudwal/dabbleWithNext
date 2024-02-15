"use client";
import { Provider } from "jotai";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export default function Providers({ children }: { children: any }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  );

  const showDevTools = process.env.NODE_ENV === "development";

  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        {children}
        {showDevTools && <ReactQueryDevtools />}
      </QueryClientProvider>
    </Provider>
  );
}
