class UserInfo {
  constructor(profileElements) {
    this._username = profileElements.username;
    this._userjob = profileElements.userjob;
    this._formElement = document.querySelector('.popup__form_type_profile-edit');
    this._inputUserName = this._formElement.querySelector('.popup__input_field_name');
    this._inputUserJob = this._formElement.querySelector('.popup__input_field_job');
  }

  getUserInfo() {
    this._inputUserName.value = this._username.textContent;
    this._inputUserJob.value = this._userjob.textContent;
  }

  setUserInfo(values) {
    this._username.textContent = values.username;
    this._userjob.textContent = values.userjob;
  }
}

export default UserInfo;
