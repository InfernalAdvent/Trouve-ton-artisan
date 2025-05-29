import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import artisanImage from './assets/homme-travaillant-argile-vue-cote.jpg';
import Header from './components/header.jsx';
import Footer from './components/Footer.jsx';
import TopArtisansCard from './components/TopArtisansCard.jsx';
import Blank from './pages/Blank.jsx';
import Categorie from './pages/Categorie.jsx';
import Artisan from './pages/Artisan.jsx';
import api from "./api/axios";

function Home() {
  const [topArtisans, setTopArtisans] = useState([]);

  useEffect(() => {
    const fetchTopArtisans = async () => {
      try {
        const res = await api.get("/artisans/top");
        setTopArtisans(res.data);
      } catch (err) {
        console.error("Erreur chargement catégories :", err);
      }
    };
    fetchTopArtisans();
  }, []);

  return (
    <div>
      <h1 className="max-w-7xl mx-auto py-12 text-3xl sm:text-4xl md:text-5xl font-bold text-primaryBlue text-left">
        Comment trouver mon artisan ?
    </h1>
        <div className="flex flex-row items-center gap-20  w-full max-w-6xl mx-auto p-12">
          <img
            src={artisanImage}
            alt="Illustration artisan travaillant l'argile"
            className="w-1/2 h-auto shadow-md object-cover"
          />
          <ul className="text-sm sm:text-lg text-secondaryGrey w-1/2">
            <li className="mb-5"> <span className="font-bold">1.</span>Choisir la catégorie d'artisanat dans le menu</li>
            <li className="mb-5"> <span className="font-bold">2.</span>Choisir un artisan</li>
            <li className="mb-5"> <span className="font-bold">3.</span>Le contacter via le formulaire de contact</li>
            <li className="mb-5"> <span className="font-bold">4.</span>Une réponse sera apportée sous 48h</li>
          </ul>
        </div>
        <div className="w-full flex flex-col items-center p-12 mb-6">
        <h2 className="text-4xl font-bold text-primaryBlue mb-10">Artisans du mois</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topArtisans.map((artisan, index) => {
              const isLast = index === topArtisans.length - 1;
              const isOddCount = topArtisans.length % 2 !== 0;
              const extraClasses = isOddCount && isLast 
              ? "md:col-span-2 md:justify-self-center lg:col-span-1 lg:justify-self-auto"
              : "";

              return (
                <div key={index} className={extraClasses}>
                  <TopArtisansCard artisan={artisan} />
                </div>
                );
              })}
          </div>
        </div>
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blank" element={<Blank />} />
          <Route path="/categorie/:id" element={<Categorie/>} />
          <Route path="/artisan/:id" element={<Artisan/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
