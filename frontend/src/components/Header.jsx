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
      // Teste une requête axios directement
      const res = await api.get("/categories"); // Utilise l'URL de ton backend
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
    <header className="bg-white shadow-md sticky top-0 z-50 h-28" >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-24" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 flex-1 justify-center">
          {categories.map((cat, index) => (
            <NavLink key={index} to={`/categorie/${cat.nom}`} className="text-primaryBlue font-bold hover:text-secondaryBlue">
              {cat.nom}
            </NavLink>
          ))}
        </nav>

        {/* Search (Desktop & Tablet) */}
        <div className="hidden sm:flex relative w-64">
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

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {categories.map((cat, index) => (
            <NavLink
              key={index}
              to={`/categorie/${cat.nom}`}
              className="block text-primaryBlue py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              {cat.nom}
            </NavLink>
          ))}
          <div className="sm:hidden relative mt-2">
            <input
              type="text"
              placeholder="Rechercher un artisan..."
              className="w-full border border-secondaryBlue rounded-3xl py-2 px-4 text-sm text-secondaryGrey"
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