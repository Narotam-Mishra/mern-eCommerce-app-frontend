import './Item.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link> 
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  new_price: PropTypes.number.isRequired, // Assuming 'new_price' is a number, adjust as needed
  old_price: PropTypes.number.isRequired, // Assuming 'old_price' is a number, adjust as needed
};

export default Item