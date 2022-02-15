import PropTypes from 'prop-types';

function Tooltip(props) {
  return (
    <div className={"tooltip"}>
      <p className={"paragraph-error"}>
        {props.errorMessage}
      </p>
    </div>
  )
}

Tooltip.propTypes = {
  errorMessage: PropTypes.string,
}

Tooltip.defaultProps = {
  errorMessage: 'Что-то пошло не так'
}

export default Tooltip;
