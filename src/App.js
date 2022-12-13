import '@/assets/styles/main.scss';

import { NavMenu } from '@/modules/core/components/molecules/NavMenu';
import MainFooter from '@/modules/core/components/molecules/MainFooter';
import MainContainer from '@/modules/core/components/molecules/MainContainer';
import AppRoutes from './routes';

export default function App() {
  return (
    <div className="main">
      <NavMenu />
      <AppRoutes />
      <MainContainer />
      <MainFooter />
    </div>
  );
}
