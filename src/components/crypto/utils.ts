export function formatHashrate(difficulty: any): string {
  const units = ["H/s", "KH/s", "MH/s", "GH/s", "TH/s", "PH/s"];
  let value = Number(difficulty);
  let unitIndex = 0;

  while (value >= 1000 && unitIndex < units.length - 1) {
    value /= 1000;
    unitIndex++;
  }

  return `${value.toFixed(2)} ${units[unitIndex]}`;
}