
import './Card.css';

function Card(props) {
    //add the classes in the string
  const classes = 'card ' + props.className;
  
  return <div className={classes}>{props.children}</div>;
}

export default Card;