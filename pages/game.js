
import React from 'react'
import Navbar from '../components/Navbar'
import Question from '../components/Question'
import Hint from '../components/Hint'
import Submit from '../components/Submit'
import Particles from 'react-particles-js';
import Answer from '../components/Answer'


class game extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            answer:""
        }
        this.submit=this.submit.bind(this);
        this.change=this.change.bind(this);
        
    }
    submit=(event)=>{
        console.log(this.state.answer);
    }
    change=(event)=>{
        let e= event.target.value; 
        this.setState(prevState=> {
        return { ...prevState, answer:e }
    });
    console.log(e);
    
    }
    
    render()
    {

    
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
            <Answer change={this.change} />
            <Submit submit={this.submit} />
            
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
    );
}
}
export default game;


