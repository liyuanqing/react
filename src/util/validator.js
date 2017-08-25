function isEmptyObject(e) {
  var t;
  for (t in e)
    return !1;
  return !0
}

function isEmptyArray(array) {
  return (Array.isArray(array) && array.length === 0)
}


function hasCookie(name) {
  var result = new RegExp(name, 'g').test(document.cookie) && !(document.cookie.split(name + '=')[1].split(';')[0] === '');
  return result
}

export {isEmptyObject, isEmptyArray, hasCookie}
