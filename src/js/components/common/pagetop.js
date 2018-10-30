import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faChevronCircleUp);

class PageTop extends React.Component {
  render() {
    return (
      <div className="common-pagetop">
        <a href="#"><FontAwesomeIcon icon="chevron-circle-up" size="3x" className="icon-orange" fixedWidth /></a>
      </div>
    );
  }
}
export default PageTop;