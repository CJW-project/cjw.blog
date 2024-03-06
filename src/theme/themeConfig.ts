import type { ThemeConfig } from 'antd';

import variables from '../styles/index.module.scss';

const theme: ThemeConfig = {
  token: {
    colorPrimary: variables.primaryColor,
    colorBgContainer: 'white',
    borderRadius: 3,
    sizeStep: 6,
  },
  components: {
    // Button: {
    //   fontSize: 16,
    //   borderRadius: 3,
    // },
  },
};

export default theme;
