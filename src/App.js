import React from 'react';
import {Navigation, Wrapper} from 'components'
import {ThemeProvider} from 'styled-components'
import theme from './theme'
import {GlobalStyles} from './index.css'
import {
  BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useTranslation} from 'react-i18next'

function App({ budget, fetchBudget, fetchBudgetedCategories }) {
  const { t, i18n } = useTranslation();
  // const arr = []
    const arr = [
      {content: t('HomePage'), to: '/'},
      {content: t('News'), to: '/news'},
    ]
    return (
      
      <ThemeProvider theme={theme}>
        <GlobalStyles />
          <Router>
            <Navigation 
              items={arr}
              RightElement={(
                <div>
                <button>pl</button>
                <button>en</button>
                </div>
              )} 
            />

            <Wrapper>
              <Switch>
                <Route exact={true} path="/">
                  Homepage
                </Route>
                <Route path="/news">
                  News
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
