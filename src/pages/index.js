import React from "react"
import '../components/layout.scss'
import '../utils/animation.scss'
import Layout from '../components/layout'
import Animation from '../utils/animation'

const IndexPage = () => {
  return (
    <Layout>
      <div className = "index-BG">
        <Animation />
        <div className = "index-Section" >
          <div className = "index-titleText">
            <h1> Hello, I'm Anirudh Ahuja. <br/>
                 I'm a Front-end Web Developer. </h1>
          </div>
          <div className = "index-underTitleText">
                <mark class="colorBlue"> But you can just call me Ani. </mark> <br/> <br/>
                I'm a recent graduate from the University of California, Santa Cruz  <br/>
                with a Bachelors of Science in Technology and Information Management. <br/>
          </div>
        </div>
      </div>
    </Layout>
  )   
}

export default IndexPage;
