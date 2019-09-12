import * as React from 'react';

interface IProps {
  width?: number;
  height?: number;
  fillColor?: string;
  className?: string;
}

const Logo: React.SFC<IProps> = ({ width = 158, height = 82, ...props }) => {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <g fill="none" fill-rule="evenodd">
        <rect width="158" height="82" fill="#C6161D" />
        <text
          fill="#FFF"
          font-family="Arvo-Bold, Arvo"
          font-size="28"
          font-weight="bold"
          letter-spacing="-.933"
        >
          <tspan x="24" y="51">
            venatus
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export const LogoMastHead: React.SFC<IProps> = props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="108" height="100" viewBox="0 0 108 100">
      <g fill="none" fill-rule="evenodd">
        <rect width="108" height="100" fill="#C6161D" />
        <text
          fill="#FFF"
          font-family="Arvo-Bold, Arvo"
          font-size="28"
          font-weight="bold"
          letter-spacing="-.933"
        >
          <tspan x="45" y="60">
            v
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default Logo;
