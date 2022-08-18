export function blocker() {
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
      return false;
    });
  } else {
    //Versões antigas do IE
    document.attachEvent('oncontextmenu', function (e) {
      e = e || window.event;
      e.returnValue = false;
      return false;
    });
  }

  document.onkeydown = function (e) {
    if (
      e.ctrlKey &&
      (e.keyCode === 67 ||
        e.keyCode === 86 ||
        e.keyCode === 73 ||
        e.keyCode === 70 ||
        e.keyCode === 83 ||
        e.keyCode === 85 ||
        e.keyCode === 87 ||
        e.keyCode === 123)
    ) {
      alert('Not Today');
      return false;
    } else {
      return true;
    }
  };
}
