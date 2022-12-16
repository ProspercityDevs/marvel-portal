import '@/assets/styles/main.scss';
import { NavMenu } from '@/modules/core/components/molecules/NavMenu';
import MainFooter from '@/modules/core/components/molecules/MainFooter';

import AppRoutes from './routes';
function App() {
  return (
    <div className="main">
      <NavMenu />
      <AppRoutes />
      <MainFooter />
    </div>
  );
}

export default App;
