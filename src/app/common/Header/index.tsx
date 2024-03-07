import { Layout } from 'antd';

import styles from './styles.module.scss';

const { Header: AHeader } = Layout;

export default function Header() {
  return <AHeader className={styles.header}>header</AHeader>;
}
