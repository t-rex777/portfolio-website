import Head from "next/head";
import About from "../components/About";
import Blogs from "../components/Blogs";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Contact from './../components/Contact';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Manish Kumar Sahu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <About />
      <Projects />
      <Blogs/>
      <Contact />
    </div>
  );
}
