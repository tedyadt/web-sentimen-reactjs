import React from 'react';
import Semicircleprogress from './Semicircleprogress';

const ScoreCards = () => {
  const scores = [
    { title: 'Accuracy', percentage: 80 },
    { title: 'Precision', percentage: 78 },
    { title: 'Recall', percentage: 85 },
    { title: 'F1 Score', percentage: 77 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {scores.map((score, index) => (
        <Semicircleprogress key={index} title={score.title} percentage={score.percentage} />
      ))}
    </div>
  );
};

export default ScoreCards;
