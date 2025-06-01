import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";
import Stars from "../components/Stars";
import { useNavigate } from "react-router-dom";

export default function Categorie() {
  const { id } = useParams(); 
  const [artisans, setArtisans] = useState([]);
  const [categorieNom, setCategorieNom] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtisansAndCategory = async () => {
      try {
        console.log("ID reçu depuis l'URL :", id);

        // Récupère le nom de la catégorie
        const resCat = await api.get("/categories");
        const categorie = resCat.data.find(c => c?.id.toString() === id);
        if (!categorie) {
          console.error("Catégorie introuvable");
          return;
        }
        setCategorieNom(categorie.nom);

        //  Récupère les artisans liés à la catégorie
        const res = await api.get(`/categories/${id}/artisans`);
        console.log("Artisans reçus :", res.data);
        setArtisans(res.data);
      } catch (err) {
        console.error("Erreur récupération artisans :", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArtisansAndCategory();
  }, [id]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-primaryBlue mb-6">
        Artisans pour la catégorie : {categorieNom}
      </h1>

      {loading ? (
        <p>Chargement...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {artisans.map((artisan) => (
            <button
              key={artisan.id}
              onClick={() => navigate(`/artisan/${artisan.id}`)}
              className="bg-secondaryBlue hover:bg-primaryBlue text-primary p-4 rounded-xl shadow flex flex-col items-center text-center transition duration-150"
            >
              <h2 className="font-bold">{artisan.Nom}</h2>
              <p>{artisan.Ville}</p>
              <p>{artisan.spécialité?.nom}</p>
              <div className="mt-2">
                <Stars note={parseFloat(artisan.Note)} />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
