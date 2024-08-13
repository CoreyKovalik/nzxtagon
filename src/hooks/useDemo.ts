import useQueryParam from "./useQueryParam";

const useDemo = () => {
  const demo = useQueryParam("demo");

  return !!demo;
}

export default useDemo
