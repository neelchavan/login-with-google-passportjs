/* eslint-disable import/no-anonymous-default-export */
import loginRoute from "./login.routes";
import dashboardRoute from "./dashboard.routes";
import notFoundRoute from "./notFound.routes";

export default [...loginRoute, ...dashboardRoute, ...notFoundRoute];
