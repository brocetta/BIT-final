import React, {useContext, useState} from 'react'
import useData from '../../../utils/useData'
import DataContext from '../../../utils/context'
import moment from 'moment'
import "./candidateReport.scss"

const CandidateReport = ({report}) => {
   
  return (
    <div className='wrapper'>

    <div id='candidateReport'>
        <div className='company'>
            <h5>{ report.companyName }</h5>
            <span>Company</span>
        </div>
            
        <div className='candidate'>
            <h5>{ report.candidateName }</h5>
            <span>Candidate</span>
        </div>


        <div className='date'>
            <h5>{ moment(report.interviewDate).format('LL') }</h5>
            <span>Interview Date</span>
        </div>

        <div className='status'>
            <h5>{ report.status }</h5>
            <span>Status</span>
        </div>

        <div className='details'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

        </div>
    </div>
    </div>
  )
}

export default CandidateReport