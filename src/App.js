import './App.css';
import FirstSection from './page-sections/FirstSection';
import Header from './page-sections/Header';
import SecondSection from './page-sections/SecondSection';
import ThirdSection from './page-sections/ThirdSection';
/* import FourthSection from './page-sections/FourthSection'; */
import FifthSection from './page-sections/FifthSection';
import Footer from './page-sections/Footer';
import SixthSection from './page-sections/SixthSection';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      {/* <FourthSection /> */}
      <FifthSection />
      <SixthSection />
      <Footer />
    </div>
  );
}

export default App;
