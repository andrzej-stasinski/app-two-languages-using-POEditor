import React from 'react';
import {Navigation, Wrapper} from 'components'
import {ThemeProvider} from 'styled-components'
import theme from './utils/theme'
import {GlobalStyles} from './index.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home'
import News from './pages/News'
import {useTranslation} from 'react-i18next'

function App() {

  const { i18n } = useTranslation();
    const arr = [
      {content: 'Home', to: '/'},
      {content: 'News', to: '/news'},
    ]
    return (
      
      <ThemeProvider theme={theme}>
        <GlobalStyles />
          <Router>
            <Navigation 
              items={arr}
              RightElement={(
                <div>
                <button variant="regular" onClick={() => i18n.changeLanguage('pl')}>pl</button>
                <button variant="regular" onClick={() => i18n.changeLanguage('en')}>en</button>
                </div>
              )} 
            />

            <Wrapper>
              <Switch>
                <Route exact={true} path="/">
                  <Home />
                </Route>
                <Route path="/news">
                  <News />
                </Route>
              </Switch>              
            </Wrapper>

          </Router> 

      </ThemeProvider>
  );
}

function RootApp() {
  return (
    <React.Suspense fallback='Loading...'>
      <App/>
    </React.Suspense>
  )
}

export default RootApp;
