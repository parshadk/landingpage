import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import ProductSection from './components/products';
import ProductCardSec from './components/productCardSec';
import ConnectStoreSec from './components/connectStoreSec';
import TalkToSalesSection from './components/talktosalesSection';
import Testimo from './components/testimo';
import MakeMoneySec from './components/makeMoney';
import Footer1 from './components/footer1';
import Footer2 from './components/footer2';
import './App.css';

function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <About/>
      <ProductSection/>
      <ProductCardSec/>
      <ConnectStoreSec/>
      <TalkToSalesSection/>
      <Testimo/>  
      <MakeMoneySec/> 
      <Footer1/>
      <Footer2/>
    </div>
  );
}

export default App;
