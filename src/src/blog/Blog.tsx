import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';  // 导入 ThemeProvider 和 createTheme
import AppAppBar from './components/AppAppBar';
import MainContent from './components/MainContent';
import Latest from './components/Latest';
import Footer from './components/Footer';

// 创建 MUI 默认主题
const defaultTheme = createTheme();

export default function Blog(props: { disableCustomTheme?: boolean }) {
  return (
    <ThemeProvider theme={defaultTheme}>  {/* 使用 ThemeProvider 提供默认主题 */}
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <MainContent />
        <Latest />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
