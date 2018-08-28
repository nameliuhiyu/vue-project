import httpService from './httpService';

var serverPath = window.location.origin;
var xqAdminApi = "/api_managerapi/xqadminapi";
const financingService = {
  // 获取财务列表
  getFinancingList: function (param) {
    var url = `${serverPath}${xqAdminApi}/wallets`;
    return httpService.httpGet(url, param || {}, true);
  },
  // 获取待处理订单列表
  getPendingOrderList: function (param) {
    var url = `${serverPath}${xqAdminApi}/walletWithdraws/pending`;
    return httpService.httpGet(url, param || {}, true);
  },
  // 打款
  putRemittance: function (param) {
    var url = `${serverPath}${xqAdminApi}/wallet/withdraw/detail/${param.walletWithdrawId}?status=${param.status}`;
    return httpService.httpPut(url, param || {}, true);
  },
  // 提现历史
  getWithdrawalRecord: function (param) {
    var url = `${serverPath}${xqAdminApi}/wallet/withdraw/details/byUserId`;
    return httpService.httpGet(url, param || {}, true);
  },
  // 财务明细
  getFinancingDetails: function (param) {
    var url = `${serverPath}${xqAdminApi}/wallet/transactions`;
    return httpService.httpGet(url, param || {}, true);
  },
  // 获取银行卡信息
  getCardInfo: function (param) {
    var url = `${serverPath}${xqAdminApi}/walletAccounts/byUserId?userId=${param}`;
    return httpService.httpGet(url, param || {}, true);
  },
};
export default financingService;
