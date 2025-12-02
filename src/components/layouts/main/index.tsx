import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { scrollToTop } from 'src/utils';
import { Flex } from 'antd';
import { Navbar, Sidebar } from '../sidebar';

function Main() {
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <div>
      <Flex style={{ width: '100%' }}>
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Flex style={{ width: '100%' }} vertical>
          <Navbar />
          <div>
            <Outlet />
          </div>
        </Flex>
      </Flex>
    </div>
  );
}

export default Main;
