import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Gr = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M0 0h120v90H0z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#a)" transform="scale(5.33)" stroke-width="1pt">
    <path d="M0 0h135v10H0z"/>
    <path d="M0 10h135v10H0z"/>
    <path d="M0 20h135v10H0z"/>
    <path d="M0 30h135v10H0z"/>
    <path d="M0 40h135v10H0z"/>
    <path d="M0 50h135v10H0z"/>
    <path d="M0 60h135v10H0z"/>
    <path d="M0 70h135v10H0z"/>
    <path d="M0 80h135v10H0zM0 0h50v50H0z"/>
    <g>
      <path d="M20 0h10v50H20z"/>
      <path d="M0 20h50v10H0z"/>
    </g>
  </g>

  </SvgIcon>
);
Gr = pure(Gr);
Gr.displayName = 'Gr';

export default Gr;
