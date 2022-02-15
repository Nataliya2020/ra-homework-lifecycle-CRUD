import PropTypes from 'prop-types';
import cross from './cross.png'

function Card(props) {
  return (
    <li className={"list-item-card"}>
      {props.item.userMessage}
      <button className={"button button-cross-card"} onClick={(evt) => props.delete(evt, props.item.id)}>
        <img className={"button-icon-close"} src={cross} alt="иконка закрытия карточки"/>
      </button>
    </li>
  )
}

Card.propTypes = {
  item: PropTypes.object,
  delete: PropTypes.func
}

Card.defaultProps = {
  item: {},
  delete: () => {}
}

export default Card;
