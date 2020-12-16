import React, { Component } from 'react';
import smitePic from "../images/2020-12-07.png"
import sortingPic from "../images/2020-10-17.png"
import portfolioPic from "../images/2020-10-26.png"


class Projects extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row" id="projects-content">
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="card bg-dark text-light gray" style={{width: '18rem'}}>
                        <img src= {smitePic} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Smite API Website</h5>
                            <p className="card-text">
                            Website built using Asp.net MVC model. It is a website for players of popular Hi-Rez Studios Game, <b><i>Smite</i></b>, to search themselves and others and see high-level statistics and info pertaining to their account. Work-In-Progress(Live page not available)
                            </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-dark text-light gray">
                            C#
                            </li>
                            <li className="list-group-item bg-dark text-light gray">
                            Asp.Net MVC
                            </li>
                            <li className="list-group-item bg-dark text-light gray">
                            Consuming public API
                            </li>
                        </ul>
                        <div className="card-body d-flex justify-content-around">
                            <a href="https://github.com/ErickBorrero/SmiteApiWebsite" target="blank" className="card-link"><button type="button" className="btn btn-info">Code</button></a>
                            <a href="#" className="card-link" target="blank"><button type="button" className="btn btn-info">Live</button></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="card bg-dark text-light gray" style={{width: '18rem'}}>
                        <img src= {sortingPic} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Sorting Visualizer</h5>
                            <p className="card-text">
                            This is a project where we get to see what happens behind the scenes whenever we need to sort and order through an array of numbers.
                            </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-dark text-light gray">
                            Html/Css/Javascript
                            </li>
                            <li className="list-group-item bg-dark text-light gray">
                            Computer and Algorithmic Logic/Understanding
                            </li>
                            <li className="list-group-item bg-dark text-light gray">
                            Canvas Manipulation
                            </li>
                        </ul>
                        <div className="card-body d-flex justify-content-around">
                            <a href="https://github.com/ErickBorrero/Sorting-Visualizer" target="blank" className="card-link"><button type="button" className="btn btn-info">Code</button></a>
                            <a href="https://erickborrero.github.io/Sorting-Visualizer/" target="blank" className="card-link"><button type="button" className="btn btn-info">Live</button></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="card bg-dark text-light gray" style={{width: '18rem'}}>
                        <img src= {portfolioPic} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Personal Portfolio</h5>
                            <p className="card-text" style={{paddingBottom: '3em'}}>
                            This my personal portfolio, showcasing some of my latest work and capabilities.
                            </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-dark text-light gray" style={{paddingBottom: '1em'}}>
                            Html/Css
                            </li>
                            <li className="list-group-item bg-dark text-light gray" style={{paddingBottom: '1em'}}>
                            Bootstrap
                            </li>
                            <li className="list-group-item bg-dark text-light gray" style={{paddingBottom: '1em'}}>
                            Web Hosting
                            </li>
                        </ul>
                        <div className="card-body d-flex justify-content-around">
                            <a href="https://github.com/ErickBorrero/Portfolio" target="blank" className="card-link"><button type="button" className="btn btn-info">Code</button></a>
                            <a href="http://ItsTheFlea.FreeASPHost.net/" target="blank" className="card-link"><button type="button" className="btn btn-info">Live</button></a>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Projects;