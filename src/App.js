import Topbar from './components/TopBar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from "./pages/home/Home";
import './App.css'
import { useRoutes } from 'react-router-dom';
import UserLIst from './pages/Users/UserList';

function App() {

  const routes = useRoutes([
    {path:"/home" , element:<Home></Home>},
    {path:"/Users",element:<UserLIst></UserLIst>}
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
