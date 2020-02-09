export default function getTime(time) {
  if (!Number.isNaN(time)) {
    return `0${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;
  }
  return true;
}
