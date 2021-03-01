import React,{useState,useEffect} from 'react'
import JobComponent from "./components/JobComponent"
import data from './assets/data.json'

// console.log(data['jobs'])
const App=()=> {
  
  const [jobs,setJobs]=useState([])
  useEffect(()=>setJobs(data['jobs']),[])
  
  // console.log(jobs)
  return (
    <div className="App">

      <header className="bg-blue-500 mb-12">
        <img src="./images/pager-bg.png" alt="background" />

      </header>
      {
        jobs.length ===0 ? (
          <p>Jobs Loading</p>
        ):
      (
        jobs.map((job,index)=>(
          <JobComponent job={job} key={index} />
        ))
      )
      }
    </div>
  );
}

export default App;
