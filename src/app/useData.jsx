import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
function useData() {
  const { data, error, isLoading } = useSWR('https://fakestoreapi.com/products',fetcher);

  return {
    data,
    isLoading,
     error,
  };
} export default useData
