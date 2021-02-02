import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "./../../Copyright";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const { initUser } = props;
  const [user, setUser] = useState(initUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(user);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="mobileNumber"
                value={user.mobileNumber}
                onChange={handleChange}
                label="Mobile Number"
                name="mobileNumber"
                autoComplete="phonenumber"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                value={user.name}
                onChange={handleChange}
                required
                fullWidth
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
                value={user.fatherName}
                onChange={handleChange}
                id="fatherName"
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
                label="Address"
                name="address"
                multiline
                required
                value={user.address}
                onChange={handleChange}
                fullWidth
                rows={3}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="highestQualifiation"
                label="Highest Qualifiation"
                name="highestQualifiation"
                fullWidth
                required
                value={user.highestQualifiation}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="totalExperience"
                label="Total Experience"
                name="totalExperience"
                fullWidth
                required
                value={user.totalExperience}
                onChange={handleChange}
                type="number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="onlineExperience"
                label="Online Experience"
                name="OnlineExperience"
                fullWidth
                required
                value={user.onlineExperience}
                onChange={handleChange}
                type="number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="subject"
                label="Subject"
                name="subject"
                required
                value={user.subject}
                onChange={handleChange}
                fullWidth
                variant="outlined"
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
              <Link href="/login" variant="body2">
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
