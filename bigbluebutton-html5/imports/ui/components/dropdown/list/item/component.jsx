import React, { Component, PropTypes } from 'react';
import styles from '../styles';
import _ from 'underscore';

import Icon from '/imports/ui/components/icon/component';

const propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
};

export default class DropdownListItem extends Component {
  constructor(props) {
    super(props);
    this.labelID = _.uniqueId('dropdown-item-label-');
    this.descID = _.uniqueId('dropdown-item-desc-');
  }

  renderDefault() {
    let children = [];
    const { icon, label } = this.props;

    return [
      (<Icon iconName={icon} key="icon" className={styles.itemIcon}/>),
      (<span className={styles.itemLabel} key="label">{label}</span>),
    ];
  }

  render() {
    const { label, description, children,
      injectRef, tabIndex, onClick, onKeyDown, } = this.props;

    return (
      <li
        ref={injectRef}
        onClick={onClick}
        onKeyDown={onKeyDown}
        tabIndex={tabIndex}
        aria-labelledby={this.labelID}
        aria-describedby={this.descID}
        className={styles.item}
        role="menuitem">
        {
          children ? children
          : this.renderDefault()
        }
        {
          label ?
          (<span id={this.labelID} key="labelledby" hidden>{label}</span>)
          : null
        }
        {
          description ?
          (<span id={this.descID} key="describedby" hidden>{description}</span>)
          : null
        }
      </li>
      );
  }
}

DropdownListItem.propTypes = propTypes;
