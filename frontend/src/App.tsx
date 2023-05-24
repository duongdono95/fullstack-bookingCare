import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import GlobalStyles from './GlobalStyles/GlobalStyles';
import LanguageUtils from './utils/LanguageUtils';
import './App.scss';
import AppRouter from './routes/Router';

const messages = LanguageUtils.getFlattenedMessages();
function App() {
  const language = useSelector((state: RootState) => state.languages);
  return (
    <div className="App">
      <IntlProvider locale={language} messages={messages[language]} defaultLocale="en">
        <GlobalStyles>
          <AppRouter />
        </GlobalStyles>
      </IntlProvider>
    </div>
  );
}

export default App;
