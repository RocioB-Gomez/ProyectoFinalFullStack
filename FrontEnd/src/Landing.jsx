import { Component } from "react";
import AboutUs from "./AboutUs";
import Benefits from "./Benefits";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Principal from "./Principal";
import Product from "./Product";
import Services from "./Service";

class Landing extends Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return ( 
      <>
        <Navbar />
        <Principal />
        <AboutUs />
        <Benefits />
        <Product />
        <Services />
        <Contact />
      </>
     );
  }
}
 
export default Landing;