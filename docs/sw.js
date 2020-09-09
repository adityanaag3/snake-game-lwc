if (!self.define) {
    const e = (e) => {
            'require' !== e && (e += '.js');
            let s = Promise.resolve();
            return (
                r[e] ||
                    (s = new Promise(async (s) => {
                        if ('document' in self) {
                            const r = document.createElement('script');
                            (r.src = e),
                                document.head.appendChild(r),
                                (r.onload = s);
                        } else importScripts(e), s();
                    })),
                s.then(() => {
                    if (!r[e])
                        throw new Error(
                            `Module ${e} didn’t register its module`
                        );
                    return r[e];
                })
            );
        },
        s = (s, r) => {
            Promise.all(s.map(e)).then((e) => r(1 === e.length ? e[0] : e));
        },
        r = { require: Promise.resolve(s) };
    self.define = (s, o, f) => {
        r[s] ||
            (r[s] = Promise.resolve().then(() => {
                let r = {};
                const c = { uri: location.origin + s.slice(1) };
                return Promise.all(
                    o.map((s) => {
                        switch (s) {
                            case 'exports':
                                return r;
                            case 'module':
                                return c;
                            default:
                                return e(s);
                        }
                    })
                ).then((e) => {
                    const s = f(...e);
                    return r.default || (r.default = s), r;
                });
            }));
    };
}
define('./sw.js', ['./workbox-df7e707f'], function (e) {
    'use strict';
    e.setCacheNameDetails({ prefix: 'snakelwc' }),
        e.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                {
                    url: './0.app.js',
                    revision: '2a208f6d828e8c15d55a2203efc18ba2'
                },
                {
                    url: './2.app.js',
                    revision: 'c10d6002e7f1309ab66f2f83735358e1'
                },
                {
                    url: './app.js',
                    revision: '8d0a4cec66ffd41ae4849ffed7214853'
                },
                {
                    url: './index.html',
                    revision: '2110d04889f4316a5f4ece26c887d502'
                },
                {
                    url: './manifest.json',
                    revision: '16f2224e3f407de0fd0eca97cfa177bc'
                },
                {
                    url: './resources/favicon.ico',
                    revision: '456324a78b099cc86945fada52b2b21a'
                },
                {
                    url: './resources/fonts/.DS_Store',
                    revision: '7c13afefab7989db23f1c955188b22e6'
                },
                {
                    url: './resources/fonts/License-for-font.txt',
                    revision: '7627764d208f90506cb5eada63ed400b'
                },
                {
                    url: './resources/fonts/SalesforceSans-Bold.ttf',
                    revision: 'bab6f1ee9617b3f4375b4b4ccb818b01'
                },
                {
                    url: './resources/fonts/SalesforceSans-BoldItalic.ttf',
                    revision: 'ff2f4aa51976e26f3f356a3e16a4a1f8'
                },
                {
                    url: './resources/fonts/SalesforceSans-Book.ttf',
                    revision: '23b8e087ecb40a02e3a2bf50b2da72a3'
                },
                {
                    url: './resources/fonts/SalesforceSans-Italic.ttf',
                    revision: 'd0c0958fee01a679b1dad7db640e1835'
                },
                {
                    url: './resources/fonts/SalesforceSans-Light.ttf',
                    revision: '76d3c8425c3ee7c56dd3dad04b9016ca'
                },
                {
                    url: './resources/fonts/SalesforceSans-LightItalic.ttf',
                    revision: '30b63ac5063e7500299c0a9895332691'
                },
                {
                    url: './resources/fonts/SalesforceSans-Regular.ttf',
                    revision: '6c9ddaa8a8cfa8df9d612612753d00b2'
                },
                {
                    url: './resources/fonts/SalesforceSans-Semibold.ttf',
                    revision: 'c3506dbc4b756695f9faf15eb9caebd1'
                },
                {
                    url: './resources/fonts/SalesforceSans-Thin.ttf',
                    revision: 'b4b52fea9d4b0e87eb7a302197295cad'
                },
                {
                    url: './resources/fonts/SalesforceSans-ThinItalic.ttf',
                    revision: '388a242283418317e04f2a7105bb0835'
                },
                {
                    url: './resources/fonts/webfonts/SalesforceSans-Bold.woff',
                    revision: '034baa2c90687fad501b83e225f3728f'
                },
                {
                    url: './resources/fonts/webfonts/SalesforceSans-Bold.woff2',
                    revision: '68a71533d08ff9251d6f179043a4781b'
                },
                {
                    url:
                        './resources/fonts/webfonts/SalesforceSans-BoldItalic.woff',
                    revision: '7b6ae28b116debe909b3fec84b310468'
                },
                {
                    url:
                        './resources/fonts/webfonts/SalesforceSans-BoldItalic.woff2',
                    revision: 'dba3843e5b62ac3c2d9637a98f2207f4'
                },
                {
                    url:
                        './resources/fonts/webfonts/SalesforceSans-Italic.woff',
                    revision: '490fd008e87efd93f09b27cc298402d3'
                },
                {
                    url:
                        './resources/fonts/webfonts/SalesforceSans-Italic.woff2',
                    revision: 'afa7774ce458bd2fc11c0f838f95a920'
                },
                {
                    url: './resources/fonts/webfonts/SalesforceSans-Light.woff',
                    revision: '49c5f0d3823d5417274ec49fe9d702d7'
                },
                {
                    url:
                        './resources/fonts/webfonts/SalesforceSans-Light.woff2',
                    revision: 'c9505072b839823249fbfbf0c3e31ef8'
                },
                {
                    url:
                        './resources/fonts/webfonts/SalesforceSans-LightItalic.woff',
                    revision: '13eed833d3d7ff2ae1b85ac45b13a3d9'
                },
                {
                    url:
                        './resources/fonts/webfonts/SalesforceSans-LightItalic.woff2',
                    revision: '676a9c306dd2390c45ec0d0b28e51a6a'
                },
                {
                    url:
                        './resources/fonts/webfonts/SalesforceSans-Regular.woff',
                    revision: '8621cf5a8eb1acfacd002232c95d85ed'
                },
                {
                    url:
                        './resources/fonts/webfonts/SalesforceSans-Regular.woff2',
                    revision: 'aa41afdaceb8b78c56529555448bcf44'
                },
                {
                    url: './resources/fonts/webfonts/SalesforceSans-Thin.woff',
                    revision: '4a20519f44ff88ce58982cdba77baccf'
                },
                {
                    url: './resources/fonts/webfonts/SalesforceSans-Thin.woff2',
                    revision: '460ad3794860145efd190660edce029d'
                },
                {
                    url:
                        './resources/fonts/webfonts/SalesforceSans-ThinItalic.woff',
                    revision: 'e9d217aa6d675425569b853e6c63fee9'
                },
                {
                    url:
                        './resources/fonts/webfonts/SalesforceSans-ThinItalic.woff2',
                    revision: 'addcb93d09fe9e8e068d7410dd177cbc'
                },
                {
                    url: './resources/icons/custom-sprite/svg/symbols-rtl.svg',
                    revision: 'ec7295690c85ce97b330d4c91c237288'
                },
                {
                    url: './resources/icons/custom-sprite/svg/symbols.svg',
                    revision: '3eeb1bd682daedabcdc71243ae64099f'
                },
                {
                    url: './resources/icons/icon-128x128.png',
                    revision: 'f19d57dd43dac159f17f94aba50fccb9'
                },
                {
                    url: './resources/icons/icon-144x144.png',
                    revision: '86479cd20088944b27aa1f043b3f5f06'
                },
                {
                    url: './resources/icons/icon-152x152.png',
                    revision: 'f6599c22d1418a08e948fd77b8138eff'
                },
                {
                    url: './resources/icons/icon-16x16.png',
                    revision: 'a1a0ce57ad6c05313542b2772f433582'
                },
                {
                    url: './resources/icons/icon-192x192.png',
                    revision: 'eec510f340830dd48e1e0a90c47ddcfa'
                },
                {
                    url: './resources/icons/icon-32x32.png',
                    revision: '35791b8347c8e4094793f1888b39efeb'
                },
                {
                    url: './resources/icons/icon-384x384.png',
                    revision: '61402d5b3c997d72d944f9fa2703c7ba'
                },
                {
                    url: './resources/icons/icon-512x512.png',
                    revision: '8486e3eb63bd8b53cd45e145179978fe'
                },
                {
                    url: './resources/icons/icon-72x72.png',
                    revision: '60d6a3c6c44f1f732c275dc7d0ff2e0c'
                },
                {
                    url: './resources/icons/icon-96x96.png',
                    revision: 'e46de57af93f16a3540666990df6ef71'
                },
                {
                    url: './resources/icons/utility-sprite/svg/symbols-rtl.svg',
                    revision: '543f50da87a516fa9c1fa9b6beb3fe74'
                },
                {
                    url: './resources/icons/utility-sprite/svg/symbols.svg',
                    revision: '34cd12eb67285b23f693ff01f264af41'
                },
                {
                    url: './resources/lwc.png',
                    revision: '60d040a9a26e2a72375ddb1eaefeeb57'
                },
                {
                    url:
                        './resources/styles/salesforce-lightning-design-system.min.css',
                    revision: 'bc8562be03c7ec628d67c01e84c62e2e'
                }
            ],
            {}
        );
});
