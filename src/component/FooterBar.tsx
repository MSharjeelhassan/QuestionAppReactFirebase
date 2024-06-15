import { Box } from "@mui/material";

function FooterBar() {
  return (
    <>
      <Box
        className="display-5 mt-5 fw-bold mb-0 pb-0"
        style={{ backgroundColor: "var(--bgcolor)" }}
      >
        <p className="text-center">We are the Question APP</p>
      </Box>
    </>
  );
}

export default FooterBar;
