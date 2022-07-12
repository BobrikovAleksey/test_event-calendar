import {FC} from 'react';
import {MenuInfo} from 'rc-menu/lib/interface'
import {Menu as AntdMenu, MenuProps} from 'antd';
import {LoginOutlined, LogoutOutlined, UserOutlined} from '@ant-design/icons';
import {useTypedSelector} from '@app/hooks/useTypedSelector';
import {useAction} from '@app/hooks/useAction';
import {PathList} from '@app/router/types';

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
  const {isAuth} = useTypedSelector((state) => state.auth);
  const {logout} = useAction();

  const clickHandler = ({key}: MenuInfo) => {
    if (key === PathList.LOGOUT) logout();
  };

  return (
    <AntdMenu
      className="menu"
      theme="dark"
      mode="horizontal"
      items={isAuth ? privateMenuItems : publicMenuItems}
      selectable={false}
      onClick={clickHandler}
    />
  )
};

export default Menu;
