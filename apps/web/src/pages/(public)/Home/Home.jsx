import Layout from "../../../components/common/Layout";
import Welcome from "../Welcome/Welcome";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Journey from "../Journey/Journey";
import Projects from "../Projects/Projects";

export default function Home() {
  return (
    <Layout>
      <Welcome />
      <AboutMe />
      <Projects />
      <Journey />
      <Contact />
    </Layout>
  );
}
