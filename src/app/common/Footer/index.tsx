import { Layout } from 'antd';

import styles from './styles.module.scss';

const { Footer: AFooter } = Layout;

export default function Footer() {
  return <AFooter className={styles.footer}>Footer</AFooter>;
}
