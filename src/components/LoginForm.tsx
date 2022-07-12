import {FC, useState} from 'react';
import {Alert, Button, Checkbox, Form, Input} from 'antd';
import {rules} from '@app/utils/rules';
import {useTypedSelector} from '@app/hooks/useTypedSelector';
import {useAction} from '@app/hooks/useAction';

const LoginForm: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const {error, isLoading} = useTypedSelector((state) => state.auth);
  const {login} = useAction();

  const submit = () => {
    login(username, password);
    localStorage.setItem('remember', String(remember));
  };

  return (
    <Form
      className="login-form"
      name="login-form"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={submit}
      autoComplete="off"
    >
      {error && (
        <Alert
          className="alert-error"
          message={error}
          type="error"
          showIcon
          closable
        />
      )}

      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[rules.required('Пожалуйста, введите имя пользователя')]}
      >
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required('Пожалуйста, введите пароль')]}
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        name="remember"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        >
          Запомнить
        </Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
        >
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
