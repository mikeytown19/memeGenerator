import React from 'react'
import { Global, css } from '@emotion/core'
import { theme, media } from '.'



export const GlobalStyles = () => (
  <Global
  styles={css`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&display=swap');
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin: 0;
      font-family: 'Open Sans', sans-serif;
    }
    h1 {
      font-size: 60px;
      line-height: 62px;
      margin-bottom: 30px;
      text-align: center;
      font-weight: 400;
      ${media.medium} {
        font-size: 50px;
        line-height: 52px;
        text-align: left;
      }
      ${media.small} {
        font-size: 40px;
        line-height: 42px;
      }
    }
    h2 {
      font-size: 48px;
      line-height: 50px;
      margin-bottom: 15px;
      text-align: center;
      font-weight: 400;
      ${media.medium} {
        font-size: 42px;
        line-height: 44px;
        text-align: left;
      }
      ${media.small} {
        font-size: 36px;
        line-height: 38px;
      }
    }
    h3 {
      font-size: 36px;
      line-height: 38px;
      margin-bottom: 15px;
      font-weight: 400;
      ${media.medium} {
        font-size: 32px;
        line-height: 34px;
        text-align: left;
      }
      ${media.small} {
        font-size: 28px;
        line-height: 30px;
      }
      &.heavy {
        font-weight: 700;
      }
      &.white {
        color: ${theme.colors.white};
      }
    }
    h4 {
      font-size: 24px;
      line-height: 30px;
      font-weight: 400;
      &.heavy {
        font-weight: 700;
      }
    }
    h5 {
      font-size: 18px;
      line-height: 24px;
      font-weight: 700;
      &.light {
        font-weight: 400;
      }
    }
    html {
      font-family: 'Open Sans', sans-serif;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }
    body {
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      position: relative;
    }
    * {
      box-sizing: border-box;
    }
    p {
      font-size: 16px;
      line-height: 24px;
      color: ${theme.colors.dark};
      padding-bottom: 14px;
      &.legal {
        font-size: 10px;
        line-height: 12px;
        color: ${theme.colors.legalGray};
      }
    }
    a {
      text-decoration: none;
    }
    .text-center { text-align: center; }
    .margin-bottom-45 { margin-bottom: 45px; }
    .margin-bottom-25 { margin-bottom: 25px; }
    ul {
      color: ${theme.colors.dark};
      li {
        margin-bottom: 25px;
      }
    }
    .text-center {
      text-align: center;
    }
    .no-margin-bottom {
      margin-bottom: 0;
    }
    .heavy {
      font-weight: 700;
    }
    .max-width-500 {
      ${media.largeUp} {
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
      }
    }
    .gatsby-sbs-image {
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
    }
    .gatsby-header-img {
      height: 100%;
      width: 100%;
    }
    .footer-bg-image {
      margin-top: -300px;
      z-index: -1;
      ${media.medium} {
        margin-top: -150px;
      }
      ${media.small} {
        margin-top: -50px;
      }
    }
  `}
  />
)


