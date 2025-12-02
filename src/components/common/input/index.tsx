import Search from 'antd/es/input/Search';
import styles from './input.module.scss';
import { Form } from 'antd';

interface SearchInputProps {
  label?: string;
}

function SearchInput({ label }: SearchInputProps) {
  return (
    <div className={styles.searchInput}>
      {label ? (
        <Form.Item layout="vertical" label={label}>
          <Search placeholder="Search" />
        </Form.Item>
      ) : (
        <Search placeholder="Search" />
      )}
    </div>
  );
}

export default SearchInput;
