import LoginPage from "../Components/LoginPage";

const loginRoute = [
  {
    path: "/",
    exact: true,
    isProtected: false,
    component: LoginPage,
  },
];

export default loginRoute;
