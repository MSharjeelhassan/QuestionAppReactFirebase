import { Button } from "@mui/material"


function BAbutton(props:any) {
const{clicking, btnValue}=props;


  return (
    <>
      <Button variant="contained" color="primary" onClick={clicking}>{btnValue}</Button>
    </>
  )
}

export default BAbutton
