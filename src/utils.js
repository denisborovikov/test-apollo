export function formatTime(time) {
  if (isNaN(time)) return '00:00';

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - minutes * 60);

  return `${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}`;
}