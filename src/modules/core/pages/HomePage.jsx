import { NavMenu } from '@/modules/core/components/molecules/NavMenu';
import MainFooter from '@/modules/core/components/molecules/MainFooter';
import MainContainer from '@/modules/core/components/molecules/MainContainer';
import AppRoutes from 'src/routes';
const HomePage = () => {
  return (
    <>
      <div className="main">
        <NavMenu />
        <AppRoutes />
        <MainContainer />
        <MainFooter />
      </div>
    </>
  );
};

export default HomePage;
