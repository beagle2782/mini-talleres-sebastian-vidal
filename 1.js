//https://www.codewars.com/kata/523f5d21c841566fde000009
function arrayDiff(a, b) {
  for (let i = 0; i < b.length; ++i) {
    removeAllOcurrences(a, b[i]);
  }
  return a;
}

function removeAllOcurrences(a, value) {
  var i = 0;
  while (i < a.length) {
    if (a[i] === value) {
      a.splice(i, 1);
    } else {
      ++i;
    }
  }
  return a;
}
