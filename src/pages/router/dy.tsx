import { useParams } from 'react-router-dom';

function Dy() {
  const params = useParams()
  return <>动态路由：{params.id}</>;
}

export default Dy;
