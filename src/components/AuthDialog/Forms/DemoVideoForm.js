import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ScrollDialog from '../../dashboard/body/termsandcondition/TermsAndCondition';
import Copyright from '../../Copyright';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function VideoUpload(props) {
  const classes = useStyles();
  const { initUser } = props;
  const [user, setUser] = useState(initUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Video Upload
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            value={user.title}
            onChange={handleChange}
            label="Video Title"
            name="title"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="description"
            value={user.description}
            onChange={handleChange}
            multiline
            rows={5}
            rowmax={10}
            label="Video Description"
            id="description"
          />
          <label htmlFor="upload-file">
            <input
              style={{ display: 'none' }}
              id="upload-file"
              name="file"
              type="file"
              value={user.file}
              onChange={handleChange}
            />

            <Button color="primary" variant="contained" component="span">
              Upload File
            </Button>
          </label>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
        <ScrollDialog />
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
