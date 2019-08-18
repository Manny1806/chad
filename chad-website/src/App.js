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
      currentBandIndex: 0,
      currentBandSlide: 1,
      bandSlideDirection: "right",
      bandSlide1: "",
      bandSlide2: "",
      musicSlide1: "",
      musicSlide2: ""
    };
    
    this.componentDidMount = this.componentDidMount.bind(this)
    this.getBandSlideOneClasses = this.getBandSlideOneClasses.bind(this)
    this.getBandSlideTwoClasses = this.getBandSlideTwoClasses.bind(this)
    this.setCurrentBandSlide = this.setCurrentBandSlide.bind(this)
    this.startBandSlide = this.startBandSlide.bind(this)
    this.setBandSlide = this.setBandSlide.bind(this)
    this.handleChadClick = this.handleChadClick.bind(this)
    this.handleSarahClick = this.handleSarahClick.bind(this)
    this.handleTrevorClick = this.handleTrevorClick.bind(this)
    this.handleZachClick = this.handleZachClick.bind(this)
    this.handleAlexClick = this.handleAlexClick.bind(this)

    this.bandSlides = [(
        <div onClick={this.startBandSlide} id="meet-the-band-container" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer"}}>
                <div style={{maxWidth: "1200px"}}>
                <span id="meet-the-band-text" style={{cursor: "pointer"}}>About the band</span>
                  <div style={{float: "left"}} id="meet-the-band-image"/>
                  <p style={{fontSize: "24px"}}>Quisque lobortis, dolor vitae gravida maximus, nisl tellus eleifend libero, pharetra ullamcorper neque eros vitae leo. Phasellus sollicitudin malesuada arcu, id bibendum quam. Ut tincidunt nisi eu leo volutpat, dignissim lacinia mi condimentum. Sed vel justo malesuada, ornare quam vel, ultricies ante. Quisque sagittis dictum dolor, vel dignissim diam consequat et. Nulla ultrices euismod velit ac hendrerit. Duis tempus ligula mauris, quis aliquam quam interdum sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus id fermentum lectus. Phasellus id arcu sollicitudin, aliquam odio et, feugiat felis. Pellentesque enim justo, congue vitae dui id, facilisis fringilla est. Vestibulum laoreet lorem eros, quis sollicitudin nunc ultricies eu. Praesent porttitor lectus eu ipsum maximus, sit amet vehicula nunc pharetra. Fusce ultrices nulla eu interdum volutpat. Etiam vel finibus neque.</p>
                </div>
        </div>
      ),
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
      <div onClick={this.startBandSlide} id="meet-the-band-container" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer"}}>
              <div style={{maxWidth: "1200px"}}>
              <span id="meet-the-band-text" style={{cursor: "pointer"}}>About the band</span>
                <div style={{float: "left"}} id="meet-the-band-image"/>
                <p style={{fontSize: "24px"}}>Quisque lobortis, dolor vitae gravida maximus, nisl tellus eleifend libero, pharetra ullamcorper neque eros vitae leo. Phasellus sollicitudin malesuada arcu, id bibendum quam. Ut tincidunt nisi eu leo volutpat, dignissim lacinia mi condimentum. Sed vel justo malesuada, ornare quam vel, ultricies ante. Quisque sagittis dictum dolor, vel dignissim diam consequat et. Nulla ultrices euismod velit ac hendrerit. Duis tempus ligula mauris, quis aliquam quam interdum sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus id fermentum lectus. Phasellus id arcu sollicitudin, aliquam odio et, feugiat felis. Pellentesque enim justo, congue vitae dui id, facilisis fringilla est. Vestibulum laoreet lorem eros, quis sollicitudin nunc ultricies eu. Praesent porttitor lectus eu ipsum maximus, sit amet vehicula nunc pharetra. Fusce ultrices nulla eu interdum volutpat. Etiam vel finibus neque.</p>
              </div>
      </div>
    )
    this.musicSlideLanding = (
      <div id="music-landing-container" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer"}}>
        <span id="meet-the-band-text" style={{cursor: "pointer"}}>The Music</span>
        <iframe width="900px" height="600px" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/139823485&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              {/* <div id="music-landing-image">
              </div> */}
        <iframe style={{border: "0px", width: "350px", height: "470px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2169815667/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="http://sauroid.bandcamp.com/album/escape-from-earth">Escape From Earth by Thomas Barrandon</a></iframe>
              
      </div>
    )
  }

  componentDidMount(){
    

    this.setState({
      bandSlide1: this.bandSlideLanding,
      bandSlide2: this.bandSlides[0],
      musicSlide1: this.musicSlideLanding,
      musicSlide2: this.bandSlides[0]
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
        // if(this.state.currentBandIndex !== null && (bandLocation < - 200 || bandLocation > window.innerHeight + 200)){
        //   this.setState({
        //     currentBandIndex: null,
        //     currentBandSlide: 1,
        //     bandSlideDirection: "right",
        //     bandSlide1: this.bandSlideLanding,
        //     bandSlide2: this.bandSlides[0]
        //   })
        // }
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
    }.bind(this), {passive: true});
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

  handleChadClick(){
    this.setBandSlide(0, this.state.currentBandSlide === 1 ? 2 : 1)
    this.setCurrentBandSlide()
    this.setState({
      currentBandIndex: 0,
    })
  }

  handleSarahClick(){
    this.setBandSlide(1, this.state.currentBandSlide === 1 ? 2 : 1)
    this.setCurrentBandSlide()
    this.setState({
      currentBandIndex: 1,
    })
  }

  handleTrevorClick(){
    this.setBandSlide(2, this.state.currentBandSlide === 1 ? 2 : 1)
    this.setCurrentBandSlide()
    this.setState({
      currentBandIndex: 2,
    })
  }

  handleZachClick(){
    this.setBandSlide(3, this.state.currentBandSlide === 1 ? 2 : 1)
    this.setCurrentBandSlide()
    this.setState({
      currentBandIndex: 3,
    })
  }

  handleAlexClick(){
    this.setBandSlide(4, this.state.currentBandSlide === 1 ? 2 : 1)
    this.setCurrentBandSlide()
    this.setState({
      currentBandIndex: 4,
    })
  }

  render(){
    return (
      <div className="App" style={{backgroundColor:"white"}}>
        <div id="navbar"></div>
        <div id="logo" style={{backgroundColor: "white", height: "100vh", marginBottom: "200px", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <img src="https://res.cloudinary.com/siouxcitymusic/image/upload/v1561436554/35928765_151362302397573_5730718706355404800_n.jpg" style={{height: "600px"}}/>
        </div>
        <div id="band" className="hide" style={{backgroundColor: "white", height: "800px", marginBottom: "200px"}}>
          <div style={{position: "absolute", bottom: "0px", display:"flex", alignItems:"center", justifyContent:"center", width: "100%", zIndex: "1000"}}>
            <div id="meet-chad-image-icon" className={`${this.state.currentBandIndex===0?"active-icon":""}`} onClick={this.handleChadClick}/>
            <div id="meet-sarah-image-icon" className={`${this.state.currentBandIndex===1?"active-icon":""}`} onClick={this.handleSarahClick}/>
            <div id="meet-trevor-image-icon" className={`${this.state.currentBandIndex===2?"active-icon":""}`} onClick={this.handleTrevorClick}/>
            <div id="meet-zach-image-icon" className={`${this.state.currentBandIndex===3?"active-icon":""}`} onClick={this.handleZachClick}/>
            <div id="meet-alex-image-icon" className={`${this.state.currentBandIndex===4?"active-icon":""}`} onClick={this.handleAlexClick}/>
          </div>
          <div id="band-slide-1" style={{position: "absolute", marginLeft: "auto", marginRight: "auto", marginTop: "auto", marginBottom: "auto", left: "0", right: "0", top: "0", bottom: "0"}} className={this.getBandSlideOneClasses()}>
            {this.state.bandSlide1}
          </div>
          <div id="band-slide-2" style={{position: "absolute", marginLeft: "auto", marginRight: "auto", left: "0", right: "0"}} className={this.getBandSlideTwoClasses()}>
            {this.state.bandSlide2}
          </div>
        </div>
        <div id="music" className="hide" style={{backgroundColor: "white", height: "800px", marginBottom: "200px"}}>
        <div id="music-slide-1" style={{position: "absolute", marginLeft: "auto", marginRight: "auto", marginTop: "auto", marginBottom: "auto", left: "0", right: "0", top: "0", bottom: "0"}} className={this.getBandSlideOneClasses()}>
            {this.state.musicSlide1}
          </div>
          <div id="music-slide-2" style={{position: "absolute", marginLeft: "auto", marginRight: "auto", left: "0", right: "0"}} className={this.getBandSlideTwoClasses()}>
            {this.state.musicSlide1}
          </div>
        </div>
        <div id="photos" style={{backgroundColor: "blue", height: "560px", marginBottom: "400px"}}></div>
        <div id="events" style={{backgroundColor: "red", height: "560px", marginBottom: "400px"}}></div>
        <div id="contact" style={{backgroundColor: "green", height: "560px", marginBottom: "200px"}}></div>
      </div>
    );
  }
  
}

export default App;
