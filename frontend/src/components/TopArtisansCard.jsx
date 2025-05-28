function topArtisansCard({ artisan }) {

    const renderStars = (note) => {
    const fullStars = Math.floor(note);
    const halfStar = note - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return '★'.repeat(fullStars) +  (halfStar ? '⯨' : '') +'☆'.repeat(emptyStars);
  };

  return (
    <div className="bg-secondaryBlue rounded-xl shadow-lg p-9 w-full max-w-xs flex flex-col items-center text-center">
      <p className="text-2xl text-primary">{artisan.Nom}</p>
      <p className="text-primary">{artisan.Specialite}</p>
      <p className="text-primary">{artisan.Ville}</p>
       <div className="flex text-2xl space-x-1 text-primary">
        {[...renderStars(artisan.Note)].map((star, i) => (
          <span key={i}>{star}</span>
        ))}
        </div>
    </div>
  );
}

export default topArtisansCard;