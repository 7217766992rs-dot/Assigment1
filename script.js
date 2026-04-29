/* Select all sliders */
document.querySelectorAll('.slider').forEach(slider => {

  /* Track toggle state (filled / not filled) */
  let isFilled = false;

  /* Update visual fill using CSS variable */
  const updateFill = () => {
    slider.style.setProperty('--value', slider.value + '%');
  };

  /* Handle pointer interaction (mouse + touch + pen) */
  slider.addEventListener('pointerdown', (e) => {

    /* Prevent default dragging behavior */
    e.preventDefault();

    /* Toggle state */
    isFilled = !isFilled;

    /* Set slider value */
    slider.value = isFilled ? 100 : 0;

    /* Update UI */
    updateFill();
  });

  /* Keyboard accessibility (Enter / Space) */
  slider.addEventListener('keydown', (e) => {

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();

      isFilled = !isFilled;
      slider.value = isFilled ? 100 : 0;

      updateFill();
    }
  });

  /* Initialize fill on load */
  updateFill();
});