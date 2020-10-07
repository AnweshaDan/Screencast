import '../style.css'
import React from 'react';
import App from 'next/app';
import Head from "next/head";
import Router from "next/router";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Loader from "../components/Loader.js"

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    this.setState({ loaded: true });
    Router.events.on("routeChangeStart", () =>
      this.setState({ loaded: false })
    );
    Router.events.on("routeChangeComplete", () =>
      this.setState({ loaded: true })
    );
  }

    render() {
        const { Component, pageProps } = this.props;

        return(
        <>
        <React.Fragment>
        <Head>
        <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Geektober</title>
          <link rel="stylesheet" type="text/css" href="question.css" />
        </Head>
        <ThemeProvider>
          <div className="back">
          <CssBaseline />
          {this.state.loaded ? (
            <Component {...pageProps} />
          ) : (
            <Loader />
          )}
          </div>
        </ThemeProvider>
        </React.Fragment>
        </>
        );
    }
}

export default MyApp;