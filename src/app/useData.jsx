'use client'

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function useData() {
  const { data, error, isLoading } = useSWR('https://fakestoreapi.com/products',fetcher);
  // console.log(data)

  return {
    data,
    isLoading,
    error,
  };
}
