'use client';

// import { useRouter } from 'next/navigation'; // csr 사용 시
import { Layout } from 'antd';

import styles from './main.module.scss';
import Footer from '../common/Footer';
import Header from '../common/Header';
import LeftMenu from '../common/LeftMenu';

const { Sider, Content } = Layout;

export default function Main() {
  // const router = useRouter();

  return (
    <Layout className={styles.root_layout}>
      <Header />
      <Layout>
        <Sider className={styles.sider}>
          <LeftMenu />
        </Sider>
        <Content className={styles.content} />
      </Layout>
      <Footer />
    </Layout>
  );
}
