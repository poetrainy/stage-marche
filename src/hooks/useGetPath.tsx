import { useRouter } from "next/router";

const useGetPath = () => useRouter().pathname;

export default useGetPath;
