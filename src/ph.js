import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Ph = (props) => (
  <SvgIcon {...props}>
    
  <path d="M0 0h640v240H0z"/>
  <path d="M0 240h640v240H0z"/>
  <path d="M415.692 240L0 480V0"/>
  <g transform="translate(149.333 240) scale(5.33333)">
    <circle r="9"/>
    <g id="d">
      <g id="c">
        <g id="b">
          <path d="M-1 0l.062.062L0 0l-.938-.062z" transform="scale(19)"/>
          <path id="a" d="M-.884.116l.05.05L0 0z" transform="scale(19.2381)"/>
          <use height="100%" width="100%"  transform="scale(1 -1)"/>
        </g>
        <use height="100%" width="100%"  transform="rotate(45)"/>
      </g>
      <use height="100%" width="100%"  transform="rotate(90)"/>
    </g>
    <use height="100%" width="100%"  transform="scale(-1)"/>
    <g transform="translate(-2.02)">
      <g id="f" transform="translate(37.962)">
        <path id="e" d="M5 0L1.618 1.176l-.073 3.58-2.163-2.854-3.427 1.037L-2 0z"/>
        <use height="100%" width="100%"  transform="scale(1 -1)"/>
      </g>
      <use height="100%" width="100%"  transform="rotate(120)"/>
      <use height="100%" width="100%"  transform="rotate(-120)"/>
    </g>
  </g>

  </SvgIcon>
);
Ph = pure(Ph);
Ph.displayName = 'Ph';

export default Ph;
