import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
// import { makeStyles } from "@material-ui/core/styles";

import Footer from "../components/dashboard/Footer";
import Grid from "@material-ui/core/Grid";
import NavBar from "../components/dashboard/Header";
import Features from "../components/dashboard/body/features/Features";
import Introduction from "../components/dashboard/body/introduction/Introduction";
import Description from "../components/dashboard/body/description/Description";

// const useStyles = makeStyles((theme) => ({
//   mainGrid: {
//     marginTop: theme.spacing(3),
//   },
// }));

export default function ClippedDrawer() {
  // const classes = useStyles();

  const featuredPosts = [
    {
      title: "Featured post",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random",
      imageText: "Image Text",
    },
    {
      title: "Post title",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random",
      imageText: "Image Text",
    },
  ];

  // fake data
  const post = {
    title: "Flat 10% Off",
    image: "url(https://source.unsplash.com/random)",
    description:
      "We at Gyanacharya believe that everyone should get education, profit" +
      "doesn't matter when it comes to value." +
      "We at Gyanacharya believe that everyone should get education, profit" +
      "doesn't matter when it comes to value." +
      "We at Gyanacharya believe that everyone should get education, profit" +
      "doesn't matter when it comes to value." +
      "We at Gyanacharya believe that everyone should get education, profit" +
      "doesn't matter when it comes to value." +
      "We at Gyanacharya believe that everyone should get education, profit" +
      "doesn't matter when it comes to value."
  };
  const footers = [
    {
      title: "Company",
      description: ["Team", "History", "Contact us", "Locations"],
    },
    {
      title: "Features",
      description: [
        "Cool stuff",
        "Random feature",
        "Team feature",
        "Developer stuff",
        "Another one",
      ],
    },
    {
      title: "Resources",
      description: [
        "Resource",
        "Resource name",
        "Another resource",
        "Final resource",
      ],
    },
    {
      title: "Legal",
      description: ["Privacy policy", "Terms of use"],
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <Introduction post={post} />
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <Description key={post.title} post={post} />
        ))}
      </Grid>
      <Features />
      <Footer footers={footers} />
    </React.Fragment>
  );
}
