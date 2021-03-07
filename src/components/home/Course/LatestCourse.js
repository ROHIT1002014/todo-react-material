import React, { useState } from 'react';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const data = [
  {
    id: 'afsldkjfal',
    name: 'Dropbox',
    imageUrl: '/static/images/products/product_1.png',
    updatedAt: 'askdfjd',
  },
  {
    id: 'afsldkjfalasdfafd',
    name: 'Medium Corporation',
    imageUrl: '/static/images/products/product_2.png',
    updatedAt: 'askdfjd',
  },
  {
    id: 'askdfjad',
    name: 'Slack',
    imageUrl: '/static/images/products/product_3.png',
    updatedAt: 'alsdkfasdf',
  },
  {
    id: 'askdfjagsdfadd',
    name: 'Lyft',
    imageUrl: '/static/images/products/product_4.png',
    updatedAt: 'alsdkfasdfasdf',
  },
  {
    id: 'askdfjd',
    name: 'GitHub',
    imageUrl: '/static/images/products/product_5.png',
    updatedAt: 'alsdfjadsafsdf',
  },
];

const useStyles = makeStyles(({
  root: {
    height: '100%',
  },
  image: {
    height: 48,
    width: 48,
  },
}));

const LatestProducts = ({ className, ...rest }) => {
  const classes = useStyles();
  const [products] = useState(data);

  return (
    <Card
      className={clsx(classes.root, className)}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <CardHeader
        subtitle={`${products.length} in total`}
        title="Latest Products"
      />
      <Divider />
      <List>
        {products.map((product, i) => (
          <ListItem
            divider={i < products.length - 1}
            key={product.id}
          >
            <ListItemAvatar>
              <img
                alt="Product"
                className={classes.image}
                src={product.imageUrl}
              />
            </ListItemAvatar>
            <ListItemText
              primary={product.name}
              secondary={`Updated ${product.updatedAt}`}
            />
            <IconButton
              edge="end"
              size="small"
            >
              <MoreVertIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

export default LatestProducts;
