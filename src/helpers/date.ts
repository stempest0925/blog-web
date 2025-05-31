const MONTH_ABBR = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatMonth(month: number): string {
  if (month >= 1 && month <= 12) {
    return MONTH_ABBR[month - 1];
  }

  return String(month);
}

export function formatDay(day: number): string {
  if (day > 0 && day < 10) {
    return "0" + day;
  }
  
  return String(day);
}
