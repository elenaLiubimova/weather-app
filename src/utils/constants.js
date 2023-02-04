export const date = new Date();
export const localTimeZoneOffsetInHours = date.getTimezoneOffset() / 60;
export const localTimeZoneOffsetInSeconds = date.getTimezoneOffset() * 60;
export const hours = date.getHours() + localTimeZoneOffsetInHours;
export const year = date.getFullYear();
export const day = date.getDate();
export const weekDay = date.getDay();