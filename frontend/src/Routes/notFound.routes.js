import NotFoundPage from "../Components/NotFoundPage";

const notFoundRoute = [
  {
    path: "/*",
    exact: false,
    isProtected: false,
    component: NotFoundPage,
  },
];

export default notFoundRoute;
