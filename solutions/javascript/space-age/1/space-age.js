//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// Planet years in Earth years
const PLANET_YEARS = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}

export const age = (planet, ageInSeconds) => {
  if (!PLANET_YEARS.hasOwnProperty(planet)) throw new Error('not a planet');
  
  // Seconds in a Day (24 * 60 * 60) x Earth Days (365.25);
  const planetSeconds = 86_400 * 365.25 * PLANET_YEARS[planet];
  const result = (ageInSeconds / planetSeconds).toFixed(2);
  return Number(result);
};
