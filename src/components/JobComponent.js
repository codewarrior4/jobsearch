import React from 'react'

const JobComponent = ({job}) => {
    // console.log(job)
    return (
        <div className="flex flex-col border-l-4 my-16 mx-10 border-blue-400 border-solid bg-white shadow-lg m-4 p-4">
            <div>
                <img src={job.logo} className="-mt-10 w-20 h-20"  alt={job.company} />
            </div>
              <div className="flex flex-col justify-between ml-4">
                <h1 className="font-bold text-blue-500">{job.company_name}</h1>
                <h2 className="font-bold text-xl">{job.title}</h2>
                <p className="text-gray-700">{job.publication_date} . {job.job_type} . {job.candidate_required_location}</p>
                <p className="">{job.category}</p>
              </div>

              <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t-2 border-gray-200 border-solid sm:ml-auto sm:border-0"> 
                  {job.tags? (job.tags.map((tag,index)=>
                      <span key={index} className="font-bold text-blue-300 bg-blue-50 mr-4 mb-4 p-2 rounded-lg">{tag}</span>
                  ))   
                  :("") }
              </div>
        </div>
    )
}

export default JobComponent
