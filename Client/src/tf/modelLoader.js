import * as tf from '@tensorflow/tfjs';

export async function loadModelAndPredict(inputArray) {
  const model = await tf.loadLayersModel('/model/model.json');
  const input = tf.tensor2d(inputArray, [1, inputArray.length]);
  const prediction = model.predict(input);
  prediction.print();

  // Return prediction result (optional)
  return prediction;
}
