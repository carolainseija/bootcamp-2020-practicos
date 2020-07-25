import React from 'react';
import '../assets/css/styles.css'

class Footer extends React.Component {
    render() {
      return(
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal text-white">Company name</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-white" href="#">Features</a>
          <a className="p-2 text-white" href="#">Enterprise</a>
          <a className="p-2 text-white" href="#">Support</a>
          <a className="p-2 text-white" href="#">Pricing</a>
        </nav>
        <a className="btn btn-outline-primary" href="#">Sign up</a>
      </div>
        )
    }
  }
  

export default Footer;
