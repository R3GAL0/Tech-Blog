const logout = async () => {
  await fetch('/api/user/logout', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
};

document.querySelector('#logout').addEventListener('click', logout);
