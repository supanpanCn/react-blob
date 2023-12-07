import Storage from './pages/storage';
import Redux from './pages/redux';
import Atd from './pages/antd';
import Css from './pages/css';
import { RouterProvider } from 'react-router-dom';
import router from './router'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

function App() {

  return (
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={router}/>
      <br />
      <Storage/>
      <br />
      <Redux/>
      <br/>
      <Atd/>
      <br/>
      <Css/>
    </ConfigProvider>
  )
}

export default App
