const PrettierPlugin = require('prettier-webpack-plugin');

module.exports = neutrino => {
  neutrino.custom.prettier = {
    printWidth: 80,
    tabWidth: 2,
    singleQuote: true,
    trailingComma: false,
    bracketSpacing: true,
    parser: 'babylon',
    encoding: 'utf-8',
    extensions: [ '.js', '.jsx' ]
  };

  neutrino.config
    .plugin('prettier')
    .use(PrettierPlugin, neutrino.custom.prettier)
}
