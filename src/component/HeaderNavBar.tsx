import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

function HeaderNavBar() {
  return (
    <>
      {/* <Box className='bg-primary'>I am header</Box> */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <Box className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <div className="">
              <img src={"./navbar-brand.jpg"} className="rounded-circle " style={{width:50}} alt="" />
            </div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Box className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <Box className="navbar-nav mx-auto">
              <NavLink className="nav-link active mx-5" aria-current="page" to="/home">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/allquestions">
                See Questions
              </NavLink>
            </Box>
          </Box>
        </Box>
      </nav>
    </>
  );
}

export default HeaderNavBar;
