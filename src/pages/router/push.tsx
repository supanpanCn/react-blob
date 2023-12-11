import { useSearchParams , useLocation } from "react-router-dom";

function Push() {
  const [searchParams] = useSearchParams();
  const { state } = useLocation();
  const id = searchParams.get('id')

  return <>路由导航参数：{id}、{state}</>;
}

export default Push;
