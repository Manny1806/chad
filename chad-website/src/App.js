import React from 'react';
import logo from './logo.svg';
import './App.css';

export class App extends React.Component {

  constructor(props) {                                                                                                                                                                                                                                                                                                                                                                                                                
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      bandOpacity: 0,
      musicOpacity: 0,
      photosOpacity: 0,
      eventsOpacity: 0,
      contactOpacity: 0,
      currentBandMember: "none",
      currentBandSlide: 1,
      bandSlideDirection: "right"
    };
    this.componentDidMount = this.componentDidMount.bind(this)
    this.meetTheBand = this.meetTheBand.bind(this)
    this.nextBandMember = this.nextBandMember.bind(this)
    this.previousBandMember = this.previousBandMember.bind(this)
    this.getBandSlideOneClasses = this.getBandSlideOneClasses.bind(this)
    this.getBandSlideTwoClasses = this.getBandSlideTwoClasses.bind(this)
    this.setCurrentBandSlide = this.setCurrentBandSlide.bind(this)
  }

  componentDidMount(){
    

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

      // if(bandLocation > 0 || bandLocation < window.innerHeight){
      //   if((window.innerHeight/2) - bandLocation > 0){
      //     this.setState({
      //       bandOpacity: bandLocation / (window.innerHeight/2)
      //     })
      //   } else {
      //     let x = window.innerHeight/2
      //     this.setState({
      //       bandOpacity: (x - (bandLocation - x)) / x
      //     })
      //   }
      // }

      if(bandLocation > 40 && bandLocation < window.innerHeight-40){
        // if((window.innerHeight/2) - bandLocation > 0){
        //   this.setState({
        //     bandOpacity: bandLocation / (window.innerHeight/2)
        //   })
        // } else {
        //   let x = window.innerHeight/2
        //   this.setState({
        //     bandOpacity: (x - (bandLocation - x)) / x
        //   })
        // }
        document.getElementById("band").classList.remove("hide")
        document.getElementById("band").classList.add("show")
      } else {
        document.getElementById("band").classList.remove("show")
        document.getElementById("band").classList.add("hide")
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

  meetTheBand(){
    this.setState({
      currentBandMember: "sarah"
    })
  }

  nextBandMember(){
    if(this.state.currentBandMember === "sarah"){
      this.setState({
        currentBandMember: "trevor"
      })
    } else if (this.state.currentBandMember === "trevor"){
      this.setState({
        currentBandMember: "zach"
      })
    } else if (this.state.currentBandMember === "zach"){
      this.setState({
        currentBandMember: "alex"
      })
    } else if (this.state.currentBandMember === "alex"){
      this.setState({
        currentBandMember: "sarah"
      })
    }
  }

  previousBandMember(){
    if(this.state.currentBandMember === "sarah"){
      this.setState({
        currentBandMember: "trevor"
      })
    } else if (this.state.currentBandMember === "trevor"){
      this.setState({
        currentBandMember: "zach"
      })
    } else if (this.state.currentBandMember === "zach"){
      this.setState({
        currentBandMember: "alex"
      })
    } else if (this.state.currentBandMember === "alex"){
      this.setState({
        currentBandMember: "sarah"
      })
    }
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

  render(){
    return (
      <div className="App" style={{backgroundColor:"white"}}>
        <div id="logo" style={{backgroundColor: "white", height: "400px", marginBottom: "200px"}}>
          <img src="https://res.cloudinary.com/siouxcitymusic/image/upload/v1561436554/35928765_151362302397573_5730718706355404800_n.jpg" style={{height: "100%"}}/>
        </div>
        <div id="band" className="hide" style={{backgroundColor: "white", height: "400px", marginBottom: "200px"}}>
          <div id="band-slide-1" style={{position: "absolute", marginLeft: "auto", marginRight: "auto", marginTop: "auto", marginBottom: "auto", left: "0", right: "0", top: "0", bottom: "0"}} className={this.getBandSlideOneClasses()}>
            <div id="meet-the-band-container" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
              <div id="meet-the-band-image">
              </div>
              <span id="meet-the-band-text" onClick={this.setCurrentBandSlide} style={{cursor: "pointer"}}>Meet the band --></span>
            </div>
          </div>
          <div id="band-slide-2" style={{position: "absolute", marginLeft: "auto", marginRight: "auto", left: "0", right: "0"}} className={this.getBandSlideTwoClasses()}>
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
