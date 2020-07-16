import React from "react"
import '../components/layout.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const PortfolioPage = () => {
    return(   
        <div className = "portfolioSection" id = "portfolioID">

            <div className = "portfolioTitle">
                <mark class="title"> <h3> Portfolio </h3> </mark>
            </div>
            <hr/>

            <div className = "portfolioContainer"> 
                <Tabs>
                    <TabList className = "tabsContainer">
                        <Tab className = "aTab"> <div className = "tabText1"> Farmers Insurance </div> </Tab>
                        <Tab className = "aTab"> <div className = "tabText2"> Community Bridges </div> </Tab>
                        <Tab className = "aTab"> <div className = "tabText3"> Role Playing Gainz </div> </Tab>
                        <Tab className = "aTab"> <div className = "tabText4"> Pintos Project </div> </Tab>
                        <Tab className = "aTab"> <div className = "tabText5"> This Website </div> </Tab>
                    </TabList>

                    <TabPanel className = "thePanel">
                        <p>
                            <h5> Software Engineering Intern @ <a class = "blueColor" href="https://www.farmers.com/" target = "_blank" rel = "noopener noreferrer"> 
                                 Farmers Insurance 
                            </a> </h5>

                            <ul class = "a">
                                <li> 
                                    Developed Python application to retrieve user data from Guidewire Policy Center’s PostgreSQL database
                                    and notify agents using Twilio API. Deployment forecasts an increase in customer retention rate by 9%. 
                                </li>
                                <li>  
                                    Did a comparative data analysis between multiple Messaging APIs that would reduce company costs by 4%.
                                </li>
                                <li> 
                                    Created a Front-end Web Application using ReactJS that streamlined the process of editing policies in the
                                    Farmers database, decreasing time to modify data by an average of 22%. 
                                </li>
                            </ul>
                        </p>
                    </TabPanel>

                    <TabPanel className = "thePanel">
                        <p>
                            <h5> Software Engineering Intern @ <a class = "blueColor" href="https://communitybridges.org/" target = "_blank" rel = "noopener noreferrer"> 
                                 Community Bridges
                            </a> </h5>
                            <ul class = "a">
                                <li> 
                                    Collaborated in a team of 5 to optimize the survey process for the nonprofit. Reduced the onboarding time by an average of 40%. 
                                </li>
                                <li>  
                                    Created surveys based on a binary tree using KoboCollect and integrated with nonprofit’s WordPress.
                                </li>
                            </ul>
                        </p>
                    </TabPanel>

                    <TabPanel className = "thePanel">
                        <p>
                            <h5> Personal Project @ <mark class="blueColor"> Comfort of my Home </mark> </h5>
                            <ul class = "a">
                                <li> 
                                    Android Application made in Unity using C#. The goal of the application is to incentivize working out by
                                    making exercise a Roleplaying Game, where the player’s character develops relative to how much the player exercises.
                                </li>          
                            </ul>
                        </p>
                    </TabPanel>
                    
                    <TabPanel className = "thePanel">
                        <p>
                            <h5> Personal Project @ <a class = "blueColor" href="https://www.ucsc.edu/" target = "_blank" rel = "noopener noreferrer"> 
                                 UCSC
                            </a> </h5>
                            <ul class = "a">
                                <li> 
                                    Coding assignment by Stanford within the Pintos Operating System. The assignment was Pintos Project 2, User Programs.
                                    Within this assignment, we had to access user memory by building a stack.  
                                </li>    
                                <li>
                                    This was done by utilizing pointer arithmetic. Once we had access to the memory, the next step was to set up 
                                    multi-threading by using semaphores. 
                                </li>   
                                <li>
                                    With the help of threading, we then had to implement certain system calls, such as <i>create</i>, <i>open</i>, <i>read</i>, and 
                                    <i>write</i>, within the Operating System. 
                                </li>  
                            </ul>
                        </p>
                    </TabPanel>
                    
                    <TabPanel className = "thePanel">
                        <p>
                            <h5> Personal Project @ <mark class="blueColor"> Comfort of my Home </mark> </h5>
                            <ul class = "a">
                                <li> 
                                    Website created using GatsbyJS and React Libraries. Thanks for taking the time to go through it!
                                </li>          
                            </ul>
                        </p>
                    </TabPanel>
                </Tabs>
            </div>
        </div>    
    )
}

export default PortfolioPage;

