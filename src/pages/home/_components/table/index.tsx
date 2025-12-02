import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Flex,
  Space,
  Table,
  Typography,
  Tag,
  Dropdown,
  Menu,
} from 'antd';
import { MoreOutlined, ReloadOutlined } from '@ant-design/icons';

import styles from './table.module.scss';

interface TableUser {
  key: string;
  first_name: string;
  last_name: string;
  email: string;
  status: 'Active' | 'Pending' | 'Suspended';
  address: string;
  date?: string;
  avatar?: string;
}

interface TableProps {
  data: any[];
}

// Status rangini belgilash funksiyasi
const getStatusColor = (status: string) => {
  if (status === 'Active') return 'green';
  if (status === 'Pending') return 'orange';
  if (status === 'Suspended') return 'red';
  return 'default';
};

const actionMenu = (
  <Menu
    onClick={({ key }) => {
      console.log(`Action selected: ${key}`);
    }}
    items={[
      { key: 'edit', label: 'Edit' },
      { key: 'rename', label: 'Rename' },
      { key: 'move', label: 'Move' },
      { key: 'delete', label: 'Delete', danger: true },
    ]}
  />
);

function CustomTable({ data }: TableProps) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const statuses: TableUser['status'][] = ['Active', 'Pending', 'Suspended'];

  const formatted: TableUser[] = data.map((item, index) => ({
    key: item.login.uuid,
    first_name: item.name.first,
    last_name: item.name.last,
    email: item.email,
    status: statuses[index % statuses.length],
    address: `${item.location.city}, ${item.location.country}`,
    avatar: item.picture.medium,
    date: new Date(item.registered.date).toLocaleDateString(),
  }));

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  const reload = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.table}>
      {/* Tanlangan qatorlar sonini ko'rsatish va Reload tugmasi */}

      <Table<TableUser>
        scroll={{ y: 'calc(100vh - 360px)' }}
        rowSelection={rowSelection}
        dataSource={formatted}
        // --- Pagination qo'shildi ---
        pagination={{ pageSize: 7 }}
        // -----------------------------
      >
        <Table.Column title="Date" dataIndex="date" key="date" />

        <Table.Column<TableUser>
          title="Status"
          dataIndex="status"
          key="status"
          render={(status) => (
            <Tag color={getStatusColor(status)}>{status.toUpperCase()}</Tag>
          )}
        />

        <Table.Column<TableUser>
          title="Customer"
          key="name"
          render={(_, record) => (
            <Flex align="center" gap="small">
              <Avatar src={record.avatar} />
              <Flex vertical>
                <Typography.Text strong>
                  {record.first_name} {record.last_name}
                </Typography.Text>
                <Typography.Text type="secondary" style={{ fontSize: '12px' }}>
                  {record.email}
                </Typography.Text>
              </Flex>
            </Flex>
          )}
        />

        <Table.Column title="Address" dataIndex="address" key="address" />

        <Table.Column<TableUser>
          title=""
          key="action"
          render={() => (
            <Space size="small">
              <a onClick={() => console.log('Download clicked')}>Download</a>
              <Dropdown overlay={actionMenu} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                  <MoreOutlined />
                </a>
              </Dropdown>
            </Space>
          )}
        />
      </Table>
    </div>
  );
}

export default CustomTable;
