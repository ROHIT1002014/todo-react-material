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
    title: "Sample blog post",
    image: "url(https://source.unsplash.com/random)",
    description:
      "This blog post shows a few different types of content that are" +
      "supported and styled with Material styles. Basic typography," +
      "images, and code are all supported. You can extend these by" +
      "modifying Markdown.js.Cum sociis natoque penatibus et magnis" +
      "dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam.J" +
      "Pellentesque ornare sem lacinia quam venenatis vestibulum." +
      "Sed posuere consectetur est at lobortis. Cras mattis consectetur" +
      "purus sit amet fermentum. Curabitur blandit tempus porttitor." +
      "Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id" +
      "dolor id nibh ultricies vehicula ut id elit.imageText:",
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
