import React from 'react';
import logo from './logo.svg';
import './App.css';

export class App extends React.Component {

  constructor(props) {                                                                                                                                                                                                                                                                                                                                                                                                                
    super(props);
    this.state = { 
      bandOpacity: 0,
      musicOpacity: 0,
      photosOpacity: 0,
      eventsOpacity: 0,
      contactOpacity: 0,
      currentBandIndex: null,
      currentBandSlide: 1,
      bandSlideDirection: "right",
      bandSlide1: "",
      bandSlide2: ""
    };
    
    this.componentDidMount = this.componentDidMount.bind(this)
    this.getBandSlideOneClasses = this.getBandSlideOneClasses.bind(this)
    this.getBandSlideTwoClasses = this.getBandSlideTwoClasses.bind(this)
    this.setCurrentBandSlide = this.setCurrentBandSlide.bind(this)
    this.startBandSlide = this.startBandSlide.bind(this)
    this.bandRightArrow = this.bandRightArrow.bind(this)
    this.bandLeftArrow = this.bandLeftArrow.bind(this)
    this.setBandSlide = this.setBandSlide.bind(this)
    this.bandSlides = [
      (
        <div id="meet-sarah-container" style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
              <div id="meet-sarah-image">
              </div>
              <div id="meet-sarah-text">
                <span>Sarah</span>
                <span onClick={this.setCurrentBandSlide} style={{cursor: "pointer"}}>Chad the first. Somthing Somthing something
                Somthing Somthing somethingSomthing Somthing somethingSomthing Somthing somethingSomthing Somthing somethingSomthing Somthing something
                Somthing Somthing somethingSomthing Somthing somethingSomthing Somthing somethingSomthing Somthing somethingSomthing Somthing something </span>
              </div>
        </div>
      ),
    (
      <div id="meet-trevor-container" style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
              <div id="meet-trevor-text">
                <span>Trevor</span>
                <span onClick={this.setCurrentBandSlide} style={{cursor: "pointer"}}>Chad the first. Somthing Somthing something
                Somthing Somthing somethingSomthing Somthing somethingSomthing Somthing somethingSomthing Somthing somethingSomthing Somthing something
                Somthing Somthing somethingSomthing Somthing somethingSomthing Somthing somethingSomthing Somthing somethingSomthing Somthing something </span>
              </div>
              <div id="meet-trevor-image">
              </div>
        </div>
    ),
    (
      <div id="meet-zach-container" style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
              <div id="meet-zach-image">
              </div>
              <div id="meet-zach-text">
                <span>Zach</span>
                <span onClick={this.setCurrentBandSlide} style={{cursor: "pointer"}}>Chad the first. Somthing Somthing something
                Somthing Somthing somethingSomthing Somthing somethingSomthing Somthing somethingSomthing Somthing somethingSomthing Somthing something
                Somthing Somthing somethingSomthing Somthing somethingSomthing Somthing somethingSomthing Somthing somethingSomthing Somthing something </span>
              </div>
        </div>
    ),
    (
      <div id="meet-alex-container" style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
              <div id="meet-alex-text">
                <span>Alex</span>
                <span onClick={this.setCurrentBandSlide} style={{cursor: "pointer"}}>Chad the first. Somthing Somthing something
                Somthing Somthing somethingSomthing Somthing somethingSomthing Somthing somethingSomthing Somthing somethingSomthing Somthing something
                Somthing Somthing somethingSomthing Somthing somethingSomthing Somthing somethingSomthing Somthing somethingSomthing Somthing something </span>
              </div>
              <div id="meet-alex-image">
              </div>
        </div>
    )
    ]
    this.bandSlideLanding = (
      <div id="meet-the-band-container" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
              <div id="meet-the-band-image">
              </div>
              <span id="meet-the-band-text" onClick={this.startBandSlide} style={{cursor: "pointer"}}>Meet the band --></span>
      </div>
    )
  }

  componentDidMount(){
    

    this.setState({
      bandSlide1: this.bandSlideLanding,
      bandSlide2: this.bandSlides[0]
    })
    
    document.addEventListener("scroll", function(){
      let bandLocation = document.getElementById("band").getBoundingClientRect()
      bandLocation = bandLocation.bottom - bandLocation.height/2
      
      let musicLocation = document.getElementById("music").getBoundingClientRect()
      musicLocation = musicLocation.bottom - musicLocation.height/2

      let photosLocation = document.getElementById("photos").getBoundingClientRect()
      photosLocation = photosLocation.bottom - photosLocation.height/2

      let eventsLocation = document.getElementById("events").getBoundingClientRect()
      eventsLocation = eventsLocation.bottom - eventsLocation.height/2

      let contactLocation = document.getElementById("contact").getBoundingClientRect()
      contactLocation = contactLocation.bottom - contactLocation.height/2

      if(bandLocation > 40 && bandLocation < window.innerHeight-40){
        document.getElementById("band").classList.remove("hide")
        document.getElementById("band").classList.add("show")
      } else {
        document.getElementById("band").classList.remove("show")
        document.getElementById("band").classList.add("hide")
        if(this.state.currentBandIndex !== null && (bandLocation < - 200 || bandLocation > window.innerHeight + 200)){
          this.setState({
            currentBandIndex: null,
            currentBandSlide: 1,
            bandSlideDirection: "right",
            bandSlide1: this.bandSlideLanding,
            bandSlide2: this.bandSlides[0]
          })
        }
      }

      if(musicLocation > 0 && musicLocation < window.innerHeight){
        document.getElementById("music").classList.remove("hide")
        document.getElementById("music").classList.add("show")
      } else {
        document.getElementById("music").classList.remove("show")
        document.getElementById("music").classList.add("hide")
      }

      if(photosLocation > 0 && photosLocation < window.innerHeight){
        document.getElementById("photos").classList.remove("hide")
        document.getElementById("photos").classList.add("show")
      } else {
        document.getElementById("photos").classList.remove("show")
        document.getElementById("photos").classList.add("hide")
      }
      
      if(eventsLocation > 0 && eventsLocation < window.innerHeight){
        document.getElementById("events").classList.remove("hide")
        document.getElementById("events").classList.add("show")
      } else {
        document.getElementById("events").classList.remove("show")
        document.getElementById("events").classList.add("hide")
      }
      
      if(contactLocation > 0 && contactLocation < window.innerHeight){
        document.getElementById("contact").classList.remove("hide")
        document.getElementById("contact").classList.add("show")
      } else {
        document.getElementById("contact").classList.remove("show")
        document.getElementById("contact").classList.add("hide")
      }
    }.bind(this));
  }

  getBandSlideOneClasses(){
    if (this.state.currentBandSlide === 1 && this.state.bandSlideDirection === "left"){
      return "right-show"
    } else if (this.state.currentBandSlide === 1 && this.state.bandSlideDirection === "right"){
      return "left-show"
    } else if (this.state.currentBandSlide === 2 && this.state.bandSlideDirection === "left"){
      return "right-hide"
    } else if (this.state.currentBandSlide === 2 && this.state.bandSlideDirection === "right"){
      return "left-hide"
    }
  }

  getBandSlideTwoClasses(){
    if (this.state.currentBandSlide === 2 && this.state.bandSlideDirection === "left"){
      return "right-show"
    } else if (this.state.currentBandSlide === 2 && this.state.bandSlideDirection === "right"){
      return "left-show"
    } else if (this.state.currentBandSlide === 1 && this.state.bandSlideDirection === "left"){
      return "right-hide"
    } else if (this.state.currentBandSlide === 1 && this.state.bandSlideDirection === "right"){
      return "left-hide"
    }
  }

  setCurrentBandSlide(){
    this.setState({
      currentBandSlide: this.state.currentBandSlide === 1 ? 2 : 1
    })
  }

  setBandSlide(index, currentSlide){
    if (currentSlide === 1){
      this.setState({
        bandSlide1: this.bandSlides[index]
      })
    } else{
      this.setState({
        bandSlide2: this.bandSlides[index]
      })
    }
  }

  startBandSlide(){
    this.setCurrentBandSlide()
    this.setState({
      currentBandIndex: 0
    })
  }

  bandRightArrow(){
    let index = this.state.currentBandIndex === this.bandSlides.length -1 ? 0 : this.state.currentBandIndex + 1
    this.setBandSlide(index, this.state.currentBandSlide === 1 ? 2 : 1)
    this.setCurrentBandSlide()
    this.setState({
      currentBandIndex: index,
      bandSlideDirection : "right"
    })
  }

  bandLeftArrow(){
    let index = this.state.currentBandIndex === 0 ? this.bandSlides.length - 1 : this.state.currentBandIndex - 1
    this.setBandSlide(index, this.state.currentBandSlide === 1 ? 2 : 1)
    this.setCurrentBandSlide()
    this.setState({
      currentBandIndex: index,
      bandSlideDirection : "left"
    })
  }

  render(){
    return (
      <div className="App" style={{backgroundColor:"white"}}>
        <div id="logo" style={{backgroundColor: "white", height: "100vh", marginBottom: "200px", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <img src="https://res.cloudinary.com/siouxcitymusic/image/upload/v1561436554/35928765_151362302397573_5730718706355404800_n.jpg" style={{height: "400px"}}/>
        </div>
        <div id="band" className="hide" style={{backgroundColor: "white", height: "400px", marginBottom: "200px"}}>
        {this.state.currentBandIndex !== null?<span id="left-band-arrow" onClick={this.bandLeftArrow}>&lt;-</span>:""}
        {this.state.currentBandIndex !== null?<span id="right-band-arrow" onClick={this.bandRightArrow}>-&gt;</span>:""}
          <div id="band-slide-1" style={{position: "absolute", marginLeft: "auto", marginRight: "auto", marginTop: "auto", marginBottom: "auto", left: "0", right: "0", top: "0", bottom: "0"}} className={this.getBandSlideOneClasses()}>
            {this.state.bandSlide1}
          </div>
          <div id="band-slide-2" style={{position: "absolute", marginLeft: "auto", marginRight: "auto", left: "0", right: "0"}} className={this.getBandSlideTwoClasses()}>
            {this.state.bandSlide2}
          </div>
        </div>
        <div id="music" className="hide" style={{backgroundColor: "green", height: "400px", marginBottom: "400px"}}></div>
        <div id="photos" style={{backgroundColor: "blue", height: "400px", marginBottom: "400px"}}></div>
        <div id="events" style={{backgroundColor: "red", height: "400px", marginBottom: "400px"}}></div>
        <div id="contact" style={{backgroundColor: "green", height: "400px", marginBottom: "200px"}}></div>
      </div>
    );
  }
  
}

export default App;
