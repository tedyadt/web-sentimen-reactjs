const Semicircleprogress = ({ title, percentage }) => {
  const radius = 60;
  const circumference = Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-row items-center gap-4">
  <h2 className="text-base sm:text-lg font-semibold text-gray-800 whitespace-nowrap">{title}</h2>
  <div className="w-[140px] h-[100px] relative">
    <svg width="140" height="100">
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
        stroke="#A020F0"
        strokeWidth="15"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
    <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-gray-900 mt-5">
      {percentage}%
    </div>
  </div>
</div>
  );
};

export default Semicircleprogress;
