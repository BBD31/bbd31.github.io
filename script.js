const boxContainer = document.getElementById('boxContainer');

function createBox() {
  const box = document.createElement('div');
  box.classList.add('box');

  const size = Math.random() * 60 + 20;
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;

  box.style.left = `${Math.random() * 100}%`;
  box.style.top = `${Math.random() * 100}%`;

  box.style.animationDuration = `${Math.random() * 5 + 3}s`;

  boxContainer.appendChild(box);
}

for (let i = 0; i < 30; i++) {
  createBox();
}
