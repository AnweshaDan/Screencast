import axios from "axios";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Question from "../components/Question";
import Hint from "../components/Hint";
import Submit from "../components/Submit";
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
      correct: 0,
      alert_title: "",
      alert_text: "hola",
      open: false,
    };

    this.submit = this.submit.bind(this);
    this.change = this.change.bind(this);
    this.checkAns = this.checkAns.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    //at the beginning sets the first qs
    console.log(this.state.qsNo);
    this.getQuestions();
  }

  getQuestions() {
    console.log("YO"); //get questions from api and updates state
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + this.state.qsNo)
      .then((response) => {
        let r = response.data.title;
        console.log(r);
        this.setState((prevState) => {
          return { ...prevState, questions: r };
        });
      });
  }

  submit = () => {
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
    answer //check answer from api and send for correct alert
  ) {
    console.log(answer);
    console.log(this.state.qsNo);
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + this.state.qsNo)
      .then((response) => {
        let r = response.data.id;
        console.log(r);

        if (this.state.qsNo < 5) {
          if (answer == r) {
            this.setState((prevState) => {
              return { ...prevState, qsNo: prevState.qsNo + 1, correct: 1 };
            });
            this.getQuestions();
          } else {
            this.setState((prevState) => {
              return { ...prevState, correct: 0 };
            });
            this.getQuestions();
          }
        } else {
          Router.push("/");
        }
        console.log(this.state.correct);
      });
  }

  render() {
    return (
      <div
        style={{ marginRight: "auto", marginLeft: "auto", textAlign: "center" }}
      >
        <Particles
          params={{
            particles: {
              number: {
                value: 200,
                density: {
                  enable: true,
                  value_area: 900,
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
        <Question qs={this.state.questions} />
        <Answer change={this.change} />
        <Submit submit={this.submit} correct={this.correct} />

        <div>
          <Hint />
          <style jsx>{`
            div {
              text-align: center;

              margin-top: 5px;
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
