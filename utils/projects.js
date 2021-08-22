import JuneImg from "../public/static/images/june.webp";
import GlitchstreamImg from "../public/static/images/glitchstream.webp";
import TechhuntImg from "../public/static/images/techhunt.webp";
import QuizzardImg from "../public/static/images/quizzard.webp";
import GlitchpopImg from "../public/static/images/glitchpop.webp";
export const projects = [
  {
    id: 101,
    title: "JUNE",
    img: JuneImg,
    github: "https://github.com/t-rex777/june/tree/development",
    live: "https://june-social.netlify.app/",
    description: `It is a social media app like Instagram. It has a user feed page,
      users can follow each other. They can upload the post and like or
      comment on any post. Notifications are provided for every like and
      comment on a user's post.`,
    stack: `MERN, Typescript, Redux
      toolkit, Tailwind CSS`,
  },
  {
    id: 102,
    title: "GLITCHSTREAM",
    img: GlitchstreamImg,
    github: "https://github.com/t-rex777/glitchStream/tree/development",
    live: "https://glitchstream.netlify.app/",
    description: `It is a video library app just like Youtube. Users can watch videos according to different categories.
      They can view all their liked videos, histories, playlists, and subscriptions. Video Suggestions are also
      there to watch related other videos.`,
    stack: `MERN`,
  },
  {
    id: 103,
    title: "TECHHUNT",
    img: TechhuntImg,
    github: "https://github.com/t-rex777/TechHunt-Ecomm",
    live: "https://tech-hunt.netlify.app/",
    description: `It is an E-commerce website for technical gadgets like phones, earphones, watches, etc.
      It includes cart and wishlist features with an integrated STRIPE payment gateway at the checkout.`,
    stack: `MERN`,
  },
  {
    id: 104,
    title: "QUIZZARD",
    img: QuizzardImg,
    github: "https://github.com/t-rex777/quizzard-app/tree/development",
    live: "https://quizzard-app.netlify.app/",
    description: `It is a quiz application for people who love to watch web series. Users can also see their highscore in the home page.`,
    stack: `MERN, Typescript`,
  },
  {
    id: 105,
    title: "GLITCHPOP CSS",
    img: GlitchpopImg,
    github: "https://github.com/t-rex777/glitchpop-css/tree/development",
    live: "https://glitchpop-css.herokuapp.com/",
    description: `It is a lightweight CSS component library. I have used this component library in my other projects for reusability and easy to write code.`,
    stack: `JavaScript, CSS`,
  },
];
