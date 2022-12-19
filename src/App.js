import '@/assets/styles/main.scss';

import { NavMenu } from '@/modules/core/components/molecules/NavMenu';
import MainFooter from '@/modules/core/components/molecules/MainFooter';
import BeforeFooter from './modules/core/components/molecules/BeforeFooter/Index';

import AppRoutes from './routes';

function App() {
  return (
    <div className="main">
      <NavMenu />
      <AppRoutes />
      <BeforeFooter />
      <MainFooter />
    </div>
  );
}

export default App;
