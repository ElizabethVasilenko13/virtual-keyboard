import keyLayoutUa from './keyLayoutUa.js';
import keyLayoutEn from './keyLayoutEn.js';

let currnetLanguage = keyLayoutEn;

// work with locale storage
const getLocalStorage = () => localStorage.getItem('currentLen');

const setLocalStorage = () => {
  if (currnetLanguage === keyLayoutEn) {
    localStorage.setItem('currentLen', 'en');
  } else {
    localStorage.setItem('currentLen', 'ua');
  }
};

const currentLenValue = getLocalStorage();
if (currentLenValue === 'en') {
  currnetLanguage = keyLayoutEn;
} else {
  currnetLanguage = keyLayoutUa;
}

// generate basic layout
const generateStandartFilling = () => {
  const filling = `<div class="container">
    <h1 class="title">RSS Vitrual keyboard</h1>
    <textarea class="textarea-body" cols="30" rows="10" autofocus></textarea>
    <div class="keyboard-body keyboard"></div>
    <p>The keyboard was created in the Windows operating system</p>
    <p>To switch the language combination: left ctrl + alt</p>
  </div>`;
  document.body.insertAdjacentHTML('afterbegin', filling);
};

// generate keybord layout
const generateKeyboard = (array, value) => {
  const keyboardBody = document.querySelector('.keyboard-body');
  array.forEach((keys) => {
    const keysRow = document.createElement('div');
    keysRow.classList.add('keyboard__keys');
    keys.forEach((key) => {
      const keyElement = document.createElement('div');
      keyElement.classList.add('keyboard__key', `${key.eventCode}`);
      keyElement.innerText = key[value];
      if (['Backspace', 'CapsLock', 'ShiftLeft'].includes(key.eventCode)) {
        keyElement.classList.add('service-key', 'keyboard__key_wider');
      } else if (['Tab', 'Delete', 'ArrowUp', 'ControlLeft', 'ControlRight', 'MetaLeft', 'AltRight',
        'AltLeft', 'ArrowLeft', 'ArrowDown', 'ArrowRight'].includes(key.eventCode)) {
        keyElement.classList.add('service-key');
      } else if (['Enter', 'ShiftRight'].includes(key.eventCode)) {
        keyElement.classList.add('service-key', 'keyboard__key_wide');
      } else if (key.eventCode === 'Space') {
        keyElement.classList.add('service-key', 'keyboard__key_extra-wide');
      } else {
        keyElement.classList.add('keyboard__key');
      }
      keysRow.append(keyElement);
    });
    keyboardBody.append(keysRow);
  });
};

// updating keyboard keys according to requiremnets
const updateKeys = (currentArray, keyType = 'keyboardKey') => {
  const specialKeys = [];
  currentArray.forEach((el) => {
    el.forEach((element) => {
      specialKeys.push(element[`${keyType}`]);
      return specialKeys;
    });
  });
  specialKeys.forEach((key, i) => {
    document.querySelectorAll('.keyboard__key')[i].textContent = key;
  });
};

// keyyboard keys handlers
const onKeysDown = (e) => {
  e.preventDefault();
  if (e.ctrlKey && e.altKey) {
    if (currnetLanguage === keyLayoutEn) {
      currnetLanguage = keyLayoutUa;
    } else {
      currnetLanguage = keyLayoutEn;
    }
    updateKeys(currnetLanguage);
  }
  document.querySelectorAll('.keyboard__key').forEach((key) => {
    if (key.classList.contains(`${e.code}`)) {
      key.classList.add('active');
    }
  });
};

const onKeysUp = () => {
  document.querySelectorAll('.keyboard__key').forEach((key) => {
    key.classList.remove('active');
  });
};

const onKeyClick = () => {
  document.querySelectorAll('.keyboard__key').forEach((key) => {
    key.addEventListener('mousedown', (e) => {
      e.target.classList.add('active');
    });
  });
  document.querySelectorAll('.keyboard__key').forEach((key) => {
    key.addEventListener('mouseup', (e) => {
      e.target.classList.remove('active');
    });
  });
  document.querySelectorAll('.keyboard__key').forEach((key) => {
    key.addEventListener('mouseleave', (e) => {
      e.target.classList.remove('active');
    });
  });
};

// initial function
const init = () => {
  generateStandartFilling();
  generateKeyboard(currnetLanguage, 'keyboardKey');
  onKeyClick();
  window.addEventListener('keydown', onKeysDown);
  window.addEventListener('keyup', onKeysUp);
};

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', () => {
  getLocalStorage();
  init();
});
