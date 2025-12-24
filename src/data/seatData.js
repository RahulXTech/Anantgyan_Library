export const generateSeats = () =>
  Array.from({ length: 50 }, () => Math.random() > 0.5);
