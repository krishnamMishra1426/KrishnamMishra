import AboutMe from "./components/home/about-me"
import Contact from "./components/home/contact"
import Education from "./components/home/education"
import Skills from "./components/home/skills"
import ExperienceSec from "./components/home/experience-sec"
import HeroSection from "./components/home/hero-section"
import ContactBar from "./components/home/hero-section/contact-bar"
import LatestWork from "./components/home/latest-work"

const page = () => {
  return (
    <>
      <main>
        <HeroSection />
        <ContactBar />
        <AboutMe />
        <ExperienceSec />
        <Education />
        <Skills />
        <LatestWork />
        <Contact />
      </main>
    </>
  )
}

export default page