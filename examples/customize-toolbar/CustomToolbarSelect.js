import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
//import CompareArrowsIcon from '@material-ui/icons/Delete';
import IndeterminateCheckBoxIcon from '@material-ui/icons/AddShoppingCart';
import BlockIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';

const defaultToolbarSelectStyles = {
  iconButton: {},
  iconContainer: {
    marginRight: '24px',
  },
  inverseIcon: {
    transform: 'rotate(90deg)',
  },
};

class CustomToolbarSelect extends React.Component {
  handleClickInverseSelection = () => {
    const nextSelectedRows = this.props.displayData.reduce((nextSelectedRows, _, index) => {
      if (!this.props.selectedRows.data.find(selectedRow => selectedRow.index === index)) {
        nextSelectedRows.push(index);
      }

      return nextSelectedRows;
    }, []);

    this.props.setSelectedRows(nextSelectedRows);
  };

  handleClickAddToCart = () => {
    this.props.setSelectedRows([]);
  };

  handleClickDeleteSelectd = () => {
    console.log(`block users with dataIndexes: ${this.props.selectedRows.data.map(row => row.dataIndex)}`);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.iconContainer}>
        <Tooltip title={'Deselect ALL'}>
          <IconButton className={classes.iconButton} onClick={this.handleClickAddToCart}>
            <IndeterminateCheckBoxIcon className={classes.icon} />
          </IconButton>
        </Tooltip>
        {/* <Tooltip title={'Inverse selection'}>
          <IconButton className={classes.iconButton} onClick={this.handleClickInverseSelection}>
            <CompareArrowsIcon className={[classes.icon, classes.inverseIcon].join(' ')} />
          </IconButton>
        </Tooltip> */}
        <Tooltip title={'Delete'}>
          <IconButton className={classes.iconButton} onClick={this.handleClickDeleteSelectd}>
            <BlockIcon className={classes.icon} />
          </IconButton>
        </Tooltip>
      </div>
    );
  }
}

export default withStyles(defaultToolbarSelectStyles, { name: 'CustomToolbarSelect' })(CustomToolbarSelect);
