class Api {
  constructor(apiConfig) {
    this._link = apiConfig.link;
    this._headers = apiConfig.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  getUserInfo() {
    return fetch(`${this._link}/users/me`, {
      headers: this._headers,
    })
      .then(res => this._checkResponse(res))
  };

  setUserInfo({name, about}) {
    return fetch(`${this._link}/`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        name, about
      })
    })
      .then(res => this._checkResponse(res))
  };

  setUserAvatar(avatar) {
    return fetch(`${this._link}/users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify(avatar)
    })
      .then(res => this._checkResponse(res))
  };

  getInitialCards() {
    return fetch(`${this._link}/cards`, {
      headers: this._headers,
    })
      .then(res => this._checkResponse(res))
  };

  createCard({name, link}) {
    return fetch(`${this._link}/cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        name, link
      })
    })
      .then(res => this._checkResponse(res))
  };

  deleteCard(cardId) {
    return fetch(`${this._link}/cards/${cardId}`, {
      headers: this._headers,
      method: 'DELETE',

    })
      .then(res => this._checkResponse(res))
  };

  putCardLike(cardId) {
    return fetch(`${this._link}/cards/likes/${cardId}`, {
      headers: this._headers,
      method: 'PUT'
    })
      .then(res => this._checkResponse(res))
  };

  deleteCardLike(cardId) {
    return fetch(`${this._link}/cards/likes/${cardId}`, {
      headers: this._headers,
      method: 'DELETE'
    })
      .then(res => this._checkResponse(res))
  };

}

export default Api;