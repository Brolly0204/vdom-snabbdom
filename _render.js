with (this) {
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [
    _c('div', [
      _c('input', {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: (title),
            expression: "title"
          }
        ],
        attrs: {
          "type": "text"
        },
        domProps: {
          "value": (title)
        },
        on: {
          "input": function($event) {
            if ($event.target.composing)
              return;
            title = $event.target.value
          }
        }
      }),
      _v(" "),
      _c('button', {
        on: {
          "click": add
        }
      }, [_v("add")])
    ]),
    _v(" "),
    _c('div', [_c('ul', _l((list), function(item) {
        return (item)
          ? _c('li', [_v(_s(item))])
          : _e()
      }))])
  ])
}
