function download(url) {
  if (url && Object.prototype.toString.call(url) === '[object String]') {
    let a = document.createElement('a')
    a.href = encodeURI(url)
    a.download = 'excel'
    a.id = 'downLoad'
    a.style.display = 'none'
    // a.click()
    document.body.appendChild(a)
    document.getElementById('downLoad').click()
    document.body.removeChild(document.getElementById('downLoad'))
    a = null
  } else {
    console.error('download url should be a not empty string')
  }
}

export { download }