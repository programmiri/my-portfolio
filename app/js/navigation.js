function navActiveStateHandler() {
  $('.nav-link').on('click', function(event) {
    event.preventDefault();
    scrollToTarget(this);
    setNewActiveState(this);
  });
}

function setNewActiveState(element) {
  const allNavItems = $('.nav-item');
  allNavItems.removeClass('active');
  $(element).parent().addClass('active');
}

function scrollToTarget(element) {
  const target = $(element).attr('href');
  $(document).scrollTop( $(target).offset().top );
}

function addNavigationEventlisteners() {
  navActiveStateHandler();
}

export { addNavigationEventlisteners };
