import React, { Suspense} from "react";
import {
  BrowserRouter as Router,
  Route as DefaultRoute,
  Switch,
} from "react-router-dom";
import "./App.css";

// Screens
import useViews from "./views";

// Components
import useComponents from "./components";

// Styles
import "./styles/tailwind.css";
import "./styles/styles.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const App = () => {
  const { useSpinners } = useComponents();
  const { SpinnerLoading } = useSpinners();
  const { useScreens } = useViews();
  const { Home } = useScreens();
  return (
    <Suspense fallback={<SpinnerLoading />}>
    <Router>
      <DefaultRoute
        render={({ location }) => (
          <TransitionGroup component={null} exit={false}>
            <CSSTransition timeout={300} key={location.key} classNames="page">
              <Switch location={location}>
                <DefaultRoute exact path="/" component={Home} />
                {/* <DefaultRoute component={NotFound} /> */}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
    </Suspense>
  );
};

export default App;
