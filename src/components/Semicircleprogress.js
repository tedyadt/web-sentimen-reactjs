const Semicircleprogress = ({ title, percentage }) => {
  const radius = 60;
  const circumference = Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-row items-center gap-2 w-full">
      <h2 className="text-base sm:text-lg font-semibold text-gray-800">{title}</h2>
      <div className="w-full max-w-[180px] aspect-[14/10] relative">
        <svg viewBox="0 0 140 100" className="w-full h-full">
          {/* Background */}
          <path
            d="M 10 90 A 60 60 0 0 1 130 90"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="15"
          />
          {/* Foreground */}
          <path
            d="M 10 90 A 60 60 0 0 1 130 90"
            fill="none"
            stroke="#3D90D7"
            strokeWidth="15"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-gray-900 mt-6">
          {percentage}%
        </div>
      </div>
    </div>
  );
};


export default Semicircleprogress;
