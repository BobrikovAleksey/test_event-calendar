import './style.scss';
import {FC} from 'react';
import {Layout} from 'antd';
import {PrivateRouter, PublicRouter} from '@app/components/Router';
import Header from '@app/components/Header';

export const isAuth = false;

const App: FC = () => {
  return (
    <Layout className="app">
      <Header />

      <Layout.Content className="app-page">
        {isAuth ? (<PrivateRouter />) : (<PublicRouter />)}
      </Layout.Content>
    </Layout>
  )
};

export default App;
