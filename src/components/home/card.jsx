import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Cards({ title, img, link }) {
  // to set images size
  const imageSize = {
    width: '200px',
    height: '200px',
  };
  return (
    // Home page Card component
    <div>
      <Link to={link}>
        <Card className=" mt-5 ">
          <Card.Img variant="top" src={img} style={imageSize} />
        </Card>

        <h2 className=" text-dark mt-2 text-center   ">{title}</h2>
      </Link>
    </div>
  );
}

export default Cards;
