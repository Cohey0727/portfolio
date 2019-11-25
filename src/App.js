import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import resumeData from "./resumeData";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    }
  }
  
  componentDidMount() {
    fetch("https://cohey0727.microcms.io/api/v1/news", {
      headers: {
        "X-API-KEY": "1e8e4621-d36e-41c9-a3d2-f3d7cee38c16"
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({contents: data.contents})
      })
  }
  
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Testimonials resumeData={resumeData} contents={this.state.contents}/>
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
