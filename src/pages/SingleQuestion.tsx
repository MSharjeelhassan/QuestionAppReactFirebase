import { Box } from "@mui/material"
import { useParams } from "react-router-dom"
import { getData } from "../config/FireBaseMethods";
import { useEffect, useState } from "react";


const [question, setQuestions] = useState<any>({})

function SingleQuestion() {
const params = useParams()
console.log(params)



const showQuestionsa = () => {
  getData("sawalYehHy", params.id)
    .then((res: any) => {
      setQuestions(res);
      console.log(res)
    })
    .catch((err: any) => {
      alert(err);
    });
};
useEffect(() => {
  showQuestionsa();
}, []);


  return (
    <>

      <Box className='container rounded shadow' style={{backgroundColor:'#D2649A'}}>
<Box className='py-4'>
<Box>
  <p className="text-center">Hello <span className="display-5 fst-italic fw-bold ">User Name ayega</span></p>
  <p>Are you ? <span>Email</span></p>

  <textarea className="form-control" disabled name="" id="" value={question? question.message :null}></textarea>
</Box>
</Box>
      </Box>
    </>
  )
}

export default SingleQuestion
