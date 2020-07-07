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
                I'm a student pursuing a Bachelors of Science <br/>
                in Technology and Information Management at the <br/>
                University of California, Santa Cruz. 
          </div>
          
        </div>
      </div>
    </Layout>
  )   
}

export default IndexPage;
