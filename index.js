let oddetall = Number(prompt("Skriv inn tall: "));

while (oddetall % 2 === 0) {
  oddetall = Number(prompt("Tallet er ikke et oddetall. Skriv inn et nytt tall: "));
}