'use client';

import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import { useServerInsertedHTML } from 'next/navigation';

import theme from '@/theme/themeConfig';

const StyledComponentsRegistry = ({ children }: { children: React.ReactNode }) => {
  const cache = createCache();

  useServerInsertedHTML(() => <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />);

  return (
    <StyleProvider cache={cache}>
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
    </StyleProvider>
  );
};

export default StyledComponentsRegistry;
