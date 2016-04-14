import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Mm = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <path id="a" transform="scale(8.844)" d="M0-.5l.162.5h-.324z"/>
    <g id="c">
      <use  transform="rotate(-144)" width="18" height="12"/>
      <use  transform="rotate(-72)" width="18" height="12"/>
      <use  width="18" height="12"/>
      <use  transform="rotate(72)" width="18" height="12"/>
      <use  transform="rotate(144)" width="18" height="12"/>
    </g>
    <clipPath id="b">
      <path d="M1-7.2h16v12H1z"/>
    </clipPath>
  </defs>
  <g transform="matrix(.4 0 0 .4 -.4 2.88)" clip-path="url(#b)">
    <path d="M0-7.2h18v6H0z"/>
    <path d="M0-1.2h18v6H0z"/>
    <path d="M0-3.2h18v4H0z"/>
    <use transform="translate(0 -7.2)" height="12" width="18" y="6.422" x="9" />
  </g>

  </SvgIcon>
);
Mm = pure(Mm);
Mm.displayName = 'Mm';

export default Mm;
