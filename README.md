# React Sparkline SVG

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

* desc: string

Populates the SVG's `<desc>` field.

Default: A line graph representation of a value's change over time.

* height: number

The SVG's height, applied by an inline `style` attribute.

Default: 100

* preserveAspectRatio: string

Default: none

* stroke: string

The color of the sparkline.

Default: rgba(255, 255, 255, 0.5)

* title: string

Populates the SVG's `<title>` field. Typically appears when the user's mouse
hovers over the SVG.

Default: Sparkline

* values: number[]

An array of numbers used to generate the sparkline.

* width: number

The SVG's width, applied by an inline `style` attribute.

Default: 100
