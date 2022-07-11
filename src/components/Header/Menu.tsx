import {FC} from 'react';
import {Menu as AMenu, MenuProps} from 'antd';
import {LoginOutlined, LogoutOutlined, UserOutlined} from '@ant-design/icons';
import {PathList} from '@app/router/types';
import {isAuth} from '@app/App';

const privateMenuItems: MenuProps['items'] = [
  {
    key: PathList.PROFILE,
    label: 'Alex',
    icon: (<UserOutlined />),
    disabled: true,
  },
  {
    key: PathList.LOGOUT,
    label: 'Выйти',
    icon: (<LogoutOutlined />),
  },
];

const publicMenuItems: MenuProps['items'] = [
  {
    key: PathList.LOGIN,
    label: 'Войти',
    icon: (<LoginOutlined />),
    disabled: true,
  },
];

const Menu: FC = () => {
  return (
    <AMenu
      className="menu"
      theme="dark"
      mode="horizontal"
      items={isAuth ? privateMenuItems : publicMenuItems}
      selectable={false}
    />
  )
};

export default Menu;
