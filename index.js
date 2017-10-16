function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var list = document.getElementsByClassName('ranked-list')

  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}

function deepestChild() {
  var current = document.querySelectorAll('div#grand-node div')
  var next = []

  while (current) {
    if(current.length == 1) {
      return current[0]
    }

    for (var i = 0; i < current.length; i++) {
      next.push(current[i])
    }
    current = next.shift()
    current = current.querySelectorAll('div')
  }
}
