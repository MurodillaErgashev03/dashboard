import { Breadcrumb, Flex } from 'antd';
import { Home, User } from 'iconsax-react';
import { useLocation } from 'react-router-dom';
import { useTypedSelector } from 'src/app/store';
import { CustomButton, CustomText } from 'src/components/common';
import { Theme } from '../theme';
import styles from './navbar.module.scss';

export default function Navbar() {
  const location = useLocation();
  const { colors } = useTypedSelector((state) => state.layout);

  return (
    <div className={styles.navbar}>
      <Flex gap={24} align="center">
        <Flex gap={4} align="center" style={{ cursor: 'pointer' }}>
          <Breadcrumb
            separator=">"
            items={[
              {
                href: '',
                title: <Home />,
              },
              {
                href: '',
                title: <span>Dashboard</span>,
              },
              {
                title: 'Orders',
              },
            ]}
          />
        </Flex>
      </Flex>
    </div>
  );
}
