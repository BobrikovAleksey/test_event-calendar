import './style.scss';
import {FC} from 'react';
import {Row} from 'antd';
import LoginForm from '@app/components/LoginForm';

const Login: FC = () => (
  <Row className="login-page" justify="center" align="middle">
    <LoginForm />
  </Row>
);

export default Login;
