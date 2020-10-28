/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1243066710.html","82de8bcdd7ea5f92368bf3e4e023dece"],["/1733019837.html","bc7a936460788324027ca2610b071c16"],["/1771338196.html","2bc1bcae9cb18621ec994ba1e14d1202"],["/2166830328.html","fb27cb8b2fad1720a137886ac38105a6"],["/2195189573.html","16bf6e81c9fe812c8ea75e4eea5e3188"],["/2360238627.html","068913526a331af3c32f8239d67a435b"],["/2476109404.html","bdc6e9f2595afb2f4f79076b3dfe5f6d"],["/274610813.html","887f6a8aa0c647b3266fd6669da92a7d"],["/2931784335.html","98a4ff8d3b9acb96c7ef52eb21bd21c8"],["/2965840343.html","9875a1157e6212b1ccb257c54867cf74"],["/3178170368.html","466713f02e717b799b62399b7d4819fa"],["/3305003915.html","b3af46880ad3de6076d67fb2e1d29426"],["/3632233996.html","8162eb862a25e1f27b0acd015d54f3bf"],["/372674368.html","072a16b09dca7e7bd5a519effbb7df39"],["/3fe5.html","be18e57b25fde56f170d8ea81ea2442f"],["/4183719525.html","3a89ee8b4d0e53e5c26cc5353f34d180"],["/568795252.html","8edebf83e155fd6cd69382a5a1218d5b"],["/75507639.html","951cc1d328ce5a1277213c4364a346ea"],["/757632919.html","465c5d1f94b7cf8dea2b6e44887bfabf"],["/76666735.html","0b1a58d8f36307662ffdd5431031c35e"],["/8fb4.html","847c4df8d1e35b40f430202fcb5d4c8a"],["/about/index.html","459b20f3da71203c1d0938477cd6b815"],["/anime/index.html","1c3911b49f1f721a52154b6c2ff46a62"],["/archives/2020/10/index.html","d6bdf0b10c015be7eff76a08d0c790e0"],["/archives/2020/10/page/2/index.html","6d18171e4e3b20581307028dee254cb2"],["/archives/2020/10/page/3/index.html","9f4998ab758b92bc34e931881dde1bad"],["/archives/2020/index.html","84063a6aabab44e40d4e30b7d1619e22"],["/archives/2020/page/2/index.html","5274e323dd0f721cf6bf158c39da3c2a"],["/archives/2020/page/3/index.html","f01d48cb2e1ca7e125a73270b13700c4"],["/archives/index.html","3d4efa47ec097a97188e254b680e1d2e"],["/archives/page/2/index.html","7fc34e3c3d7006f3ebe3d8b7a7e29320"],["/archives/page/3/index.html","4719faa27d410fb05d4fe9b5cd309666"],["/books/index.html","c6238957128fe0d6a6ef25419d98b2cd"],["/c4f.html","2541fa8ab9cf828caecd53d43057367b"],["/categories/Tools/index.html","1107f97938f6cdbc8f76893696aaa76c"],["/categories/butterfly教程/index.html","62c4976cf7331f84e6d76b93552bbbd3"],["/categories/index.html","fa0436ee23af0448987cdf29120f1d3a"],["/categories/issues/index.html","3f8d6c4c7cc0a6f970e1afca5806d6b3"],["/categories/分类模板/index.html","f3d4c5b92e22b5a6292ed8ae89e606aa"],["/categories/知识储备/index.html","421d44caa35009de15aa2d8fdda74833"],["/clock/css/clock.css","b89bfe92070c455f30055fcf79717db5"],["/clock/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/clock/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/clock/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/clock/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/clock/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/clock/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/clock/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["/clock/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/clock/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/clock/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/clock/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["/clock/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/clock/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/clock/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/clock/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["/clock/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/clock/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/clock/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/clock/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/clock/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/clock/js/clock.js","12eb99504623b97d0fac29e77cc444e2"],["/clock/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/course/index.html","e9dba9168804a4e33a099394e03e9cb4"],["/css/index - 复制.css","f43e45725eb5a9774c90ab8934c6b635"],["/css/index.css","e14f0d92b1f5c8cbb20f784b099d723e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/bizhi.html","7cada0405214dc0e5de0d81039bf360a"],["/gallery/index.html","013845b00543d781c6817aa2da30a2e7"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","f3658e649ec8eca7f061b03528ff00a3"],["/java/index.html","427ba3ebd4c2a7b25fd3e4dadbfb3439"],["/js/main copy.js","f5b2bd10be1e09516c539afa2197a8d7"],["/js/main.js","95ba34635a79cb9a8ddbd52d020f9a83"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","9bd7641e9a6827158e46d3bfc23f8fe0"],["/magnet/css/catalogMagnet.css","5340a12c9740e00bd10d9e602e1aa460"],["/magnet/js/catalogMagnet.js","f7da9170d96128e6c653ca6fc74e8dc4"],["/magnet/js/vue.min.js","520cb27262482215e98aa2de66403a60"],["/movies/index.html","592e5ff6df888400be9d376e006bc75d"],["/musics/index.html","c61d279b34e24ef70086262c0be0fcc9"],["/mysource/css/iconfont.css","b1918e3c57dfd6564e49ac1ab6f91134"],["/mysource/css/message.css","72dedd4f0902efb2c7bf7011c56adecc"],["/mysource/css/mystyle.css","262c1fa45bb73bf8c50ec3bec6a1daa5"],["/mysource/css/reward.css","4546f52491aa25a71ac1ae29eacdabe0"],["/mysource/font/15991914154209.ttf","ce0149009ca03eb2811c24bb013785db"],["/mysource/font/16026684292569.ttf","6db42670e2a06b5181649281a2576e1a"],["/mysource/img/01.jpg","9269002d0873d0e0fe9c9384507a0f81"],["/mysource/img/02.jpg","fefc2aea665b1edbb7807542e32fc20f"],["/mysource/img/03.jpg","7cfc909ebe8d83683909846edd6b5232"],["/mysource/img/04.jpg","7cf7593463d0870d96c13a125815b848"],["/mysource/img/alipay.jpg","f36366377e30ef42916588a16b8f9551"],["/mysource/img/wechat.jpg","57d1b828eb278f064dfd6cb4f3e9294e"],["/mysource/js/calendar.js","fc8658315cebe280bdf4716442b72eee"],["/mysource/js/clipboard.js","4d4756e79963a26bf8c05dac466ec36f"],["/mysource/js/languages.js","248104bbe36834208716172dca8a1908"],["/mysource/js/message.js","537e2e01cf5f1be597d522d1f5f3b691"],["/mysource/js/mystyle.js","d41d8cd98f00b204e9800998ecf8427e"],["/optimization/index.html","c4b562f7a0dc9e8b63fc185175d9d962"],["/page/2/index.html","c7ba142462f57bcccc43b1aa2b9bb203"],["/page/3/index.html","fb9ac561b8c015cd22eb88ea3b30ca28"],["/python/index.html","5b11d6da442d05a2b763f559e9d874ae"],["/reward/index.html","093996d3cf517230ceda18bd1121ec25"],["/sw-register.js","0d5c3da8fb28100ebf9284dfc26a5d5c"],["/tags/403/index.html","1a23f07d4b64d96548cf1b16c360d674"],["/tags/API/index.html","4c478f42961c4e2dc167496957c2c34b"],["/tags/Blog/index.html","a8b0037ab0ad4cd956b15510234db4fd"],["/tags/TortoiseSVN/index.html","29fd71d5ad95e57eaf0711c388f2fa95"],["/tags/github-desktop/index.html","f8196d441d2f83c8fa11db0bd8b9f30e"],["/tags/github/index.html","21dd596a274589a970816db378c131a6"],["/tags/hexo/index.html","2c21551de51e8582388a813428f24396"],["/tags/index.html","ca8ec73a04309777a5c9cf2e175a25d1"],["/tags/issues/index.html","dbfbc75e6a27c3e80a3032fce2a03efc"],["/tags/markdown/index.html","1204f531e2c4981033d80da62db167cb"],["/tags/tools/index.html","431efa9cafa5ef378ad7275d483dc418"],["/tags/valine/index.html","01e75bc1b39694d39c1c73f39bd82269"],["/tags/vscode/index.html","e883ad2d76d5de7ac0d7d1132fb211f2"],["/tags/图片/index.html","dca99202e5c5ad2b48a00048a773c3ba"],["/tags/壁纸/index.html","f2ca3796318767f4049aacef441136a3"],["/tags/技能/index.html","e1a7c993e090db0ec26a3a4798d4e4e5"],["/tags/接口/index.html","1c6f3efd350776a1d7867d16c8c7a645"],["/tags/标签1/index.html","317364114a3062d4a8df708eb0438df7"],["/tags/标签2/index.html","359c8d4879576575d4463c1636eaebfa"]];
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
