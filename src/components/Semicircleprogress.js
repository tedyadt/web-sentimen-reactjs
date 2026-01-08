const CircularProgressCard = ({ title, percentage }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-xs border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-800 text-center mb-6">{title}</h2>
      
      <div className="relative w-40 h-40 mx-auto">
        <svg className="w-full h-full -rotate-90 transform">
          {/* Background circle */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#e2e8f0"
            strokeWidth="16"
            fill="none"
          />
          
          {/* Progress circle with gradient & animation */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="16"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
            className="transition-all duration-2000 ease-out"
            style={{ strokeDashoffset: offset }}
          />
          
          {/* Gradient */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900">
              {percentage}%
            </div>
            <div className="text-sm text-gray-500 mt-1">Complete</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressCard;