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

if (electricalIssues === "4" || parseInt(electricalIssues) >= 4) {
  recommendations.push("Electrical system faults detected; check wiring, lighting, and battery connections.");
} else if (electricalIssues === "3") {
  recommendations.push("Major electrical issues detected; retrofitting may require significant work.");
}

if (vehicleBodyCondition >= 4) {
  recommendations.push("Vehicle body is degraded; repairing dents, rust, and paint will improve safety and appearance.");
} else if (vehicleBodyCondition === "4") {
  recommendations.push("The vehicle's body condition is poor; consider repairing it before retrofitting.");
}

// Braking system
if (brakingSystemCondition >= 4) {
  recommendations.push("Braking efficiency is below safe limits; immediate repairs are required.");
} else if (brakingSystemCondition >= 2) {
  recommendations.push("Braking system is significantly worn; replace or repair before retrofitting.");
}

// Tyres
if (tireCondition >= 4) {
  recommendations.push("Tyres have poor tread or damage; replacement is critical for road safety.");
} else if (tireCondition >= 2) {
  recommendations.push("Tyres are worn out or aged; replacing them is essential for safety.");
}

// Wheels
if (wheelCondition >= 4) {
  recommendations.push("Wheels are damaged or misaligned; check for cracks or deformities.");
}

// Structural Integrity
if (structuralIntegrity >= 4) {
  recommendations.push("Frame has signs of damage or corrosion; may compromise vehicle safety.");
} else if (structuralIntegrity >= 2) {
  recommendations.push("Structural integrity is compromised; inspect frame and chassis thoroughly.");
}

// Suspension
if (suspensionLoadCondition >= 4) {
  recommendations.push("Suspension system is underperforming; check shock absorbers and springs.");
} else if (suspensionLoadCondition >= 2) {
  recommendations.push("Suspension components are degraded; replacement recommended.");
}

// Transmission
if (transmissionCondition >= 4) {
  recommendations.push("Transmission is showing signs of slipping or delayed shifting; servicing is needed.");
} else if (transmissionCondition >= 2) {
  recommendations.push("Transmission system shows significant wear; may impact performance post-retrofit.");
}

// Cluster Display
if (clusterDisplayCondition >= 4) {
  recommendations.push("Dashboard display issues; speedometer, fuel gauge, or odometer may be inaccurate.");
} else if (clusterDisplayCondition >= 2) {
  recommendations.push("Dashboard cluster components are not fully functional; consider repairing the speedometer, fuel gauge, or odometer.");
}

// Mudguards
if (mudguardCondition >= 4) {
  recommendations.push("Damaged or missing mudguards; replacing them will prevent splashes and debris damage.");
} else if (mudguardCondition >= 2) {
  recommendations.push("Mudguards are in poor condition; replacing them will improve protection and appearance.");
}

// Outer frame
if (outsideFrameCondition >= 4) {
  recommendations.push("Outer frame shows signs of wear or damage; repainting or restoration recommended.");
}

// Lower body
if (lowerBodyCondition >= 4) {
  recommendations.push("Undercarriage condition is poor; inspect for rust, leaks, and mechanical wear.");
}

// General warning for very low score
if (totalScore < 50) {
  recommendations.push("Vehicle in poor condition; retrofitting may not be viable.");
}

// Fallback if no specific recommendations
if (normalizedScore < 70 && recommendations.length === 0) {
  recommendations.push("Multiple systems show signs of wear or damage; a detailed inspection is recommended before retrofitting.");
}

  return {
    score: normalizedScore,
    recommendations
  };
}

