import styles from "./App.module.css";
import { About } from "./components/About/About";
import { CertificatesSection }from "./components/Certificate/Certificate";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <CertificatesSection />
    
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;