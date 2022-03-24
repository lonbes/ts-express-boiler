import { DateTime } from "luxon"

export const cleanISOTimestamp = DateTime.now().toUTC().toISO().slice(0, -1)