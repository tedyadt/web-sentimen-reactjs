import ModernScoreCard from './ModernScoreCard';

const ScoreCard = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <ModernScoreCard title="Accuracy" percentage={80} />
      <ModernScoreCard title="Precision" percentage={78} />
      <ModernScoreCard title="Recall" percentage={76} />
      <ModernScoreCard title="F1 Score" percentage={77} />
    </div>
  );
};

export default ScoreCard;