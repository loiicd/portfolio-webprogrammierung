/**
 * Get random recommednations from a dineData List
 * @param {array} objects - Array of DineData objects
 * @return {array} - Reccoemndations in same Format as dineData
 */
const getRecommendations = (dineData) => {
  const shuffled = dineData.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
};

export default getRecommendations;