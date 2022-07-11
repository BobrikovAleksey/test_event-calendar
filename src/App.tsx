import {FC} from 'react';
import {Layout} from 'antd';
import {PrivateRouter, PublicRouter} from '@app/components/Router';

const App: FC = () => {
  const isAuth = false;

  return (
    <Layout className="app">
      <Layout.Content className="app-page">
        {isAuth ? (<PrivateRouter />) : (<PublicRouter />)}
      </Layout.Content>
    </Layout>
  )
};

export default App;
