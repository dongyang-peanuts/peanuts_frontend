export const timeFormat = (date: string) => {
  const timeFormat = new Date(date);
  const h = timeFormat.getHours();
  const m = timeFormat.getMinutes();
  const s = timeFormat.getSeconds();

  var todayString = "";
  if (h < 10) {
    todayString += "0";
  }
  todayString += h + ":";
  if (m < 10) {
    todayString += "0";
  }
  todayString += m + ":";
  if (s < 10) {
    todayString += "0";
  }
  todayString += s;

  return todayString;
};
