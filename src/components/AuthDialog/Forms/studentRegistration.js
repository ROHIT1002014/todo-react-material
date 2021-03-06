import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUpStudent(props) {
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
          Student Sign Up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="mobileNumber"
                label="Mobile Number"
                name="mobileNumber"
                value={user.mobileNumber}
                onChange={handleChange}
                autoComplete="phonenumber"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                value={user.name}
                onChange={handleChange}
                id="name"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="fatherName"
                value={user.fatherName}
                onChange={handleChange}
                label="Father's Name"
                name="fatherName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={user.email}
                onChange={handleChange}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="dateOfBirth"
                name="dateOfBirth"
                variant="outlined"
                label="Date of Birth"
                required
                fullWidth
                value={user.dateOfBirth}
                onChange={handleChange}
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address"
                label="Address"
                name="address"
                multiline
                value={user.address}
                onChange={handleChange}
                fullWidth
                rows={3}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="currentInstitute"
                label="currentInstitute"
                name="currentInstitute"
                multiline
                fullWidth
                value={user.currentInstitute}
                onChange={handleChange}
                rows={3}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="guardianProfession"
                label="guardianProfession"
                name="guardianProfession"
                multiline
                value={user.guardianProfession}
                onChange={handleChange}
                fullWidth
                rows={3}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={user.guardianMobileNumber}
                onChange={handleChange}
                id="guardianMobileNumber"
                label="Guardian Mobile Number"
                name="guardianContact"
                autoComplete="phonenumber"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={user.password1}
                onChange={handleChange}
                name="password1"
                label="Password"
                type="password"
                id="password1"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={user.password2}
                onChange={handleChange}
                name="password2"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
