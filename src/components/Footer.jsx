import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 d-flex justify-content-between">
                        <a href="https://www.facebook.com/erick.borrero.1" target="blank">
                        <i className="fa fa-facebook-square fa-3x"></i
                        ></a>
                        <a href="https://www.instagram.com/itstheflea_" target="blank"
                        ><i className="fa fa-instagram fa-3x"></i
                        ></a>
                        <a href="https://twitter.com/its_the_flea" target="blank"
                        ><i className="fa fa-twitter-square fa-3x"></i
                        ></a>
                        <a href="https://github.com/ErickBorrero" target="blank"
                        ><i className="fa fa-github-square fa-3x"></i
                        ></a>
                        <a href="https://linkedin.com/in/erick-borrero" target="blank"
                        ><i className="fa fa-linkedin-square fa-3x"></i
                        ></a>
                    </div>
                    <div className="col-md-4"></div>
                    </div>
          </footer>
         );
    }
}
 
export default Footer;