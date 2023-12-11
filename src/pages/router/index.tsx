import { Outlet } from "react-router-dom";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Nested() {
  const navigate = useNavigate();
  const handleRouterChange = () => {
    navigate('/push?id=1',{
      state:99
    })
  };
  return (
    <>
      根路由 <br />
      <Outlet />
      <Button type="primary" onClick={handleRouterChange}>
        跳转
      </Button>
    </>
  );
}

export default Nested;
