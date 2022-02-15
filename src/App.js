import './App.css';
import HeaderContent from './components/HeaderContent/HeaderContent';
import Cards from './components/Cards/Cards';
import EnterData from './components/EnterData/EnterData';
import React from "react";
import Tooltip from "./components/Tooltip/Tooltip";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      url: 'https://lifecycle-back.herokuapp.com/notes',
      switch: false,
      urlDelete: 'https://lifecycle-back.herokuapp.com/notes/',
      userMessage: '',
      error: false,
      errorDescript: 'Что-то пошло не так. Попробуйте позже.'
    }
  }

  getCards = async () => {
    fetch(this.state.url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState(() => ({cards: data}))
      }).catch(() => {
      this.setState({error: true});
    });
  }

  componentDidMount() {
    fetch(this.state.url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState(() => ({cards: data, switch: true}))
      }).catch(() => {
      this.setState({error: true});
    });
  }

  handlerDelete = (evt, id) => {
    evt.preventDefault();

    fetch(this.state.urlDelete + `${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(id)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка!");
        } else if (response.status === 204) {
          this.setState({error: false});
        }
        this.setState({error: false});
        this.getCards()
          .then()
          .catch(() => {
            this.setState({error: true});
          });
      })
      .catch(() => {
        this.setState({error: true});
      });
  }

  handlerAdd = (evt) => {
    evt.preventDefault();
    const form = document.querySelector('#form');

    const params = new FormData(form);
    params.append('id', '0');

    let body = {};
    for (let key of params.keys()) {
      body[key] = params.get(key);
    }

    fetch(this.state.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка!");
      } else if (response.status === 204) {
        this.setState({error: false});
      }
      this.setState({error: false});

      this.getCards()
        .then().catch(() => {
        this.setState({error: true});
      });
    }).catch(() => {
      this.setState({error: true});
      return false;
    });
  }

  handlerUpdate = () => {
    this.getCards()
      .then()
  }

  handlerError = () => {
    this.setState({error: false});
  }

  render() {
    return (
      <div className={"container"}>
        <div className={"header-content"}>
          <HeaderContent title={"Notes"} handlerUpdate={this.handlerUpdate}/>
        </div>
        <div className={"body-content"}>
          {this.state.switch && <Cards cards={this.state.cards} delete={this.handlerDelete} getCards={this.getCards}/>}
        </div>

        <div className={"enter-data"}>
          {this.state.error && <Tooltip errorMessage={this.state.errorDescript}/>}
          <EnterData handlerAdd={this.handlerAdd} handlerError={this.handlerError}/>
        </div>
      </div>
    );
  }
}

export default App;
