import React from 'react'
import classes from "./style.module.scss"
import Typography from '../Typography'

const Post = ({body = "", title = ""}) => {
  return (
    <div className={classes.post}>
      <Typography style={{marginBottom: ".6rem"}} variant="heading-secondary" component="h2">
        {title}
      </Typography>
      <Typography variant="text" component="p">
        {body}
      </Typography>
      <div className={classes.post__footer}>
        <Typography>Posted By <Typography component="span" style={{fontWeight: 500, display: "inline-block"}}>Tom Ashman</Typography></Typography>
      </div>
    </div>
  );
}

export default Post