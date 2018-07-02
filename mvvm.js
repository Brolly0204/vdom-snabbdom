function Vue(data = {}) {
  if (this instanceof Vue) {
    this.data = data
    this.proxyData(this.data)
  }
}

Vue.prototype.proxyData = function(data) {
  let that = this;
  for (let key in data) {
    Object.defineProperty(that, key, {
      enumerable: true,
      configurable: true,
      get() {
        return data[key]
      },
      set(val) {
        data[key] = val
      }
    })
  }
}

let vm = new Vue({title: 'liwenli'})
vm.data.title = 'nihao'
console.log(vm.title);
console.log(vm.data.title);
