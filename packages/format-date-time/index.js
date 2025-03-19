import { DATE_CONFIG } from '@valjoux/format-date';
export { DATE_CONFIG } from '@valjoux/format-date';
import { TIME_CONFIG } from '@valjoux/format-time';
export { TIME_CONFIG } from '@valjoux/format-time';

/** @type {Intl.DateTimeFormat} */
const FormatDateTime = new Intl.DateTimeFormat(undefined, {
  ...DATE_CONFIG,
  ...TIME_CONFIG
});

const formatDateTime = FormatDateTime.format.bind(FormatDateTime);

export { FormatDateTime, formatDateTime };
