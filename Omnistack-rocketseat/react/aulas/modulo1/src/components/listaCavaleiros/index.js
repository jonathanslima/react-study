import React from 'react';
import CavaleiroImg from '../cavaleiroImg/index';

const ListaCavaleiros = () => (
  <ul className="lista">
    <li className="cavaleiro">
      <CavaleiroImg description="Seya - Cavaleiro de Pégaso" />
    </li>
    <li className="cavaleiro">
      <CavaleiroImg url="https://bit.ly/2OgeKx7" description="Hyoga - Cavaleiro de Cisne" />
    </li>
    <li className="cavaleiro">
      <CavaleiroImg url="https://bit.ly/2YqD2Iw" description="Shun - Cavaleiro de Andrômeda" />
    </li>
    <li className="cavaleiro">
      <CavaleiroImg url="https://bit.ly/30RmI10" description="Shiryu - Cavaleiro de Dragão" />
    </li>
    <li className="cavaleiro">
      <CavaleiroImg url="https://bit.ly/2Yl3d3A" description="Ikki - Cavaleiro de Fênix" />
    </li>
  </ul>
);

export default ListaCavaleiros;
