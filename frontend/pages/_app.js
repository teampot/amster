import '../src/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import getPageContext from '../src/getPageContext';
import { ApolloProvider } from 'react-apollo';
import withApolloClient from '../src/with-apollo-client';
import PrimarySearchAppBar from '../components/organisms/appBar';
import fetch from 'isomorphic-unfetch';
import Cookies from '../src/auth/cookies';

class TeampotApp extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  static async getInitialProps({ Component, router, ctx, req }) {
    let pageContext = getPageContext();
    if (ctx) {
      let cookies = new Cookies(ctx);
      if (!cookies.auth_token) {
              ctx.res.writeHeader(302,
                      {
                        Location : `https://www.linkedin.com/oauth/v2/authorization` +
                        `?client_id=78srd5euhjejck` + 
                        `&response_type=code` +
                        `&redirect_uri=${encodeURIComponent('http://localhost:3000')}` + 
                        `&scope=r_fullprofile%20r_emailaddress%20w_share`
                      });
                      
          ctx.res.end();
          return {};
      }
    }
    console.log(ctx.req);
    const res = await fetch('https://api.github.com/repos/zeit/next.js');
    const json = await res.json();
    return { stars: json.stargazers_count };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Head>
            <title>Team Pot</title>
          </Head>
          {/* Wrap every page in Styles and Theme providers */}
          <StylesProvider
            generateClassName={this.pageContext.generateClassName}
            sheetsRegistry={this.pageContext.sheetsRegistry}
            sheetsManager={this.pageContext.sheetsManager}
          >
            {/* ThemeProvider makes the theme available down the React
              tree thanks to React context. */}
            <ThemeProvider theme={this.pageContext.theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server-side. */}
              <PrimarySearchAppBar />
              <Component pageContext={this.pageContext} {...pageProps} />
            </ThemeProvider>
          </StylesProvider>
        </ApolloProvider>
      </Container>
    );
  }
};

export default withApolloClient(TeampotApp);