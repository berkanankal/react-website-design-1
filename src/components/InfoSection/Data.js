import svg1 from "../../images/svg-1.svg";
import svg4 from "../../images/svg-4.svg";
import svg3 from "../../images/svg-3.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Lorem, ipsum.",
  headline:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, cupiditate?",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia libero, officiis eum dolore qui veritatis consectetur odio quibusdam error saepe, deleniti iure, velit corporis nesciunt.",
  buttonLabel: "Get started",
  imgStart: false,
  img: svg1,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: "Unlimited Access",
  headline: "Login to your account at any time",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions whitout getting charged any fees.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: svg4,
  alt: "Piggybanck",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: "Premium Bank",
  headline: "Creating an account is extremely easy",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions whitout getting charged any fees.",
  buttonLabel: "Start Now",
  imgStart: false,
  img: svg3,
  alt: "car",
  primary: false,
  darkText: true,
};
