/* eslint-disable react/style-prop-object */
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Switch } from "react-router-dom";
import PrivateRoutes from "./RouteManagement/PrivateRoutes";
import PublicRoute from "./RouteManagement/PublicRoute";
import routes from "./Routes/index";

function App() {
  return (
    <Container className="mt-3">
      <Switch>
        {routes.map((route, idx) =>
          route.isProtected ? (
            <PrivateRoutes key={idx} {...route} />
          ) : (
            <PublicRoute key={idx} {...route} />
          )
        )}
      </Switch>
    </Container>
  );
}

export default App;
