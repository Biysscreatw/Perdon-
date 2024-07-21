const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const confetti = document.getElementById('confetti');

noButton.addEventListener('mouseover', () => {
    noButton.style.position = 'absolute';
    noButton.style.top = `${Math.random() * (window.innerHeight - noButton.offsetHeight)}px`;
    noButton.style.left = `${Math.random() * (window.innerWidth - noButton.offsetWidth)}px`;
    noButton.style.transform = `scale(${Math.max(0.1, Math.random())})`;
});

yesButton.addEventListener('click', () => {
    confetti.classList.remove('hidden');
    setTimeout(() => {
        confetti.innerHTML += '<p>¡Gracias por perdonarme!</p>';
    }, 1000);
});
