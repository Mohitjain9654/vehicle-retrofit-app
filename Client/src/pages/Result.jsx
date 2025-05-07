import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const isEligible = state.score >= 69.5;

  useEffect(() => {
    window.scrollTo(0, 0); // Fix for auto-scroll
  }, []);

  const handleProceed = () => {
    navigate('/want_retrofit', { state });
  };

  return (
    <div className="pt-20 p-4 text-white relative bg-black min-h-screen">
      {isEligible && (
        <Confetti
          numberOfPieces={200}
          gravity={0.05}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 9999,
          }}
        />
      )}

      <h2 className="text-2xl font-semibold mb-2 text-center">Retrofit Assessment Result</h2>
      <p className="mb-4 text-lg text-center">
        ✅ Retrofit Score: <strong>{state.score.toFixed(1)}%</strong>
      </p>

      {isEligible ? (
        <p className="text-green-400 text-center text-xl font-medium mb-4">
          🎉 Vehicle is suitable for retrofitting!
        </p>
      ) : (
        <>
          {state.recommendations.length > 0 ? (
            <>
              <p className="mb-2 font-medium text-lg text-yellow-400 text-center">
                ⚠️ Unsuitable for retrofitting due to:
              </p>
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
            <p className="text-lg text-center text-gray-300">
              ℹ️ No specific recommendations, but the score is below the eligibility threshold. Consider reviewing vehicle components manually.
            </p>
          )}
        </>
      )}

      <div className="mt-8 text-center">
        <p className="text-xl mb-4">Would you like to proceed with retrofitting?</p>
        <button
          onClick={handleProceed}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition"
        >
          Yes, I want to retrofit
        </button>
      </div>
    </div>
  );
};

export default Result;
