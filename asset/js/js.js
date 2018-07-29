var tabnavs = document.querySelectorAll('.nav-pengurus a'),
  tabnavsb = document.querySelectorAll('.nav-member a'),
  tabcontents = document.querySelectorAll('.content-pengurus .tab-section'),
  tabcontentsb = document.querySelectorAll('.content-member .tab-section');

[].forEach.call(tabnavs, function (tab) {
  tab.addEventListener('click', function (ev) {

    ev.preventDefault();

    [].forEach.call(tabnavs, function (tab) {
      tab.classList.remove('selected');
      tab.removeAttribute('class');
    });

    [].forEach.call(tabcontents, function (content) {
      content.classList.remove('selected');
    });

    this.classList.add('selected');

    var text = this.parentNode.parentNode.parentNode.children[1].children[0].children;
    var context = this.getAttribute('data-nav');

    [].forEach.call(text, function (txt) {
      if (txt.getAttribute('data-content') === context) {
        txt.classList.add('selected');
      }
    });

    document.querySelector('.magic-pengurus').style.top = this.offsetTop + 'px';

  });
});

document.querySelector('.magic-pengurus').style.top = document.querySelector('.nav-pengurus a.selected').offsetTop + 'px';

[].forEach.call(tabnavsb, function (tabb) {
  tabb.addEventListener('click', function (ev) {

    ev.preventDefault();

    [].forEach.call(tabnavsb, function (tabb) {
      tabb.classList.remove('selected');
      tabb.removeAttribute('class');
    });

    [].forEach.call(tabcontentsb, function (contentb) {
      contentb.classList.remove('selected');
    });

    this.classList.add('selected');

    var textb = this.parentNode.parentNode.parentNode.children[1].children[0].children;
    var contextb = this.getAttribute('data-nav');

    [].forEach.call(textb, function (txtb) {
      if (txtb.getAttribute('data-content') === contextb) {
        txtb.classList.add('selected');
      }
    });

    document.querySelector('.magic-member').style.top = this.offsetTop + 'px';

  });
});

document.querySelector('.magic-member').style.top = document.querySelector('.nav-member a.selected').offsetTop + 'px';

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});