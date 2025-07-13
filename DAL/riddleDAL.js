// dal/riddleDal.js
import Riddle from '../models/Riddle.js';

export async function getAllRiddles() {
  return await Riddle.findAll();
}

export async function getRiddleById(id) {
  const riddle = await Riddle.findByPk(id);
  if (!riddle) throw new Error('Riddle not found');
  return riddle;
}

export async function addRiddle(title, question, correctAnswer) {
  const riddle = await Riddle.create({ title, question, correctAnswer });
  return riddle.id;
}

export async function updateRiddle(id, title, question, correctAnswer) {
  const riddle = await getRiddleById(id);
  await riddle.update({ title, question, correctAnswer });
  return riddle;
}

export async function deleteRiddle(id) {
  const riddle = await getRiddleById(id);
  await riddle.destroy();
  return riddle;
}
