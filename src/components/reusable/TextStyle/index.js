import React from 'react'
import PropTypes from "prop-types";
import {StyleH1,StyleH2,StyleH3,StyleH4} from './TextStyleElements';

const TextStyle = ({isH1 = false, textH1 = '', 
isH2  = false, textH2 = '', 
isH3  = false, textH3 = '', 
isH4  = false, textH4 = '',
hasP = false}) => {
    return (
      <>
        
        {isH1 ? (
          <StyleH1>{ (hasP? <p>{textH1}</p>:{textH1})}</StyleH1>
        ) : isH2 ? (
          <StyleH2>{ (hasP? <p>{textH2}</p>:{textH2})}</StyleH2>
        ) : isH3 ? (
          <StyleH3>{ (hasP? <p>{textH3}</p>:{textH3})}</StyleH3>
        ) : isH4 ? (
          <StyleH4>{ (hasP? <p>{textH4}</p>:{textH4})}</StyleH4>
        ) : (
          ``
        )}
      </>
    );
}

TextStyle.propTypes = {
  isH1: PropTypes.bool.isRequired,
  textH1: PropTypes.string,
  isH2: PropTypes.bool.isRequired,
  textH2: PropTypes.string,
  isH3: PropTypes.bool.isRequired,
  textH3: PropTypes.string,
  isH4: PropTypes.bool.isRequired,
  textH4: PropTypes.string,
  hasP: PropTypes.bool.isRequired
}

export default TextStyle;
