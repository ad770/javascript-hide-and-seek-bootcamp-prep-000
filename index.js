function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  let rankedLists = document.querySelectorAll('.ranked-list');
  for (var i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n;
  }
}

function deepestChild(){
  debugger;
  var currentNode = document.querySelector('div#grand-node');
  var nextNode = currentNode.childNodes[1];
  while (nextNode){
    currentNode = nextNode;
    nextNode = currentNode.childNodes[1]
  }
  return currentNode;
}
