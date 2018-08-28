var localStorageIsSupported = true;

function isEmptyOrUndefined(value) {
  value += "";
  return value == "" || value == null || value == undefined || value == "undefined" || value == "null";
}

function supportLocalStorage() {
  if (!localStorageIsSupported) {
    try {
      localStorage.setItem('lstorage_test', 'ok');
      localStorage.removeItem('lstorage_test');
      localStorageIsSupported = true;
      return true;
    } catch (error) {
      localStorageIsSupported = false;
      return false;
    }
  } else {
    return localStorageIsSupported;
  }
}

function localSave(key, value, options) {
  if (!isEmptyOrUndefined(key) && !isEmptyOrUndefined(value)) {
    if (supportLocalStorage()) {
      localStorage.setItem(key, typeof value == "object" ? JSON.stringify(value) : value);
      navigator.cookieEnabled && $.removeCookie(key);
    } else if (navigator.cookieEnabled) {
      $.cookie(key, value, $.extend({
        path: '/',
      }, options));
    } else {
      alert('设备cookie功能被禁用,请启用!');
    }
  }
}

function localGet(key) {
  if (!isEmptyOrUndefined(key)) {
    return localStorage.getItem(key) || $.cookie(key);
  }
}

function localRemove(key) {
  if (!isEmptyOrUndefined(key)) {
    if (supportLocalStorage()) {
      localStorage.removeItem(key);
    } else if (navigator.cookieEnabled) {
      $.removeCookie(key);
    } else {
      alert('设备cookie功能被禁用,请启用!');
    }
  }
}

function getCookie(key) {
  return $.cookie(key);
}

function setCookie(key, value) {
  return $.cookie(key, value, {
    expires: 3,
    path: '/',
  });
}

function getToken() {
  return localGet("token");
}

function setToken(val) {
  return localSave("token", val, {
    expires: 30,
  });
}

function removeToken() {
  return localRemove("zb_token");
}

export default {
  localSave,
  localGet,
  localRemove,
  getCookie,
  setCookie,
  getToken,
  setToken,
  removeToken,
};
