import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Ve = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <g id="d" transform="translate(0 -36)">
      <g id="c">
        <g id="b">
          <path d="M0-5L-1.545-.245l2.853.927z" id="a"/>
          <use  transform="scale(-1 1)" width="180" height="120"/>
        </g>
        <use  transform="rotate(72)" width="180" height="120"/>
      </g>
      <use  transform="rotate(-72)" width="180" height="120"/>
      <use  transform="rotate(144)" width="180" height="120"/>
    </g>
  </defs>
  <path d="M0 0h128v96H0z"/>
  <path d="M0 0h128v64H0z"/>
  <path d="M0 0h128v32H0z"/>
  <g transform="matrix(.8 0 0 .8 64 67.2)">
    <g id="f">
      <g id="e">
        <use  transform="rotate(10)" width="180" height="120"/>
        <use  transform="rotate(30)" width="180" height="120"/>
      </g>
      <use  transform="rotate(40)" width="180" height="120"/>
    </g>
    <use  transform="rotate(-80)" width="180" height="120"/>
  </g>

  </SvgIcon>
);
Ve = pure(Ve);
Ve.displayName = 'Ve';

export default Ve;
