(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    backdrop: document.querySelector('[data-modal]'),
  };

  document.addEventListener('keydown', handleEscClose);

  refs.openModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.backdrop.addEventListener('click', handleBackdropClick);

  function toggleModal() {
    refs.backdrop.classList.toggle('is-hidden');

    document.body.classList.toggle('no-scroll');
  }

  function handleBackdropClick(event) {
    if (event.target === refs.backdrop) {
      toggleModal();
    }
  }

  function handleEscClose(event) {
    if (
      event.key === 'Escape' &&
      !refs.backdrop.classList.contains('is-hidden')
    ) {
      toggleModal();
    }
  }
})();
