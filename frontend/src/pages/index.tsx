import { PageContainer } from '@ant-design/pro-layout';
import { useEffect } from 'react';
import { history } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  useEffect(() => {
    history.push({
      pathname: '/haha-go-brrr',
      query: {
        foo: 'bar',
        baz: '69',
      }
    });
  }, []);

  return (
    <PageContainer loading={false}>
      <h1 className={styles.title}>Page index</h1>
    </PageContainer>
  );
}
