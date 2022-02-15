import PropTypes from 'prop-types';
import updateIcon from './updateIcon.png'

function HeaderContent(props) {
  return (
    <div className={"header-title-content"}>
      <h1 className={"header-title margin-r"}>
        Notes
      </h1>
      <button className={"button header-img-update"} title={"обновить"} onClick={props.handlerUpdate}>
        <img className={"update-icon"} src={updateIcon} alt={"иконка кнопки обновить"}/>
      </button>
    </div>
  )
}

HeaderContent.propTypes = {
  handlerUpdate: PropTypes.func
}

HeaderContent.defaultProps = {
  handlerUpdate: () => {
  }
}

export default HeaderContent;
