export const formattedDate = (date: Date) => {
  return date.toISOString().split('T')[0];
};
