import axios from "axios";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Question from "../components/Question";
import Hint from "../components/Hint";
import AnsAlert from "../components/AnsAlert"
import Particles from "react-particles-js";
import Answer from "../components/Answer";
import Router from "next/router";

class game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      questions: "",
      qsNo: 1,

      isLoggedIn: false,
      hint: "",
    };

    this.submit = this.submit.bind(this);
    this.submit2 = this.submit2.bind(this);
    this.change = this.change.bind(this);
    this.checkAns = this.checkAns.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    //at the beginning sets the qs
    //after getting appropiate data from backend about that email in local storage
    console.log(localStorage.getItem("token"));
    console.log(this.state.qsNo);
    console.log(localStorage.getItem("email")); //email available here

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

  getQuestions() {
    console.log(this.state.qsNo);
    console.log(localStorage.getItem("token")); //get questions from api and updates state

    axios
      .get("https://screencast20.azurewebsites.net/api/question", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.quiz_finished) Router.push("/finale");
        this.setState((prevState) => {
          return {
            ...prevState,
            questions: response.data.question,
            hint: response.data.hint,
            qsNo: response.data.question_no,
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
        "https://screencast20.azurewebsites.net/api/checkanswer",
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
            return { ...prevState, qsNo: prevState.qsNo + 1 };
          });
          AnsAlert(1); //where does the effing control go after this?
          console.log("SANTA");

          this.getQuestions();
        } else if (r && response.data.quiz_finished) {
          AnsAlert(1);
          Router.push("/finale");
        } else {
          AnsAlert(0);
        }
      });
  }

  render() {
    return (
      <div
        style={{ marginRight: "auto", marginLeft: "auto", textAlign: "center" }}
        questions
      >
        <Particles
          params={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 400,
                },
              },
              color: {
                value: ["#cc0000"],
              },
              line_linked: {
                color: "#aa0044",
                opacity: 1,
              },
            },
          }}
          style={{
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            position: "fixed",
            index: "-10",
          }}
        />

        <Navbar />
        <Question qs={this.state.questions} qsNo={this.state.qsNo} />
        <div>
          <Answer
            change={this.change}
            submit={this.submit}
            submit2={this.submit2}
          />

          <Hint hint={this.state.hint} />
          <style jsx>{`
            div {
              text-align: center;
              margin: 5px;
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
