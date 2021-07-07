import React from 'react';
import Button from './Button';
import './Item.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Item = ({
  title,
  desc,
  descUnderLinkTxt,
  descLink,
  backgroundImg,
  leftBtnTxt,
  leftBtnLink,
  rightBtnTxt,
  rightBtnLink,
  twoButtons,
  first,
}) => {
  return (
    <div
      className='item'
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className='item_container'>
        <div className='item_text'>
          <p>{title}</p>
          <div className='item_textDesc'>
            <p>
              <span className='item_txtUndeline1'>{desc}</span>{' '}
              <span className='item_txtUndeline2'>{descUnderLinkTxt}</span>
            </p>
          </div>
        </div>
        <div className='item_lowerThird'>
          <div className='item_buttons'>
            <Button imp='primary' text={leftBtnTxt} link={leftBtnLink} />
            {twoButtons && (
              <Button imp='secondary' text={rightBtnTxt} link={rightBtnLink} />
            )}
          </div>
          {first && (
            <div className='item_expand'>
              <ExpandMoreIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
