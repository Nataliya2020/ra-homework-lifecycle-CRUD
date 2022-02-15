import buttonIcon from './buttonIcon.png';
import Tooltip from "../Tooltip/Tooltip";
import PropTypes from 'prop-types';
import {useState} from 'react';

function EnterData(props) {
  const [userText, setUserText] = useState('');
  const [enterErrorStatus, setEnterErrorStatus] = useState(false);

  const handlerTextarea = (evt) => {
    evt.preventDefault();
    setEnterErrorStatus(false);
    setUserText(evt.target.value);
    props.handlerError();
  }

  const handlerSubmit = (evt) => {
    evt.preventDefault();
    props.handlerError();

    if (userText.trim() === '') {
      setEnterErrorStatus(true);
      return;
    }

    props.handlerAdd(evt);
    setUserText('');
  }

  return (
    <form className={"form-textarea-pos"} id={"form"} onSubmit={handlerSubmit}>
      <label className={"label-user-text"}>
        <span className={"span-title-textarea"}>
          New Note
        </span>
        {enterErrorStatus && <Tooltip errorMessage={"Нельзя отправить пустое сообщение. Введите текст."}/>}
        <textarea className={"user-message textarea-pos"} name={"userMessage"} value={userText}
                  onChange={handlerTextarea}/>
      </label>
      <button className={"button btn-textarea"}>
        <img className={"button-icon"} src={buttonIcon} alt="иконка кнопки отправки сообщения"/>
      </button>
    </form>
  )
}

EnterData.propTypes = {
  handlerAdd: PropTypes.func,
  handlerError: PropTypes.func
};

EnterData.defaultProps = {
  handlerAdd: () => {},
  handlerError: () => {}
};

export default EnterData;
