import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';

import MoreHorizOutlined from '@mui/icons-material/MoreHorizOutlined';

import { VerticalSplitOutlined, HomeOutlined, SettingsOutlined, InfoOutlined, ExtensionOutlined, Margin } from '@mui/icons-material';

import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';

import './style.css'; // 引入 CSS 文件

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: '常用',
  },
  {
    segment: 'welcome',
    title: '欢迎',
    icon: <VerticalSplitOutlined />,
  },
  {
    segment: 'home',
    title: '首页',
    icon: <HomeOutlined />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: '其他',
  },
  {
    segment: 'more',
    title: '更多设置',
    icon: <MoreHorizOutlined />,
    children: [
      {
        segment: 'settings',
        title: '设置',
        icon: <SettingsOutlined />,
      },
      {
        segment: 'about',
        title: '关于',
        icon: <InfoOutlined />,
      },
    ],
  },
  {
    segment: 'plugins',
    title: '插件',
    icon: <ExtensionOutlined />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }: { pathname: string }) {
  console.log('Current pathname:', pathname); // 输出调试信息
  return (
    <Box
      sx={{
        // 不需要元素内边距
        // py: 4,
        display: 'flex',
        flexDirection: 'column',
        margin: '2.5rem',
        // 亦不需要元素居中
        // alignItems: 'center',
        // textAlign: 'center',
      }}
    >
      {/* <Typography>Dashboard content for {pathname}</Typography> */}
      {pathname === '/welcome' ? (
        <Typography className='Main-title' variant="h5" color="primary" style={{ fontWeight: 700 }}>
          欢迎使用 KFACBT's Toolkit！
        </Typography>
      ) : pathname === '/home' ? (
        <Typography className='Main-title' variant="h5" color="secondary">
          Home Page Content
        </Typography>
      ) : (
        <Typography variant="body1">
          Dashboard content for {pathname}
        </Typography>
      )}
    </Box>
  );
}

interface DemoProps {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function DashboardLayoutBasic(props: DemoProps) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="src/src/assets/img/Logo.png" alt="KFACBT's Toolkit Logo" />,
        title: 'KFACBT\'s Toolkit',
        homeUrl: '.',
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}
