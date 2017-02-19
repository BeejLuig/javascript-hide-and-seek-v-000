function getFirstSelector(selector) {
  return document.querySelector(selector)
};

function nestedTarget() {
  return document.querySelector('#nested .target')
};

function deepestChild() {
  const nodes = document.querySelector('#grand-node');
  let current = nodes;
  while (current.children[0]) {
    current = current.children[0];
  }
  return current;
};

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll('.ranked-list li');
  var oldRank;
  rankedList.forEach(element => {
    oldRank = parseInt(element.innerHTML)
    element.innerHTML = oldRank + n;
  })
}
