import { useLocation } from 'react-router-dom';
import Confetti from 'react-confetti';

const Result = () => {
  const { state } = useLocation();
  const isEligible = state.score >= 69.5;

  return (
    <div className="p-4 text-white relative bg-black">
      {/* Confetti effect shown when score is 70% or more */}
      {isEligible && <Confetti numberOfPieces={200} gravity={0.05} />}
      
      <h2 className="text-2xl font-semibold mb-2 text-center">Retrofit Assessment Result</h2>
      <p className="mb-4 text-lg text-center">✅ Retrofit Score: <strong>{state.score.toFixed(1)}%</strong></p>
      
      {isEligible ? (
        <div className="text-center">
          {/* This message is shown with confetti */}
          <p className="mb-4 text-2xl font-bold">🎉 No major issues detected. Vehicle is likely fit for retrofitting!</p>
        </div>
      ) : (
        <>
          {state.recommendations.length > 0 ? (
            <>
              <p className="mb-2 font-medium text-lg bg-black">⚠️ Recommendations:</p>
              <div className="space-y-4">
                {state.recommendations.map((rec, i) => (
                  <div
                    key={i}
                    className="bg-gray-900 p-4 rounded-lg shadow-md border border-gray-700 text-lg"
                  >
                    <p>{rec}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-lg">⚠️ Issues detected. Please review the recommendations for improvement.</p>
          )}
        </>
      )}
    </div>
  );
};

export default Result;
