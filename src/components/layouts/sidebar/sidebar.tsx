import type { MenuProps } from 'antd';
import { Flex, Menu } from 'antd';
import {
  Activity,
  DocumentText,
  Home,
  I24Support,
  LogoutCurve,
  Message,
  Profile2User,
  Setting,
  ShoppingCart,
} from 'iconsax-react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useTypedSelector } from 'src/app/store';
import SearchInput from 'src/components/common/input';
import useParamsHook from 'src/hooks/params';
import { Theme } from './_components/theme';
import styles from './styles.module.scss';
type MenuItem = Required<MenuProps>['items'][number];
import avatar from 'src/assets/img/avatar.png';
import { logout } from 'src/app/slices/authSlice';
interface HeaderProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Header = ({ collapsed, setCollapsed }: HeaderProps) => {
  const dispatch = useAppDispatch();
  const { navigate, location } = useParamsHook();
  const { colors, darkMode } = useTypedSelector((state) => state.layout);
  const { userInfo } = useTypedSelector((state) => state.auth);

  const itemsInfo: MenuItem[] = [
    {
      key: 'all-tasks',
      label: 'All tasks',
    },
    {
      key: 'backlog',
      label: 'Backlog',
    },
    {
      key: 'in-progress',
      label: 'In progress',
    },
    {
      key: 'done',
      label: 'Done',
    },
  ];

  const usersInfo: MenuItem[] = [
    {
      key: 'my-profile',
      label: 'My profile',
    },
    {
      key: 'create-new-user',
      label: 'Create new user',
    },
    {
      key: 'roles-permission',
      label: 'Poles & Permission',
    },
  ];
  const items = [
    {
      key: 'home',
      icon: <Home size={24} />,
      label: 'Home',
    },
    {
      key: 'dashboard',
      icon: <Activity size={24} />,
      label: 'Dashboard',
    },
    {
      key: 'orders',
      icon: <ShoppingCart size={24} />,
      label: 'Orders',
    },
    {
      key: 'Tasks',
      icon: <DocumentText size={24} />,
      label: 'Tasks',
    },

    {
      key: 'Tasks',
      icon: <DocumentText size={24} />,
      label: 'Tasks',
      children: itemsInfo,
    },
    {
      key: 'messages',
      icon: <Message size={24} />,
      label: 'Messages',
    },
    {
      key: 'users',
      icon: <Profile2User size={24} />,
      label: 'Users',
      children: usersInfo,
    },
    {
      key: 'support',
      icon: <I24Support size={24} />,
      label: 'Support',
    },
    {
      key: 'settings',
      icon: <Setting size={24} />,
      label: 'Settings',
    },
  ];

  const onLeave = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <Flex className={styles.sidebar}>
      <Flex className={styles.sidebarblock} vertical>
        <Flex vertical>
          <Flex className={styles.logo}>
            <Link className={styles.logoLink} to="/dashboardpage/dashboard">
              Acme Co.
            </Link>
            <Theme />
          </Flex>
          <div
            style={{
              marginBottom: '10px',
            }}
          >
            <SearchInput />
          </div>

          <Menu
            defaultSelectedKeys={location.pathname.split('/')}
            onClick={(info) => {
              navigate(info.key);
            }}
            mode="inline"
            inlineCollapsed={collapsed}
            items={items}
            className={styles.menu}
            style={{ border: 'none' }}
          />
        </Flex>

        <div className={styles.logout}>
          <img className={styles.avatar} src={avatar} alt="avatar" />
          <div>
            <h4>Siriwat K.</h4>
            <p>siriwatk@test.com</p>
          </div>
          <LogoutCurve
            style={{
              cursor: 'pointer',
            }}
            onClick={onLeave}
            size={24}
            color={colors.colorText}
          />
        </div>
      </Flex>
    </Flex>
  );
};

export default Header;
