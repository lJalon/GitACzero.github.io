/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1733019837.html","a3783baa213145f138a511c5007983bb"],["/1771338196.html","f982889b325053fc71e145738d940d65"],["/2166830328.html","531a12d16192f9c069f83e19a27a1002"],["/2195189573.html","038a749f0fd55be4b6eaa38be4d4c4f3"],["/2360238627.html","061200ead7922c0c9e89920e89e5b9e2"],["/2476109404.html","5733a42b2872a6c08f32db720e70ff6b"],["/274610813.html","568b19789a75dfc97890cb9149b79102"],["/2931784335.html","31898189a6e623a4f8254be46bb391a7"],["/2965840343.html","5b4e246c08e792993f05fba85cccd124"],["/3178170368.html","b5a1600ad1cc44f07bbab86c154d03f8"],["/3305003915.html","ef203214eeea4733034c98cfb87854ef"],["/372674368.html","e318527049be34975f1d7f45bb000e98"],["/3fe5.html","92b3a2f72709d994c745a0e62833f1fa"],["/4183719525.html","3cbe8d8444cdfa61cb300b0cdacdecc9"],["/568795252.html","8332efc510ec5037a3e9a59e52d6ea5b"],["/75507639.html","449cec8fed182e6ef45d2ee87ca6d235"],["/757632919.html","5b07ce53ea5e31f8d1cc45e9f8c12cfe"],["/76666735.html","3ea16de99ac2da06c310d628c12d171f"],["/8fb4.html","36222356b176c0e7f6d61fc953391975"],["/about/index.html","f4fa84a824cd4757d8cbf32dfaa5feae"],["/archives/2020/10/index.html","9f7f2da6a18a0547aaf711b2d656a56e"],["/archives/2020/index.html","e7d123cae17e4e02a27cd0c0fb88eb1d"],["/archives/index.html","02482a56108a6a3c4f253621a7bb34b0"],["/c4f.html","fdd1e96ec13032bbd120abc447482992"],["/categories/Tools/index.html","0e2e8d1f6346008e994c3eb1bd84abe2"],["/categories/butterfly教程/index.html","503d4ce127ec867077c551ecff6d06e2"],["/categories/index.html","b1a2d8cbed0ed5fc449a3927253e83e4"],["/categories/issues/index.html","ccf8b3672821d585acc528c0208e73bd"],["/categories/分类模板/index.html","ac5ed090710bc83ae8b291fdf66e060e"],["/categories/知识储备/index.html","f9a8a750d8c32269bea556f926ac54ca"],["/css/index.css","b4032c7e2a9a8f80c3143e802d7d66e9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","da9e89e08bf783febfce0b59a334ee16"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","1efaa052b28cc62d03b287a973385022"],["/page/2/index.html","d0e4b5de73895c769755f4c74df89107"],["/reward/index.html","7034357ae562689036ff0bfe574b4d87"],["/style/css/iconfont.css","b1918e3c57dfd6564e49ac1ab6f91134"],["/style/css/mystyle.css","4a5694abfa8f0a02df0b8a761798a765"],["/style/css/reward.css","4546f52491aa25a71ac1ae29eacdabe0"],["/style/font/15991914154209.ttf","ce0149009ca03eb2811c24bb013785db"],["/style/font/16026684292569.ttf","6db42670e2a06b5181649281a2576e1a"],["/style/img/01.jpg","9269002d0873d0e0fe9c9384507a0f81"],["/style/img/02.jpg","fefc2aea665b1edbb7807542e32fc20f"],["/style/img/03.jpg","7cfc909ebe8d83683909846edd6b5232"],["/style/img/04.jpg","7cf7593463d0870d96c13a125815b848"],["/style/img/alipay.jpg","f36366377e30ef42916588a16b8f9551"],["/style/img/wechat.jpg","57d1b828eb278f064dfd6cb4f3e9294e"],["/style/js/mystyle.js","de83d9140c6d5698f9eb57981210fe93"],["/sw-register.js","215f229fd91f79e114f61a297f2415f8"],["/tags/403/index.html","f54de75f22d4dab7ed9ae769c1b08a7d"],["/tags/API/index.html","6e3d8ceb7ccd8c92c33033c6c8257791"],["/tags/Blog/index.html","3bf62da867cbb4a68af1da6be4c22ec2"],["/tags/TortoiseSVN/index.html","059636b776fe0de1c4ed9f44070326d4"],["/tags/github-desktop/index.html","807289da19e094a228d9ba71df366759"],["/tags/github/index.html","8facf475b4f16410c766552f68b77c5f"],["/tags/hexo/index.html","18dff0e88118211d88ce93e117200ce2"],["/tags/index.html","b564701fef42c5f680536aed1137747e"],["/tags/issues/index.html","41c07476a5b12a2e37529c204a39ec54"],["/tags/markdown/index.html","68c7850fe6957330cd37701e29a4307b"],["/tags/tools/index.html","5039d2b580366d844bc51fcffe391c16"],["/tags/valine/index.html","70229673e24b3b0c7fb5501ba80f26ac"],["/tags/vscode/index.html","ed1a7160b9896ddf609020c75df6414e"],["/tags/图片/index.html","2956b39c777a1df2b29e25e799718ec4"],["/tags/壁纸/index.html","761c4327d9ac4a8b76a1bd7ea803a5c1"],["/tags/技能/index.html","89f9d6bb486f237f3bde6d0e1cfa76a3"],["/tags/接口/index.html","781316e067d98b379da4a78606569b35"],["/tags/标签1/index.html","11b9edaf42669e1f55a78982bd897792"],["/tags/标签2/index.html","c09b604e362fc3c26386ff833d6702cf"]];
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
