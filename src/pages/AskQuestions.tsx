import { Box } from "@mui/material";
import BAbutton from "../component/BAbutton";
import { useState } from "react";
import { sendData } from "../config/FireBaseMethods";

function AskQuestions() {
//making useState
const[data, setData]=useState<any>({
  username:'',
  email:'',
  message:''
})
const{username, email, message}=data;

  //Input and text area onChange function
  const change = (e:any) => {
const name = e.target.name;
const value = e.target.value;

setData({...data, [name]:value})
// console.log(data)

  };

  // Submit button clicking function to send data to firebase`1a
  const clicking = () => {
    const obj={
      UserName:data.username,
      EmailAddress:data.email,
      description:data.message,
      timeStamp:JSON.stringify(new Date())
    }
    // console.log(obj)

    setData({username:'',
      email:'',
      message:''});

      // here we are sending data i.e the object to the firebase realtime database.
    sendData('sawalYehHy',obj )
  };




  return (
    <>
      <Box className="container">
        <h5 className="mt-5 text-center">
          Please write down your details and Question below
        </h5>
        {/* <br /> */}
        <Box className="row justify-content-center">
          <Box className="col-12 col-lg-6 gy-3 ">
            <Box className="form-floating">
              <input
                className="form-control"
                id="floatingInput"
                placeholder=""
                type="text"
                name="username"
                value={username}
                onChange={change}
              />
              <label htmlFor="floatingInput">Enter Your Name</label>
            </Box>
          </Box>
          <Box className="col-12 col-lg-6 gy-3 ">
            <Box className="form-floating">
              <input
              id="floatingInput"
                className="form-control"
                type="email"
                  placeholder=""
                name="email"
                value={email}
                onChange={change}
              />
              <label htmlFor="floatingInput">Enter Email</label>
            </Box>
          </Box>
        </Box>
        <br />
        <Box className="row justify-content-center">
          <Box className="col-12 col-lg-12">
            <Box className='form-floating'>
              <textarea
                placeholder=""
                className="form-control"
                name="message"
                id="floatingInput"
                value={message}
                onChange={change}
              ></textarea>
              <label htmlFor="floatingInput">Enter Your Question</label>
            </Box>
          </Box>
        </Box>
        <br />
<Box className='text-center'>

        <BAbutton btnValue="Submit" clicking={clicking} />
</Box>
      </Box>
    </>
  );
}

export default AskQuestions;
