import React from 'react'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
function PaperSubmission() {
  return (
    <header className='bg-gray-300'>
      <Logo />
      <Navbar />
      <div >
        <div className='bg-white mt-4  mx-8 pt-4 font-sans shadow-xl'>
        <div className=' shadow-sm w-800 text-xl flex items-center ml-8 pt-8 p-4 text-indigo-700  font-bold'>
        The authors are invited to submit the Full papers of the Research/Review Papers/Abstracts. The papers will be peer-reviewed and only the accepted and registered papers will be considered for presentation during the conference and publication in the proceedings. 
        </div>
        <div className='text-lg flex items-center ml-8 py-4 pl-4 text-gray-500 font-bold'>
        NOTE : Acceptance of a full-length submission is strictly based on the reviewers’ comments.
        </div>
        <div className='text-lg flex items-center ml-8 p-4  text-gray-500'>All submissions need to be submitted through the CMT using the link :
        <Link className='flex items-center font-bold p-2  text-blue-400 text-lg' to="https://cmt3.research.microsoft.com/PEIS2024">Click Here</Link>
        </div>
        <div>
        <div className='text-lg text-gray-600 flex items-center ml-8 p-3 '>
        At least one of the authors of an accepted paper needs to register for the conference and to present the paper(s), through an Online Mode presentation.
        </div>
        <div className='text-lg text-gray-600 flex items-center ml-8 p-3 '>
        All manuscripts should be prepared in the following Springer's Book Chapter template.
        </div>
        <div>
        <div className='font-bold text-xl text-indigo-700 flex items-center ml-8 p-4 '>Templates :</div>
        <div>
        <Link to="https://cis2020.scrs.in/assets/download/Word%20Template.zip" className=' text-lg text-blue-500 font-bold flex items-center ml-10 p-2 '>Word Template Download</Link>
        <Link to="https://cvr2021.scrs.in/assets/download/LatexTemplate.zip" className='shadow-lg text-lg text-blue-500 font-bold flex items-center ml-10 p-2 '>Latex Template Download</Link>
        </div>
        </div>

        </div>
        </div>
      </div>

    </header>
  )
}

export default PaperSubmission
