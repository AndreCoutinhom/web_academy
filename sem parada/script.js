// Captura todos os cards
document.querySelectorAll('.card-destino').forEach(card => {
  card.addEventListener('click', (e) => {
    e.preventDefault();

    const destino = card.querySelector('.card-title').textContent.trim();
    const ida = card.getAttribute('data-ida');
    const volta = card.getAttribute('data-volta');
    const preco = card.getAttribute('data-preco');

    alert(
      `Destino: ${destino}\n` +
      `Ida: ${ida}\n` +
      `Volta: ${volta}\n` +
      `Preço: ${preco}`
    );
  });
});
