import { Button } from "@mui/material"


function BAbutton(props:any) {
const{clicking, btnValue, colors}=props;


  return (
    <>
      <Button variant="contained" color={colors} onClick={clicking}>{btnValue}</Button>
    </>
  )
}

export default BAbutton
