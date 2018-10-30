import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faChevronUp);

class PageTop extends React.Component {
  render() {
    return (
      <div className="mypage-pagetop">
        <a href="#"><FontAwesomeIcon icon="chevron-up" size="2x" className="icon-orange" fixedWidth /></a>
      </div>
    );
  }
}
export default PageTop;