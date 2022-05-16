import { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  Button,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Video from "../../videos/video.mp4";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => setHover(!hover);

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay src={Video} loop muted type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Lorem ipsum dolor sit amet.</HeroH1>
        <HeroP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          aperiam cum, excepturi non eius necessitatibus?
        </HeroP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
