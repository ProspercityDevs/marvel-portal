import { NavMenu } from '@/modules/core/components/molecules/NavMenu';
import MainFooter from '@/modules/core/components/molecules/MainFooter';
import BeforeFooter from './modules/core/components/molecules/BeforeFooter';
import AppRoutes from './routes.js';

function App() {
  return (
    <div>
      <NavMenu />
      <AppRoutes />
      <BeforeFooter />
      <MainFooter />
    </div>
  );
}

export default App;
