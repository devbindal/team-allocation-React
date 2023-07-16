import { Outlet } from "react-router-dom";
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const SharedLayout=({selectTeam,teamCount})=>{
  return(
      <>
        <Navbar />
        <Header selectTeam={selectTeam} teamCount={teamCount} />
        <Outlet />
        <Footer />
      
      
      
      </>

    
  );
}
export default SharedLayout;