import React from 'react';

const SIZE = 1000;

export default function Sparkline({
  desc = 'A line graph representation of a value\'s change over time.',
  height = 100,
  preserveAspectRatio = 'none',
  stroke = 'rgba(255, 255, 255, 0.5)',
  title = 'Sparkline',
  values = [],
  width = 100,
}) {
  let l = [];
  const max = Math.max(...values);
  const length = values.length;
  for (let i = 0; i < length; i++) {
    l.push(
      (Math.round(i / length * SIZE * 100) / 100) + ',' +
      (Math.round((SIZE - (values[i] / max * SIZE)) * 100) / 100),
    );
  }
  return (
    <svg
      preserveAspectRatio={preserveAspectRatio}
      style={{ height, stroke, width }}
      version="1.1"
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      x="0px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      y="0px"
    >
      <title>{title}</title>
      <desc>{desc}</desc>
      {
        length > 0 &&
        <path
          d={`M ${l.join(' L ')}`}
          fill="transparent"
          strokeWidth={1}
        />
      }
    </svg>
  );
}
