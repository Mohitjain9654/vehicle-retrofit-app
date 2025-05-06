import * as tf from '@tensorflow/tfjs';

export const createModel = () => {
  const model = tf.sequential();
  model.add(tf.layers.dense({ inputShape: [12], units: 16, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 8, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 3, activation: 'softmax' }));

  model.compile({
    optimizer: 'adam',
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy'],
  });

  return model;
};

const inputData = tf.tensor2d([
  [2, 2, 2, 2, 3, 3, 2, 2, 3, 2, 2, 2],  // Not Suitable
  [5, 5, 5, 5, 6, 5, 6, 5, 6, 5, 5, 5],  // Needs Servicing
  [8, 9, 8, 9, 9, 8, 9, 8, 9, 9, 8, 9],  // Fit for Retrofitting
]);

const outputData = tf.tensor2d([
  [1, 0, 0], // Not Suitable
  [0, 1, 0], // Needs Servicing
  [0, 0, 1], // Fit
]);

export const trainModel = async (model) => {
  await model.fit(inputData, outputData, {
    epochs: 100,
    shuffle: true,
  });
  return model;
};
