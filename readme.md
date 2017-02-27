# Neutrino Prettier Preset

Easy to use neutrino preset that will apply
[Prettier](https://github.com/prettier/prettier) to all code being
compiled.

> Prettier is an opinionated JavaScript formatter inspired by refmt with
advanced support for language features from ES2017, JSX, and Flow. It removes
all original styling and ensures that all outputted JavaScript conforms to a
consistent style.

## Installation

With yarn:
```
$ yarn add neutrino-preset-prettier -D
```

Or npm:
```
$ npm i neutrino-preset-prettier -D
```

Next, add to your `package.json`

```javascript
{
  "config": {
    "presets": [
      "neutrino-preset-react",
      "neutrino-preset-prettier"
    ]
  },
  "scripts": {
    "start": "neutrino start"
  }
}
```

## Options

Here are the default settings:
```javascript
{
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: false,
  bracketSpacing: true,
  parser: 'babylon',
  encoding: 'utf-8',
  extensions: [ '.js', '.jsx' ]
}
```

Options are found on `neutrino.custom.prettier`
