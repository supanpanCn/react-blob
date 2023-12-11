import { createHashRouter,redirect } from "react-router-dom";
import User from "../pages/user";
import Nested from "../pages/router/index";
import NestedA from "../pages/router/a";
import NestedB from "../pages/router/b";
import Dy from '../pages/router/dy';
import Redirect from '../pages/router/redirect';
import Push from '../pages/router/push';

const router = createHashRouter([
  {
    path: "/",
    loader:()=>{
      throw redirect("/redirect")
    },
  },
  {
    path: "/user",
    Component: User,
  },
  {
    path: "/nested",
    Component: Nested,
    children: [
      {
        path: "/nested/a",
        Component: NestedA,
      },
      {
        path: "/nested/b",
        Component: NestedB,
      },
    ],
  },
  {
    path:'/dy/:id',
    Component:Dy
  },
  {
    path:'/redirect',
    Component:Redirect
  },
  {
    path:'/push',
    Component:Push
  },
]);

export default router;
