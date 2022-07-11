import './style.scss';
import {FC} from 'react';
import {Layout} from 'antd';
import Menu from './Menu';

const Header: FC = () => {
  return (
    <Layout.Header className="app-header">
      <h2 className="logo">Календарь событий</h2>

      <Menu />
    </Layout.Header>
  )
};

export default Header;
