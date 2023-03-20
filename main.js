(()=>{"use strict";var t={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}const r=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=document.querySelector(n),this._inputList=Array.from(this._formElement.querySelectorAll(e.inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var e,r;return e=t,(r=[{key:"_getErrorElement",value:function(t){return this._formElement.querySelector(".".concat(t.name,"-error"))}},{key:"_showInputError",value:function(t){t.classList.add(this._inputErrorClass),this._getErrorElement(t).classList.add(this._errorClass),this._getErrorElement(t).textContent=t.validationMessage}},{key:"_hideInputError",value:function(t){t.classList.remove(this._inputErrorClass),this._getErrorElement(t).classList.remove(this._errorClass),this._getErrorElement(t).textContent=""}},{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._setButtonState()}))})),this._setButtonState()}},{key:"_setButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"resetValidation",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._setButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var u=function(){function t(e,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardData=e,this._name=this._cardData.name,this._link=this._cardData.link,this._cardTemplate=r,this._currentUserId=n,this._cardId=e._id,this._authorId=e.owner._id,this._handleCardClick=o.handleCardClick,this._handleCardLike=o.handleCardLike,this._handleCardDislike=o.handleCardDislike,this._handleCardDelete=o.handleCardDelete}var e,n;return e=t,(n=[{key:"_setEventListeners",value:function(){var t=this;this._cardLikeButton.addEventListener("click",(function(){return t._setLikeButtonState()})),this._currentUserId===this._authorId?this._cardDeleteButton.addEventListener("click",(function(){return t._handleCardDelete(t._cardId,t)})):this._cardDeleteButton.remove(),this._cardImage.addEventListener("click",(function(){return t._handleCardClick(t._name,t._link)}))}},{key:"_isCardLiked",value:function(){var t=this;return this.likesArray.find((function(e){return t._currentUserId===e._id}))}},{key:"countCardLikes",value:function(t){this.likesArray=t.likes,this._likesCounter.textContent=this.likesArray.length,this._isCardLiked()?this._cardLikeButton.classList.add("card__like-button_active"):this._cardLikeButton.classList.remove("card__like-button_active")}},{key:"_setLikeButtonState",value:function(){this._isCardLiked()?this._handleCardDislike(this._cardId):this._handleCardLike(this._cardId)}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_getCardTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".card").cloneNode(!0)}},{key:"createCard",value:function(){return this._element=this._getCardTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._cardTitle=this._element.querySelector(".card__title"),this._cardLikeButton=this._element.querySelector(".card__like-button"),this._cardDeleteButton=this._element.querySelector(".card__delete-button"),this._likesCounter=this._element.querySelector(".card__like-counter"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardTitle.textContent=this._name,this.countCardLikes(this._cardData),this._setEventListeners(),this._element}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const c=u;function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}const l=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.reverse().forEach((function(t){return e._renderer(t)}))}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,y(r.key),r)}}function y(t){var e=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===f(e)?e:String(e)}const h=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=y(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(e),this._submitButton=this._popup.querySelector(".popup__submit-button")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close-button"))&&t.close()}))}},{key:"proccessActionButtonText",value:function(t){this._submitButton.innerHTML="".concat(t,'<span class="dot-1">.</span><span class="dot-2">.</span><span class="dot-3">.</span>')}},{key:"finalActionButtonText",value:function(t){this._submitButton.innerHTML=t}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},b.apply(this,arguments)}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}const k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(r);if(o){var n=_(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=document.querySelector(".popup__image-preview"),e._popupCaption=document.querySelector(".popup__title-preview"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupImage.src=e,this._popupImage.alt=t,this._popupCaption.textContent=t,b(_(u.prototype),"open",this).call(this)}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},w.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}const C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(r);if(o){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.callbackSubmitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._callbackSubmitForm=r,n._formElement=n._popup.querySelector(".popup__form"),n._inputList=Array.from(n._formElement.querySelectorAll(".popup__input")),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){return t._formValues[e.name]=e.value})),this._formValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){return e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;w(j(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._callbackSubmitForm(t._getInputValues())}))}},{key:"close",value:function(){w(j(u.prototype),"close",this).call(this),this._formElement.reset()}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},L.apply(this,arguments)}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}const B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(r);if(o){var n=T(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.cardDelete;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._deleteCallback=r,n}return e=u,(n=[{key:"open",value:function(t,e){this._cardId=t,this._cardElement=e,L(T(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var t=this;L(T(u.prototype),"setEventListeners",this).call(this),this._submitButton.addEventListener("click",(function(){return t._deleteCallback(t._cardId,t._cardElement)}))}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}const x=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._username=document.querySelector(e.username),this._userjob=document.querySelector(e.userjob)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._userData={},this._userData.username=this._username.textContent,this._userData.userjob=this._userjob.textContent,this._userData}},{key:"setUserInfo",value:function(t){this._username.textContent=t.username,this._userjob.textContent=t.userjob}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}const U=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._link=e.link,this._headers=e.headers}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._link,"/users/me"),{headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"setUserInfo",value:function(t){var e=this,n=t.name,r=t.about;return fetch("".concat(this._link,"/users/me "),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:n,about:r})}).then((function(t){return e._checkResponse(t)}))}},{key:"setUserAvatar",value:function(t){var e=this;return fetch("".concat(this._link,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify(t)}).then((function(t){return e._checkResponse(t)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._link,"/cards"),{headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"createCard",value:function(t){var e=this,n=t.name,r=t.link;return fetch("".concat(this._link,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:n,link:r})}).then((function(t){return e._checkResponse(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._link,"/cards/").concat(t),{headers:this._headers,method:"DELETE"}).then((function(t){return e._checkResponse(t)}))}},{key:"putCardLike",value:function(t){var e=this;return fetch("".concat(this._link,"/cards/").concat(t,"/likes"),{headers:this._headers,method:"PUT"}).then((function(t){return e._checkResponse(t)}))}},{key:"deleteCardLike",value:function(t){var e=this;return fetch("".concat(this._link,"/cards/").concat(t,"/likes"),{headers:this._headers,method:"DELETE"}).then((function(t){return e._checkResponse(t)}))}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();var V=document.querySelector(".head-profile__edit-button"),F=document.querySelector(".head-profile__add-button");function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var M,N=new U({link:"https://mesto.nomoreparties.co/v1/cohort-62",headers:{authorization:"581ba41c-0af4-4449-9cf4-26f0cd8c9f59","Content-Type":"application/json"}});function J(t){var e=new c(t,M,"#card-template",{handleCardClick:function(t,e){return G.open(t,e)},handleCardDelete:function(t,e){return K.open(t,e)},handleCardLike:function(t){N.putCardLike(t).then((function(t){return e.countCardLikes(t)})).catch((function(t){return console.log("Ошибка при лайке: ",t)}))},handleCardDislike:function(t){N.deleteCardLike(t).then((function(t){return e.countCardLikes(t)})).catch((function(t){return console.log("Ошибка при дизлайке: ",t)}))}});return e.createCard()}var z=new l({renderer:function(t){z.addItem(J(t))}},".photo-feed");Promise.all([N.getUserInfo(),N.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,s=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(s)throw o}}return c}}(e,n)||function(t,e){if(t){if("string"==typeof t)return H(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];M=o._id,$.setUserInfo({username:o.name,userjob:o.about}),z.renderItems(i)})).catch((function(t){console.log("Ошибка при первоначальном рендере: ",t),$.setUserInfo({username:"Жак-Ив Кусто",userjob:"Исследователь океанов"}),document.querySelector(".photo-feed").innerHTML="<p style='text-align: center'>Что-то пошло не так :(</p>"}));var $=new x({username:".head-profile__username",userjob:".head-profile__job"}),G=new k(".popup_preview"),K=new B(".popup_confirm",{cardDelete:function(t,e){K.proccessActionButtonText("Удаление"),N.deleteCard(t).then((function(){e.deleteCard(),K.close()})).catch((function(t){return console.log("При удалении возникла ошибка: ",t)})).finally((function(){return K.finalActionButtonText("Да")}))}}),Q=new C(".popup_edit",{callbackSubmitForm:function(t){Q.proccessActionButtonText("Сохранение"),N.setUserInfo({name:t.username,about:t.userjob}).then((function(){$.setUserInfo(t),Q.close()})).catch((function(t){return console.log("Ошибка: ",t)})).finally((function(){return Q.finalActionButtonText("Сохранить")}))}}),W=new C(".popup_add",{callbackSubmitForm:function(t){W.proccessActionButtonText("Создание"),N.createCard({name:t.placename,link:t.placeurl}).then((function(t){z.addItem(J(t)),W.close()})).catch((function(t){return console.log("Ошибка при добавлении карточки: ",t)})).finally((function(){return W.finalActionButtonText("Создать")}))}}),X=new r(t,".popup__form_type_profile-edit"),Y=new r(t,".popup__form_type_card-add");X.enableValidation(),Y.enableValidation(),V.addEventListener("click",(function(){Q.open(),Q.setInputValues($.getUserInfo()),X.resetValidation()})),F.addEventListener("click",(function(){Y.resetValidation(),W.open()})),Q.setEventListeners(),W.setEventListeners(),G.setEventListeners(),K.setEventListeners()})();