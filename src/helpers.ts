export function getId() {
  return `${getRandomNumStr()}-${getRandomNumStr()}`;
}

function getRandomNumStr() {
  return Math.random().toString().slice(2);
}
