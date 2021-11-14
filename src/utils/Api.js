class Api {
    constructor(baseUrl, header) {
      this.baseUrl = baseUrl;
      this.header = header;
    }
    getUserInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
                method: 'GET',
                headers: this.header
            })
            .then(this._checkResponse.bind(this))
          } 
    getCards() {
        return fetch(`${this.baseUrl}/cards`, {
                method: 'GET',
                headers: this.header
            })
            .then(this._checkResponse.bind(this))
          } 
    setUserInfo(nameValue, aboutValue) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.header,
            body: JSON.stringify({
                name: nameValue,
                about: aboutValue
            })
        })
        .then(this._checkResponse.bind(this))
      } 
    setUserPic(linkValue) {
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this.header,
            body: JSON.stringify({
                avatar: linkValue
            })
        })
        .then(this._checkResponse.bind(this))
      } 
    postCard(values) {
        return fetch(`${this.baseUrl}/cards`, {
            method: 'POST',
            headers: this.header,
            body: JSON.stringify({
                name: values.name,
                link: values.link
            })
        })
        .then(this._checkResponse.bind(this))
      } 
    deleteCard(value) {
        return fetch(`${this.baseUrl}/cards/${value}`, {
            method: 'DELETE',
            headers: this.header
        })
        .then(this._checkResponse.bind(this))
      } 
    likeCard(value) {
        return fetch(`${this.baseUrl}/cards/likes/${value}`, {
            method: 'PUT',
            headers: this.header
        })
        .then(this._checkResponse.bind(this))
      } 
    unLikeCard(value) {
        return fetch(`${this.baseUrl}/cards/likes/${value}`, {
            method: 'DELETE',
            headers: this.header
        })
        .then(this._checkResponse.bind(this))
      }
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
}
const apiToken = 'f97b5cb4-515f-4c8c-9abc-8ecd5ae49c1e';
const header = {
  authorization: `${apiToken}`,
  'Content-Type': 'application/json'
  }
const url = 'https://mesto.nomoreparties.co/v1/cohort-28';
const addApi = new Api(url, header);
export default addApi;