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
const updateKeyboardState = (currentArray, keyType = 'keyboardKey') => {
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

let capsLockEnabled = false;

// capsLock handler

function onCapsLock(capsLockState) {
  if (capsLockState) {
    updateKeyboardState(currnetLanguage, 'caps');
  } else {
    updateKeyboardState(currnetLanguage);
  }
}

// keyyboard keys handlers
const onKeysDown = (e) => {
  e.preventDefault();
  if (e.ctrlKey && e.altKey) {
    if (currnetLanguage === keyLayoutEn) {
      currnetLanguage = keyLayoutUa;
    } else {
      currnetLanguage = keyLayoutEn;
    }
    updateKeyboardState(currnetLanguage);
  }
  if (e.code === 'CapsLock') {
    capsLockEnabled = !capsLockEnabled;
  }
  // if (capsLockEnabled) {
  //   updateKeyboardState(currnetLanguage, 'caps');
  // } else {
  //   updateKeyboardState(currnetLanguage);
  // }
  onCapsLock(capsLockEnabled);
  document.querySelectorAll('.keyboard__key').forEach((key) => {
    if (key.classList.contains('CapsLock') && capsLockEnabled) {
      key.classList.add('active');
    } else {
      key.classList.remove('active');
    }
  });
};

const onKeysUp = (e) => {
  if (e.code === 'CapsLock' && capsLockEnabled) {
    updateKeyboardState(currnetLanguage, 'caps');
  }
  document.querySelectorAll('.keyboard__key').forEach((key) => {
    if (capsLockEnabled) {
      document.querySelector('.CapsLock').classList.add('active');
    }
    key.classList.remove('active');
  });
};

const onKeyClick = () => {
  document.querySelectorAll('.keyboard__key').forEach((key) => {
    key.addEventListener('mousedown', (e) => {
      if (e.target.classList.contains('CapsLock')) {
        capsLockEnabled = !capsLockEnabled;
      }
      onCapsLock(capsLockEnabled);
      e.target.classList.add('active');
    });
  });
  document.querySelectorAll('.keyboard__key').forEach((key) => {
    key.addEventListener('mouseup', (e) => {
      if (e.target.classList.contains('CapsLock') && capsLockEnabled) {
        updateKeyboardState(currnetLanguage, 'caps');
        e.target.classList.add('active');
      } else {
        e.target.classList.remove('active');
      }
    });
  });
  document.querySelectorAll('.keyboard__key').forEach((key) => {
    key.addEventListener('mouseleave', (e) => {
      if (e.target.classList.contains('CapsLock') && capsLockEnabled) {
        e.target.classList.add('active');
      } else {
        e.target.classList.remove('active');
      }
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
