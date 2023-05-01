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
      if (['Backspace', 'CapsLock'].includes(key.eventCode)) {
        keyElement.classList.add('service-key', 'keyboard__key_wider');
      } else if (['Tab', 'Delete', 'ArrowUp', 'ControlLeft', 'ControlRight', 'MetaLeft', 'AltRight',
        'AltLeft', 'ArrowLeft', 'ArrowDown', 'ArrowRight'].includes(key.eventCode)) {
        keyElement.classList.add('service-key');
      } else if (['Enter'].includes(key.eventCode)) {
        keyElement.classList.add('service-key', 'keyboard__key_wide');
      } else if (key.eventCode === 'Space') {
        keyElement.classList.add('service-key', 'keyboard__key_extra-wide');
      } else if (key.eventCode === 'ShiftRight') {
        keyElement.classList.add('service-key', 'keyboard__key_wide', 'shift');
      } else if (key.eventCode === 'ShiftLeft') {
        keyElement.classList.add('service-key', 'keyboard__key_wider', 'shift');
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

// put new symbol into textarea
const textareaFilling = (event) => {
  const textarea = document.querySelector('.textarea-body');
  textarea.focus();
  const cursorPosition = textarea.selectionStart;
  if (event.target.textContent === 'Backspace' || event.code === 'Backspace') {
    if (cursorPosition !== 0) {
      textarea.value = textarea.value.slice(0, cursorPosition - 1)
      + textarea.value.slice(cursorPosition);
      textarea.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
    }
  } else if (event.target.textContent === 'Tab' || event.code === 'Tab') {
    textarea.value = `${textarea.value.slice(0, cursorPosition)}  ${textarea.value.slice(cursorPosition)}`;
    textarea.setSelectionRange(cursorPosition + 2, cursorPosition + 2);
  } else if (event.target.textContent === 'Del' || event.code === 'Delete') {
    textarea.value = textarea.value.slice(0, cursorPosition)
    + textarea.value.slice(cursorPosition + 1);
    textarea.setSelectionRange(cursorPosition, cursorPosition);
  } else if (['CapsLock', 'Shift', 'Ctrl', 'Alt', 'Win'].includes(event.target.textContent)
  || ['CapsLock', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'AltLeft', 'AltRight', 'ControlRight', 'MetaLeft'].includes(event.code)) {
    textarea.value += '';
  } else if (event.target.textContent === 'Enter' || event.code === 'Enter') {
    textarea.value = `${textarea.value.slice(0, cursorPosition)}\n${textarea.value.slice(cursorPosition)}`;
  } else if (event.target.textContent === 'Space' || event.code === 'Space') {
    textarea.value = `${textarea.value.slice(0, cursorPosition)} ${textarea.value.slice(cursorPosition)}`;
    textarea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  } else if (!event.code) {
    textarea.value = `${textarea.value.slice(0, cursorPosition)}${event.target.textContent}${textarea.value.slice(cursorPosition)}`;
    textarea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  } else {
    textarea.value = `${textarea.value.slice(0, cursorPosition)}${document.querySelector(`.${event.code}`).textContent}${textarea.value.slice(cursorPosition)}`;
    textarea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  }
};

let capsLockEnabled = false;

// capsLock handler
const onCapsLock = (e) => {
  if ((e.code === 'CapsLock' || e.target.classList.contains('CapsLock'))) {
    if (capsLockEnabled) {
      updateKeyboardState(currnetLanguage);
      capsLockEnabled = false;
    } else {
      capsLockEnabled = true;
      updateKeyboardState(currnetLanguage, 'caps');
    }
  }
};

// change language when CapsLokk and Shift are on
const changeLanguageWithCapsAndShift = () => {
  updateKeyboardState(currnetLanguage, 'shift');
  if (capsLockEnabled) {
    document.querySelectorAll('.keyboard__key').forEach((el) => {
      if (!el.classList.contains('service-key')) {
        const keyValue = el;
        keyValue.textContent = keyValue.textContent.toLowerCase();
      }
    });
  }
};

// chanhe keyboard layout when shift is pressing
const onShift = (e) => {
  if (e.shiftKey || e.target.classList.contains('ShiftRight') || e.target.classList.contains('ShiftLeft')) {
    changeLanguageWithCapsAndShift();
  }
};

const outShift = (e) => {
  if (!e.shiftKey || e.target.classList.contains('shift')) {
    if (capsLockEnabled) {
      updateKeyboardState(currnetLanguage, 'caps');
    } else {
      updateKeyboardState(currnetLanguage);
    }
  }
};

// swith language when Ctrl and Alt are pressing
const onCtrlAlt = (e) => {
  const shiftLeft = document.querySelector('.ShiftLeft');
  const ShiftRight = document.querySelector('.ShiftRight');
  if (e.ctrlKey && e.altKey) {
    if (currnetLanguage === keyLayoutEn) {
      currnetLanguage = keyLayoutUa;
    } else {
      currnetLanguage = keyLayoutEn;
    }

    if ((capsLockEnabled && e.shiftKey)
    || (capsLockEnabled && (ShiftRight.classList.contains('active') || shiftLeft.classList.contains('active')))) {
      changeLanguageWithCapsAndShift();
    } else if ((capsLockEnabled && e.shiftKey)
    || (capsLockEnabled && (!ShiftRight.classList.contains('active') || !shiftLeft.classList.contains('active')))) {
      updateKeyboardState(currnetLanguage, 'caps');
    } else if ((!capsLockEnabled && e.shiftKey)
    || (!capsLockEnabled && (ShiftRight.classList.contains('active') || shiftLeft.classList.contains('active')))) {
      updateKeyboardState(currnetLanguage, 'shift');
    } else {
      updateKeyboardState(currnetLanguage);
    }
  }
};

// keyyboard keys handlers
const onKeysDown = (e) => {
  e.preventDefault();
  document.querySelector(`.${e.code}`).classList.add('active');

  textareaFilling(e);
  onCapsLock(e);
  onShift(e);
  onCtrlAlt(e);
};

const onKeysUp = (e) => {
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    outShift(e);
  }
  if (e.code === 'CapsLock' && capsLockEnabled) {
    document.querySelector(`.${e.code}`).classList.add('active');
  } else {
    document.querySelector(`.${e.code}`).classList.remove('active');
  }
};

const onKeyClick = () => {
  document.querySelectorAll('.keyboard__key').forEach((key) => {
    key.addEventListener('click', textareaFilling);
  });

  document.querySelectorAll('.keyboard__key').forEach((key) => {
    key.addEventListener('mousedown', (e) => {
      onCapsLock(e);
      onShift(e);
      e.target.classList.add('active');
    });
  });
  document.querySelectorAll('.keyboard__key').forEach((key) => {
    key.addEventListener('mouseup', (e) => {
      if (!capsLockEnabled) {
        e.target.classList.remove('active');
      }
      outShift(e);
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
