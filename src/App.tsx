import React from 'react';
import Header from './components/Header';
import ImageCard from './components/ImageCard';
import Footer from './components/Footer';
const App: React.FC = () => {
  const images = [
    { id: 1, src: 'src/images/Abu-Ruqayyah.jpg', title: 'Facilitator' },
    {
      id: 2,
      src: 'src/images/boss-two-hands.jpg',
      title: 'Convener & delegates',
    },
    { id: 3, src: 'src/images/chairman-fam.jpg', title: 'Chairman-Fam' },
    { id: 4, src: 'src/images/scratch-1.jpg', title: 'Scratch' },
    { id: 5, src: 'src/images/delegates.jpg', title: 'Delegates' },
    {
      id: 6,
      src: 'src/images/female-delegates.jpg',
      title: 'female-Delegates',
    },
    { id: 7, src: 'src/images/Hassana-others.jpg', title: 'On-going session' },
    { id: 8, src: 'src/images/chess.jpg', title: 'Game-session' },
    { id: 9, src: 'src/images/nafisa.jpg', title: 'During-Spoken-Word' },
    { id: 10, src: 'src/images/team.jpg', title: 'ATE-Team' },
    { id: 11, src: 'src/images/4IR Bootcamp.jpg', title: 'Cohort-1 flier' },
    { id: 12, src: 'src/images/hero-img.jpg', title: 'Convener' },
  ];

  return (
    <div className="bg-white-400">
      <Header />
      <h1 className="text-3xl font-bold text-center mt-8">
        Pictures speak more about us
      </h1>
      <ImageCard images={images} />
      <Footer />
    </div>
  );
};

export default App;
