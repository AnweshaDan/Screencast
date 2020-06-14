import axios from'axios'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Question from '../components/Question'
import Hint from '../components/Hint'
import Submit from '../components/Submit'
import Particles from 'react-particles-js';
import Answer from '../components/Answer';
import Router from 'next/router';
import AnsAlert from '../components/AnsAlert'



class game extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            answer:"",
            questions:"",
            qsNo:1,
            correct:0,
            alert_title:"",
            alert_text:"hola",
            open:false,
            isLoggedIn:false,
            hint:""
            
        }

        this.submit=this.submit.bind(this);
        this.change=this.change.bind(this);
        this.checkAns=this.checkAns.bind(this);
        this.getQuestions=this.getQuestions.bind(this);
        this.keypress=this.keypress.bind(this);
    }
    

    componentDidMount()//at the beginning sets the qs
    {//after getting appropiate data from backend about that email in local storage
        console.log(this.state.qsNo);
        console.log(localStorage.getItem('email'));//email available here

        /*   axios.get('https://jsonplaceholder.typicode.com/users/email?=Nathan@yesenia.net').then((response)=>
        {
            console.log("yesssss"+this.state.qsNo+response.json);
            this.setState(prevState=>{
                return{ ...prevState, questions:response.data.id}
              });
        }
        )*/

        //next qs/completed/error

        this.getQuestions();
        
        
    }

    getQuestions(){
        console.log(this.state.qsNo);
        console.log("YO");//get questions from api and updates state
        axios.get('https://jsonplaceholder.typicode.com/posts/'+this.state.qsNo).then((response)=>
        {
          let r=response.data.title;
          console.log(r);
          this.setState(prevState=>{
            return{ ...prevState, questions:r,hint:response.data.body}
          });
          
          

    });
    }

    submit=()=>{//send final answer for checking
        
        console.log(this.state.answer);
        this.checkAns(this.state.answer);
    }

    change=(event)=>{//keep updating answer
        let e= event.target.value; 
        this.setState(prevState=> {
        return { ...prevState, answer:e }
    });
    }

    keypress=(event)=>{//not done
        if(event.key==="Enter")
        {
            console.log("jo"+this.state.answer);
            this.checkAnswer(this.state.answer);
            console.log("jo"+this.state.answer);
            
        }
    }

   

    checkAns(answer)//check answer from api and send for correct alert
    {
        
        console.log(answer);
        console.log(this.state.qsNo)
        axios.get('https://jsonplaceholder.typicode.com/posts/'+this.state.qsNo).then((response)=>
        {
             let r=response.data.id;
             console.log(r);
        
        if(this.state.qsNo < 5)
        {
            if(answer==r)
            {
                
                this.setState(prevState=>{
                    return{ ...prevState, qsNo:prevState.qsNo+1,correct:1}
                  });
                  this.getQuestions();
                  
            }
            else{
                this.setState(prevState=>{
                    return{ ...prevState,correct:0}
                  });
                this.getQuestions();
                
            }
                
        }
        else{
            Router.push('/');
        }
        console.log(this.state.correct)
    });

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
            <Question qs={this.state.questions} />
            
            <Answer change={this.change} press={this.keypress} />
            
            
            <Submit submit={this.submit} correct={this.correct}/>
            
            
            <div>

                <Hint hint={this.state.hint}/>
                <style jsx>{`
    div{
        text-align:center;
        margin:5px;
    }
    `}</style>

            </div>
            <div>
                <Footer/>
            </div>



        </div >
    );
}
}
export default game;


