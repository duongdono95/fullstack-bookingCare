import React from 'react';
import ReactDOM from 'react-dom/client'
import {IntlProvider} from 'react-intl';
import { router } from './routers/routers'
import { RouterProvider } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import GlobalStyles from "./GlobalStyles/GlobalStyles";
import LanguageUtils from './utils/LanguageUtils';
import './App.scss'

const messages = LanguageUtils.getFlattenedMessages();
function App() {
  const language = useSelector((state: RootState) => state.languages)
  return (
    <div className="App">
      <IntlProvider 
        locale={language}
        messages={messages[language]}
        defaultLocale="en"
      >
        <GlobalStyles>
          <RouterProvider router={router}/>
        </GlobalStyles>
      </IntlProvider>
    </div>
  );
}

export default App;
