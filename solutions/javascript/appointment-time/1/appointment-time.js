// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  let currentDate = now ? new Date(now) : new Date();
  currentDate.setDate(currentDate.getDate() + days);
  return currentDate;
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  let currentDate = new Date(timestamp);

  return {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    date: currentDate.getDate(),
    hour: currentDate.getHours(),
    minute: currentDate.getMinutes(),
  }
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  let newDate = new Date(timestamp);
  
  for (let option in options) {
    switch(option) {
      case 'year':
        newDate.setFullYear(options[option]);
        break;
      case 'month':
        newDate.setMonth(options[option]);
        break;
      case 'date':
        newDate.setDate(options[option]);
        break;
      case 'hour':
        newDate.setHours(options[option]);
        break;
      case 'minute':
        newDate.setMinutes(options[option]);
        break;
    }
  }

  return getAppointmentDetails(getAppointmentTimestamp(newDate));
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  let dateA = new Date(timestampA);
  let dateB = new Date(timestampB);

  return Math.round((dateB.getTime() - dateA.getTime()) / 1000);
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  let appointmentDate = new Date(appointmentTimestamp);
  let currentDate = new Date(currentTimestamp);

  return appointmentDate.getTime() > currentDate.getTime();
}
