import React from 'react';

const ModernScoreCard = ({ title, percentage }) => {
  // Determine color based on percentage
  const getColor = (value) => {
    if (value >= 80) return { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', bar: 'bg-green-500' };
    if (value >= 70) return { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', bar: 'bg-blue-500' };
    if (value >= 60) return { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', bar: 'bg-yellow-500' };
    return { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', bar: 'bg-red-500' };
  };

  const colorScheme = getColor(percentage);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-gray-700">{title}</h3>
        <div className={`${colorScheme.bg} ${colorScheme.border} border px-2.5 py-1 rounded-full`}>
          <span className={`text-xs font-bold ${colorScheme.text}`}>{percentage}%</span>
        </div>
      </div>

      {/* Large Percentage Display */}
      <div className="mb-4">
        <div className={`text-5xl font-bold ${colorScheme.text}`}>
          {percentage}%
        </div>
        <p className="text-sm text-gray-500 mt-1">Performance Score</p>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full ${colorScheme.bar} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        >
          {/* Animated shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
      </div>

      {/* Labels */}
      <div className="flex justify-between mt-2">
        <span className="text-xs text-gray-500">0%</span>
        <span className="text-xs text-gray-500">100%</span>
      </div>

      {/* Additional Info */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500">Status</span>
          <span className={`font-semibold ${colorScheme.text}`}>
            {percentage >= 80 ? 'Excellent' : percentage >= 70 ? 'Good' : percentage >= 60 ? 'Fair' : 'Poor'}
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default ModernScoreCard;