export function assessRetrofit(inputs) {
  const {
    vehicleAge,
    brakingSystemCondition,
    tireCondition,
    wheelCondition,
    structuralIntegrity,
    vehicleBodyCondition,
    mudguardCondition,
    electricalIssues,
    outsideFrameCondition,
    suspensionLoadCondition,
    clusterDisplayCondition,
    lowerBodyCondition,
    transmissionCondition,
  } = inputs;

  const recommendations = [];
  let totalScore = 0;
  const maxScore = 215;

  const scores = {
    vehicleAge: [30, 28, 25, 22, 20, 18, 17, 16, 15],
    brakes: [10, 8, 6, 4, 2, 1, 0, 0, 0],
    tyre: [10, 8, 6, 4, 2, 1, 0, 0, 0],
    wheel: [10, 9, 8, 7, 6, 5, 5, 4, 3],
    StructuralIntegrity: [20, 19, 18, 16, 14, 12, 10, 8, 6],
    bodyFrame: [30, 28, 26, 24, 22, 20, 18, 16, 14],
    lowerBodyCondition: [20, 18, 16, 14, 12, 10, 9, 8, 6],
    electricFitting: [15, 14, 12, 10, 8, 6, 5, 4, 2],
    outsideFrame: [15, 14, 13, 12, 10, 9, 8, 7, 5],
    suspensionLoad: [15, 14, 12, 10, 8, 7, 6, 5, 3],
    clusterDisplay: [10, 9, 8, 7, 6, 5, 4, 3, 2],
    mudguard: [10, 9, 8, 7, 6, 5, 4, 3, 2],
    transmission: [20, 18, 16, 14, 12, 10, 8, 6, 4]
  };

  totalScore += scores.vehicleAge[vehicleAge] || 0;
  totalScore += scores.brakes[brakingSystemCondition] || 0;
  totalScore += scores.tyre[tireCondition] || 0;
  totalScore += scores.wheel[wheelCondition] || 0;
  totalScore += scores.StructuralIntegrity[structuralIntegrity] || 0;
  totalScore += scores.bodyFrame[vehicleBodyCondition] || 0;

  totalScore += scores.mudguard[
    mudguardCondition === "good" ? 0 :
    mudguardCondition === "average" ? 1 : 2
  ] || 0;

  totalScore += scores.electricFitting[
    electricalIssues === "none" ? 0 :
    electricalIssues === "minor" ? 1 :
    electricalIssues === "major" ? 2 : 3
  ] || 0;

  totalScore += scores.outsideFrame[outsideFrameCondition] || 0;
  totalScore += scores.suspensionLoad[suspensionLoadCondition] || 0;
  totalScore += scores.clusterDisplay[clusterDisplayCondition] || 0;

  totalScore += scores.lowerBodyCondition[
    lowerBodyCondition === "excellent" ? 0 :
    lowerBodyCondition === "good" ? 1 :
    lowerBodyCondition === "fair" ? 2 :
    lowerBodyCondition === "poor" ? 3 : 4
  ] || 0;

  totalScore += scores.transmission[transmissionCondition] || 0;

  const normalizedScore = (totalScore / maxScore) * 100;

  // Add Recommendations
  if (vehicleAge > 8) {
    recommendations.push("Vehicle age is high; retrofitting may be more costly and less effective.");
  }

  if (electricalIssues === "major") {
    recommendations.push("Major electrical issues detected; retrofitting may require significant work.");
  }

  if (vehicleBodyCondition === "bad") {
    recommendations.push("The vehicle's body condition is poor; consider repairing it before retrofitting.");
  }

  // Additional Recommendations
  if (brakingSystemCondition >= 6) {
    recommendations.push("Braking system is significantly worn; replace or repair before retrofitting.");
  }

  if (tireCondition >= 6) {
    recommendations.push("Tyres are worn out or aged; replacing them is essential for safety.");
  }

  if (structuralIntegrity >= 6) {
    recommendations.push("Structural integrity is compromised; inspect frame and chassis thoroughly.");
  }

  if (suspensionLoadCondition >= 6) {
    recommendations.push("Suspension components are degraded; replacement recommended.");
  }

  if (transmissionCondition >= 6) {
    recommendations.push("Transmission system shows significant wear; may impact performance post-retrofit.");
  }

  if (clusterDisplayCondition >= 6) {
    recommendations.push("Dashboard cluster components are not fully functional; consider repairing the speedometer, fuel gauge, or odometer.");
  }

  if (mudguardCondition >= 6) {
    recommendations.push("Mudguards are in poor condition; replacing them will improve protection and appearance.");
  }

  return {
    score: normalizedScore,
    recommendations
  };
}
