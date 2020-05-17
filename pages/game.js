
import React from 'react'
import Navbar from '../components/Navbar'
import Question from '../components/Question'
import Hint from '../components/Hint'
//import Submit from '../components/Submit'
import Particles from 'react-particles-js';
import Answer from '../components/Answer'


export default function index() {
    return (
        <div>
            <Particles

                params={{
                    particles: {
                        number: {
                            value: 200,
                            density: {
                                enable: true,
                                value_area: 900,
                            }

                        },
                        color: {
                            value: ['#cc0000']
                        },
                        line_linked: {
                            color: '#aa0044',
                            opacity: 1
                        }
                    },
                }}
                style={{
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    position: "fixed",
                    index: "-10"


                }}
            />

            <Navbar />
            <Question />
            <Answer />
            <div>


                <Hint />
                <style jsx>{`
    div{
        text-align:center;
        margin:5px;
    }
    `}</style>

            </div>



        </div >
    )
}


