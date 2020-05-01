import React from 'react'
import Navbar from '../components/Navbar'
import Question from '../components/Question'
import Hint from '../components/Hint'
import Submit from '../components/Submit'

import Answer from '../components/Answer'


export default function index() {
    return (
        <div>
            <Navbar />
            <Question/>
            <Answer/>
            <div>
                <Submit />
            </div>
            <br/>
            <div>
                <Hint/>
            </div>

            
           
      
            
        </div>
    )
}
