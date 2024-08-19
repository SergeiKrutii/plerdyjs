document.addEventListener('DOMContentLoaded', () => {
  const navButton = document.querySelector('[nav-button');
  const dropDown = document.querySelector('[dropdown]');

  navButton.addEventListener('click', () => {
    dropDown.classList.toggle('header__dropdown--active');
  });

  document.addEventListener('click', evt => {
    if (!navButton.contains(evt.target) && dropDown.contains(evt.target)) {
      dropDown.classList.remove('header__dropdown--active');
    }
  });
});
