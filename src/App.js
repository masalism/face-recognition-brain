import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";
import "./App.css";

// const app = new Clarifai.App({
//   apiKey: "4766b08fe24448f299b45540ee11b746"
// });

// onButtonSubmit = () => {
//   this.setState({imageUrl: this.state.input})
//   app.models
//     .predict(
//       Clarifai.FACE_DETECT_MODEL,
//       this.state.input
//     )
//     .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
//     .catch(err => console.log(err));
// };

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;

//Clarifai.FACE_DETECT_MODEL
