import './style.scss';
import {FC} from 'react';
import {Layout} from 'antd';
import {useTypedSelector} from '@app/hooks/useTypedSelector';
import {PrivateRouter, PublicRouter} from '@app/components/Router';
import Header from '@app/components/Header';

const App: FC = () => {
  const {isAuth} = useTypedSelector((state) => state.auth);

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
