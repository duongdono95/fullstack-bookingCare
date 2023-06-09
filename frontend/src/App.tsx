import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import GlobalStyles from './GlobalStyles/GlobalStyles';
import LanguageUtils from './utils/LanguageUtils';
import './App.scss';
import AppRouter from './routes/Router';
import { RootState } from './redux/store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const messages = LanguageUtils.getFlattenedMessages();
function App() {
  const language = useSelector((state: RootState) => state.languages);
  return (
    <div className="App">
      <IntlProvider locale={language} messages={messages[language]} defaultLocale="en">
        <GlobalStyles>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <AppRouter />
        </GlobalStyles>
      </IntlProvider>
    </div>
  );
}

export default App;
