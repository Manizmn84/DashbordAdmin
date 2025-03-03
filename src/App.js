import Topbar from './components/TopBar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from "./pages/home/Home";
import './App.css'
import { useRoutes } from 'react-router-dom';
import UserLIst from './pages/Users/UserList';
import Products from './pages/Products/Products';

function App() {

  const routes = useRoutes([
    {path:"/home" , element:<Home></Home>},
    {path:"/Users",element:<UserLIst></UserLIst>},
    {path:"/Products", element:<Products></Products>}
  ])

  return (
    <>
        <Topbar></Topbar>
        <div className='contain-sidebar'>
          <Sidebar></Sidebar>
          {routes}
        </div>

    </>
  );
}

export default App;
