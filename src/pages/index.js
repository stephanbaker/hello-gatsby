import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"

const IndexPage = () => (
  <Layout>
    <h1>This is a Gatsby Site!</h1>      
    <p>This project is just a playground where I'm learning Gatsby.</p>
    <p>Let's see what this thing can do!</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <h2>What about content like blog posts?</h2>
    <p>Rather than tell you, why don't I just show you by taking you to <Link to="/blog/">the blog</Link></p>
  </Layout>
)

export default IndexPage
