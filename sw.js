/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1243066710.html","9e3231f2ff006b68de8653a13771a919"],["/1733019837.html","2c6781f80a4abc7dc5cd1e809add88aa"],["/1771338196.html","d2a66381650355d390e4733cc3130e91"],["/2166830328.html","46914f9429c91be28d33b68e8a29d632"],["/2195189573.html","a7f36f8e9c4ebc52d4989bd23ea3ddfe"],["/2360238627.html","78fc2d55c195eae8d656c66d9dd40281"],["/2476109404.html","cab6255fc24a8a47f2e26ed53da7d5d6"],["/274610813.html","2710b03753382c76172abe99168b84b0"],["/2931784335.html","8d4894c6f6f90d8b68f991a4db7a46bd"],["/2965840343.html","d2071f6e4040094632c73eecedc19e5e"],["/3178170368.html","cc3f78485c66b0e885fd0c90d2b602ce"],["/3305003915.html","0afa89885383ba7200fdebb2235d6939"],["/3632233996.html","ebeb835fb45c357dd82644cfa88bde1f"],["/372674368.html","f65e983aa1a5c016aad64983cc069c59"],["/3fe5.html","2a9399914b134a41739f2bfd9a4d1af0"],["/4183719525.html","844f7058b49a2f814a9a507e5f2518c5"],["/568795252.html","435137c36cc2efcf64236830af9b9fd0"],["/75507639.html","74cfc7abd9ffb1f60ccce2c1897deb4a"],["/757632919.html","e6e9a380d55401711288664f0a02c427"],["/76666735.html","39ef270290b30b29d43a58cf61733797"],["/8fb4.html","7706b3803efe6df28a6c154b8ed63004"],["/about/index.html","b103291d0fcda1c8ef0668569408ac36"],["/anime/index.html","263471a5717609debe3f1d4456d4d596"],["/archives/2020/10/index.html","317aaa04d316430f523a08cf6d2058d8"],["/archives/2020/10/page/2/index.html","b21f077d1e496be72dbc9edf3346d486"],["/archives/2020/10/page/3/index.html","49c4e99afec8bc646691f22eb661abd4"],["/archives/2020/index.html","31c03ae065a1ac98ee90ab4641fb29b8"],["/archives/2020/page/2/index.html","03ed53c111e7a2822e1c9b19485d3e7e"],["/archives/2020/page/3/index.html","d3b0433a4cd647bdfa2d1a192a7fa78f"],["/archives/index.html","c0c2361389b02c445359793c2d8ab22e"],["/archives/page/2/index.html","c8a53a3efd140f0a4002679620ba6a03"],["/archives/page/3/index.html","1c90b38391af66236447939d7e8a823e"],["/books/index.html","b84d3446147fbe3207afd21623a5b66b"],["/c4f.html","eefcdcdfe804114db452ee1ccc00f8ad"],["/categories/butterfly教程/index.html","1f83e50f4dba80d6155de50fa88c33e1"],["/categories/index.html","106d70065439449514d9671ba915397b"],["/categories/issues/index.html","605ccde1c227ce8c3ea9e834b6fb687f"],["/categories/tools/index.html","9f18cd9b13e845165632db2b810c2d28"],["/categories/分类模板/index.html","d013fc36deddefde4f1b8963e7115643"],["/categories/知识储备/index.html","6bec5280a5377391638a2bc689682575"],["/clock/css/clock.css","b89bfe92070c455f30055fcf79717db5"],["/clock/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/clock/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/clock/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/clock/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/clock/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/clock/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/clock/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["/clock/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/clock/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/clock/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/clock/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["/clock/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/clock/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/clock/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/clock/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["/clock/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/clock/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/clock/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/clock/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/clock/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/clock/js/clock.js","12eb99504623b97d0fac29e77cc444e2"],["/clock/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/course/index.html","0344b35863436070bf96a6490e118e01"],["/css/index.css","ebf2398809a41d91cc6725d98c7a3d72"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/bizhi.html","55822fff4055c9876637e74b3c68f60e"],["/gallery/index.html","4678e61a0d3cc7cf093266d48d006593"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","ba3ad9280dc79a948a8dda60a27aa623"],["/java/index.html","652ee99ca04d1ecdc7a0419299302e21"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","73620dcd55e29b173569bac34567118f"],["/magnet/css/catalogMagnet.css","5340a12c9740e00bd10d9e602e1aa460"],["/magnet/js/catalogMagnet.js","f7da9170d96128e6c653ca6fc74e8dc4"],["/magnet/js/vue.min.js","520cb27262482215e98aa2de66403a60"],["/movies/index.html","32a24656b56c071bd9d36eee821d27b2"],["/musics/index.html","3400eea426e62f9fcf862514b84cff83"],["/mysource/css/iconfont.css","b1918e3c57dfd6564e49ac1ab6f91134"],["/mysource/css/message.css","72dedd4f0902efb2c7bf7011c56adecc"],["/mysource/css/mystyle.css","262c1fa45bb73bf8c50ec3bec6a1daa5"],["/mysource/css/reward.css","4546f52491aa25a71ac1ae29eacdabe0"],["/mysource/font/15991914154209.ttf","ce0149009ca03eb2811c24bb013785db"],["/mysource/font/16026684292569.ttf","6db42670e2a06b5181649281a2576e1a"],["/mysource/img/01.jpg","9269002d0873d0e0fe9c9384507a0f81"],["/mysource/img/02.jpg","fefc2aea665b1edbb7807542e32fc20f"],["/mysource/img/03.jpg","7cfc909ebe8d83683909846edd6b5232"],["/mysource/img/04.jpg","7cf7593463d0870d96c13a125815b848"],["/mysource/img/alipay.jpg","f36366377e30ef42916588a16b8f9551"],["/mysource/img/wechat.jpg","57d1b828eb278f064dfd6cb4f3e9294e"],["/mysource/js/calendar.js","fc8658315cebe280bdf4716442b72eee"],["/mysource/js/clipboard.js","4d4756e79963a26bf8c05dac466ec36f"],["/mysource/js/languages.js","248104bbe36834208716172dca8a1908"],["/mysource/js/message.js","537e2e01cf5f1be597d522d1f5f3b691"],["/mysource/js/mystyle.js","de83d9140c6d5698f9eb57981210fe93"],["/optimization/index.html","8d96cbe8bd6ffd20990f88bce7f05f07"],["/page/2/index.html","f8f06cf6cf98300a9aaea59727764ff2"],["/page/3/index.html","53516730673af0ccda98f6629340f258"],["/python/index.html","47535b9fedc8ded34adb0d370bba2333"],["/reward/index.html","b668bfc96c0892d1b1eb1b82217b61a6"],["/sw-register.js","a987b75a8915de0479d7d303f2c6b8a6"],["/tags/403/index.html","9145cf9f7ee559a6659cf1ba8a49d8ea"],["/tags/API/index.html","6f8f0fa9168c8c5dadc347dfb05efd81"],["/tags/Blog/index.html","b4efb7c5f22b169948619103dcf81d8c"],["/tags/TortoiseSVN/index.html","6dc8c60220fc229c1f05907587f0ec4d"],["/tags/github-desktop/index.html","b6740a5cbf14e11ac8ab82bf8bf2cfd9"],["/tags/github/index.html","f5e708feeacf9ffc1acf5bd311eccf6e"],["/tags/hexo/index.html","6aba0546671c45999221bec69efb4519"],["/tags/index.html","8f08686870690c3a0661eb290f562cad"],["/tags/issues/index.html","8b892a16190cb111a2e414b2684c3ac2"],["/tags/markdown/index.html","7b9bfc5d6f75e7cfe0930242a476bfec"],["/tags/tools/index.html","c7667474e5d4ea82cf945e32587fbfca"],["/tags/valine/index.html","d76104798498ea2eff71a3ab754f5a40"],["/tags/vscode/index.html","a53fab54448fd936e1e3473979e7d500"],["/tags/图片/index.html","e6df2b205eb533d0242d624df83a1baa"],["/tags/壁纸/index.html","4e209092837023e7242a3c848858a126"],["/tags/技能/index.html","69272c208d1cd80dab6cc567f8f8cdcf"],["/tags/接口/index.html","6999e8c18c69636d7ae0c363709afe89"],["/tags/标签1/index.html","e32f5f9efee03c16f7e9979d5642c657"],["/tags/标签2/index.html","769a2863dea2b370a2ed692f036481b3"]];
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
