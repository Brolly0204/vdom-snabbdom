var snabbdom = require('snabbdom');
var patch = snabbdom.init([ // Init patch function with chosen modules
  require('snabbdom/modules/class').default, // makes it easy to toggle classes
  require('snabbdom/modules/props').default, // for setting properties on DOM elements
  require('snabbdom/modules/style').default, // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners').default, // attaches event listeners
]);
var h = require('snabbdom/h').default; // helper function for creating vnodes

let container = document.getElementById('container');
let btnChange = document.getElementById('btn-change');

let data = [
  {text: 'Item 1'},
  {text: 'Item 2'},
  {text: 'Item 3'},
]

render(data)

let vnode;
function render(data) {
  let newNode = h('ul#list', {}, data.map(item => {
    return h('li.item', {}, item.text)
  }))

  if (vnode) {
    patch(vnode, newNode)
  } else {
    patch(container, newNode)
    vnode = newNode
  }
}

btnChange.onclick = function() {
  data[0].text = 'one'
  data.push({text: 'Item 4'})
  render(data)
}
