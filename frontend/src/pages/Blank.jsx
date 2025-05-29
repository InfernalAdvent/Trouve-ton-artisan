import picture from '../assets/travaux.jpg'

export default function Blank() {
  return (
    <div className="max-w-6xl mx-auto p-8 rounded-xl flex items-center gap-8">
      <img
        src={picture}
        alt="pictogramme de travaux"
        className="w-1/2 h-auto object-cover"
      />
      <p className="text-lg text-gray-700">
        Oups, cette page est en cours de construction. Revenez bientôt !
      </p>
    </div>
  );
}
