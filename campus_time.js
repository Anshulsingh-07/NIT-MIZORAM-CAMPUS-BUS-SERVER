'use strict';

const CAMPUS_TIME_ZONE = 'Asia/Kolkata';

/** Return a date-only YYYY-MM-DD key in the campus timezone, independent of host TZ. */
function campusDateKey(value = new Date()) {
    const parts = new Intl.DateTimeFormat('en-CA', {
        timeZone: CAMPUS_TIME_ZONE,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).formatToParts(value);
    const fields = Object.fromEntries(parts.map(({ type, value: part }) => [type, part]));
    return `${fields.year}-${fields.month}-${fields.day}`;
}

function isDateOnly(value) {
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const parsed = new Date(`${value}T00:00:00.000Z`);
    return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

module.exports = { CAMPUS_TIME_ZONE, campusDateKey, isDateOnly };
