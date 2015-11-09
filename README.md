# ua-collector

收集不同设备上不同操作系统中不同应用的webview组件的userAgent信息

## 简单的结论

1. 同一版本的微信在IOS和安卓上使用的webview组件的userAgent不一致
2. 统一版本的IOS系统，微信/芒果医生/自带的safari浏览器的“渲染引擎”版本是相同的（应该是使用了系统统一的webview组件，没有独立引入的webview组件库）
3. 统一版本的Android系统，芒果医生/自带浏览器的渲染引擎版本相同
4. Android版微信的webview组件与操作系统版本无关，而是决定于微信的版本号（应该是在安卓系统下独立引入了webview组件，不依赖系统提供的webview组件）

## 收集到的信息

| device        | system        | browser         | ua | 
|---------------|---------------|-----------------|---|                                                                                                                                                                                                                                  
| iphone6       | ios8          | 其他            | Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4  |                                                                                      
| iphone5s      | ios8.1.3      | 微信            | Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12F70 MicroMessenger/6.2 NetType/WIFI Language/en                                                                                |
| iphone5s      | ios8.1.3      | 芒果医生        | Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12F70                                                                                                                            |
| iphone5s      | ios8.1.3      | 自带浏览器      | Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4                                                                                                 |
| iphone6s      | ios9.1        | 自带浏览器      | Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1                                                                                                 |
| iphone6s      | ios9.1        | 微信            | Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13B143 MicroMessenger/6.3.6 NetType/WIFI Language/zh_CN                                                                         |
| iPhone6       | iOS9.1        | 自带浏览器      | Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1                                                                                                 |
| ip6           | 9             | 其他            | Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36                                                                                                              |
| ipon6         | 9.1           | 微信            | Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13B143 MicroMessenger/6.3.6 NetType/WIFI Language/zh_CN                                                                         |
| IP6s          | ios9.0.2      | 微信            | Mozilla/5.0 (iPhone; CPU iPhone OS 9_0_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13A452 MicroMessenger/6.3.6 NetType/WIFI Language/zh_CN                                                                       |
| iPhone6       | iOS9.1        | 微信            | Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13B143 MicroMessenger/6.3.6 NetType/WIFI Language/zh_CN                                                                         |
| 华为荣耀6     | Android4.4.2  | 自带浏览器      | Mozilla/5.0 (Linux; Android 4.4.2; H60-L01 Build/HDH60-L01) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36                                                                                   |
| 华为荣耀6     | Android4.4.2  | 微信            | Mozilla/5.0 (Linux; U; Android 4.4.2; zh-cn; H60-L01 Build/HDH60-L01) AppleWebKit/533.1 (KHTML, like Gecko)Version/4.0 MQQBrowser/5.4 TBS/025469 Mobile Safari/533.1 MicroMessenger/6.3.5.49_r55a68be.640 NetType/WIFI Language/zh_CN |
| i5            | 8.13          | 其他            | Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4                                                                                                 |
| 华为荣耀6     | Android4.4.2  | 芒果医生        | Mozilla/5.0 (Linux; Android 4.4.2; H60-L01 Build/HDH60-L01) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36                                                                                   |
| 小米4         | 4.4.4         | 自带浏览器      | Mozilla/5.0 (Linux; U; Android 4.4.4; zh-cn; MI 4LTE Build/KTU84P) AppleWebKit/533.1 (KHTML, like Gecko)Version/4.0 MQQBrowser/5.4 TBS/025478 Mobile Safari/533.1 MicroMessenger/6.3.5.49_r55a68be.640 NetType/WIFI Language/zh_CN    |
| 红米2         | 安卓5.1       | 芒果医生        | Mozilla/5.0 (Linux; Android 5.1.1; 2014812 Build/LMY48W) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/39.0.0.0 Mobile Safari/537.36                                                                                      |
| iPhone6       | iOS9.1        | 芒果医生        | Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13B143                                                                                                                          |
| 红米1s        | Android 4.4.2 | 微信            | Mozilla/5.0 (Linux; U; Android 4.4.2; zh-cn; 2014501 Build/KOT49H) AppleWebKit/533.1 (KHTML, like Gecko)Version/4.0 MQQBrowser/5.4 TBS/025478 Mobile Safari/533.1 MicroMessenger/6.3.5.49_r55a68be.640 NetType/WIFI Language/zh_CN    |
| htc           | android5.0.2  | 其他            | Mozilla/5.0 (Linux; U; Android 5.0.2; zh-CN; HTC D826w Build/LRX22G) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/10.7.5.655 U3/0.8.0 Mobile Safari/534.30                                                            |
| htc           | android5.0.2  | 自带浏览器      | Mozilla/5.0 (Linux; Android 5.0.2; HTC_D826w Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36                                                                                    |
| htc           | android5.0.2  | 芒果医生        | Mozilla/5.0 (Linux; Android 5.0.2; HTC D826w Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36                                                                                    |
| 魅族4         | android5.0.1  | 其他            | Mozilla/5.0 (Linux; Android 5.0.1; MX4 Build/LRX22C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.76 Mobile Safari/537.36                                                                                                  |
| mx4           | android5.0.1  | 芒果医生        | Mozilla/5.0 (Linux; Android 5.0.1; MX4 Build/LRX22C) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/40.0.2214.114 Mobile Safari/537.36                                                                                     |
| mx4           | android5.0.1  | 微信            | Mozilla/5.0 (Linux; U; Android 5.0.1; zh-cn; MX4 Build/LRX22C) AppleWebKit/533.1 (KHTML, like Gecko)Version/4.0 MQQBrowser/5.4 TBS/025478 Mobile Safari/533.1 MicroMessenger/6.3.5.49_r55a68be.640 NetType/WIFI Language/zh_CN        |
| htc           | android4.4.4  | 芒果医生        | Mozilla/5.0 (Linux; Android 4.4.4; HTC D820u Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36                                                                                    |
| htc           | android4.4.4  | 微信            | Mozilla/5.0 (Linux; U; Android 4.4.4; zh-cn; HTC D820u Build/KTU84P) AppleWebKit/533.1 (KHTML, like Gecko)Version/4.0 MQQBrowser/5.4 TBS/025478 Mobile Safari/533.1 MicroMessenger/6.3.5.50_r1573191.640 NetType/WIFI Language/zh_CN  |
| htc           | android4.4.4  | 自带浏览器      | Mozilla/5.0 (Linux; Android 4.4.4; HTC_D820u Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36                                                                                    |
