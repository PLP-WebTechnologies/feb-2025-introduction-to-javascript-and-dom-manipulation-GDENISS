let cardExists = false;

function triggerActions() {
  changeText();
  toggleStyle();
  addRemoveCard();
}

function changeText() {
  document.getElementById('mentorship-text').textContent = 'Personalized guidance from experienced mentors!';
  document.getElementById('courses-text').textContent = 'Learn skills with fun, affordable courses!';
  document.getElementById('ai-text').textContent = 'AI finds your perfect mentor match!';
}

function toggleStyle() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.backgroundColor = card.style.backgroundColor === 'rgb(200, 230, 255)' ? '#f5f5f5' : '#c8e6ff';
  });
}

function addRemoveCard() {
  const container = document.getElementById('dynamic-card');
  if (cardExists) {
    container.innerHTML = '';
    cardExists = false;
  } else {
    const newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.innerHTML = '<h2>New Offer</h2><p>Join our mentorship program today!</p>';
    container.appendChild(newCard);
    cardExists = true;
  }
}