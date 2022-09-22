import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

import "./styles.scss";

import { ReactComponent as Logo } from "./../../assets/images/Logo.svg";

const Hero = () => {
  const mountCenter = {
    image:
      "https://user-images.githubusercontent.com/8618609/190287801-e66eb9e3-e1f5-4ea7-9833-36bc22137c87.png",
    expanded: false,
    translateY: [0, 70],
    speed: -5,
  };

  const cloudTwo = {
    image:
      "https://user-images.githubusercontent.com/8618609/191644536-e0b25e1a-e647-4aa4-9dc4-65a7c6536e65.png",
    translateY: [0, 20],
    speed: -15,
  };

  const mountLeft = {
    image:
      "https://user-images.githubusercontent.com/8618609/190287844-a410d052-a426-48ab-bc83-8bc3c8556776.png",
    translateY: [0, 60],
    speed: -30,
  };

  const mountRight = {
    image:
      "https://user-images.githubusercontent.com/8618609/190287643-07a9e595-ce53-48e8-8d78-879a39d4d0f2.png",
    translateY: [10, 5],
    speed: -10,
  };

  const cloudOne = {
    image:
      "https://user-images.githubusercontent.com/8618609/190287259-62a3dc19-f36e-44cf-bcbf-257befbb9b42.png",
    translateY: [0, 10],
    speed: -5,
  };

  const cloudThree = {
    image:
      "https://user-images.githubusercontent.com/8618609/190287585-8d5d6cc0-d92b-4e9e-9828-9b8fa9bc5f12.png",
    translateY: [0, 20],
    speed: -15,
  };

  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[
          mountCenter,
          cloudTwo,
          mountLeft,
          mountRight,
          cloudOne,
          cloudThree,
        ]}
        className="parallax-banner"
      >
        <div className="hero">
          <figure>
            <Logo />
          </figure>
          <h3 className="hero__title">Gabriel Menezes</h3>
          <p className="hero__subtitle">Desenvolvedor & Designer</p>
        </div>
      </ParallaxBanner>
    </ParallaxProvider>
  );
};

export default Hero;
