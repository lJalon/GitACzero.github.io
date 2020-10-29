/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1733019837.html","90a4585f24b4602a600907aaf6e4ae2c"],["/1771338196.html","a2c9f335ffc4feac41d70005f4881ba0"],["/2166830328.html","6f797defe8fea45025299eb8f2388513"],["/2195189573.html","09c70c7e85d8f44f2c67a42b313e5173"],["/2360238627.html","11eff086b2862512c1788e6b8fa81aba"],["/2476109404.html","903d36cc92f06ef90cfd69b1d2e6dd04"],["/274610813.html","6ab704dcef18e68f77c312203d837514"],["/2931784335.html","1936c72e1a9f579b77d460da94189409"],["/2965840343.html","b9c8821945efa46a2dc11a3004fb6af1"],["/3178170368.html","315a6c6c95042a7849cdf64a22994645"],["/3305003915.html","3e19fbb80f6cc5f79e8d4122dba41c4b"],["/372674368.html","dd7672ffb55e5aef88a089806cc90841"],["/3fe5.html","950e91ae55c5c6aefd6f7810d2eb8434"],["/4183719525.html","3f0f0ef9572739dab02373ee78c1f6f0"],["/568795252.html","b163b46ee38f1a281c1577940632d00a"],["/75507639.html","58ca81392315d36e61069cb980a5d33b"],["/757632919.html","8fe4157636be02a8a4ab6b579c31ff81"],["/76666735.html","ad58c66990beda2716954e79d745bbad"],["/8fb4.html","8fa1837725b3288d5faf652e03957c4e"],["/about/index.html","9e8f35f4232b5e2c8841c7ec7c1291ef"],["/archives/2020/10/index.html","c320a1da0c1eab07dea412ab5d390468"],["/archives/2020/index.html","f5518a1f67312726de35f57f31a6c880"],["/archives/index.html","d47e4d89d37f51079792ed7512291d0c"],["/c4f.html","0b6dbf60f59511d1ad55cf984398781c"],["/categories/Tools/index.html","1cb7e91c53e7904c2164690b9f19ce7a"],["/categories/butterfly教程/index.html","baafd6e298c07d994d78cfb91a39409b"],["/categories/index.html","5a4f0ae3eaeaf4fee509ed8017875e2a"],["/categories/issues/index.html","4b157a993435a5068c54b3e51d5acb5a"],["/categories/分类模板/index.html","30008be843664ea7727f729d5a150a6e"],["/categories/知识储备/index.html","f6ba0199b8c5f7547541938638525113"],["/css/index.css","b4032c7e2a9a8f80c3143e802d7d66e9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","e5a947c7f28a518830fe31f5ec5acd7e"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","794b278e39725b73ceafad411a6e862f"],["/page/2/index.html","b1444718285d8507fdee08be4d06c935"],["/page/3/index.html","01dabb320320399ce8231086cb8a33ed"],["/reward/index.html","94b22b1243517c7bd070857fb189d975"],["/style/css/iconfont.css","b1918e3c57dfd6564e49ac1ab6f91134"],["/style/css/mystyle.css","bf8dfe8da5a6b05e811affd36f59364f"],["/style/css/reward.css","4546f52491aa25a71ac1ae29eacdabe0"],["/style/font/15991914154209.ttf","ce0149009ca03eb2811c24bb013785db"],["/style/font/16026684292569.ttf","6db42670e2a06b5181649281a2576e1a"],["/style/img/01.jpg","9269002d0873d0e0fe9c9384507a0f81"],["/style/img/02.jpg","fefc2aea665b1edbb7807542e32fc20f"],["/style/img/03.jpg","7cfc909ebe8d83683909846edd6b5232"],["/style/img/04.jpg","7cf7593463d0870d96c13a125815b848"],["/style/img/alipay.jpg","f36366377e30ef42916588a16b8f9551"],["/style/img/wechat.jpg","57d1b828eb278f064dfd6cb4f3e9294e"],["/style/js/mystyle.js","de83d9140c6d5698f9eb57981210fe93"],["/sw-register.js","a82c32b06c84b768094ff02bf236498a"],["/tags/403/index.html","824e48e0d90724aa173e3d23c432fd21"],["/tags/API/index.html","1f2a11c8c6378185ce44ab34a303eb87"],["/tags/Blog/index.html","03f134886762384eff35da33f1452a21"],["/tags/TortoiseSVN/index.html","35b104ae77f540c2303654c5207668b6"],["/tags/github-desktop/index.html","449202651403a9c68ce79b0225ca1176"],["/tags/github/index.html","91695d404cfd47319fa72c3fae0e6546"],["/tags/hexo/index.html","f2f374d02de0ebfe0bf9936c3fb8ccc1"],["/tags/index.html","1b6095227cd08a95c0b193d9b5416631"],["/tags/issues/index.html","8d5f7902ae3d485ba2941c783f262d9c"],["/tags/markdown/index.html","9600af905544be30246c6e8918dda434"],["/tags/tools/index.html","7473dfac31965ee3251e56a0069ee192"],["/tags/valine/index.html","6e2c92afcda75cf56a318eba7765281f"],["/tags/vscode/index.html","ffbd111079edb39bc3b2c130c3efc4b5"],["/tags/图片/index.html","8e26fd913f374b2f0f8cbdf1fa33c4e9"],["/tags/壁纸/index.html","8d8557a4ecadc8ceaacbca7a44065a63"],["/tags/技能/index.html","e557f1a0d328c4e31fecbe5f79157073"],["/tags/接口/index.html","b1db902ef5e3be30cb45634a392fd3fa"],["/tags/标签1/index.html","584e00e7734ab0affa2203aa615832b8"],["/tags/标签2/index.html","2c20b9d00e82f486ce7ab2d17823f851"]];
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
