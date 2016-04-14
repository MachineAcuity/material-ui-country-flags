import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Ge = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <g id="c">
      <clipPath id="a">
        <path d="M-109 104a104 104 0 0 0 0-208h218a104 104 0 0 0 0 208z"/>
      </clipPath>
      <path id="b" clip-path="url(#a)" d="M-55 74a55 55 0 0 1 110 0V-74a55 55 0 0 1-110 0z"/>
      <use  transform="rotate(90)" height="200" width="300"/>
    </g>
  </defs>
  <path d="M0 0h213.33v160H0z"/>
  <path d="M6.385 13.192h200.56v133.71H6.385z"/>
  <path d="M93.296 13.192v53.484H6.386v26.742h86.91v53.484h26.742V93.418h86.91V66.676h-86.91V13.192H93.296z"/>
  <use  transform="matrix(.67 0 0 .67 49.47 39.57)" height="200" width="300"/>
  <use  transform="matrix(.67 0 0 .67 163.86 120.53)" height="200" width="300"/>
  <use  transform="matrix(.67 0 0 .67 163.86 39.57)" height="200" width="300"/>
  <use  transform="matrix(.67 0 0 .67 49.47 120.53)" height="200" width="300"/>

  </SvgIcon>
);
Ge = pure(Ge);
Ge.displayName = 'Ge';

export default Ge;
