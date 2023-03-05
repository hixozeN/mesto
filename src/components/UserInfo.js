class UserInfo {
  constructor(profileElements) {
    this._username = profileElements.username;
    this._userjob = profileElements.userjob;
    this._formElement = document.querySelector('.popup__form_type_profile-edit');
    this._inputUserName = this._formElement.querySelector('.popup__input_field_name');
    this._inputUserJob = this._formElement.querySelector('.popup__input_field_job');
  }

  getUserInfo() {
    this._profileData = {
      username: this._username.textContent,
      userjob: this._userjob.textContent
    }
    return this._profileData;
  }

  setUserInfo(values) {
    this._username.textContent = values.username;
    this._userjob.textContent = values.userjob;
  }

  fillFormValues() {
    this.getUserInfo();
    this._inputUserName.value = this._profileData.username;
    this._inputUserJob.value = this._profileData.userjob;
  }
}

export default UserInfo;
