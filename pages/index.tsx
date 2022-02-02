import type { NextPage } from 'next'

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import MainSection from '../components/Layout/MainSection';

const Home: NextPage = () => {

  return( 
  <div>
    <Header />

    <MainSection />

    <Footer />
  </div>
  )
}

export default Home;
