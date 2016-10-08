/*朝阳,QQ51523307 2016/9/27
*使用方法：将文件放到 /player/ 目录下，再将其改名为你需要调用的播放器，如youku.js，qq.js ,pptv.js等等...
*那片模板|解析|资源采集官方唯一QQ群：107028575 
*更多万能解析接口QQ群：107028575 
*声明：调用本接口，请保留以上信息，如不保留，一经发现将域名拉入黑名单
*我们提供接口，不为别的，只为能保留我们的qq群号，希望大家支持
*以下的调用url格式的
*/
MacPlayer.Html = '<iframe width="100%" height="'+MacPlayer.Height+'" src="http://jxapi.nepian.com/ckparse/?url='+MacPlayer.PlayUrl+'" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>';
MacPlayer.Show();