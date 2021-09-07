import React from 'react'
import {
  BrowserRouter as Router,
  Route as DefaultRoute,
  Switch,
} from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import Store from './redux/store'
import { interceptorHandler } from './providers/instances'
import './App.css'

// Screens
import {
  AgeGate,
  AddressValidation,
  Map,
  NotFound,
  Steps,
  Register,
  Terms,
  Privacy,
  ThankYou,
} from './screens'

//Layout
import FooterLayout from './layout/FooterLayout'
import MainLayout from './layout/MainLayout'
import NoneLayout from './layout/NoneLayout'

// Styles
import './styles/tailwind.css'
import './styles/styles.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Helmet } from 'react-helmet'

const App = () => {
  const AppRoute = ({
    component: Component,
    layout: Layout = Component.Layout || FooterLayout,
    // eslint-disable-next-line
    propsLayout: propsLayout = Component.props,
    ...rest
  }) => {
    return (
      <DefaultRoute
        {...rest}
        render={(props) => (
          <Layout {...propsLayout}>
            <Component {...props} />
          </Layout>
        )}
      />
    )
  }

  return (
    <PersistGate persistor={Store.persistor} loading={false}>
      <Helmet>
        <link rel={'canonical'} href={window.location.href} />
      </Helmet>
      <Router>
        <DefaultRoute
          render={({ location }) => (
            <TransitionGroup component={null} exit={false}>
              <CSSTransition timeout={300} key={location.key} classNames="page">
                <Switch location={location}>
                  <AppRoute exact path="/" component={AgeGate} />
                  <AppRoute
                    exact
                    path="/direccion"
                    component={AddressValidation}
                    layout={MainLayout}
                  />
                  <AppRoute
                    exact
                    path="/mapa"
                    component={Map}
                    layout={MainLayout}
                  />
                  <AppRoute
                    exact
                    path="/preguntas-cervezas"
                    component={Steps}
                    layout={MainLayout}
                    propsLayout={{ hasFooter: true }}
                  />
                  <AppRoute exact path="/registro" component={Register} />
                  <AppRoute
                    exact
                    path="/terminos-y-condiciones"
                    component={Terms}
                    layout={MainLayout}
                    propsLayout={{ hasFooter: true }}
                  />
                  <AppRoute
                    exact
                    path="/politica-privacidad"
                    component={Privacy}
                    layout={MainLayout}
                    propsLayout={{ hasFooter: true }}
                  />
                  <AppRoute
                    exact
                    path="/gracias"
                    component={ThankYou}
                    layout={NoneLayout}
                  />
                  <AppRoute component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    </PersistGate>
  )
}

export default interceptorHandler(App)
