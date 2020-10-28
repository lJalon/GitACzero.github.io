/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1243066710.html","e991315880565b561bc9a7064464f99a"],["/1733019837.html","295e7c090232883eae21eb30bbba437e"],["/1771338196.html","e6d3f223a408aa6ab0a0b7bd8c7db9f4"],["/2166830328.html","1a1a851a23d47905592c189a5f090681"],["/2195189573.html","6f7bfffdbfae7eef5fe60c06f63e0e34"],["/2360238627.html","e437c40884567ed014cde2f0820f49f2"],["/2476109404.html","5ef303db2829745103f09ff1fa7f79e3"],["/274610813.html","daeee0ff0996ca3a3cc079f8fb166547"],["/2931784335.html","edab906d3c9668e623fedcd704e4eff8"],["/2965840343.html","e79d95e6d3fb8c41745e26b33500b88a"],["/3178170368.html","8258057653049ef73b36824741a1e433"],["/3305003915.html","3869b8e36868325a47c8980958aafa94"],["/3632233996.html","facce62cbb458b87cc31c487748a9779"],["/372674368.html","4899b4bb61903dace3d8f836267da73d"],["/3fe5.html","da5c8b09db528b6883ceefcf5377267a"],["/4183719525.html","8fb1b3d32157c3bcdcd6a256a826677a"],["/568795252.html","3215d2e67a262df78c721a25338fc0c8"],["/75507639.html","0c79fa8647cefc52112c99c6d8ac8a9f"],["/757632919.html","0e29cc1221f333e3a553e33391fb10aa"],["/76666735.html","340dc7cb4e4df06d8390531c379a45c4"],["/8fb4.html","e0fe1e339eda83ae76cd617b58fdaaf0"],["/about/index.html","b5132fc70fdd0f4d01a8ec3476c9dd77"],["/anime/index.html","29c86f1ca8b6aabaff54022105ece96c"],["/archives/2020/10/index.html","3bc84aa149d3f6c8814647c701cc519a"],["/archives/2020/10/page/2/index.html","a9fa76fd59d4b24b7737dfbb215ed419"],["/archives/2020/10/page/3/index.html","3c0d9699f2a5272c67530efee49a06d0"],["/archives/2020/index.html","c54a7a7b379f7e7358156a6ce41150b9"],["/archives/2020/page/2/index.html","f0da22688929cbd0a2039735007b309d"],["/archives/2020/page/3/index.html","79fb876c1ccd318e5e56e1e739b6f7b0"],["/archives/index.html","49a6b9c6031f899d61d812bc4accdb63"],["/archives/page/2/index.html","23e1ecae0b69085413a442d7731adeb0"],["/archives/page/3/index.html","16b6b6e5f6c8ab9ea4de2de10b2ac296"],["/books/index.html","2c74ecabf06d408d29b46e14aecb8cd8"],["/c4f.html","3a40b2790d2cef3b2a92cef0154da0c5"],["/categories/Tools/index.html","2744455f35d927f8dff0cc7cc0240cfb"],["/categories/butterfly教程/index.html","4e781b1c5ec1d47795b52b28f5fa8daa"],["/categories/index.html","71fe3e8c36585a1e4c0facef1e879169"],["/categories/issues/index.html","3fe461ecc25abc326cf42bde6ce64eb8"],["/categories/分类模板/index.html","0df8060d4267c7b02f9479977d81a93b"],["/categories/知识储备/index.html","e3d6ab11ff3bb1a65de6d0f40bd872c2"],["/clock/css/clock.css","b89bfe92070c455f30055fcf79717db5"],["/clock/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/clock/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/clock/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/clock/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/clock/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/clock/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/clock/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["/clock/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/clock/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/clock/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/clock/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["/clock/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/clock/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/clock/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/clock/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["/clock/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/clock/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/clock/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/clock/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/clock/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/clock/js/clock.js","12eb99504623b97d0fac29e77cc444e2"],["/clock/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/course/index.html","0a57e8ff270ad9a5341be50c4ad9621f"],["/css/index - 复制.css","ea5003a6dd5547d35e6ec7cd1e420f93"],["/css/index.css","d2bf7e0aa657fe913e20f5d23ae6e16d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/bizhi.html","549dc3259736b7dbff04eebbd196b238"],["/gallery/index.html","b9a273625417bc7c07456931401d5652"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","1983023214624f951e8e1d2c7afa8c47"],["/java/index.html","d3ac1277d67353adb6a0b656c73bfcdf"],["/js/main copy.js","f5b2bd10be1e09516c539afa2197a8d7"],["/js/main.js","95ba34635a79cb9a8ddbd52d020f9a83"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","0f6e37edafbb522c21bad335592e6d15"],["/magnet/css/catalogMagnet.css","5340a12c9740e00bd10d9e602e1aa460"],["/magnet/js/catalogMagnet.js","f7da9170d96128e6c653ca6fc74e8dc4"],["/magnet/js/vue.min.js","520cb27262482215e98aa2de66403a60"],["/movies/index.html","ceb469ea00dba3ef96ab92d74ea92a94"],["/musics/index.html","21fa0e5c19b8b30668622073c411256c"],["/mysource/css/iconfont.css","b1918e3c57dfd6564e49ac1ab6f91134"],["/mysource/css/message.css","af2023182a8babc887aa3ba7936a13b4"],["/mysource/css/mystyle.css","262c1fa45bb73bf8c50ec3bec6a1daa5"],["/mysource/css/reward.css","4546f52491aa25a71ac1ae29eacdabe0"],["/mysource/font/15991914154209.ttf","ce0149009ca03eb2811c24bb013785db"],["/mysource/font/16026684292569.ttf","6db42670e2a06b5181649281a2576e1a"],["/mysource/img/01.jpg","9269002d0873d0e0fe9c9384507a0f81"],["/mysource/img/02.jpg","fefc2aea665b1edbb7807542e32fc20f"],["/mysource/img/03.jpg","7cfc909ebe8d83683909846edd6b5232"],["/mysource/img/04.jpg","7cf7593463d0870d96c13a125815b848"],["/mysource/img/alipay.jpg","f36366377e30ef42916588a16b8f9551"],["/mysource/img/wechat.jpg","57d1b828eb278f064dfd6cb4f3e9294e"],["/mysource/js/clipboard.js","10f229f3d673f3fb63113825dd0f1730"],["/mysource/js/message.js","537e2e01cf5f1be597d522d1f5f3b691"],["/mysource/js/mystyle.js","d41d8cd98f00b204e9800998ecf8427e"],["/optimization/index.html","d315b16f0a54e53990de576d4cd8e9dc"],["/page/2/index.html","68cca4439d7e8c5c0c99c9cb120a0f0a"],["/page/3/index.html","c3752cdd686af4c4b650002344a619e0"],["/python/index.html","2e14a7be84b2735080cd229f4a5cb063"],["/reward/index.html","cd196fd295198b601fdd05efcf129e84"],["/sw-register.js","4779ce3590bce18e05f15d4bab1b69d8"],["/tags/403/index.html","05c1230b0454cc787fd03fb6890e7ec8"],["/tags/API/index.html","b69390cc8d4246c11f566e1ea0c259ce"],["/tags/Blog/index.html","15b981db846613a8dae79b7c950bdc70"],["/tags/TortoiseSVN/index.html","5962b231d74cddbb87216a44484df6d2"],["/tags/github-desktop/index.html","953a778bf8beaf611a74ceef6274258a"],["/tags/github/index.html","8a95b5fe7d3c945f5343b58fc4c534b6"],["/tags/hexo/index.html","c0b7cd7bb4bd0cada0b66a5bb00cbc62"],["/tags/index.html","0f1ccd6321e664b996d54b1ed325050c"],["/tags/issues/index.html","698c302ddb26ac4192f5c2bb48c21edf"],["/tags/markdown/index.html","a92afc552464848eee7d905c71a093d9"],["/tags/tools/index.html","c158030ad9dd1da43031030c98809262"],["/tags/valine/index.html","8c966fce126ba5092947ec92c1438a24"],["/tags/vscode/index.html","0bff70612e24c02829bf2a452c05a453"],["/tags/图片/index.html","4edc48ffe5a17a48f684568fc5052395"],["/tags/壁纸/index.html","7a7cf7b7006fbb4dd938288b8b554190"],["/tags/技能/index.html","84529484e41003f3934f6ba90d6506b7"],["/tags/接口/index.html","a0aef26d9fae70aea3daf4157df0e684"],["/tags/标签1/index.html","96f705ad6d4278012df08643ff0142b3"],["/tags/标签2/index.html","166a9143e73809059e7f2e1fba6cb426"]];
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
