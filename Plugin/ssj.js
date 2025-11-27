/*
 *
 *
 
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]

^https:\/\/userapi.feidee.net\/v1\/profile\/basic_info url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/fanqdj.js


[mitm]
hostname = 
*
*
*/


var body = $response.body; 
let obj = JSON.parse($response.body);
obj.is_vip= "true"
$done({body: JSON.stringify(obj)});