import PropTypes from 'prop-types';
import Card from '../Card/Card';

function Cards(props) {
  return (
    <ul className={"list"}>
      {props.cards.map((card) => {
        return <Card item={card} key={card.id} delete={props.delete}/>
      })}
    </ul>
  )
}

Cards.propTypes = {
  cards: PropTypes.array,
  delete: PropTypes.func,
  getCards: PropTypes.func
}

Cards.defaultProps = {
  cards: [],
  delete: () => {},
  getCards: () => {}
}

export default Cards;
