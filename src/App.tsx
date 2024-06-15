// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AskQuestions from './pages/AskQuestions';
import AllQuestions from './pages/AllQuestions';
import SingleQuestion from './pages/SingleQuestion';
import BaseLayout from './BaseLayout/BaseLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout/>}>
  
      <Route path="allquestions" element={<AllQuestions/>} />
      <Route path="home" element={<AskQuestions/>} />
      <Route path='/allquestions/:id' element={<SingleQuestion/>}/>
 
    </Route>
  )
);

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
