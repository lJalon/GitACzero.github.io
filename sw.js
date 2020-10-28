/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1243066710.html","4e7ad6a5263b0dc175f268d883241500"],["/1733019837.html","294ce37f04ebcac301edeaa4f1c681af"],["/1771338196.html","65f579e5b109d300eaa9ffcdafdb4a31"],["/2166830328.html","7001530a3b4cacb46f8b808f7d7db493"],["/2195189573.html","d40cf0ce39ba7823299f5495c14658d6"],["/2360238627.html","18cda68abb3219e5c5dd2fc06b41ebbd"],["/2476109404.html","20b317d11fb9ad5ebefa6371989a1cab"],["/274610813.html","638dfa9a0186b8dad8d209c3fb377387"],["/2931784335.html","48d5938ea51a14a8221af1d2e35019ad"],["/2965840343.html","4669a5612fd24ea6fabdf01784ff0c90"],["/3178170368.html","6e698917a8c6c0943aa7ea7ef5ae3841"],["/3305003915.html","cac92571f74c817f2b13039bd383f151"],["/3632233996.html","0ef1f498919a5a8b5b3d0a43ea4c7f9e"],["/372674368.html","55f26cc37940105f1e7d92d3377ed30b"],["/3fe5.html","adf85109d773579dcd5b81deff505447"],["/4183719525.html","1427fe89a75da7dc2c139681b2c5c8ca"],["/568795252.html","3e8baf474a47a72bc019f4f63f5ab03b"],["/75507639.html","d3b6bbcf0edfffdd9bdcb30a80c79899"],["/757632919.html","9db81654219d6f98efc63e1c1ab2eec4"],["/76666735.html","2f93d8df01e20ee971d9121d2137a453"],["/8fb4.html","3f18fa0f4bd8e25d442984190c7976ed"],["/about/index.html","31223e7fce2b3c91bcd88ea8a14e5e0e"],["/anime/index.html","44cce3ee3ef1bc655f61b4ea2eb6eba7"],["/archives/2020/10/index.html","272d6570b5c5a8b7119f2edfe716ac86"],["/archives/2020/10/page/2/index.html","53d8a7be0c6f0f6b3b3f98c6a944225a"],["/archives/2020/10/page/3/index.html","f91711e0d0621c3fe8c3528f19dc04ca"],["/archives/2020/index.html","8139490fe155924364838023cbae40a7"],["/archives/2020/page/2/index.html","a5ea86501486a22ea9ac56e188dc2255"],["/archives/2020/page/3/index.html","0df8e02666eb6c12ce0b8e73726af7a4"],["/archives/index.html","8ed73dd8d8b5e98c49ddac17fe64551c"],["/archives/page/2/index.html","1595c4284f94fda1e2528f2bbc0bb9c8"],["/archives/page/3/index.html","4ef1f44287f02cc8a3c20fba52226325"],["/books/index.html","2fa18cb51e3a57b0954245746d47e759"],["/c4f.html","7a7b0abd42050f5dd1dd8434726306e8"],["/categories/Tools/index.html","44e2c0d093eb20f9ea45c969539aa47f"],["/categories/butterfly教程/index.html","5d237a74b811d793b7275c05e6d93774"],["/categories/index.html","3fdd5d09d578f6d2469e700d3a9a21e6"],["/categories/issues/index.html","c1deb585c2204e5cf0a2abb7c79c102c"],["/categories/分类模板/index.html","80e47b8bdcd9948376d3e47318574dcd"],["/categories/知识储备/index.html","6fd9fc84fc51acdbf43617e752e90795"],["/clock/css/clock.css","b89bfe92070c455f30055fcf79717db5"],["/clock/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/clock/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/clock/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/clock/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/clock/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/clock/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/clock/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["/clock/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/clock/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/clock/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/clock/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["/clock/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/clock/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/clock/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/clock/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["/clock/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/clock/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/clock/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/clock/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/clock/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/clock/js/clock.js","12eb99504623b97d0fac29e77cc444e2"],["/clock/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/course/index.html","fcb32b681c67845a02dbb50230cc3e4a"],["/css/index - 复制.css","f43e45725eb5a9774c90ab8934c6b635"],["/css/index.css","e14f0d92b1f5c8cbb20f784b099d723e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/bizhi.html","035eeb4ac4efabe504b352c618e4ba39"],["/gallery/index.html","0588dfcb48f26ecd9287c9298df20825"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","9a1d8ae4b1740e096d6fecdb6616b665"],["/java/index.html","1b6874e737fe54688dc7ead379c7a270"],["/js/main copy.js","f5b2bd10be1e09516c539afa2197a8d7"],["/js/main.js","95ba34635a79cb9a8ddbd52d020f9a83"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","46d8b1b6d4a9ee86f83ac9926e9c0b64"],["/magnet/css/catalogMagnet.css","5340a12c9740e00bd10d9e602e1aa460"],["/magnet/js/catalogMagnet.js","f7da9170d96128e6c653ca6fc74e8dc4"],["/magnet/js/vue.min.js","520cb27262482215e98aa2de66403a60"],["/movies/index.html","5cd9032c5b2c121c0cb7c42148d98f21"],["/musics/index.html","1312025ba305e597b77251ff202d8056"],["/mysource/css/iconfont.css","b1918e3c57dfd6564e49ac1ab6f91134"],["/mysource/css/message.css","72dedd4f0902efb2c7bf7011c56adecc"],["/mysource/css/mystyle.css","262c1fa45bb73bf8c50ec3bec6a1daa5"],["/mysource/css/reward.css","4546f52491aa25a71ac1ae29eacdabe0"],["/mysource/font/15991914154209.ttf","ce0149009ca03eb2811c24bb013785db"],["/mysource/font/16026684292569.ttf","6db42670e2a06b5181649281a2576e1a"],["/mysource/img/01.jpg","9269002d0873d0e0fe9c9384507a0f81"],["/mysource/img/02.jpg","fefc2aea665b1edbb7807542e32fc20f"],["/mysource/img/03.jpg","7cfc909ebe8d83683909846edd6b5232"],["/mysource/img/04.jpg","7cf7593463d0870d96c13a125815b848"],["/mysource/img/alipay.jpg","f36366377e30ef42916588a16b8f9551"],["/mysource/img/wechat.jpg","57d1b828eb278f064dfd6cb4f3e9294e"],["/mysource/js/calendar.js","fc8658315cebe280bdf4716442b72eee"],["/mysource/js/clipboard.js","4d4756e79963a26bf8c05dac466ec36f"],["/mysource/js/languages.js","248104bbe36834208716172dca8a1908"],["/mysource/js/message.js","537e2e01cf5f1be597d522d1f5f3b691"],["/mysource/js/mystyle.js","de83d9140c6d5698f9eb57981210fe93"],["/optimization/index.html","ea81172a89699684124abe4a8cb086c7"],["/page/2/index.html","5bc14578dbcb84a033de2428b283e357"],["/page/3/index.html","dd8143b864c2b780e653ec145bad320d"],["/python/index.html","4e1b19529150efc6da2eeddec0db4ffc"],["/reward/index.html","6508dd5f69f3e88ded20189d1ebe8527"],["/sw-register.js","d1b37a115ad4d1a93d342dc4808d0f00"],["/tags/403/index.html","41a895fee89c574d9d7065b147435787"],["/tags/API/index.html","fa3c4ccd6e0e18bf85584908c5623cb4"],["/tags/Blog/index.html","a836b82f6fab0a0f35020f86de4bb366"],["/tags/TortoiseSVN/index.html","e1469f0d1594df509c054dbc0c54f948"],["/tags/github-desktop/index.html","0fd0025a3f3215e4f0a007833adc1df3"],["/tags/github/index.html","a910c68236cb632c662683b11dad48bb"],["/tags/hexo/index.html","29ed7b50be24e2cbad7c4d24faf954f4"],["/tags/index.html","285060f0102f6546cb7d45ffa85d6241"],["/tags/issues/index.html","87db5f4ddc169cde9403506eff6feec6"],["/tags/markdown/index.html","2368f4b2f70ded43ef3227bfd4ddee8f"],["/tags/tools/index.html","3da0173b27e4f3f5da077856bd5cfde5"],["/tags/valine/index.html","975fc7b1c6e1793b2361f12a0c2f95a4"],["/tags/vscode/index.html","ada1ec052fca0d3c5007f5dff7ead527"],["/tags/图片/index.html","43333e098cbac48a07a7a260b219f38c"],["/tags/壁纸/index.html","a30ce1849082297cbb3b6cc601291c1c"],["/tags/技能/index.html","136d3a0b705d6dbbcc081962bf4d1170"],["/tags/接口/index.html","72f10a38877fc947dfdf57247792f6d3"],["/tags/标签1/index.html","795e62c433d0969f847bec323bccbfc5"],["/tags/标签2/index.html","a583a6dca0cf32acc1fd1c6fa3949437"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
