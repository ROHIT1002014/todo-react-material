import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { toggleSnackbar } from '../store/actions/auth';

const NotificationSnackbar = (props) => {
  const { showSnackbar } = props;
  const open = showSnackbar;
  const { snackbarText } = props;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    props.toggleSnackbar(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={snackbarText}
        action={(
          <>
            <Button color="primary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        )}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  showSnackbar: state.authReducer.showSnackbar,
  snackbarText: state.authReducer.snackbarText,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSnackbar: (toggleValue) => dispatch(toggleSnackbar(toggleValue)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationSnackbar);
