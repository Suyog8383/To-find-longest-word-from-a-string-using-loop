let str =
  "To find longest word from a string using means iterate by an not by indexing element";

function findLongWord(str) {
  let splited = str.split(" ");
  let max = 0;
  let data = "";
  console.log("@SN ", splited);
  for (let i = 0; i <= splited.length - 1; i++) {
    let m = splited[i].length;
    if (m > max) {
      max = "";
      data = "";
      max = m;
      data = splited[i];
    }
  }
  return data;
}
console.log("@SN ", findLongWord(str));
