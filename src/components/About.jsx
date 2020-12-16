import React, { Component } from 'react';


class About extends Component {
    state = {  }


    render() { 
      var profilePic = "https://avatars3.githubusercontent.com/u/59777514?s=460&u=0594ae2c77c2041e3cdc6add5fe553967a990750&v=4"

        return (
         <>
            <div className="row" id="about-content">
               <div className="col-md-3 d-flex justify-content-center">
                  <img
                     src= {profilePic}
                     alt="profile pic"
                     id="profile-pic"
                     />
               </div>
               <div className="col-md-6">
                  <h2 className="display-4">Hello,</h2>
                  <p>
                     I am full-stack developer based in Central Florida. I don't have
                     quarrels with any part of the stack as it is the challenge of figuring
                     out the logic to make things work that infinitely propels me to code.
                     I perceive myself to be an open/great communicator, easy to coach as I
                     consistently strive to be objective and realistic with my capabilities
                     as a programmer; due to my understanding that tech is an "ever-growing
                     field" so a "great" solution today may be an "ok" solution tomorrow.
                     Outside the world of coding, I am a family man to my wife and 2
                     daughters; and a life-long lover of all things games and anime.
                  </p>
               </div>
               <div className="col-md-3">
                  <h2 className="display-4">Tech Stack</h2>
                  <ul>
                     <li>C#</li>
                     <li>Asp.Net/MVC</li>
                     <li>Python</li>
                     <li>Entity Framework</li>
                     <li>SQL</li>
                     <li>Bootstrap</li>
                     <li>Html/Css/Javascript</li>
                     <li>Github</li>
                  </ul>
               </div>
            </div>
         </>
         );
    }
}
 
export default About;