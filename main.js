(()=>{"use strict";var t={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}const n=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=document.querySelector(r),this._inputList=Array.from(this._formElement.querySelectorAll(e.inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_getErrorElement",value:function(t){return this._formElement.querySelector(".".concat(t.name,"-error"))}},{key:"_showInputError",value:function(t){t.classList.add(this._inputErrorClass),this._getErrorElement(t).classList.add(this._errorClass),this._getErrorElement(t).textContent=t.validationMessage}},{key:"_hideInputError",value:function(t){t.classList.remove(this._inputErrorClass),this._getErrorElement(t).classList.remove(this._errorClass),this._getErrorElement(t).textContent=""}},{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._setButtonState()}))})),this._setButtonState()}},{key:"_setButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"resetValidation",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._setButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===o(i)?i:String(i)),n)}var i}var u=function(){function t(e,r,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardData=e,this._name=this._cardData.name,this._link=this._cardData.link,this._cardTemplate=n,this._currentUserId=r,this._cardId=e._id,this._authorId=e.owner._id,this._handleCardClick=o.handleCardClick,this._handleCardLike=o.handleCardLike,this._handleCardDislike=o.handleCardDislike}var e,r;return e=t,(r=[{key:"_setEventListeners",value:function(){var t=this;console.log("".concat(this._cardId," - ").concat(this._authorId," - ").concat(this._currentUserId)),this._cardLikeButton.addEventListener("click",(function(){return t._setLikeButtonState()})),this._currentUserId===this._authorId?this._cardDeleteButton.addEventListener("click",(function(){return t._deleteCard()})):this._cardDeleteButton.remove(),this._cardImage.addEventListener("click",(function(){return t._handleCardClick(t._name,t._link)}))}},{key:"_isCardLiked",value:function(){var t=this;return this.likesArray.find((function(e){return t._currentUserId===e._id}))}},{key:"countCardLikes",value:function(t){this.likesArray=t.likes,this._likesCounter.textContent=this.likesArray.length,this._isCardLiked()?this._cardLikeButton.classList.add("card__like-button_active"):this._cardLikeButton.classList.remove("card__like-button_active")}},{key:"_setLikeButtonState",value:function(){this._isCardLiked()?this._handleCardDislike(this._cardId):this._handleCardLike(this._cardId)}},{key:"_deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_getCardTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".card").cloneNode(!0)}},{key:"createCard",value:function(){return this._element=this._getCardTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._cardTitle=this._element.querySelector(".card__title"),this._cardLikeButton=this._element.querySelector(".card__like-button"),this._cardDeleteButton=this._element.querySelector(".card__delete-button"),this._likesCounter=this._element.querySelector(".card__like-counter"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardTitle.textContent=this._name,this.countCardLikes(this._cardData),this._setEventListeners(),this._element}}])&&i(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();const a=u;function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===c(o)?o:String(o)),n)}var o}const l=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;this._container.innerHTML="",t.reverse().forEach((function(t){return e._renderer(t)}))}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,h(n.key),n)}}function h(t){var e=function(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===f(e)?e:String(e)}const y=function(){function t(e){var r,n,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=function(t){"Escape"===t.key&&i.close()},(n=h(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popup=document.querySelector(e),this._closeButton=this._popup.querySelector(".popup__close-button")}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close-button"))&&t.close()}))}}])&&p(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},_.apply(this,arguments)}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}const k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(n);if(o){var r=v(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=document.querySelector(".popup__image-preview"),e._popupCaption=document.querySelector(".popup__title-preview"),e}return e=u,(r=[{key:"open",value:function(t,e){this._popupImage.src=e,this._popupImage.alt=t,this._popupCaption.textContent=t,_(v(u.prototype),"open",this).call(this)}}])&&m(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===S(o)?o:String(o)),n)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},w.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}const j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(n);if(o){var r=C(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r,n=e.callbackSubmitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._callbackSubmitForm=n,r._formElement=r._popup.querySelector(".popup__form"),r._inputList=Array.from(r._formElement.querySelectorAll(".popup__input")),r}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){return t._formValues[e.name]=e.value})),this._formValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){return e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;w(C(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._callbackSubmitForm(t._getInputValues())}))}},{key:"close",value:function(){w(C(u.prototype),"close",this).call(this),this._formElement.reset()}}])&&g(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===L(o)?o:String(o)),n)}var o}const P=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._username=document.querySelector(e.username),this._userjob=document.querySelector(e.userjob)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return this._userData={},this._userData.username=this._username.textContent,this._userData.userjob=this._userjob.textContent,this._userData}},{key:"setUserInfo",value:function(t){this._username.textContent=t.username,this._userjob.textContent=t.userjob}}])&&O(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function T(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===I(o)?o:String(o)),n)}var o}const B=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._link=e.link,this._headers=e.headers}var e,r;return e=t,(r=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._link,"/users/me"),{headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"setUserInfo",value:function(t){var e=this,r=t.name,n=t.about;return fetch("".concat(this._link,"/"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:r,about:n})}).then((function(t){return e._checkResponse(t)}))}},{key:"setUserAvatar",value:function(t){var e=this;return fetch("".concat(this._link,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify(t)}).then((function(t){return e._checkResponse(t)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._link,"/cards"),{headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"createCard",value:function(t){var e=this,r=t.name,n=t.link;return fetch("".concat(this._link,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:r,link:n})}).then((function(t){return e._checkResponse(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._link,"/cards/").concat(t),{headers:this._headers,method:"DELETE"}).then((function(t){return e._checkResponse(t)}))}},{key:"putCardLike",value:function(t){var e=this;return fetch("".concat(this._link,"/cards/likes/").concat(t),{headers:this._headers,method:"PUT"}).then((function(t){return e._checkResponse(t)}))}},{key:"deleteCardLike",value:function(t){var e=this;return fetch("".concat(this._link,"/cards/likes/").concat(t),{headers:this._headers,method:"DELETE"}).then((function(t){return e._checkResponse(t)}))}}])&&T(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();var R=document.querySelector(".head-profile__edit-button"),D=document.querySelector(".head-profile__add-button");function q(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var A,U=new B({link:"https://mesto.nomoreparties.co/v1/cohort-62",headers:{authorization:"581ba41c-0af4-4449-9cf4-26f0cd8c9f59","Content-Type":"application/json"}});function V(t){var e=new a(t,A,"#card-template",{handleCardClick:function(t,e){return N.open(t,e)},handleCardDelete:function(){},handleCardLike:function(t){U.putCardLike(t).then((function(t){console.log(t.likes),e.countCardLikes(t)}))},handleCardDislike:function(t){U.deleteCardLike(t).then((function(t){console.log(t),e.countCardLikes(t)}))}});return e.createCard()}var x=new l({renderer:function(t){x.addItem(V(t))}},".photo-feed");Promise.all([U.getUserInfo(),U.getInitialCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(s)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return q(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?q(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];A=o._id,F.setUserInfo({username:o.name,userjob:o.about}),x.renderItems(i)})).catch((function(t){return console.log("Ошибка при первоначальном рендере: ",t)}));var F=new P({username:".head-profile__username",userjob:".head-profile__job"}),N=new k(".popup_preview"),H=new j(".popup_edit",{callbackSubmitForm:function(t){F.setUserInfo(t),H.close()}}),J=new j(".popup_add",{callbackSubmitForm:function(t){console.log(t),U.createCard({name:t.placename,link:t.placeurl}).then((function(t){x.addItem(V(t)),console.log(t),J.close()})).catch((function(t){return console.log(t)}))}}),M=new n(t,".popup__form_type_profile-edit"),z=new n(t,".popup__form_type_card-add");M.enableValidation(),z.enableValidation(),R.addEventListener("click",(function(){H.open(),H.setInputValues(F.getUserInfo()),M.resetValidation()})),D.addEventListener("click",(function(){z.resetValidation(),J.open()})),H.setEventListeners(),J.setEventListeners(),N.setEventListeners()})();