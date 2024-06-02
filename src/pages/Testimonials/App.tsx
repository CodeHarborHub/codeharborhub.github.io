import React, { Component, RefObject } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css"; // General app styles
import Card from "./Card"; // Import the Card component
const Image="./image.png";

interface AppState {}

class App extends Component<{}, AppState> {
  private slider: RefObject<Slider>;

  constructor(props: {}) {
    super(props);
    this.slider = React.createRef(); // Create a ref for the Slider component
  }

  // Function to pause the slider on card hover
  handleCardHover = (): void => {
    if (this.slider.current) {
      this.slider.current.slickPause(); // Pause the slider
    }
  };

  // Function to play the slider on card mouse leave
  handleCardLeave = (): void => {
    if (this.slider.current) {
      this.slider.current.slickPlay(); // Play the slider
    }
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      slidesToShow: 4, // Default to 3 slides
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1330, // Adjust the breakpoint for large screens
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1030, // Adjust the breakpoint for large screens
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 730, // Adjust the breakpoint for large screens
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="mainContainer">
        <div className="cardContainer">
          <Slider {...settings} ref={this.slider}>
            <div className="container">
              <Card
                imageSrc={Image}
                contributor="TechLover99"
                cont="@TechLover99"
                cardback="If you're looking to learn AI and machine learning, @CodeHarborHub is the place to be. Comprehensive and free! #MachineLearning #AI #CodeHarborHub"
                onMouseEnter={this.handleCardHover}
                onMouseLeave={this.handleCardLeave}
              />
            </div>
            <div className="container">
              <Card
                imageSrc={Image}
                contributor="CoderGirl"
                cont="@CoderGirl"
                cardback="Just completed my first JavaScript course on @CodeHarborHub! The content is top-notch and completely free. Highly recommend it! #LearnToCode #FreeEducation"
                onMouseEnter={this.handleCardHover}
                onMouseLeave={this.handleCardLeave}
              />
            </div>
            <div className="container">
              <Card
                imageSrc={Image}
                contributor="AI_Enthusiast"
                cont="@AI_Enthusiast"
                cardback="Joined @CodeHarborHub last month and already feel more confident in my coding skills. Great community and resources! #TechCommunity #WomenInTech"
                onMouseEnter={this.handleCardHover}
                onMouseLeave={this.handleCardLeave}
              />
            </div>
            <div className="container">
              <Card
                imageSrc={Image}
                contributor="DevNewbie"
                cont="@DevNewbie"
                cardback="Can't believe how much I've learned from @CodeHarborHub in just a few weeks. Their hands-on projects are amazing! #WebDevelopment #CodeHarborHub"
                onMouseEnter={this.handleCardHover}
                onMouseLeave={this.handleCardLeave}
              />
            </div>
            <div className="container">
              <Card
                imageSrc={Image}
                contributor="FutureDev"
                cont="@FutureDev"
                cardback="Shoutout to @CodeHarborHub for providing such quality education for free! Their courses have been a game-changer for me. #TechSkills #CareerGrowth"
                onMouseEnter={this.handleCardHover}
                onMouseLeave={this.handleCardLeave}
              />
            </div>
            <div className="container">
              <Card
                imageSrc={Image}
                contributor="DataScienceGeek"
                cont="@DataScienceGeek"
                cardback="Loving the data science courses on @CodeHarborHub. It's all free and ad-free. Perfect for anyone looking to upskill. #DataScience #FreeLearning"
                onMouseEnter={this.handleCardHover}
                onMouseLeave={this.handleCardLeave}
              />
            </div>
            <div className="container">
              <Card
                imageSrc={Image}
                contributor="CodeMaster"
                cont="@CodeMaster"
                cardback="Just finished the Python course on @CodeHarborHub. The explanations were clear and easy to follow. Ideal for beginners! #Python #CodeHarborHub"
                onMouseEnter={this.handleCardHover}
                onMouseLeave={this.handleCardLeave}
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default App;
