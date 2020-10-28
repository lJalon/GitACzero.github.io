/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1243066710.html","c8b853ddb7308fb9a0e502c6531d2417"],["/1733019837.html","84762b5789b8a0976c22a86503b0885d"],["/1771338196.html","e7c9d59846d1766af1edf33049156801"],["/2166830328.html","73f985b8f80ba3d1220242070e726234"],["/2195189573.html","a860fceda36298bb89d50d42b65cf14b"],["/2360238627.html","1d80dc4bd2f73dc5cb1c6ada6a8f41c4"],["/2476109404.html","6e9bf0ef15821b178dba5dd1b5827965"],["/274610813.html","86350324e2f92ccc67e265dff7dacadf"],["/2931784335.html","0a8c572cca6d3a2c1c40e59fab5b04a0"],["/2965840343.html","19a898b0c429be5c884f45cb61403d2b"],["/3178170368.html","a848ca97ae81c9b4be524c58f5bd1fb3"],["/3305003915.html","2f44ba4fbeaaabe8d30549007d57b4b8"],["/3632233996.html","ccc438471eee598467f4261fed80ea11"],["/372674368.html","b1cacfe23f26b4116aea98929cb84170"],["/3fe5.html","8405c07696ad5b19871db8238bd3e7ab"],["/4183719525.html","00a2fb6c72666a2f00271436c84baaae"],["/568795252.html","3a8e597ee953914e281804990fa41e4f"],["/75507639.html","096c328bdf0056fb3ecea5dd6643de4b"],["/757632919.html","9f8d678219944ac2bbcab42d28e63b7d"],["/76666735.html","9f15ff2d163546cb0ba080f34f5d5c34"],["/8fb4.html","fb3c6a32f71dd47d386c866601572541"],["/about/index.html","85244a8f9fc7f34537946e27e4adf2d6"],["/anime/index.html","5df59125ec1288c6812437c875c984ee"],["/archives/2020/10/index.html","ab8836c2a116b671b84946ed1a05a796"],["/archives/2020/10/page/2/index.html","8646fb2a047be52dc918f0640e59af2d"],["/archives/2020/10/page/3/index.html","afe5f6cd188aee57fa048099b435c02f"],["/archives/2020/index.html","cee200a53438c7a1a10c1742057fb586"],["/archives/2020/page/2/index.html","e1ca3e06de7bf343a611ea2dbc58a8b3"],["/archives/2020/page/3/index.html","bd1f74604facff5089c909a40f42ffa2"],["/archives/index.html","b58a252421e2b6d5673095be5bb799f7"],["/archives/page/2/index.html","283524483cd368ea6afb948bed85f91b"],["/archives/page/3/index.html","88df4d28a40690ec105a6d1f3a108c9c"],["/books/index.html","715c65bebaad35af81d7f89e7c263018"],["/c4f.html","f3bd77bc59e7e495e2a95d10fb51b4b4"],["/categories/Tools/index.html","9d8e2229715ad98c61f234debd5e3a6a"],["/categories/butterfly教程/index.html","90d99fbfa05a372ab0dc27f4abd3378b"],["/categories/index.html","6a54764d816aa4c84321b33795a7c87e"],["/categories/issues/index.html","42e47b97fb29ffb8748cf1f6d5e5a343"],["/categories/分类模板/index.html","6a5ad11277b41fa7194879eeb52cc401"],["/categories/知识储备/index.html","4e9f891c70b55e54a3c4665de45828a3"],["/clock/css/clock.css","b89bfe92070c455f30055fcf79717db5"],["/clock/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/clock/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/clock/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/clock/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/clock/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/clock/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/clock/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["/clock/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/clock/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/clock/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/clock/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["/clock/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/clock/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/clock/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/clock/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["/clock/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/clock/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/clock/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/clock/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/clock/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/clock/js/clock.js","12eb99504623b97d0fac29e77cc444e2"],["/clock/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/course/index.html","208d9d8e2e4bed8775d3d3a0a20ce8e4"],["/css/index - 复制.css","f43e45725eb5a9774c90ab8934c6b635"],["/css/index.css","e14f0d92b1f5c8cbb20f784b099d723e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/bizhi.html","b72f7d93ee8748a5180d0ef6f602c2f0"],["/gallery/index.html","e3694b40db4852ca58e2fb791ba533a4"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","e3c4d53ca25d0848e797da42e7bb88a3"],["/java/index.html","21d44203c4c2082148bfda2313334516"],["/js/main copy.js","f5b2bd10be1e09516c539afa2197a8d7"],["/js/main.js","95ba34635a79cb9a8ddbd52d020f9a83"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","c308fb050d02150f09e3262c495574f9"],["/magnet/css/catalogMagnet.css","5340a12c9740e00bd10d9e602e1aa460"],["/magnet/js/catalogMagnet.js","f7da9170d96128e6c653ca6fc74e8dc4"],["/magnet/js/vue.min.js","520cb27262482215e98aa2de66403a60"],["/movies/index.html","f34fb74bff3f9a02a0f6a13dd206b69c"],["/musics/index.html","3039280b5446cf738e4c0629205f7945"],["/mysource/css/iconfont.css","b1918e3c57dfd6564e49ac1ab6f91134"],["/mysource/css/message.css","72dedd4f0902efb2c7bf7011c56adecc"],["/mysource/css/mystyle.css","262c1fa45bb73bf8c50ec3bec6a1daa5"],["/mysource/css/reward.css","4546f52491aa25a71ac1ae29eacdabe0"],["/mysource/font/15991914154209.ttf","ce0149009ca03eb2811c24bb013785db"],["/mysource/font/16026684292569.ttf","6db42670e2a06b5181649281a2576e1a"],["/mysource/img/01.jpg","9269002d0873d0e0fe9c9384507a0f81"],["/mysource/img/02.jpg","fefc2aea665b1edbb7807542e32fc20f"],["/mysource/img/03.jpg","7cfc909ebe8d83683909846edd6b5232"],["/mysource/img/04.jpg","7cf7593463d0870d96c13a125815b848"],["/mysource/img/alipay.jpg","f36366377e30ef42916588a16b8f9551"],["/mysource/img/wechat.jpg","57d1b828eb278f064dfd6cb4f3e9294e"],["/mysource/js/calendar.js","fc8658315cebe280bdf4716442b72eee"],["/mysource/js/clipboard.js","4d4756e79963a26bf8c05dac466ec36f"],["/mysource/js/languages.js","248104bbe36834208716172dca8a1908"],["/mysource/js/message.js","537e2e01cf5f1be597d522d1f5f3b691"],["/mysource/js/mystyle.js","d41d8cd98f00b204e9800998ecf8427e"],["/optimization/index.html","a302f17860a3d69b7764ae618424129b"],["/page/2/index.html","4f2d4ba0ec5bde3fd926fa8b057dbb19"],["/page/3/index.html","9b4b0c5b88a4b2ed2927cf295e745aea"],["/python/index.html","58873f66ba43c569837b507b3345a7cf"],["/reward/index.html","850c27e59602a33f923d976cbbdf99b4"],["/sw-register.js","70203915a2a02a325b2c8e6047b32444"],["/tags/403/index.html","cc5d3e14d404ccf1428df213b18f0f8f"],["/tags/API/index.html","1db16d29b6aecc34d52a2249fe71a9f6"],["/tags/Blog/index.html","319d5e6dd8dfbe18a4f306909f035d1f"],["/tags/TortoiseSVN/index.html","5162d78fb7912255f3e05b72a21e7718"],["/tags/github-desktop/index.html","e1bd259a3b9fca2e1fb173e3d87dc531"],["/tags/github/index.html","9087a8ebe84bd7438f14c36152183a9e"],["/tags/hexo/index.html","00587a0d86b5dfa80fbf26f8ec7dfa13"],["/tags/index.html","4130f69a216a3827b494438604d6ebd9"],["/tags/issues/index.html","5380a4552c49fb22de75fd1a52348374"],["/tags/markdown/index.html","a780c16b161930b00febd0e52dd52329"],["/tags/tools/index.html","7cdf3d5abce726cd564f56a629ea8f38"],["/tags/valine/index.html","47ee79e28f20cfbaa4f63694abc83db6"],["/tags/vscode/index.html","2af001725bb80cd2aa163fa6d10d8bd8"],["/tags/图片/index.html","d4b3c0bf0c8969dea93529cd61dcdf8b"],["/tags/壁纸/index.html","8bca5a9f7d0015bcd71e228722fee454"],["/tags/技能/index.html","2f2847c8607b1cad9765a934f4a9807c"],["/tags/接口/index.html","526a1a37d54ed73e9de484a85f6adc80"],["/tags/标签1/index.html","2917b0ce72715490a21f1fcb52c034d8"],["/tags/标签2/index.html","aaff532a26e7049e0add432d01b0e4c7"]];
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
