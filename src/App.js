import { NavMenu } from '@/modules/core/components/molecules/NavMenu';
import MainFooter from '@/modules/core/components/molecules/MainFooter';
import BeforeFooter from './modules/core/components/molecules/BeforeFooter';
import AppRoutes from './routes.js';
import './styles.scss'

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
