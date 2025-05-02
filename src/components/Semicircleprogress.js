const Semicircleprogress = ({ percentage }) => {
    const radius = 80;
    const circumference = Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
  
    return (
    <div className="flex flex-col items-left  p-4 rounded-2xl font-bold mt-10">
      <h2 className="text-2xl font-bold text-gray-900 ">Accuracy</h2>
      <div className="w-[180px] h-[100px] mx-auto my-6 relative items-left">
        <svg width="180" height="100">
          {/* Background semi-circle */}
          <path
            d="M 10 90 A 80 80 0 0 1 170 90"
            fill="none"
            stroke="#e5e7eb" // Tailwind gray-200
            strokeWidth="15"
          />
          {/* Foreground (progress) semi-circle */}
          <path
            d="M 10 90 A 80 80 0 0 1 170 90"
            fill="none"
            stroke="#A020F0" // Tailwind green-500
            strokeWidth="15"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-gray-900 mt-4">
          {percentage}%
        </div>
      </div>
    </div>
    );
  };
  export default Semicircleprogress;
  