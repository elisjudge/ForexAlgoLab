import './App.css';
import Header from './components/Header/header';
import AnalysisIntroForm from './components/AnalysisIntroForm/AnalysisIntroForm';
import BackTestResults from './components/BackTestResults/BackTestResults';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div class="App">
      <Header />
      <AnalysisIntroForm/>
      <BackTestResults/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
export default App;
