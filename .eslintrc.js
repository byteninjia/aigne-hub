const { join } = require('path');

module.exports = {
  root: true,
  extends: '@arcblock/eslint-config-ts',
  parserOptions: {
    project: [join(__dirname, 'tsconfig.eslint.json'), join(__dirname, 'blocklets/ai-kit/tsconfig.json')],
  },
  globals: {
    logger: true,
  },
};
