import useQueryParam from "./useQueryParam";

const useDebug = () => {
  const debug = useQueryParam("debug");

  return !!debug;
}

export default useDebug
