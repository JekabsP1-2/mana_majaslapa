const contactBtn = document.getElementById('contactBtn');
const dropdownContent = document.getElementById('dropdownContent');

let closeTimeout = null;
let isOpen = false;

// Atver / aizver izvēlni, klikšķinot uz pogas
contactBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // lai klikšķis neizraisītu document click eventu
  toggleDropdown();
});

// Funkcija izvēlnes atvēršanai/aizvēršanai
function toggleDropdown() {
  if (isOpen) {
    closeDropdown();
  } else {
    openDropdown();
  }
}

function openDropdown() {
  dropdownContent.style.display = 'block';
  isOpen = true;
}

function closeDropdown() {
  dropdownContent.style.display = 'none';
  isOpen = false;
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }
}

// Noklikšķinot ārpus dropdown vai pogas, aizver izvēlni
document.addEventListener('click', () => {
  closeDropdown();
});

// Kad pele ir dropdown vai pogas virsū, atceļ aizvēršanas taimeri
dropdownContent.addEventListener('mouseenter', () => {
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }
});
contactBtn.addEventListener('mouseenter', () => {
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }
});

// Kad pele aiziet no dropdown vai pogas, uztaisa 2 sekunžu taimeri un tad aizver izvēlni
dropdownContent.addEventListener('mouseleave', () => {
  startCloseTimer();
});
contactBtn.addEventListener('mouseleave', () => {
  startCloseTimer();
});

function startCloseTimer() {
  if (closeTimeout) return;
  closeTimeout = setTimeout(() => {
    closeDropdown();
  }, 1000);
}