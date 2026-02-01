function experience() {
  const startDate = new Date("2021-09-06");
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  return `${years} years ${months} months`;
}

export { experience };
