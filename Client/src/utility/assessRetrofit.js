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
    brakes: [10, 8, 6, 0, 0], // Adjust to scale from 1-5
    tyre: [10, 8, 6, 1, 0], // Adjust to scale from 1-5
    wheel: [10, 8, 6, 2, 1], // Adjust to scale from 1-5
    StructuralIntegrity: [20, 16, 13, 10, 0], // Adjust to scale from 1-5
    bodyFrame: [30, 25, 20, 15, 10], // Adjust to scale from 1-5
    lowerBodyCondition: [20, 16, 12, 7, 0], // Adjust to scale from 1-5
    electricFitting: [15, 13, 10, 5, 0], // Adjust to scale from 1-5
    outsideFrame: [15, 12, 10, 7, 3], // Adjust to scale from 1-5
    suspensionLoad: [15, 12, 10, 7, 3], // Adjust to scale from 1-5
    clusterDisplay: [15, 12, 9, 5, 0], // Adjust to scale from 1-5
    mudguard: [15, 12, 9, 0, 0], // Adjust to scale from 1-5
    transmission: [15, 12, 10, 7, 3] // Adjust to scale from 1-5
  };

  totalScore += scores.vehicleAge[vehicleAge] || 0;
  totalScore += scores.brakes[brakingSystemCondition] || 0;
  totalScore += scores.tyre[tireCondition] || 0;
  totalScore += scores.wheel[wheelCondition] || 0;
  totalScore += scores.StructuralIntegrity[structuralIntegrity] || 0;
  totalScore += scores.bodyFrame[vehicleBodyCondition] || 0;

  totalScore += scores.mudguard[
    mudguardCondition === "0" ? 0 :   // 5 ⭐️ Excellent
    mudguardCondition === "1" ? 1 :   // 4 ⭐️ Very Good
    mudguardCondition === "2" ? 2 :   // 3 ⭐️ Good
    mudguardCondition === "3" ? 3 :   // 2 ⭐️ Bad
    mudguardCondition === "4" ? 4 :  // 1 ⭐️ Very Poor
    0
  ] || 0;

  totalScore += scores.electricFitting[
    electricalIssues === "0" ? 0 :   // 5 ⭐️ Excellent
    electricalIssues === "1" ? 1 :   // 4 ⭐️ Very Good
    electricalIssues === "2" ? 2 :   // 3 ⭐️ Good
    electricalIssues === "3" ? 3 :   // 2 ⭐️ Bad
    electricalIssues === "4" ? 4 :  // 1 ⭐️ Very Poor
    0
  ] || 0;

  totalScore += scores.outsideFrame[outsideFrameCondition] || 0;
  totalScore += scores.suspensionLoad[suspensionLoadCondition] || 0;
  totalScore += scores.clusterDisplay[clusterDisplayCondition] || 0;

  totalScore += scores.lowerBodyCondition[
    lowerBodyCondition === "0" ? 0 :   // 5 ⭐️ Excellent
    lowerBodyCondition === "1" ? 1 :   // 4 ⭐️ Very Good
    lowerBodyCondition === "2" ? 2 :   // 3 ⭐️ Good
    lowerBodyCondition === "3" ? 3 :   // 2 ⭐️ Average
    lowerBodyCondition === "4" ? 4 :  // 1 ⭐️ Bad
    0
  ] || 0;

  totalScore += scores.transmission[transmissionCondition] || 0;

  const normalizedScore = (totalScore / maxScore) * 100;

  // Add Recommendations
  if (vehicleAge > 10) {
    recommendations.push("Vehicle age is over 10 years; retrofitting may be expensive and less effective.");
  } else if (vehicleAge > 8) {
    recommendations.push("Vehicle age is high; retrofitting might be less efficient.");
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

  if (totalScore < 50) {
    recommendations.push("Vehicle in poor condition; retrofitting may not be viable.");
  }


  return {
    score: normalizedScore,
    recommendations
  };
}
