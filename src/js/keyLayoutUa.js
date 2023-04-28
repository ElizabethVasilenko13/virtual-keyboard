const keyLayoutUa = [
  [
    {
      keyboardKey: ';', caps: '`', shift: '~', eventCode: 'Backquote',
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
      keyboardKey: 'й', caps: 'Й', shift: 'Й', eventCode: 'KeyQ',
    },
    {
      keyboardKey: 'ц', caps: 'Ц', shift: 'Ц', eventCode: 'KeyW',
    },
    {
      keyboardKey: 'у', caps: 'У', shift: 'У', eventCode: 'KeyE',
    },
    {
      keyboardKey: 'к', caps: 'К', shift: 'К', eventCode: 'KeyR',
    },
    {
      keyboardKey: 'е', caps: 'Е', shift: 'Е', eventCode: 'KeyT',
    },
    {
      keyboardKey: 'н', caps: 'Н', shift: 'Н', eventCode: 'KeyY',
    },
    {
      keyboardKey: 'г', caps: 'Г', shift: 'Г', eventCode: 'KeyU',
    },
    {
      keyboardKey: 'ш', caps: 'Ш', shift: 'Ш', eventCode: 'KeyI',
    },
    {
      keyboardKey: 'щ', caps: 'Щ', shift: 'Щ', eventCode: 'KeyO',
    },
    {
      keyboardKey: 'з', caps: 'З', shift: 'З', eventCode: 'KeyP',
    },
    {
      keyboardKey: 'х', caps: 'Х', shift: 'Х', eventCode: 'BracketLeft',
    },
    {
      keyboardKey: 'ї', caps: 'Ї', shift: 'Ї', eventCode: 'BracketRight',
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
      keyboardKey: 'ф', caps: 'Ф', shift: 'Ф', eventCode: 'KeyA',
    },
    {
      keyboardKey: 'і', caps: 'І', shift: 'І', eventCode: 'KeyS',
    },
    {
      keyboardKey: 'в', caps: 'В', shift: 'В', eventCode: 'KeyD',
    },
    {
      keyboardKey: 'а', caps: 'А', shift: 'А', eventCode: 'KeyF',
    },
    {
      keyboardKey: 'п', caps: 'П', shift: 'П', eventCode: 'KeyG',
    },
    {
      keyboardKey: 'р', caps: 'Р', shift: 'Р', eventCode: 'KeyH',
    },
    {
      keyboardKey: 'о', caps: 'О', shift: 'О', eventCode: 'KeyJ',
    },
    {
      keyboardKey: 'л', caps: 'Л', shift: 'Л', eventCode: 'KeyK',
    },
    {
      keyboardKey: 'д', caps: 'Д', shift: 'Д', eventCode: 'KeyL',
    },
    {
      keyboardKey: 'ж', caps: 'Ж', shift: 'Ж', eventCode: 'Semicolon',
    },
    {
      keyboardKey: 'є', caps: 'Є', shift: 'Є', eventCode: 'Quote',
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
      keyboardKey: 'я', caps: 'Я', shift: 'Я', eventCode: 'KeyZ',
    },
    {
      keyboardKey: 'ч', caps: 'Ч', shift: 'Ч', eventCode: 'KeyX',
    },
    {
      keyboardKey: 'с', caps: 'С', shift: 'С', eventCode: 'KeyC',
    },
    {
      keyboardKey: 'м', caps: 'М', shift: 'М', eventCode: 'KeyV',
    },
    {
      keyboardKey: 'и', caps: 'И', shift: 'И', eventCode: 'KeyB',
    },
    {
      keyboardKey: 'т', caps: 'Т', shift: 'Т', eventCode: 'KeyN',
    },
    {
      keyboardKey: 'ь', caps: 'Ь', shift: 'Ь', eventCode: 'KeyM',
    },
    {
      keyboardKey: 'б', caps: 'Б', shift: 'Б', eventCode: 'Comma',
    },
    {
      keyboardKey: 'ю', caps: 'Ю', shift: 'Ю', eventCode: 'Period',
    },
    {
      keyboardKey: '.', caps: '/', shift: '?', eventCode: 'Slash',
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
export default keyLayoutUa;
