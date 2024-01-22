import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function useData() {
  const { data, error, isLoading } = useSWR('https://api.escuelajs.co/api/v1/products',fetcher);
  // console.log(data)

  return {
    data,
    isLoading,
    error,
  };
}
