// _app.js 的默认导出是一个顶层 React 组件，会封装你应用中的所有页面
import '../styles/global.css';
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }