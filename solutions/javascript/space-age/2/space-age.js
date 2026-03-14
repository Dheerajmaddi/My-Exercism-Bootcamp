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

// Seconds in a Day (24 * 60 * 60) x Earth Days (365.25)
const EARTH_YEAR_SECONDS = 24 * 60 * 60 * 365.25;

export const age = (planet, ageInSeconds) => {
  if (!PLANET_YEARS.hasOwnProperty(planet)) throw new Error('not a planet');
  
  const planetSeconds = EARTH_YEAR_SECONDS * PLANET_YEARS[planet];
  return Math.round(ageInSeconds / planetSeconds * 100) / 100;
};
