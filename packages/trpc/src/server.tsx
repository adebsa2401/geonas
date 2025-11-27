import "server-only";

import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query";
import { cache } from "react";
import { createTRPCCaller, createTRPCContext } from "@workspace/trpc/init";
import { makeQueryClient } from "@workspace/trpc/query-client";
import { appRouter } from "@workspace/trpc/routers";
import {
  DefaultError,
  dehydrate,
  FetchInfiniteQueryOptions,
  FetchQueryOptions,
  HydrationBoundary,
  QueryKey,
} from "@tanstack/react-query";

export const getQueryClient = cache(makeQueryClient);

export const trpcCaller = createTRPCCaller(appRouter)(createTRPCContext);

export const trpc = createTRPCOptionsProxy({
  ctx: createTRPCContext,
  router: appRouter,
  queryClient: getQueryClient,
});

export const HydrateClient = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export const prefetchQuery = <
  TQueryFnData,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryOptions: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
) => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(queryOptions);
};

export const prefetchInfiniteQuery = <
  TQueryFnData,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
  TPageParam = unknown,
>(
  queryOptions: FetchInfiniteQueryOptions<
    TQueryFnData,
    TError,
    TData,
    TQueryKey,
    TPageParam
  >,
) => {
  const queryClient = getQueryClient();
  void queryClient.prefetchInfiniteQuery(queryOptions);
};

export const fetchQuery = <
  TQueryFnData,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
  TPageParam = never,
>(
  queryOptions: FetchQueryOptions<
    TQueryFnData,
    TError,
    TData,
    TQueryKey,
    TPageParam
  >,
) => {
  const queryClient = getQueryClient();
  return queryClient.fetchQuery(queryOptions);
};

export const fetchInfiniteQuery = <
  TQueryFnData,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
  TPageParam = unknown,
>(
  queryOptions: FetchInfiniteQueryOptions<
    TQueryFnData,
    TError,
    TData,
    TQueryKey,
    TPageParam
  >,
) => {
  const queryClient = getQueryClient();
  return queryClient.fetchInfiniteQuery(queryOptions);
};
