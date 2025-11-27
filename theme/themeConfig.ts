// theme/themeConfig.ts
import type { ThemeConfig } from 'antd';
import { theme as AntdTheme } from "antd";

const theme: ThemeConfig = {
  algorithm:AntdTheme.defaultAlgorithm,
  token: {
    fontSize: 16,
    colorPrimary: '#52c41a',
  },
};

export default theme;