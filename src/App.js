import React, { Component } from "react";
import Navigation from './components/Navigation/Navigation'
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
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation />
        {/* <Logo />
        <ImageLinkForm />
        <FaceRecognition /> */}
      </div>
    );
  }
}



export default App;

//Clarifai.FACE_DETECT_MODEL