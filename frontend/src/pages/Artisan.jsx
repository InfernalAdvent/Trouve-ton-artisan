import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";
import Stars from "../components/Stars";
import { useNavigate } from "react-router-dom";


export default function Artisan() {

    const { id } = useParams();
    const [ artisan, setArtisan ] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchArtisan = async () => {
            try {
                const res = await api.get(`/artisans/${id}`)
                setArtisan(res.data);
            } catch (err) {
                console.error("Erreur de récupération de l'artisan :", err);
            }
        };

    fetchArtisan();
    }, [id]);

    if (!artisan) return <p>Chargement...</p>

    const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
        prenom: formData.get('first-name'),
        nom: formData.get('last-name'),
        email: formData.get('email'),
        objet: formData.get('object'),
        message: formData.get('message'),
    };

    try {
        const response = await api.post(`/artisans/${id}/contact`, data);
        console.log("Réponse serveur :", response);

        if (response.status === 201) {
        alert("Message envoyé avec succès !");
        navigate("/");
        } else {
        alert("Erreur lors de l'envoi du message.");
        }
    } catch (error) {
        console.error("Erreur dans handleSubmit :", error);
        alert("Erreur lors de l'envoi du message.");
    }
    };

    return(
        <div className="max-w-5xl bg-primary mx-auto p-8 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                
                {/* Image de l'artisan */}
                <img
                src={artisan.Image} 
                alt={`Photo de ${artisan.Nom}`}
                className="w-full md:w-1/3 h-64 object-cover rounded-xl shadow"
                />

                {/* Infos artisan */}
                <div className="flex-1 flex flex-col">
                    <h1 className="text-3xl font-bold text-primaryBlue mb-4">{artisan.Nom}</h1>
                    <p className="text-lg text-secondaryGrey mb-2">{artisan.spécialité?.nom}</p>
                    <p className="text-lg text-secondaryGrey mb-2">{artisan.Ville}</p>
                    <Stars note={parseFloat(artisan.Note)} />
                    <p className="mt-4 text-secondaryGrey">{artisan.A_propos || "Pas de description disponible."}</p>
                    {artisan.Website && (
                        <a
                        href={
                            artisan.Website.startsWith("http") 
                            ? artisan.Website 
                            : `https://${artisan.Website}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-primaryBlue hover:font-bold mt-4"
                        >
                        {artisan.Website}
                        </a>
                    )}
                </div>

            </div>
            <form 
            id="contact-form"
            className="mt-10"
            onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    
                    {/* Prénom */}
                    <div className="sm:col-span-2">
                    <label htmlFor="first-name" className="block text-sm font-medium text-secondaryGrey">Prénom</label>
                    <div className="mt-2">
                        <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        required
                        className="block w-full rounded-md px-3 py-1.5 text-base text-secondaryGrey outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-primaryBlue sm:text-sm"
                        />
                    </div>
                    </div>

                    {/* Nom */}
                    <div className="sm:col-span-2">
                    <label htmlFor="last-name" className="block text-sm font-medium text-secondaryGrey">Nom</label>
                    <div className="mt-2">
                        <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        required
                        className="block w-full rounded-md px-3 py-1.5 text-base text-secondaryGrey outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-primaryBlue sm:text-sm"
                        />
                    </div>
                    </div>

                    {/* Email */}
                    <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium text-secondaryGrey">Email</label>
                    <div className="mt-2">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md px-3 py-1.5 text-base text-secondaryGrey outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-primaryBlue sm:text-sm"
                        />
                    </div>
                    </div>

                    {/* Objet */}
                    <div className="sm:col-span-3">
                    <label htmlFor="object" className="block text-sm font-medium text-secondaryGrey">Objet</label>
                    <div className="mt-2">
                        <input
                        id="object"
                        name="object"
                        type="text"
                        required
                        className="block w-full rounded-md px-3 py-1.5 text-base text-secondaryGrey outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-primaryBlue sm:text-sm"
                        />
                    </div>
                    </div>

                    {/* Message */}
                    <div className="col-span-full">
                    <label htmlFor="message" className="block text-sm font-medium text-secondaryGrey">Message</label>
                    <div className="mt-2">
                        <textarea
                        name="message"
                        id="message"
                        rows="5"
                        required
                        className="block w-full rounded-md px-3 py-1.5 text-base text-secondaryGrey outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-primaryBlue sm:text-sm"
                        ></textarea>
                    </div>
                    </div>
                </div>

                {/* Boutons */}
                <div className="mt-6 flex justify-end gap-x-6">
                    <button 
                    type="button"
                    onClick={(e) => {
                        const form = document.getElementById("contact-form");
                        form.reset(); // Vide le formulaire

                        // Retire le focus du bouton après 50ms
                        const button = e.currentTarget;
                        setTimeout(() => {
                        button.blur();
                        }, 50);
                    }}
                    className="rounded-md px-3 py-2 text-sm font-semibold text-secondaryGrey focus:bg-secondaryRed focus:text-primary focus:">Annuler</button>
                    <button
                    type="submit"
                    className="rounded-md bg-secondaryBlue px-3 py-2 text-sm font-semibold text-primary shadow hover:bg-primaryBlue"
                    >
                    Envoyer
                    </button>
                </div>
            </form>
        </div>
    );
}