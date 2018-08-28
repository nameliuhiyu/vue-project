/**
 * 路由工具类
 * 前端路由模式 在添加微信分享 和授权的时候 存在问题，故我们会采取兼容模式，而不使用传统前端路由
 */
import browserUtil from '@/browserUtil';

function toPath(path){
  if(browserUtil.isIOS()){
    location.href = location.origin+path;
  }else if(browserUtil.isAndroid()){
    router.push({ path });
  }
}
export default{
  toPath
}