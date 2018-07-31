// // add solution here
function theBeatlesPlay (musicians, instruments) {
  var beatles = [];
  for (let i = 0; i < musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatles;
}

function johnLennonFacts(facts) {
   let factResult = [];
   let i = 0;
  while (i < facts.length) {
    factResult[i].push('!!!');
    i++;
  }
  return factResult;
}