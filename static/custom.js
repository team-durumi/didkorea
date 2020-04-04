window.addEventListener('load', function() {
  items = document.querySelectorAll('.linkify')
  items.forEach(function(item, index) {
    elm = items.item(index)
    linkifyElement(elm, [], document)
  })
})
