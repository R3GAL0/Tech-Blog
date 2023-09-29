const navEl = document.getElementById('main-nav');
const elements = [
    document.getElementById('/'),
    document.getElementById('/dashboard'),
    document.getElementById('/login'),
    document.getElementById('/signup'),
]

navEl.addEventListener('click', async (event) => {
    event.preventDefault();
    if (elements.includes(event.target)) {
      document.location.replace(event.target.id);
    };
});
