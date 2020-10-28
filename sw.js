/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1243066710.html","945d37cac0b9ecb8cba035c3cefbf450"],["/1733019837.html","dc88304cbaa66814178b1f56fdbbbfd7"],["/1771338196.html","714a89dd0fdc0b6422cc6df278cff632"],["/2166830328.html","647ccbce5d897ea84a0151d511f2f26b"],["/2195189573.html","eb18b8c4a2dc1252e86fc4d3a55566f9"],["/2360238627.html","f3a54be190f6bfd77848b29557171a8f"],["/2476109404.html","93ddba2eed8f6558bdd531e553056363"],["/274610813.html","cbabfbdd9bd07c544b4686aab61efbce"],["/2931784335.html","7427a2e4f8509f5a6f9ebced0a03bd9c"],["/2965840343.html","3a33801b2d610253b415dcb8aedd3a0a"],["/3178170368.html","0f551c65da044ce6a9ffd551237eda51"],["/3305003915.html","329875e79e95b7667de0262b21234c37"],["/3632233996.html","f272a4a48e0bb1a22ce4026164f8d8c1"],["/372674368.html","954d2a7f5c31f5d586043ff08b6f075b"],["/3fe5.html","8491a1a65343742182ecfed69c7e7ab2"],["/4183719525.html","1c90755c8cb8d04b840bc0a47355c00d"],["/568795252.html","d20c44614d6e4bc97361612befaa5579"],["/75507639.html","f1de14c4c05b40e539250630c93bb741"],["/757632919.html","1104b48b6bc4bd705b3cc1c224a24571"],["/76666735.html","84e6a0e57a8115a2ebece1c7f6e9ddf4"],["/8fb4.html","89e851a1c798e642e0c73c50d0838901"],["/about/index.html","9ac7d64b9b52b82ac0a93d850abefb35"],["/anime/index.html","710948fc1dbf0ded3ddaa22f78ffbdfa"],["/archives/2020/10/index.html","6ccd065c7288716890a70ca6102f3a03"],["/archives/2020/10/page/2/index.html","c7b382dcb670f39ada8666efbc0efdec"],["/archives/2020/10/page/3/index.html","b399cf5120d521fffc26a8679e0e6ea1"],["/archives/2020/index.html","3093d249dd263b5975450ce7d03e4c27"],["/archives/2020/page/2/index.html","2992ae681626687e5a131a53f3c6694e"],["/archives/2020/page/3/index.html","70c28501deb65b786b793d73f80f3648"],["/archives/index.html","34185d564caf50f8df1b905c3116dca8"],["/archives/page/2/index.html","1a8795d282ae4a89bdca82c0dcaabb3e"],["/archives/page/3/index.html","508f294676453210815e7e6513590a35"],["/books/index.html","0e68b1ae45e0176bc278aa6ebeaae2b5"],["/c4f.html","2985cdf59b10152781f7819b623caa6b"],["/categories/Tools/index.html","394842d6a0d91ea5575e2deada5d2ba1"],["/categories/butterfly教程/index.html","35c4a9f8b6d81ac167a67c7e8f841199"],["/categories/index.html","ea1677e9e7eff650750699d300a9cedb"],["/categories/issues/index.html","0a257e1a7294595cda917cfbfa85a498"],["/categories/分类模板/index.html","ce3e2b91956cd610136f50f4b9a85404"],["/categories/知识储备/index.html","29badfe734bf1fdbcaccb3124ee5faaa"],["/clock/css/clock.css","b89bfe92070c455f30055fcf79717db5"],["/clock/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/clock/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/clock/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/clock/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/clock/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/clock/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/clock/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["/clock/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/clock/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/clock/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/clock/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["/clock/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/clock/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/clock/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/clock/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["/clock/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/clock/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/clock/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/clock/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/clock/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/clock/js/clock.js","12eb99504623b97d0fac29e77cc444e2"],["/clock/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/course/index.html","de295aada6bebd80ded41c0e1dac9db8"],["/css/index - 复制.css","f43e45725eb5a9774c90ab8934c6b635"],["/css/index.css","e14f0d92b1f5c8cbb20f784b099d723e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/bizhi.html","1d0e5da46cef4671493ac6cfd8091467"],["/gallery/index.html","477e09d22880510e2c242627b1d2f44a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","c943d31b78d5f85026baeabfdf5612fe"],["/java/index.html","36f45820a9154009a57514b067452fb1"],["/js/main copy.js","f5b2bd10be1e09516c539afa2197a8d7"],["/js/main.js","95ba34635a79cb9a8ddbd52d020f9a83"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","7e3eaf699be9a6b513190c7af8d14a3c"],["/magnet/css/catalogMagnet.css","5340a12c9740e00bd10d9e602e1aa460"],["/magnet/js/catalogMagnet.js","f7da9170d96128e6c653ca6fc74e8dc4"],["/magnet/js/vue.min.js","520cb27262482215e98aa2de66403a60"],["/movies/index.html","58ad78be5b5f5046f871da6b2311d64c"],["/musics/index.html","8ebe3d5d541d5bd5743e9b00db5b87fe"],["/mysource/css/iconfont.css","b1918e3c57dfd6564e49ac1ab6f91134"],["/mysource/css/message.css","72dedd4f0902efb2c7bf7011c56adecc"],["/mysource/css/mystyle.css","262c1fa45bb73bf8c50ec3bec6a1daa5"],["/mysource/css/reward.css","4546f52491aa25a71ac1ae29eacdabe0"],["/mysource/font/15991914154209.ttf","ce0149009ca03eb2811c24bb013785db"],["/mysource/font/16026684292569.ttf","6db42670e2a06b5181649281a2576e1a"],["/mysource/img/01.jpg","9269002d0873d0e0fe9c9384507a0f81"],["/mysource/img/02.jpg","fefc2aea665b1edbb7807542e32fc20f"],["/mysource/img/03.jpg","7cfc909ebe8d83683909846edd6b5232"],["/mysource/img/04.jpg","7cf7593463d0870d96c13a125815b848"],["/mysource/img/alipay.jpg","f36366377e30ef42916588a16b8f9551"],["/mysource/img/wechat.jpg","57d1b828eb278f064dfd6cb4f3e9294e"],["/mysource/js/calendar.js","fc8658315cebe280bdf4716442b72eee"],["/mysource/js/clipboard.js","4d4756e79963a26bf8c05dac466ec36f"],["/mysource/js/languages.js","248104bbe36834208716172dca8a1908"],["/mysource/js/message.js","537e2e01cf5f1be597d522d1f5f3b691"],["/mysource/js/mystyle.js","d41d8cd98f00b204e9800998ecf8427e"],["/optimization/index.html","a050472510cd5c3d39295b2405ec4215"],["/page/2/index.html","55e2c1ec36d309fb064537c7418c299f"],["/page/3/index.html","62f0d7ce24492ea21c65004c78166df6"],["/python/index.html","8fcf1d421e2347087c8720dc92f4d49f"],["/reward/index.html","c89638e962ab39c421c673065928b524"],["/sw-register.js","df152fdcdf76d6bcc37b11c57de30a11"],["/tags/403/index.html","c1e762c80e98c32454613561c539bcdf"],["/tags/API/index.html","fa2df038114f4929d93649627df0579b"],["/tags/Blog/index.html","36da5f1435698652a56bb642eb6d934a"],["/tags/TortoiseSVN/index.html","0c43339a0005e7087d2cfbee807ea6c6"],["/tags/github-desktop/index.html","fb11426f7fd9b0a06fe47a613f2d1911"],["/tags/github/index.html","71c71ae06cbfa84545722bb1f81f87e1"],["/tags/hexo/index.html","5c5282e24ef0ee6f4c73db57c152e07d"],["/tags/index.html","91319096447e869bf3478088ed7712b9"],["/tags/issues/index.html","181ad57a0d2fbfc610e10ec956dbd7cf"],["/tags/markdown/index.html","dc23495bd76bb6914733bd1881dee406"],["/tags/tools/index.html","d5e163612df578b00ed9d96df04278be"],["/tags/valine/index.html","3628edbde007006256cf5c03a5088a5e"],["/tags/vscode/index.html","0a35eacfa11b201947a101b995d5161f"],["/tags/图片/index.html","1e3138c715fa502f5e55660c26a8d1fa"],["/tags/壁纸/index.html","9e77970a1a2b78c82a1b3ac31ccbc470"],["/tags/技能/index.html","b0559cab9668b0942d4412e7106815d1"],["/tags/接口/index.html","cc25b47084e8291d80124e7be3af061f"],["/tags/标签1/index.html","b57dde399fe3a785a97642c681ca7ba4"],["/tags/标签2/index.html","8450b83e49726cda69930999b3b81303"]];
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
