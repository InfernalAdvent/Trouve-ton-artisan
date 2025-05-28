import Stars from './Stars'

export default function TopArtisansCard({ artisan }) {

  return (
    <div className="bg-secondaryBlue rounded-xl shadow-lg p-9 w-full max-w-xs flex flex-col items-center text-center">
      <p className="text-2xl text-primary">{artisan.Nom}</p>
      <p className="text-primary">{artisan.Specialite}</p>
      <p className="text-primary">{artisan.Ville}</p>
       <Stars note={parseFloat(artisan.Note)} />
    </div>
  );
}