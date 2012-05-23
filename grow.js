// grow.js
// requires jquery

window.onload = function() {
  b = document.getElementsByTagName('body');
  b = b[0];
  
  overlay = document.createElement('div');
  overlay.setAttribute('id','gridHelper');

  colWrapper = document.createElement('div');
  colWrapper.className = 'colWrapper';
  container = document.getElementsByClassName('container');
  cwWidth = window.getComputedStyle(container[0]);
  cwWidth = cwWidth.getPropertyValue('width');
  colWrapper.style.width = cwWidth;

  for(i = 0; i < 12; i++) {
    col = document.createElement('div');
    col.setAttribute('class', 'gridHelperColumn');
    colWrapper.appendChild(col);
  }

  overlay.appendChild(colWrapper);
  b.appendChild(overlay);


  toggler = function(){
    button = document.createElement('div');

    $(button).click(function(){
      $(overlay).toggle();
    });

    b.appendChild(button);
    $(button).css({
      position: 'fixed',
      top: '10px',
      right: '10px',
      color: '#fff',
      background: '#000',
      padding: '3px 6px', 
      'border-radius': '4px'
    }).html('toggle grid');
  }

  toggler();

}