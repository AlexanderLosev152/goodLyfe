import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Box from "./components/Box/Box.jsx";
import Real from "./components/Real/Real.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero
        title="Welcome to Goodlyfe Gyms"
        titleWidth=" "
        btnTitle="See the benefits"
        backgroundImage={"url(../../../public/images/hero/hero-bg.jpg)"}
      />
      <Box
        img="./../public/images/box/img1.png"
        title="Meet your new body"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget lectus urna. Nulla magna tortor, bibendum in molestie sed, gravida nec felis. Sed id egestasegestas risus, ut imperdiet augue."
        btnTitle="View the FAQ"
      />
      <Hero
        title="Become more than you are."
        subtitle="Staying active is great fun and keeps you healthy. Check out how you can join in."
        btnTitle="Let’s do it!"
        backgroundImage={"url(../../../public/images/hero/bg-2.jpg)"}
      />
      <Box
        img="./../public/images/box/img2.png"
        title="Premium Facilities"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget lectus urna. Nulla magna tortor, bibendum in molestie sed, gravida nec felis. Sed id egestasegestas risus, ut imperdiet augue."
        btnTitle="Learn more"
      />
      <Real />
    </>
  );
}

export default App;
