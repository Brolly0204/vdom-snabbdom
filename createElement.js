function createElement(vnode) {
  let tag = vnode.tag
  let attrs = vnode.attrs || {}
  let children = vnode.children || []

  if (!tag) {
    return ''
  }

  let elem = document.createElement(tag)

  let attrName
  for (let attrName in attrs) {
    if (attrs.hasOwnProperty(attrName)) {
      if (attrName === 'style') {
        console.log(attrs['style']);
        for (let key in attrs['style']) {
          elem.style[key] = attrs['style'][key]
        }
      } else {
        elem.setAttribute(attrName, attrs[attrName])
      }
    }
  }

  children.forEach(child => {
    if (!child.tag && typeof child === 'string') {
      elem.appendChild(document.createTextNode(child))
    } else {
      elem.appendChild(createElement(child))
    }
  })
  return elem
}

let vnode = {
  tag: 'div',
  attrs: {
    style: {
      color: 'red'
    }
  },
  children: ['Hello World!']
}

let $ = document.querySelector.bind(document)
let root = $('#root')
root.appendChild(createElement(vnode))
