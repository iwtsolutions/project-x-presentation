$(initPresentation);

function initPresentation() {
  initEvents();
  impress().init();
}

function initEvents() {
  initOverviewOnEsc();
}

function initOverviewOnEsc() {
  // Press ESC to go to overview
  $('body').keyup(function (e) {
    if (e.keyCode == 27) {
      impress().goto('overview');
    }
  });
}
