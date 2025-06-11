export const dateFormat = (date: string) => {
  const dateFormat = new Date(date);
  const year = dateFormat.getFullYear();
  const month = String(dateFormat.getMonth() + 1).padStart(2, "0");
  const day = String(dateFormat.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};
