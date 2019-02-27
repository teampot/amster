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
import getConfig from 'next/config'

// from next.config.js.
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
class TeampotApp extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    if (ctx.req) {
      pageProps.user = {id: 10,firstName: 'John'};
    }

    return { pageProps };

    // server side
    // if (ctx.req && !pageContext.auth_token) {
    //   if (ctx && ctx.query && ctx.query.code) {
    //     //let cookies = new Cookies(ctx);
    //     try {
    //         let response = await fetch(`https://www.linkedin.com/oauth/v2/accessToken`, {
    //           method: "post",
    //           headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //           },
    //           body: `grant_type=authorization_code` + 
    //           `&code=${encodeURIComponent(ctx.query.code)}` + 
    //           `&redirect_uri=${encodeURIComponent('http://localhost:3000')}` + 
    //           `&client_id=${serverRuntimeConfig.lnClientId}` + 
    //           `&client_secret=${serverRuntimeConfig.lnSecret}`
    //         });
    //         pageContext.auth_token = await response.json();

    //     } catch (error) {
    //       console.log(error);
    //     }

    //     if (pageContext.auth_token && !pageContext.me) {
    //       let response = await fetch('https://api.linkedin.com/v2/me', {
    //           headers: {
    //             'Accept': 'application/json',
    //             'Authorization': `Bearer ${pageContext.auth_token.access_token}`
    //           },
    //       });
    //       pageContext.me = await response.json();
    //     }
        
    //     return pageContext;
    //   }

    //   ctx.res.writeHeader(302,
    //         {
    //           Location : `https://www.linkedin.com/oauth/v2/authorization` +
    //           `?client_id=${serverRuntimeConfig.lnClientId}` + 
    //           `&response_type=code` +
    //           `&redirect_uri=http://localhost:3000` + 
    //           `&scope=r_liteprofile w_share r_emailaddress`
    //         });
                    
    //   ctx.res.end();
    // }
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
            <title>Teampot</title>
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
              <PrimarySearchAppBar {...pageProps}/>
              <Component pageContext={this.pageContext} {...pageProps} />
            </ThemeProvider>
          </StylesProvider>
        </ApolloProvider>
      </Container>
    );
  }
};

export default withApolloClient(TeampotApp);