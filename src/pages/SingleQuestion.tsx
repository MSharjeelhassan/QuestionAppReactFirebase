import { Box } from "@mui/material"
import { useParams } from "react-router-dom"

function SingleQuestion() {
const params = useParams()
console.log(params)
  return (
    <>

      <Box className='container rounded shadow' style={{backgroundColor:'#D2649A'}}>
<Box className='py-4'>
<Box>
  <p className="text-center">Hello <span className="display-5 fst-italic fw-bold ">User Name ayega</span></p>
  <p>Are you ? <span>Email</span></p>

  <textarea className="form-control" disabled name="" id="" value='here is your question from database'></textarea>
</Box>
</Box>
      </Box>
    </>
  )
}

export default SingleQuestion
