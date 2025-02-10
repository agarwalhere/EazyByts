import Header from "./components/Header";
import Body from "./components/Body";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll bg-gradient-to-b from-slate-800 to-slate-600">
      <Header/>
      <section id="about">
        <Body/>
      </section>
      
      <section id="experience">
        <Experience/>
      </section>
      

      <section id="skills">
        <Skills/>
      </section>
      
      <section id="contact">
        <Contact/>
      </section>
      
    </main>
  );
}
