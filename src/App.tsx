import React from 'react';
import Header from './Components/Header';
import ImageCard from './Components/ImageCard';
import Footer from './Components/Footer';
const App: React.FC = () => {
  const images = [
    { id: 1, src: 'src/Images/Abu-Ruqayyah.jpg', title: 'Facilitator' },
    {
      id: 2,
      src: 'src/Images/boss-two-hands.jpg',
      title: 'Convener & delegates',
    },
    { id: 3, src: 'src/Images/chairman-fam.jpg', title: 'Chairman-Fam' },
    { id: 4, src: 'src/Images/scratch-1.jpg', title: 'Scratch' },
    { id: 5, src: 'src/Images/delegates.jpg', title: 'Delegates' },
    {
      id: 6,
      src: 'src/Images/female-delegates.jpg',
      title: 'female-Delegates',
    },
    { id: 7, src: 'src/Images/Hassana-others.jpg', title: 'On-going session' },
    { id: 8, src: 'src/Images/chess.jpg', title: 'Game-session' },
    { id: 9, src: 'src/Images/nafisa.jpg', title: 'During-Spoken-Word' },
    { id: 10, src: 'src/Images/team.jpg', title: 'ATE-Team' },
    { id: 11, src: 'src/Images/4IR Bootcamp.jpg', title: 'Cohort-1 flier' },
    { id: 12, src: 'src/Images/hero-img.jpg', title: 'Convener' },
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
