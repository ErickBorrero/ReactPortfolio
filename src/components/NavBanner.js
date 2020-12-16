import React, { Component } from "react";

class NavBanner extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron jumbotron-fluid" id="jumbotron">
            <div className="row" id="header">
              <div className="col-md-5 d-flex justify-content-center">
                <h1 className="display-3">Erick Borrero</h1>
              </div>
              <div className="col-md-7 d-flex justify-content-center">
                <h1 className="display-3">Full-Stack Developer | Web Designer</h1>
              </div>
            </div>
            <div className="col-md-12">
              <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    About <i className="fa fa-user"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="projects.html">
                    Projects <i className="fa fa-laptop"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact <i className="fa fa-envelope-o"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBanner;
