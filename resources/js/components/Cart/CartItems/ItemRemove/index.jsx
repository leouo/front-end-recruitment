import React from 'react';
import './style.scss';

const ItemRemove = ({ item, remove, setSpecialClass }) => (
  <div
    onClick={() => remove(item)}
    onMouseOver={setSpecialClass('remove')}
    onMouseOut={setSpecialClass('')}
    styleName='item-remove'>
    <span>x</span>
  </div>
);

export default ItemRemove;
