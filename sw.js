/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1243066710.html","b93564129e60becdbc869139bc88281a"],["/1733019837.html","a7980ef330eed3b280bd36a75ecd623e"],["/1771338196.html","25298de344d525dbcc70738ee0dce094"],["/2166830328.html","74d8f513aafce777013b3e9866385896"],["/2195189573.html","b26d37a2ab01b4b3ad816890870413ac"],["/2360238627.html","48ec452567560edfa3855a1caa415a28"],["/2476109404.html","75d775883fe1fdab7494217ed189b9f6"],["/274610813.html","29a139b4ede8b0f66ecc5ab7be03f035"],["/2931784335.html","da5cd7830d6d492b8f2dc77a183e978f"],["/2965840343.html","f80a55249613fb84e7c303474a0c5c27"],["/3178170368.html","7446b034171fb96a652900c306de329c"],["/3305003915.html","da979ee91c1d8ea135ae3e0eb8382a6a"],["/3632233996.html","074b06f610f9f3f9213cac30ac2ec86f"],["/372674368.html","e33bf5977d89427cf8b2b7f2ce51e6ec"],["/3fe5.html","f8e35edd3ce8999ef87993abdfc45006"],["/4183719525.html","347a7852ab2685804d6473abe1b0ba89"],["/568795252.html","5de0bb329c8f837a1509e793aa84fc03"],["/75507639.html","4dad6006c91a0efebad2a88715c47f9a"],["/757632919.html","6fa66fac81d79d2afc47e5fe591121cf"],["/76666735.html","335de88069638f5d2a8891554b53d2a3"],["/8fb4.html","4f6d5567a5d5154bd0cc7b3eb4a4431e"],["/about/index.html","53cc875aaac3e27c79d30eb088f9b36b"],["/anime/index.html","8c9269870cbb7e67e022038d3411850f"],["/archives/2020/10/index.html","620df874c5654e1320c7d8776ef21d16"],["/archives/2020/10/page/2/index.html","920a98fdc4bed8ae41e401c2e3aac1ee"],["/archives/2020/10/page/3/index.html","9ce1a8fdf69e47da4023c0f6fecf4dca"],["/archives/2020/index.html","a59159d7c5554e5ae601a633e9aad7a9"],["/archives/2020/page/2/index.html","0a3a0d35a19faab4949b6daa710221a3"],["/archives/2020/page/3/index.html","bda7c09ff086a12427de7997d7203217"],["/archives/index.html","120e3421a143e65caf3ed54c2a929978"],["/archives/page/2/index.html","214e6470e690a17581a187e826319b65"],["/archives/page/3/index.html","b524eed6bfaead91f511f0896b565d90"],["/books/index.html","2c6368d8380862d5467955c28c5ad478"],["/c4f.html","49c35b408466546325584d508d02fec9"],["/categories/Tools/index.html","16345b02c57ea6b7bf51f88146069730"],["/categories/butterfly教程/index.html","c1af62744ca258ba6e10acf34f4f0916"],["/categories/index.html","b5e667153998566f64daf1eba344770f"],["/categories/issues/index.html","dff2630bceff37eb849794ca71503518"],["/categories/分类模板/index.html","d4fb23965f2b76026ac8c8aadf8cfde6"],["/categories/知识储备/index.html","18b1106eaa463079b9863f9314aae538"],["/clock/css/clock.css","b89bfe92070c455f30055fcf79717db5"],["/clock/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/clock/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/clock/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/clock/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/clock/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/clock/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/clock/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["/clock/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/clock/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/clock/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/clock/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["/clock/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/clock/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/clock/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/clock/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["/clock/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/clock/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/clock/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/clock/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/clock/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/clock/js/clock.js","12eb99504623b97d0fac29e77cc444e2"],["/clock/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/course/index.html","94313e38c901220869f4fd76e4c90d59"],["/css/index - 复制.css","f43e45725eb5a9774c90ab8934c6b635"],["/css/index.css","e14f0d92b1f5c8cbb20f784b099d723e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/bizhi.html","0b23e6401df5988ba8c52821496bff8b"],["/gallery/index.html","68dd5efcd91da25a9915ab4b4fb3cacd"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","57f746f62720614d1afec548a433de78"],["/java/index.html","4b94019de15f5b8635f6d3552d775265"],["/js/main copy.js","f5b2bd10be1e09516c539afa2197a8d7"],["/js/main.js","95ba34635a79cb9a8ddbd52d020f9a83"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","beeb328913ffd039109b8a5af49b8b01"],["/magnet/css/catalogMagnet.css","5340a12c9740e00bd10d9e602e1aa460"],["/magnet/js/catalogMagnet.js","f7da9170d96128e6c653ca6fc74e8dc4"],["/magnet/js/vue.min.js","520cb27262482215e98aa2de66403a60"],["/movies/index.html","602d519d603aff45d83733a8d5bca00d"],["/musics/index.html","5fe57eb61b894893d94c6bfa4d2597a6"],["/mysource/css/iconfont.css","b1918e3c57dfd6564e49ac1ab6f91134"],["/mysource/css/message.css","72dedd4f0902efb2c7bf7011c56adecc"],["/mysource/css/mystyle.css","262c1fa45bb73bf8c50ec3bec6a1daa5"],["/mysource/css/reward.css","4546f52491aa25a71ac1ae29eacdabe0"],["/mysource/font/15991914154209.ttf","ce0149009ca03eb2811c24bb013785db"],["/mysource/font/16026684292569.ttf","6db42670e2a06b5181649281a2576e1a"],["/mysource/img/01.jpg","9269002d0873d0e0fe9c9384507a0f81"],["/mysource/img/02.jpg","fefc2aea665b1edbb7807542e32fc20f"],["/mysource/img/03.jpg","7cfc909ebe8d83683909846edd6b5232"],["/mysource/img/04.jpg","7cf7593463d0870d96c13a125815b848"],["/mysource/img/alipay.jpg","f36366377e30ef42916588a16b8f9551"],["/mysource/img/wechat.jpg","57d1b828eb278f064dfd6cb4f3e9294e"],["/mysource/js/calendar.js","fc8658315cebe280bdf4716442b72eee"],["/mysource/js/clipboard.js","4d4756e79963a26bf8c05dac466ec36f"],["/mysource/js/languages.js","248104bbe36834208716172dca8a1908"],["/mysource/js/message.js","537e2e01cf5f1be597d522d1f5f3b691"],["/mysource/js/mystyle.js","d41d8cd98f00b204e9800998ecf8427e"],["/optimization/index.html","35902a101dbc20856bef379487708dc7"],["/page/2/index.html","e5187398f0fc42ded23cc665d8565f3d"],["/page/3/index.html","a2fa526e0c09babd11a87119777f7f4e"],["/python/index.html","cd11aa428bff5c9cf3ffdbf7b5a60198"],["/reward/index.html","b58c4772dd6ad7925d9107ddd1cb836c"],["/sw-register.js","40f9aa78b551a2718ccaad90f62a4632"],["/tags/403/index.html","b43d5cb373486d7f5e576f4cd6a5948e"],["/tags/API/index.html","e4b8ab97afdb653e63d8b26fe53069c2"],["/tags/Blog/index.html","a00f953829982182842c14946d796f2f"],["/tags/TortoiseSVN/index.html","1425547a7bb993cec7facc5dfb7894a3"],["/tags/github-desktop/index.html","6f09189e6daedf191c3793eb66bcbcb8"],["/tags/github/index.html","a0fe720db01cc2c530bfbcaf598d9435"],["/tags/hexo/index.html","b0a9bb1dd80314a4c78cf62938091484"],["/tags/index.html","ce4699f6d90da0de097bf436cad5ee9b"],["/tags/issues/index.html","7a0477b6041ed78c6a392ada873cc0b0"],["/tags/markdown/index.html","0ea4c910f76743e43df957f7326db378"],["/tags/tools/index.html","835f0b50b833e7d153c0c82f8c872689"],["/tags/valine/index.html","f181c415a347bb247a4a20db1fb0ecfc"],["/tags/vscode/index.html","9fbdfa65595bfe96f80f8430dfcd2472"],["/tags/图片/index.html","a5e3c98dda87290f71bf4c367bd29dc5"],["/tags/壁纸/index.html","2aa572c4d14c948065d5121123cd81d4"],["/tags/技能/index.html","a87c1126f331e9012953b6449d250e30"],["/tags/接口/index.html","89eb11c5d9f85dfc1a3cd770d1601b89"],["/tags/标签1/index.html","c3f666b59fcad27f7e29ff1551f7e6ed"],["/tags/标签2/index.html","36a1edc7e69b92562fdc6e420e5684d8"]];
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
