import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import api from "../api/axios";
import logo from "../assets/logo.png";

export default function Header() {
  const [categories, setCategories] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  // Fetch des catégories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/categories");

        setCategories(res.data);
      } catch (err) {
        console.error("Erreur chargement catégories :", err);
      }
    };
    fetchCategories();
  }, []);

  // Recherche en temps réel
  useEffect(() => {
    if (search.length > 1) {
      const timer = setTimeout(async () => {
        try {
          const res = await api.get(`/artisans/search?nom=${search}`);
          setResults(res.data);
        } catch (err) {
          console.error("Erreur recherche :", err);
        }
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setResults([]);
    }
  }, [search]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-8xl mx-auto py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-24 ml-6 w-auto object-contain" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
          {categories.map((cat, index) => {
            const toPath = `/categorie/${cat.id}`;
            console.log(`Lien généré pour cat[${index}] :`, toPath);
            return (
              <NavLink key={index} to={toPath} className="text-primaryBlue hover:text-secondaryBlue font-bold">
                {cat.nom}
              </NavLink>
            );
          })}
        </nav>

        {/* Search */}
        <div className="hidden sm:flex relative w-64 mr-6">
          <input
            type="text"
            placeholder="Rechercher un artisan..."
            className="w-full border border-primaryBlue rounded-3xl py-2 px-4 text-sm text-secondaryGrey"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {results.length > 0 && (
            <ul className="absolute top-full left-0 w-full rounded-md mt-1 max-h-48 overflow-y-auto z-10">
              {results.map((artisan) => (
                <li key={artisan.id} className="text-primaryBlue px-4 py-2 hover:bg-primary">
                  <NavLink to={`/artisan/${artisan.id}`}>{artisan.Nom}</NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden mr-6" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} className="text-primaryBlue" /> : <Menu size={28} className="text-primaryBlue" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2">
          {categories.map((cat, index) => {
            const toPath = `/categorie/${cat.id}`;
            console.log(`Lien mobile pour cat[${index}] :`, toPath);
            return (
              <NavLink
                key={index}
                to={toPath}
                className="block text-primaryBlue hover:bg-primary font-bold py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                {cat.nom}
              </NavLink>
            );
          })}
          <div className="sm:hidden relative mt-2">
            <input
              type="text"
              placeholder="Rechercher un artisan..."
              className="w-full border border-primaryBlue rounded-3xl py-2 px-4 text-sm text-secondaryGrey"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {results.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md mt-1 max-h-48 overflow-y-auto z-10">
                {results.map((artisan) => (
                  <li key={artisan.id} className="text-primaryBlue px-4 py-2 hover:bg-primary">
                    <NavLink to={`/artisan/${artisan.id}`}>{artisan.Nom}</NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
