function observe (element, event, handler) {
  element.addEventListener(event, handler, false);
};

function resizableTextArea (element) {
  function resize () {
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  }
  /* 0-timeout to get the already changed element */
  function delayedResize () {
    window.setTimeout(resize, 0);
  }
  observe(element, 'change',  resize);
  observe(element, 'cut',     delayedResize);
  observe(element, 'paste',   delayedResize);
  observe(element, 'drop',    delayedResize);
  observe(element, 'keydown', delayedResize);

  element.focus();
  element.select();
  resize();
};

resizableTextArea(document.getElementById('codigo'));
