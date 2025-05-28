export default function Stars({ note }) {

const renderStars = (note) => {
    const fullStars = Math.floor(note);
    const halfStar = note - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return '★'.repeat(fullStars) +  (halfStar ? '⯨' : '') +'☆'.repeat(emptyStars);
  };

  return (
    <div className="flex text-2xl space-x-1 text-primary">
      {[...renderStars(note)].map((star, i) => (
        <span key={i}>{star}</span>
      ))}
    </div>
  );
}