
import '@/assets/styles/main.scss';

import { NavMenu } from '@/modules/core/components/molecules/NavMenu';

import AppRoutes from "./routes";

function App() {
  return (
    <div className="main">
      <NavMenu/>
      <AppRoutes />
    </div>
  );
}


export default App;
