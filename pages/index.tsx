import type { NextPage } from 'next';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import ToTop from '../components/ToTop';

const home: NextPage = () => {
  return (
    <div className="min-h-screen h-[400vh] w-full px-20 my-14 relative">
      <Header />
      
      <Navigation />

      <ToTop />
    </div>
  );
}

export default home;