const initState = {
  featuredPosts: [
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
  ],
  post: {
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
  },
  footers: [
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
  ],
}

const rootReducer = (state = initState, action ) =>{
  return state
}

export default rootReducer;