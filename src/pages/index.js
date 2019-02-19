import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import horse from './horse.gif'

const IndexPage = () => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
    <img src={horse} style={{height: 120}}/>
    <h3>Can I cross <a href="https://www.delmarblvd.com">delmar</a> on a horse?</h3>
    <h1>No!!!</h1>
  </div>
)

export default IndexPage
