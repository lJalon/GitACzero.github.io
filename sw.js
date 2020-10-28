/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1243066710.html","6e85b280f1b655c906b7eabbe6c65e1f"],["/1733019837.html","00ea42121f7d55d42395e594cd532ef2"],["/1771338196.html","cd633f18224396728ca6ccbf5c5eef3f"],["/2166830328.html","788fd803fbbcb7eeb8ade2ea0a7caee9"],["/2195189573.html","19e14d073a392605ee0752d24f0a8c09"],["/2360238627.html","bbf52ec51eae44c3d8d2662d47849ffa"],["/2476109404.html","87f73cf15170d1a859f5ba855e0768be"],["/274610813.html","7880cd15b1dad57c526a6ce3b272decd"],["/2931784335.html","e1021b0199b5a66b03a24bcd8d84f9ed"],["/2965840343.html","74d814bd2cbd79eab8b0ed566c0bebb5"],["/3178170368.html","cdfa37c82ad31631b6681ad2c587141b"],["/3305003915.html","06a5e75d62856d3cefa0acbc3a80844a"],["/3632233996.html","2f28cd58e509f9e029e91da30910f989"],["/372674368.html","daf4d783d58264f6253a411229eb7d75"],["/3fe5.html","cd8aeb2c139426ea5e01d87da8394b9d"],["/4183719525.html","0993de3f9831ea548eff4f97021a2022"],["/568795252.html","26632c3a7d5ad9b355b0bfa0464915a7"],["/75507639.html","21b0ebab1dfc9425547afab46efae7b7"],["/757632919.html","5a494970a3e460d13e2d6bcb165de395"],["/76666735.html","117c9916e5accb04648e4ed6b058d7fc"],["/8fb4.html","1d334b23fb4991313abcc17e9f6b18a2"],["/about/index.html","fa0c11527496ce07dca68d9704e33080"],["/anime/index.html","c5913843c8efeb4812764070c5825a59"],["/archives/2020/10/index.html","be8c4a5f7fe304157656c4fcf844b173"],["/archives/2020/10/page/2/index.html","53b127bb978b83aa22ecba0df0e78305"],["/archives/2020/10/page/3/index.html","9a432b957091374c204280772cab81a9"],["/archives/2020/index.html","1adf53cfbfa92e0ee6dc490f9b29c23b"],["/archives/2020/page/2/index.html","efee2dcd8c269eb0c6f43b5646c7fd52"],["/archives/2020/page/3/index.html","640fc2e9a57249acd3ab7f847f41976b"],["/archives/index.html","b33858cb2790d0e05233d3becc14cf40"],["/archives/page/2/index.html","7dba69773cf57f47c5aed9d89b9b454f"],["/archives/page/3/index.html","5d4be067be5b71b7147a4fa4c91bf72d"],["/books/index.html","881eea2cfcdb87a42fc8c12fc36c2ed4"],["/c4f.html","f6761a123a58ad8190cc26b16c8e6838"],["/categories/Tools/index.html","b8199f92af6ca4d2782cdce58b1f31b2"],["/categories/butterfly教程/index.html","c73a95da4dcfaa25542658eeb676a141"],["/categories/index.html","0f90a13ad88f0b6265a32694753c3957"],["/categories/issues/index.html","1c44c2d2706add1241389950ef4a620f"],["/categories/分类模板/index.html","62a29bd5005ebe50553780bd4d36a199"],["/categories/知识储备/index.html","70524d2c3106b63b0ff294344145ac6e"],["/clock/css/clock.css","b89bfe92070c455f30055fcf79717db5"],["/clock/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/clock/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/clock/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/clock/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/clock/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/clock/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/clock/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["/clock/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/clock/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/clock/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/clock/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["/clock/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/clock/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/clock/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/clock/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["/clock/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/clock/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/clock/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/clock/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/clock/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/clock/js/clock.js","12eb99504623b97d0fac29e77cc444e2"],["/clock/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/course/index.html","bd48b6736138a8b4ee96697ac2cd55f0"],["/css/index - 复制.css","f3911298c238b8344b6bc583ab1e6dd1"],["/css/index.css","7ecae17cdb934e67a9d00c60c59d769e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/bizhi.html","cb94e2d907f1b1aa5659674aed9c1266"],["/gallery/index.html","efddd0a591d3e9bb2e9cad6c636c8e0b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","3cf38b4d7e8160c33f3897a35b852f1b"],["/java/index.html","2ba77f5bf328cae67b890933856b6abf"],["/js/main copy.js","f5b2bd10be1e09516c539afa2197a8d7"],["/js/main.js","95ba34635a79cb9a8ddbd52d020f9a83"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","885ed3d959fccd642bcfc589a2ffba6a"],["/magnet/css/catalogMagnet.css","5340a12c9740e00bd10d9e602e1aa460"],["/magnet/js/catalogMagnet.js","f7da9170d96128e6c653ca6fc74e8dc4"],["/magnet/js/vue.min.js","520cb27262482215e98aa2de66403a60"],["/movies/index.html","2bfcd871e2fa1cee9c15dd7b724c7ef2"],["/musics/index.html","632dcda0f95ce39529d93b5829ffd058"],["/mysource/css/iconfont.css","b1918e3c57dfd6564e49ac1ab6f91134"],["/mysource/css/message.css","72dedd4f0902efb2c7bf7011c56adecc"],["/mysource/css/mystyle.css","262c1fa45bb73bf8c50ec3bec6a1daa5"],["/mysource/css/reward.css","4546f52491aa25a71ac1ae29eacdabe0"],["/mysource/font/15991914154209.ttf","ce0149009ca03eb2811c24bb013785db"],["/mysource/font/16026684292569.ttf","6db42670e2a06b5181649281a2576e1a"],["/mysource/img/01.jpg","9269002d0873d0e0fe9c9384507a0f81"],["/mysource/img/02.jpg","fefc2aea665b1edbb7807542e32fc20f"],["/mysource/img/03.jpg","7cfc909ebe8d83683909846edd6b5232"],["/mysource/img/04.jpg","7cf7593463d0870d96c13a125815b848"],["/mysource/img/alipay.jpg","f36366377e30ef42916588a16b8f9551"],["/mysource/img/wechat.jpg","57d1b828eb278f064dfd6cb4f3e9294e"],["/mysource/js/calendar.js","fc8658315cebe280bdf4716442b72eee"],["/mysource/js/clipboard.js","4d4756e79963a26bf8c05dac466ec36f"],["/mysource/js/languages.js","248104bbe36834208716172dca8a1908"],["/mysource/js/message.js","537e2e01cf5f1be597d522d1f5f3b691"],["/mysource/js/mystyle.js","d41d8cd98f00b204e9800998ecf8427e"],["/optimization/index.html","b23cacdd348f15458bd9a4ffcb45aef3"],["/page/2/index.html","48caf9782b42beb7887dfbab7e19a713"],["/page/3/index.html","9207f4ed429c53eb520b9f39eeb42579"],["/python/index.html","6fce38a79533198e8cbab68001d14a4b"],["/reward/index.html","90fae459e2317dbd9a8d9e6e8b51489c"],["/sw-register.js","0a5da615513ccc0a071d2b87a69ceded"],["/tags/403/index.html","ca3f9bfb33de14383a7796997fb612a5"],["/tags/API/index.html","830d2751264ac4e7e46ce76a62320179"],["/tags/Blog/index.html","2c420bca2a34df9791f617a1b6705232"],["/tags/TortoiseSVN/index.html","201cce5a3678a76b8127fe3c0cfe433c"],["/tags/github-desktop/index.html","ae924fc1b09b03bf91bdd338f1215a26"],["/tags/github/index.html","3e02395fecf4d1a7eba3d6225aed33e8"],["/tags/hexo/index.html","46f2b5362547a863e1c6beb8c1e9f757"],["/tags/index.html","f64df2f146177a0573f7f312d7731614"],["/tags/issues/index.html","21c7300ea4ebc457948117848b98726d"],["/tags/markdown/index.html","3871bdeb817adb0dc30d0d1bc5b2bb09"],["/tags/tools/index.html","c8cdee5f22788ae451263fc9a425a1bc"],["/tags/valine/index.html","01de8428fa10aebb135fa79eed627a2a"],["/tags/vscode/index.html","a32114c5f970e1a1f271be0e6131ef61"],["/tags/图片/index.html","0a4c107e8aea19ca6074da8877a4b7fd"],["/tags/壁纸/index.html","af7914f83b68ccfe53e5561db2a31a5a"],["/tags/技能/index.html","c21397a03b0472c41f15bf7b2a2482f8"],["/tags/接口/index.html","bde803d121381a98f3d04314969e241a"],["/tags/标签1/index.html","9c45a47ba1244dec1f9bcd2e74795a0e"],["/tags/标签2/index.html","cdf5f194859a072c494b30b22caeef1a"]];
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
