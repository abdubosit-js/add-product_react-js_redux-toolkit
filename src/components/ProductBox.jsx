import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { deleted } from '../store/actions';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(product) {

  const dispatch = useDispatch()
  
  return (
    <Card sx={{ width: 345, margin: "auto" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader={moment(product.createdDate).format("LL")}
      />
      <CardMedia
        component="img"
        height="194"
        image={'http://142.93.246.144/' + product.image}
        alt="Paella dish"
        style={{objectFit: "contain"}}
      />
      <CardContent>
        <Typography variant="h4" color="black" fontWeight='600'>
            {product.title}
        </Typography>
        <Typography variant="h6" color="text.secondary" fontWeight='600'>
            ${product.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={() => dispatch(deleted(product.id))} aria-label="add to favorites">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
            <ExpandMore>
                <Link to={`product/${product.id}`}>
                    <IconButton>
                        <ReadMoreIcon color='text.secondary' />
                    </IconButton>
                </Link>
            </ExpandMore>
      </CardActions>
    </Card>
  );
}
