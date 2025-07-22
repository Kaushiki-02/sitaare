const ProfileCard = ({ name, age, goal, image }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden transform hover:scale-105 transition">
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-yellow-800">{name}</h3>
        <p className="text-sm text-gray-600 mb-2">Age: {age}</p>
        <p className="text-sm text-gray-700 italic mb-4">Dream: {goal}</p>
        <button className="bg-primary hover:bg-primaryLight text-white font-semibold px-6 py-2 rounded-md shadow-md transition">
          Virtually Adopt ₹11,551/mo
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
