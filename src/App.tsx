
import * as asyncComponent from './asyncComponent';
import store from './store';
import { APP_URL } from './shared/constants/common';
import { Provider } from 'react-redux';
import { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading.....</div>}>
            <Switch>
              <Route exact path={APP_URL.game} render={props => <asyncComponent.GameBoard {...props} />} />
              <Route exact path={APP_URL.board} render={props => <asyncComponent.Board {...props} />} />
              <Route exact path={APP_URL.home} render={props => <asyncComponent.Home {...props} />} />
              {/* <Redirect to={APP_URL.pageNotFound} /> */}
            </Switch>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
