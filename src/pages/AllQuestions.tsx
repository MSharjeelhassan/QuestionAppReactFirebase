import { useEffect, useState } from "react";
import { delData, getData } from "../config/FireBaseMethods";
import { Box, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BAbutton from "../component/BAbutton";
function AllQuestions() {
  const [allQuestions, setAllQuestions] = useState<any>([]);

  const navigate = useNavigate();

  const showQuestions = () => {
    getData("sawalYehHy")
      .then((res: any) => {
        setAllQuestions([...res]);
      })
      .catch((err: any) => {
        alert(err);
      });
  };
  useEffect(() => {
    showQuestions();
  }, []);

  const deleteFunc = (uid: any) => {
    delData("sawalYehHy", uid).then(() => {
      showQuestions();
    });
  };

  return (
    <>
      <Box className="container p-3">
        {allQuestions &&
          Array.isArray(allQuestions) &&
          allQuestions.length > 0 &&
          allQuestions.map((x, i) => (
            <Paper
              // onClick={() => {
              //   navigate(`/allquestions/${x.uid}`);
              // }}
              className="p-4 bg-ligt m-3"
              key={i}
            >
              <Typography className="fs-4 fw-bold">{x.description}</Typography>
              <Box className="my-3">
                <Box>
                  <BAbutton btnValue="Edit" />
                </Box>
                <Box>
                  <BAbutton
                    btnValue="View Details"
                    clicking={() => {
                      navigate(`/allquestions/${x.uid}`);
                    }}
                  />
                </Box>
              </Box>
              <Box>
                <BAbutton
                  btnValue="Delete"
                  colors="error"
                  clicking={() => deleteFunc(x.uid)}
                />
              </Box>
            </Paper>
          ))}
      </Box>
    </>
  );
}

export default AllQuestions;
