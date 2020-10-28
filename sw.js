/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1243066710.html","e96a0170c5a0f17914b25806d39a6339"],["/1733019837.html","c9ac382e611ef8b3208aa208930403c3"],["/1771338196.html","315426780cadd9796a9623a53550ecd2"],["/2166830328.html","dfb232fe3cd83f61e65e236670dea642"],["/2195189573.html","c33b86c9ea7c64dd1478a260b1d07f97"],["/2360238627.html","e7295ffb493360696ec789df2f76162c"],["/2476109404.html","5081e1b6120d7535833f9c4d099e9b16"],["/274610813.html","5b6eebc9accc325b91a2a3ab4114b5e4"],["/2931784335.html","e228459b70118011467473df2ab3b29c"],["/2965840343.html","3e4b376ec47f664ec96856a5b42f0eb3"],["/3178170368.html","f0ec91bfc54e414051934927233d641a"],["/3305003915.html","40eebff19ce7d14242099e8056728f38"],["/3632233996.html","cebf78570cdb1ea0dec1e8a6dddbd95e"],["/372674368.html","c031f5f92543fc79820cc5e871f7a0ec"],["/3fe5.html","2b4e908d095e4c7bb525df3b8dd523a9"],["/4183719525.html","659940869f2924e8c489dc543857f551"],["/568795252.html","0cc52280802473172aebb165a1bbe841"],["/75507639.html","f5bc0c6dbc9f99f80b7b084b242eb976"],["/757632919.html","5b781f1589c1e9cf540c370e62caf47e"],["/76666735.html","b37a3e9f190ec87fe06b789518dbd308"],["/8fb4.html","791beaed7a878efe833983166552fc74"],["/about/index.html","89daf091d4514f1e6e57e66436d9c0af"],["/anime/index.html","9f9cf8b966c47f4b6ada242db53521b6"],["/archives/2020/10/index.html","8cbf12189c0229457485141fc82079c2"],["/archives/2020/10/page/2/index.html","167f505eb58a94d3b7fac3a622688181"],["/archives/2020/10/page/3/index.html","c33e1d895c39294d664d33cef8a1c578"],["/archives/2020/index.html","1fcbbef9050acdd2d425d03844fce3f1"],["/archives/2020/page/2/index.html","4e5d76a07fb340862d9b5c8af173acf5"],["/archives/2020/page/3/index.html","c879e8fcd9439c5ecab353171ca2248f"],["/archives/index.html","9fd09533e528b1413660ca6135500f79"],["/archives/page/2/index.html","2908a3719dcdecc5a26c09a5d0b0f4a9"],["/archives/page/3/index.html","1b44777071322f14226ab61f8a4784b0"],["/books/index.html","fc7609b49514bd7c0a489b927cbf4d3b"],["/c4f.html","c149bc3fa818fac8f00aa1b1fe19d6cb"],["/categories/Tools/index.html","7095f2fd96934fa8e9c51a532ad7a5f5"],["/categories/butterfly教程/index.html","a9e4143696d0903fd248d93a7dd7446f"],["/categories/index.html","0c62c94389ab9fb53898d4351259c18f"],["/categories/issues/index.html","6062da1e906bff22cad1885e565c89c6"],["/categories/分类模板/index.html","eca50d3afd906329aa3efb57dfe7e3e1"],["/categories/知识储备/index.html","675e03f842360be66f512d526c53ea74"],["/clock/css/clock.css","b89bfe92070c455f30055fcf79717db5"],["/clock/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/clock/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/clock/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/clock/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/clock/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/clock/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/clock/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["/clock/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/clock/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/clock/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/clock/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["/clock/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/clock/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/clock/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/clock/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["/clock/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/clock/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/clock/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/clock/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/clock/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/clock/js/clock.js","12eb99504623b97d0fac29e77cc444e2"],["/clock/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/course/index.html","a1030a0518d253a69edbbbc11a3be9e3"],["/css/index - 复制.css","f3911298c238b8344b6bc583ab1e6dd1"],["/css/index.css","7ecae17cdb934e67a9d00c60c59d769e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/bizhi.html","1903ad61910c3d83ad8796142e77bc77"],["/gallery/index.html","ea572bd8caf67d6e5f482e6f61c0a80b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","281cf1253f7ce874a83bd1e18d36ccd5"],["/java/index.html","f2c3096fdac3ee22df6d4730ffa6986d"],["/js/main copy.js","f5b2bd10be1e09516c539afa2197a8d7"],["/js/main.js","95ba34635a79cb9a8ddbd52d020f9a83"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","666f76243f49de5f0521ab84e234004c"],["/magnet/css/catalogMagnet.css","5340a12c9740e00bd10d9e602e1aa460"],["/magnet/js/catalogMagnet.js","f7da9170d96128e6c653ca6fc74e8dc4"],["/magnet/js/vue.min.js","520cb27262482215e98aa2de66403a60"],["/movies/index.html","512ca07db50417ce9a25b96acc05fe6d"],["/musics/index.html","c3cf6d73414015f49d3358f633405a09"],["/mysource/css/iconfont.css","b1918e3c57dfd6564e49ac1ab6f91134"],["/mysource/css/message.css","72dedd4f0902efb2c7bf7011c56adecc"],["/mysource/css/mystyle.css","262c1fa45bb73bf8c50ec3bec6a1daa5"],["/mysource/css/reward.css","4546f52491aa25a71ac1ae29eacdabe0"],["/mysource/font/15991914154209.ttf","ce0149009ca03eb2811c24bb013785db"],["/mysource/font/16026684292569.ttf","6db42670e2a06b5181649281a2576e1a"],["/mysource/img/01.jpg","9269002d0873d0e0fe9c9384507a0f81"],["/mysource/img/02.jpg","fefc2aea665b1edbb7807542e32fc20f"],["/mysource/img/03.jpg","7cfc909ebe8d83683909846edd6b5232"],["/mysource/img/04.jpg","7cf7593463d0870d96c13a125815b848"],["/mysource/img/alipay.jpg","f36366377e30ef42916588a16b8f9551"],["/mysource/img/wechat.jpg","57d1b828eb278f064dfd6cb4f3e9294e"],["/mysource/js/calendar.js","fc8658315cebe280bdf4716442b72eee"],["/mysource/js/clipboard.js","4d4756e79963a26bf8c05dac466ec36f"],["/mysource/js/languages.js","248104bbe36834208716172dca8a1908"],["/mysource/js/message.js","537e2e01cf5f1be597d522d1f5f3b691"],["/mysource/js/mystyle.js","d41d8cd98f00b204e9800998ecf8427e"],["/optimization/index.html","47fd5b5b8f6512545170db4ddd7d9d80"],["/page/2/index.html","91df04c4e590e96de8859e5ca0c35914"],["/page/3/index.html","7a298b371dfae17865977fb23c061df7"],["/python/index.html","abbe51d37c31793b4d4b048469ab4f24"],["/reward/index.html","2b6467f45e93bf369c0462db04e06eaa"],["/sw-register.js","df883f73f3b7618deaa8a66ef2c04d71"],["/tags/403/index.html","42515903648431d6e893e6d7c8a49d4a"],["/tags/API/index.html","da18e7364217bc946e28a4a65a72b307"],["/tags/Blog/index.html","50f2ccd5421b0f1666dd16a234fdb855"],["/tags/TortoiseSVN/index.html","040bcdddf59c8fd2aef0acca72047144"],["/tags/github-desktop/index.html","f79976c1f6e23810640d2fcfb178b6ef"],["/tags/github/index.html","055646db7498f0e68a9e8a9e434fcba5"],["/tags/hexo/index.html","3b17bb0f207ad5d4428002d7dfa10ea2"],["/tags/index.html","288d30182cb2f769e42fb6f55e71c248"],["/tags/issues/index.html","0720beb14084bbb71eb70d79126a153b"],["/tags/markdown/index.html","be482c62f34320ad515bf897ed55a3ea"],["/tags/tools/index.html","ac7307461dfb436019cf9b3a82973809"],["/tags/valine/index.html","56dffa837dc787f6daf6a73c482dbcfa"],["/tags/vscode/index.html","a099331c86c933b3dee1747f61298427"],["/tags/图片/index.html","b7d94e48e4da41160a877bae949d3674"],["/tags/壁纸/index.html","454368786b35843ed8963cd9840415bb"],["/tags/技能/index.html","3c7af903eb56b8e09724c02e6211a486"],["/tags/接口/index.html","55808135b87993c84b130c0a406aa951"],["/tags/标签1/index.html","fbed4d5b4091cdcdab1ad8ea45edb946"],["/tags/标签2/index.html","bcb780de9e50469ff4eed29437810d03"]];
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
