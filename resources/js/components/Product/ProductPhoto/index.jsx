import React from 'react';
import configs from 'Configs';
import './style.scss';

const ProductPhoto = props => {
  const { id, type, title } = props;

  const getSourcebyType = (id, type) => {
    const imgPath = configs.dirContent + id;
    return (type === 'thumb') ? `${imgPath}_thumb.jpg` : `${imgPath}.jpg`;
  };

  return (
    <figure styleName='product-photo'>
      <img src={getSourcebyType(id, type)} alt={title} />
    </figure>
  );
};

export default ProductPhoto;
