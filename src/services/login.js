import httpService from './httpService';

var serverPath = window.location.origin;
var managementApi = "/api_managerapi/management";
const loginService = {
  getUserInfo: (param) => {
    var url = `${serverPath}${managementApi}/admin/permission/byUser?menuId=${param}`;
    return httpService.httpGet(url, param || {}, true);
  },
};

export default loginService;
