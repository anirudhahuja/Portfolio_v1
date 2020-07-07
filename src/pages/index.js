import React from "react"
import '../components/layout.scss'
import '../utils/animation.scss'
import './index.scss'
import Layout from '../components/layout'


const IndexPage = () => {
  return (
    <Layout>
      <div className = "indexBG">
        <div className = "indexSection" id = "indexID">

          <div className = "titleText">
            <h1> Hello, I'm Anirudh Ahuja. <br/>
                I'm a Front-end Dev. </h1>
          </div>

          <div className = "underTitleText">
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
