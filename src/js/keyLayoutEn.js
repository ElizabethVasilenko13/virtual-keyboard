const keyLayoutEn = [
  [
    {
      keyboardKey: '`', caps: '`', shift: '~', eventCode: 'Backquote',
    },
    {
      keyboardKey: '1', caps: '1', shift: '!', eventCode: 'Digit1',
    },
    {
      keyboardKey: '2', caps: '2', shift: '@', eventCode: 'Digit2',
    },
    {
      keyboardKey: '3', caps: '3', shift: '#', eventCode: 'Digit3',
    },
    {
      keyboardKey: '4', caps: '4', shift: '$', eventCode: 'Digit4',
    },
    {
      keyboardKey: '5', caps: '5', shift: '%', eventCode: 'Digit5',
    },
    {
      keyboardKey: '6', caps: '6', shift: '^', eventCode: 'Digit6',
    },
    {
      keyboardKey: '7', caps: '7', shift: '&', eventCode: 'Digit7',
    },
    {
      keyboardKey: '8', caps: '8', shift: '*', eventCode: 'Digit8',
    },
    {
      keyboardKey: '9', caps: '9', shift: '(', eventCode: 'Digit9',
    },
    {
      keyboardKey: '0', caps: '0', shift: ')', eventCode: 'Digit0',
    },
    {
      keyboardKey: '-', caps: '-', shift: '_', eventCode: 'Minus',
    },
    {
      keyboardKey: '=', caps: '=', shift: '+', eventCode: 'Equal',
    },
    {
      keyboardKey: 'Backspace', caps: 'Backspace', shift: 'Backspace', eventCode: 'Backspace',
    },
  ],
  [
    {
      keyboardKey: 'Tab', caps: 'Tab', shift: 'Tab', eventCode: 'Tab',
    },
    {
      keyboardKey: 'q', caps: 'Q', shift: 'Q', eventCode: 'KeyQ',
    },
    {
      keyboardKey: 'w', caps: 'W', shift: 'W', eventCode: 'KeyW',
    },
    {
      keyboardKey: 'e', caps: 'E', shift: 'E', eventCode: 'KeyE',
    },
    {
      keyboardKey: 'r', caps: 'R', shift: 'R', eventCode: 'KeyR',
    },
    {
      keyboardKey: 't', caps: 'T', shift: 'T', eventCode: 'KeyT',
    },
    {
      keyboardKey: 'y', caps: 'Y', shift: 'Y', eventCode: 'KeyY',
    },
    {
      keyboardKey: 'u', caps: 'U', shift: 'U', eventCode: 'KeyU',
    },
    {
      keyboardKey: 'i', caps: 'I', shift: 'I', eventCode: 'KeyI',
    },
    {
      keyboardKey: 'o', caps: 'O', shift: 'O', eventCode: 'KeyO',
    },
    {
      keyboardKey: 'p', caps: 'P', shift: 'P', eventCode: 'KeyP',
    },
    {
      keyboardKey: '[', caps: '[', shift: '{', eventCode: 'BracketLeft',
    },
    {
      keyboardKey: ']', caps: ']', shift: '}', eventCode: 'BracketRight',
    },
    {
      keyboardKey: '\\', caps: '\\', shift: '|', eventCode: 'Backslash',
    },
    {
      keyboardKey: 'Del', caps: 'Del', shift: 'Del', eventCode: 'Delete',
    },
  ],
  [
    {
      keyboardKey: 'CapsLock', caps: 'CapsLock', shift: 'CapsLock', eventCode: 'CapsLock',
    },
    {
      keyboardKey: 'a', caps: 'A', shift: 'A', eventCode: 'KeyA',
    },
    {
      keyboardKey: 's', caps: 'S', shift: 'S', eventCode: 'KeyS',
    },
    {
      keyboardKey: 'd', caps: 'D', shift: 'D', eventCode: 'KeyD',
    },
    {
      keyboardKey: 'f', caps: 'F', shift: 'F', eventCode: 'KeyF',
    },
    {
      keyboardKey: 'g', caps: 'G', shift: 'G', eventCode: 'KeyG',
    },
    {
      keyboardKey: 'h', caps: 'H', shift: 'H', eventCode: 'KeyH',
    },
    {
      keyboardKey: 'j', caps: 'J', shift: 'J', eventCode: 'KeyJ',
    },
    {
      keyboardKey: 'k', caps: 'K', shift: 'K', eventCode: 'KeyK',
    },
    {
      keyboardKey: 'l', caps: 'L', shift: 'L', eventCode: 'KeyL',
    },
    {
      keyboardKey: ';', caps: ';', shift: ':', eventCode: 'Semicolon',
    },
    {
      keyboardKey: '\'', caps: '\'', shift: '"', eventCode: 'Quote',
    },
    {
      keyboardKey: 'Enter', caps: 'Enter', shift: 'Enter', eventCode: 'Enter',
    },
  ],
  [
    {
      keyboardKey: 'Shift', caps: 'Shift', shift: 'Shift', eventCode: 'ShiftLeft',
    },
    {
      keyboardKey: 'z', caps: 'Z', shift: 'Z', eventCode: 'KeyZ',
    },
    {
      keyboardKey: 'x', caps: 'X', shift: 'X', eventCode: 'KeyX',
    },
    {
      keyboardKey: 'c', caps: 'C', shift: 'C', eventCode: 'KeyC',
    },
    {
      keyboardKey: 'v', caps: 'V', shift: 'V', eventCode: 'KeyV',
    },
    {
      keyboardKey: 'b', caps: 'B', shift: 'B', eventCode: 'KeyB',
    },
    {
      keyboardKey: 'n', caps: 'N', shift: 'N', eventCode: 'KeyN',
    },
    {
      keyboardKey: 'm', caps: 'M', shift: 'M', eventCode: 'KeyM',
    },
    {
      keyboardKey: ',', caps: ',', shift: '<', eventCode: 'Comma',
    },
    {
      keyboardKey: '.', caps: '.', shift: '>', eventCode: 'Period',
    },
    {
      keyboardKey: '/', caps: '/', shift: '?', eventCode: 'Slash',
    },
    {
      keyboardKey: '▲', caps: '▲', shift: '▲', eventCode: 'ArrowUp',
    },
    {
      keyboardKey: 'Shift', caps: 'Shift', shift: 'Shift', eventCode: 'ShiftRight',
    },
  ],
  [
    {
      keyboardKey: 'Ctrl', caps: 'Ctrl', shift: 'Ctrl', eventCode: 'ControlLeft',
    },
    {
      keyboardKey: 'Win', caps: 'Win', shift: 'Win', eventCode: 'MetaLeft',
    },
    {
      keyboardKey: 'Alt', caps: 'Alt', shift: 'Alt', eventCode: 'AltLeft',
    },
    {
      keyboardKey: 'Space', caps: 'Space', shift: 'Space', eventCode: 'Space',
    },
    {
      keyboardKey: 'Alt', caps: 'Alt', shift: 'Alt', eventCode: 'AltRight',
    },
    {
      keyboardKey: '◄', caps: '◄', shift: '◄', eventCode: 'ArrowLeft',
    },
    {
      keyboardKey: '▼', caps: '▼', shift: '▼', eventCode: 'ArrowDown',
    },
    {
      keyboardKey: '►', caps: '►', shift: '►', eventCode: 'ArrowRight',
    },
    {
      keyboardKey: 'Ctrl', caps: 'Ctrl', shift: 'Ctrl', eventCode: 'ControlRight',
    },
  ],
];
export default keyLayoutEn;
