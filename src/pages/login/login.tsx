import { Button, Checkbox, Flex, Form, Input, message } from 'antd'; 
import styles from './login.module.scss';
import { Theme } from 'src/components/layouts/sidebar/_components/theme';
import { Geogle } from 'src/assets/svg';
import light from 'src/assets/img/light.jpg';
import dark from 'src/assets/img/dark.jpg';
import { useTheme } from 'src/components/layouts/sidebar/_components/theme/useTheme';
import data from 'src/app/data/data.json';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react'; 

import { useDispatch, useSelector } from 'react-redux';
import { login } from 'src/app/slices/authSlice';


const useIsAuthenticated = () =>
  useSelector((state: any) => state.auth.isAuthenticated);

function LoginPage() {
  const [form] = Form.useForm();
  const user = data.data.data;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useIsAuthenticated();

  const onFinish = (values: any) => {
    const foundUser = user.find((u: any) => {
      return u.email === values.email && u.login.password === values.password;
    });

    if (foundUser) {
      message.success(`Xush kelibsiz, ${foundUser.name.first}!`);
      const tokenValue = foundUser.login.uuid;
      dispatch(login(tokenValue));
      form.resetFields();
      navigate('/');
    } else {
      message.error("Noto'g'ri Email yoki Parol. Iltimos, tekshirib ko'ring.");
      form.resetFields(['password']);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const { changeThemeNavbar, darkMode } = useTheme();

  if (isAuthenticated) {
    return null;
  }

  return (
    <div className={styles.login}>
      <div className={styles.leftBlock}>
        <Flex justify="space-between" align="center">
          <h3 className={styles.logoTitle}>Company logo</h3>
          <div className={styles.themeWrapper}>
            <Theme />
          </div>
        </Flex>

        <div className={styles.formBlock}>
          <Form form={form} onFinish={onFinish}>
            <h4>Sign in</h4>
            <p>
              New to company? <a href="">Sign up!</a>
            </p>

            <button className={styles.geogleBtn}>
              <Geogle /> Continue with Geogle
            </button>

            <div className={styles.line}>
              <div></div>
              <p>or</p>
              <div></div>
            </div>

            <Form.Item
              style={{ width: '100%' }}
              layout="vertical"
              label={'Email'}
              name="email"
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              style={{ width: '100%', marginTop: '60px' }}
              layout="vertical"
              label={'Password'}
              name={'password'}
            >
              <Input placeholder="Password" />
            </Form.Item>
            <Flex
              style={{ marginTop: '60px' }}
              align="center"
              justify="space-between"
            >
              <Form.Item>
                <Checkbox className={styles.checkbox}>Remember me</Checkbox>
              </Form.Item>
              <a href="">Forgot your password?</a>
            </Flex>
            <Button
              htmlType="submit"
              style={{
                width: '100%',
                background: '#0B6BCB',
                color: '#fff',
                marginTop: '25px',
                height: '35px',
              }}
            >
              Sign In
            </Button>
          </Form>
        </div>
      </div>
      <div className={styles.rightBlock}>
        {darkMode ? (
          <img src={dark} onClick={changeThemeNavbar} />
        ) : (
          <img src={light} onClick={changeThemeNavbar} />
        )}
      </div>
    </div>
  );
}

export default LoginPage;
