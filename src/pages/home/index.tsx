import { Flex, Form, Select } from 'antd';
import SearchInput from 'src/components/common/input';
import styles from './home.module.scss';
import CustomTable from './_components/table';
import users from 'src/app/data/data.json';

function Home() {
  return (
    <div className={styles.home}>
      <div className="container">
        <Flex justify="space-between" className={styles.titleBlock}>
          <h3>Orders</h3>
          <button>Download PDF</button>
        </Flex>
        <div
          className={styles.searchBlock}
          style={{
            marginTop: '20px',
          }}
        >
          <SearchInput label="Search for order" />
          <Form.Item
            style={{ width: '18%' }}
            layout="vertical"
            label={'Status'}
          >
            <Select
              defaultValue="Choose"
              style={{ width: '100%' }}
              options={[
                { value: 'paid', label: 'Paid' },
                { value: 'pending', label: 'Pending' },
                { value: 'refunded', label: 'Refunded' },
                { value: 'cancelled', label: 'Cancelled' },
              ]}
            />
          </Form.Item>
          <Form.Item
            style={{ width: '18%' }}
            layout="vertical"
            label={'Category'}
          >
            <Select
              defaultValue="Choose"
              style={{ width: '100%' }}
              options={[
                { value: 'all', label: 'All' },
                { value: 'refund', label: 'Refund' },
                { value: 'purchase', label: 'Purchase' },
                { value: 'debit', label: 'Debit' },
              ]}
            />
          </Form.Item>
          <Form.Item
            style={{ width: '18%' }}
            layout="vertical"
            label={'Customer'}
          >
            <Select
              defaultValue="Choose"
              style={{ width: '100%' }}
              options={[
                { value: 'all', label: 'All' },
                { value: 'Olivia Rhye', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled' },
              ]}
            />
          </Form.Item>
        </div>

        <CustomTable data={users.data.data} />
      </div>
    </div>
  );
}

export default Home;
