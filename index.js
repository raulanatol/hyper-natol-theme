const backgroundColor = 'rgba(40, 44, 52, 0.99)';
const foregroundColor = '#abb2bf';
const cursorColor = foregroundColor;
const borderColor = backgroundColor;

const colors = {
  black: backgroundColor,
  red: '#e06c75',
  green: '#98c379',
  yellow: '#d19a66',
  blue: '#56b6c2',
  magenta: '#c678dd',
  cyan: '#56b6c2',
  white: '#d0d0d0',
  lightBlack: '#808080',
  lightRed: '#e06c75',
  lightGreen: '#98c379',
  lightYellow: '#d19a66',
  lightBlue: '#56b6c2',
  lightMagenta: '#c678dd',
  lightCyan: '#56b6c2',
  colorCubes: '#ffffff',
  grayscale: foregroundColor
};

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    fontFamily: 'Monaco for Powerline, Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors
  });
};
