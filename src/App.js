import './App.css';
import Header from './components/Header/Header';
import  Footer from "./components/Footer/Footer"
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/Dashboardpage/DashboardPage';
import WalletPage from './pages/WalletPage/WalletPage';

function App() {
  return (
    <div className="App">
      <Header/>
      
        <div className="container">
        <div className="pages-container">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<DashboardPage/>} />
        <Route path='/wallet' element={<WalletPage/>} />
      </Routes>
      </div>
      </div>
      <Footer/>
     
    </div>
  );
}

export default App;