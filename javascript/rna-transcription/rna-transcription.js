export function toRna(dna) {
  const dnaToRnaMap = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  };

  return dna
    .split("")
    .map(nucleotide => dnaToRnaMap[nucleotide])
    .join("");
}
