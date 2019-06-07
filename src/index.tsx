import React from 'react';
import SparklineSvg from 'sparkline-svg';

interface ISparklineProps {
  decimals?: number;
  desc?: string;
  fill?: string;
  height?: string;
  preserveAspectRatio?: string;
  stroke?: string;
  strokeWidth?: number | string;
  title?: string;
  values: number[];
  viewBoxHeight?: number;
  viewBoxWidth?: number;
  width?: string;
}

export default function Sparkline({
  decimals = 4,
  desc = 'A line graph representation of a value\'s change over time.',
  fill = 'transparent',
  height = '100%',
  preserveAspectRatio = 'none',
  stroke = 'currentColor',
  strokeWidth = '1%',
  title = 'Sparkline',
  values,
  viewBoxHeight = 100,
  viewBoxWidth = 100,
  width = '100%',
}: ISparklineProps): JSX.Element {

  // Create a Sparkline by only providing the properties required to generate
  //   the `d` attribute of the `<path />` elements.
  const sparkline: SparklineSvg = new SparklineSvg(values);
  sparkline.setDecimals(decimals);
  sparkline.setViewBoxHeight(viewBoxHeight);
  sparkline.setViewBoxWidth(viewBoxWidth);

  // sparkline.setDesc(desc);
  // sparkline.setFill(fill);
  // sparkline.setHeight(height);
  // sparkline.setPreserveAspectRatio(preserveAspectRatio);
  // sparkline.setStroke(stroke);
  // sparkline.setStrokeWidth(strokeWidth);
  // sparkline.setTitle(title);
  // sparkline.setWidth(width);

  return (
    <svg
      height={height}
      preserveAspectRatio={preserveAspectRatio}
      version="1.1"
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      x="0px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      y="0px"
      width={width}
    >
      <title>{title}</title>
      <desc>{desc}</desc>
      {

        // Do not render any path if there are no values.
        values.length > 0 &&
        <>
          {

            // Do not render a fill path if the fill color is transparent.
            fill !== 'transparent' &&
            <path
              d={
                sparkline.d +
                ` L ${viewBoxWidth},${viewBoxHeight}` +
                ` L 0,${viewBoxHeight} Z`
              }
              fill={fill}
              stroke="transparent"
              strokeWidth="0"
            />
          }
          <path
            d={sparkline.d}
            fill="transparent"
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        </>
      }
    </svg>
  );
}
