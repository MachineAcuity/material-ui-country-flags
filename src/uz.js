import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Uz = (props) => (
  <SvgIcon {...props}>
    
  <path d="M0 320h640v160H0z"/>
  <path d="M0 0h640v160H0z"/>
  <path d="M0 153.6h640v172.8H0z"/>
  <path d="M0 163.2h640v153.6H0z"/>
  <circle cx="134.4" cy="76.8" r="57.6"/>
  <circle cx="153.6" cy="76.8" r="57.6"/>
  <g transform="matrix(1.92 0 0 1.92 261.12 122.88)">
    <g id="e">
      <g id="d">
        <g id="c">
          <g id="b">
            <path id="a" d="M0-6L-1.854-.294 1 .633"/>
            <use height="100%" width="100%"  transform="scale(-1 1)"/>
          </g>
          <use height="100%" width="100%"  transform="rotate(72)"/>
        </g>
        <use height="100%" width="100%"  transform="rotate(-72)"/>
        <use height="100%" width="100%"  transform="rotate(144)"/>
      </g>
      <use height="100%" width="100%"  y="-24"/>
      <use height="100%" width="100%"  y="-48"/>
    </g>
    <use height="100%" width="100%"  x="24"/>
    <use height="100%" width="100%"  x="48"/>
    <use height="100%" width="100%"  x="-48"/>
    <use height="100%" width="100%"  x="-24"/>
    <use height="100%" width="100%"  x="-24" y="-24"/>
  </g>

  </SvgIcon>
);
Uz = pure(Uz);
Uz.displayName = 'Uz';

export default Uz;
