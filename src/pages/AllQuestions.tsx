import { useEffect, useState } from "react"
import { getData } from "../config/FireBaseMethods";
import { Box, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function AllQuestions() {

  const[allQuestions, setAllQuestions]= useState<any>([]);

  const navigate = useNavigate();

  const showQuestions =()=>{

    getData('sawalYehHy',setAllQuestions)

  }
useEffect(()=>{
  showQuestions()
},[])


  return (
    <>
        <Box className="container p-3">
        {allQuestions &&
          Array.isArray(allQuestions) &&
          allQuestions.length > 0 &&
          allQuestions.map((x, i) => (
            <Paper
              onClick={() => {
                navigate(`/allquestions/${x.uid}`);
              }}
              className="p-4 bg-ligt m-3"
              key={i}
            >
              <Typography className="fs-4 fw-bold">{x.description}</Typography>
              <Box>
                <Box>Total Answers : 786</Box>
              </Box>
            </Paper>
          ))}
      </Box>
    </>
  )
}

export default AllQuestions
