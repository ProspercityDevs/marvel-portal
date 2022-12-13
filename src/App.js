import '@/assets/styles/main.scss';
import HomePage from './modules/core/pages/HomePage';
import SubPage from './modules/core/pages/SubPage';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/join" exact element={<SubPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
