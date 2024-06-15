import { Outlet } from "react-router-dom";
import FooterBar from "../component/FooterBar";
import HeaderNavBar from "../component/HeaderNavBar";
import { Box } from "@mui/material";
// import AllQuestions from "../pages/AllQuestions";

function BaseLayout() {
  return (
    <>
      <header>
        <HeaderNavBar />
      </header>
<h1 className="text-center pt-5">Question App</h1>
      <main>
       <Box className='container'><Outlet /></Box> 
      </main>

      <footer>
        <FooterBar />
      </footer>
    </>
  );
}

export default BaseLayout;
