# React Sparkline SVG  [![version](https://img.shields.io/npm/v/react-sparkline-svg.svg)](https://www.npmjs.com/package/react-sparkline-svg) [![minzipped size](https://img.shields.io/bundlephobia/minzip/react-sparkline-svg.svg)](https://www.npmjs.com/package/react-sparkline-svg) [![downloads](https://img.shields.io/npm/dt/react-sparkline-svg.svg)](https://www.npmjs.com/package/react-sparkline-svg) [![build](https://api.travis-ci.com/CharlesStover/react-sparkline-svg.svg)](https://travis-ci.com/CharlesStover/react-sparkline-svg/)

A React Component that renders a sparkline as an SVG.

## Install

* `npm install react-sparkline-svg` or
* `yarn add react-sparkline-svg`

## Use

```JavaScript
import Sparkline from 'react-sparkline-svg';

function App() {
  return <Sparkline values={[ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ]} />;
}
```

## Props

### decimals

_Optional_ number

Sets the number of decimal places used to generate the sparkline. A larger
number of decimal places will result in better precision, but more memory.

_Default: 4_

### desc

_Optional_ string

Sets the description of the sparkline. Used to populate the `<desc>` element.

_Default: 'A line graph representation of a value\'s change over time.'_

### fill

_Optional_ string

Sets the color of the area underneath the sparkline.

_Default: 'transparent'_

### height

_Optional_ number

Sets the height of the sparkline's SVG element. Not to be confused with
`viewBoxHeight`.

_Default: '100%'_

### preserveAspectRatio

_Optional_ string

Sets the `preserveAspectRatio` attribute of the SVG element.

_Default: 'none'_

### stroke

_Optional_ string

Sets the color of the sparkline itself.

_Default: 'currentColor'_

### strokeWidth

_Optional_ number or string

Sets the width of the sparkline itself. If using a number, this will be
relative to the view box height and width.

_Default: '1%'_

### title

_Optional_ string

Sets the title of the sparkline SVG by populating the <title> element. This
is useful for accessibility purposes and often appears as a tooltip, similar
to the title attribute on an anchor tag.

_Default: 'Sparkline'_

### values

_Required_ array of numbers

Sets the values used to generate the sparkline.

### viewBoxHeight

_Optional_ number

Sets the height of the sparkline's view box. Not to be confused with
`height`. The sparkline will always stretch to fit the view box.

_Default: 100_

### viewBoxWidth

_Optional_ number

Sets the width of the sparkline's view box. Not to be confused with `width`.
The sparkline will always stretch to fit the view box.

_Default: 100_

### width

_Optional_ string

Sets the width of the sparkline's SVG element. Not to be confused with
`viewBoxWidth`.

_Default: '100%'_

## Sponsor 💗

If you are a fan of this project, you may
[become a sponsor](https://github.com/sponsors/CharlesStover)
via GitHub's Sponsors Program.
