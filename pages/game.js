import axios from "axios";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Question from "../components/Question";
import Hint from "../components/Hint";
import AnsAlert from "../components/AnsAlert"
import Answer from "../components/Answer";
import Router from "next/router";
import data from '../env.json';


class game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      questions: "",
      qsNo: 1,
      audio: "",
      image: "",
      isLoggedIn: false,
      hint: "",
      day: "",
      end:"",
      message:"",
      v:""
      
      
    };

    this.submit = this.submit.bind(this);
    this.submit2 = this.submit2.bind(this);
    this.change = this.change.bind(this);
    this.checkAns = this.checkAns.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
  }
  

  componentDidMount() {
    
    axios
      .get(data.api+"/api/status")
      .then((response) => {
            console.log(response);
            var temp3=new Date(response.data.start_time);
            let temp2 = new Date(response.data.end_time);
            localStorage.setItem('end',temp2.getTime() + (temp2.getTimezoneOffset() * 60000))
            
            localStorage.setItem("start", temp3.getTime() + (temp3.getTimezoneOffset() * 60000));
            let temp=localStorage.getItem('end')-Date.now();
            localStorage.setItem("day",response.data.current_day);
            console.log(temp);
            console.log(localStorage.getItem('end'));
            console.log(localStorage.getItem('day'));
            this.setState({v:setTimeout(function(){
              AnsAlert(9);
              if(localStorage.getItem('day')==3 || response.data.error)
              {
                
                Router.push('/game_finale')
              }
              
              else
              {
                
                Router.push('/finale2');
              }

              
              
            },temp)})
            console.log(localStorage.getItem('end'))
            this.setState({day:localStorage.getItem('day'), end:localStorage.getItem('end')},()=>
            {
              if(localStorage.getItem('day')==3 && (localStorage.getItem('end') < Date.now()))
              Router.push('/game_finale')
              console.log(this.state.day+this.state.end);
              if (!(localStorage.getItem("email"))) {
                AnsAlert(8)
                Router.push('/');
              }
              else if (!(localStorage.getItem('start') <= Date.now())) {
                localStorage.clear();
                Router.push("/");
              }
              else {
                console.log("YOOOOOOO")
                this.getQuestions();
              }
            });
        })
    
  }

  getQuestions() {
    console.log(this.state.qsNo);
    console.log(localStorage.getItem("token")); //get questions from api and updates state

    axios
      .get(data.api+"/api/question", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log("YOOO+"+response);
        //if (response.data.error) Router.push("/finale2");
        if (response.data.quiz_finished)
        {
          clearTimeout(this.state.v);
          localStorage.setItem('success',1);
          Router.replace("/finale");
        } 
        this.setState((prevState) => {
          return {
            ...prevState,
            questions: response.data.question,
            hint: response.data.hint,
            qsNo: response.data.question_no,
            audio: response.data.audio,
            image: response.data.image
          };
        });
      });
    console.log(localStorage.getItem("token"));
  }

  submit = (event) => {
    //send final answer for checking
    if (event.key === "Enter") {
      console.log(this.state.answer);
      console.log("JOJOJOJOJOJ");
      this.checkAns(this.state.answer);
    }
  };
  submit2 = () => {
    //send final answer for checking

    console.log(this.state.answer);

    this.checkAns(this.state.answer);
  };

  change = (event) => {
    //keep updating answer
    let e = event.target.value;
    this.setState((prevState) => {
      return { ...prevState, answer: e };
    });
  };

  checkAns(
    ans //check answer from api and send for correct alert
  ) {
    console.log(ans);
    console.log(this.state.qsNo);
    axios
      .post(
        data.api+"/api/checkanswer",
        { answer: ans },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        let r = response.data.result;
        console.log(response);

        if (r && !response.data.quiz_finished) {
          this.setState((prevState) => {
            return { ...prevState, qsNo: prevState.qsNo + 1, answer: "" };
          });
          AnsAlert(1); //where does the effing control go after this?
          console.log("SANTA");
          this.setState({
            answer: ""
          });
          this.getQuestions();
        } else if (r && response.data.quiz_finished) {
          AnsAlert(1);
          clearTimeout(this.state.v);
          Router.replace("/finale");
        } else {
          this.setState({
            answer: ""
          });
          AnsAlert(0);
        }
      });
  }

  render() {
    return (
      <div
        style={{ marginRight: "auto", marginLeft: "auto", textAlign: "center", minHeight: "100vh-100px" }}
        questions
      >


        <Navbar />

        <Question qs={this.state.questions} qsNo={this.state.qsNo} audio={this.state.audio} image={this.state.image} day={this.state.day} />
        <div>
          <Answer
            change={this.change}

            answer={this.state.answer}
          />

          <Hint hint={this.state.hint}
            submit={this.submit}
            submit2={this.submit2}

          />

          <style jsx>{`
            div {
              text-align: center;
              margin: 5px;
              margin-bottom:100px;
            }
          `}</style>
        </div>
        <div>
          <Footer />

        </div>
      </div>
    );
  }
}
export default game;
