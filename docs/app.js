!(function (e) {
    function t(t) {
        for (
            var a, l, o = t[0], n = t[1], h = t[2], c = 0, p = [];
            c < o.length;
            c++
        )
            (l = o[c]),
                Object.prototype.hasOwnProperty.call(i, l) &&
                    i[l] &&
                    p.push(i[l][0]),
                (i[l] = 0);
        for (a in n)
            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
        for (d && d(t); p.length; ) p.shift()();
        return r.push.apply(r, h || []), s();
    }
    function s() {
        for (var e, t = 0; t < r.length; t++) {
            for (var s = r[t], a = !0, o = 1; o < s.length; o++) {
                var n = s[o];
                0 !== i[n] && (a = !1);
            }
            a && (r.splice(t--, 1), (e = l((l.s = s[0]))));
        }
        return e;
    }
    var a = {},
        i = { 1: 0 },
        r = [];
    function l(t) {
        if (a[t]) return a[t].exports;
        var s = (a[t] = { i: t, l: !1, exports: {} });
        return e[t].call(s.exports, s, s.exports, l), (s.l = !0), s.exports;
    }
    (l.m = e),
        (l.c = a),
        (l.d = function (e, t, s) {
            l.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: s });
        }),
        (l.r = function (e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module'
                }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (l.t = function (e, t) {
            if ((1 & t && (e = l(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var s = Object.create(null);
            if (
                (l.r(s),
                Object.defineProperty(s, 'default', {
                    enumerable: !0,
                    value: e
                }),
                2 & t && 'string' != typeof e)
            )
                for (var a in e)
                    l.d(
                        s,
                        a,
                        function (t) {
                            return e[t];
                        }.bind(null, a)
                    );
            return s;
        }),
        (l.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return l.d(t, 'a', t), t;
        }),
        (l.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (l.p = './');
    var o = (window.webpackJsonp = window.webpackJsonp || []),
        n = o.push.bind(o);
    (o.push = t), (o = o.slice());
    for (var h = 0; h < o.length; h++) t(o[h]);
    var d = n;
    r.push([1, 0, 2]), s();
})([
    ,
    function (e, t, s) {
        e.exports = s(4);
    },
    ,
    ,
    function (e, t, s) {
        'use strict';
        s.r(t);
        s(2);
        var a = s(0);
        var i = [
            function (e, t, s) {
                return [
                    '.container',
                    t,
                    '{width:70vw;margin:1rem auto}header',
                    t,
                    '{line-height:30px}'
                ].join('');
            }
        ];
        var r = [
            function (e, t, s) {
                return [
                    '.header',
                    t,
                    '{background:#a0f;color:#fff;font-size:1rem}.game-container',
                    t,
                    '{width:100%;height:60vh;background:#c1ff46;text-align:center}.game-play',
                    t,
                    ' div',
                    t,
                    '{width:20px;height:20px;background:#e6fabe;display:inline-block}.snake',
                    t,
                    '{background:green!important}.food',
                    t,
                    '{background:red!important;border-radius:50%}.overlay',
                    t,
                    '{position:relative;width:100%;margin-top:-30vh;left:0;bottom:0;z-index:9}.overlay-content',
                    t,
                    '{position:relative;top:50%;text-align:center}'
                ].join('');
            }
        ];
        function l(e, t, s, a) {
            const { t: i, d: r, h: l, k: o, i: n, b: h } = e,
                { _m0: d, _m1: c } = a;
            return [
                l(
                    'div',
                    {
                        classMap: {
                            header: !0,
                            'slds-var-p-around_medium': !0
                        },
                        key: 4
                    },
                    [
                        l('div', { classMap: { 'slds-grid': !0 }, key: 3 }, [
                            l(
                                'div',
                                {
                                    classMap: {
                                        'slds-col': !0,
                                        'slds-size_1-of-3': !0
                                    },
                                    key: 0
                                },
                                [i('Score: '), r(t.score)]
                            ),
                            l(
                                'div',
                                {
                                    classMap: {
                                        'slds-col': !0,
                                        'slds-size_1-of-3': !0,
                                        'slds-text-align_center': !0
                                    },
                                    key: 1
                                },
                                [i('Speed: '), r(t.displaySpeed), i('x')]
                            ),
                            l(
                                'div',
                                {
                                    classMap: {
                                        'slds-col': !0,
                                        'slds-size_1-of-3': !0,
                                        'slds-text-align_right': !0
                                    },
                                    key: 2
                                },
                                [i('High Score: '), r(t.highScore)]
                            )
                        ])
                    ]
                ),
                l('div', { classMap: { 'game-container': !0 }, key: 15 }, [
                    l(
                        'div',
                        { classMap: { 'game-play': !0 }, key: 6 },
                        n(t.gameBlocks, function (e) {
                            return l(
                                'div',
                                {
                                    className: e.class,
                                    attrs: { 'data-reference': e.id },
                                    key: o(5, e.id)
                                },
                                [i(' ')]
                            );
                        })
                    ),
                    t.showOverlay
                        ? l('div', { classMap: { overlay: !0 }, key: 14 }, [
                              l(
                                  'div',
                                  {
                                      classMap: { 'overlay-content': !0 },
                                      key: 13
                                  },
                                  [
                                      t.gameOver
                                          ? l(
                                                'div',
                                                {
                                                    classMap: {
                                                        'slds-text-heading_large': !0
                                                    },
                                                    key: 7
                                                },
                                                [i('Game Over!')]
                                            )
                                          : null,
                                      t.gameOver
                                          ? l('br', { key: 8 }, [])
                                          : null,
                                      t.gameOver
                                          ? l(
                                                'button',
                                                {
                                                    classMap: {
                                                        'slds-button': !0,
                                                        'slds-button_brand': !0
                                                    },
                                                    key: 9,
                                                    on: {
                                                        click:
                                                            d ||
                                                            (a._m0 = h(
                                                                t.resetGame
                                                            ))
                                                    }
                                                },
                                                [i('Play Again')]
                                            )
                                          : null,
                                      t.gameOver
                                          ? null
                                          : l(
                                                'div',
                                                {
                                                    classMap: {
                                                        'slds-text-heading_medium': !0
                                                    },
                                                    key: 10
                                                },
                                                [
                                                    i(
                                                        'Use Arrow Keys to move the snake'
                                                    )
                                                ]
                                            ),
                                      t.gameOver
                                          ? null
                                          : l('br', { key: 11 }, []),
                                      t.gameOver
                                          ? null
                                          : l(
                                                'button',
                                                {
                                                    classMap: {
                                                        'slds-button': !0,
                                                        'slds-button_brand': !0
                                                    },
                                                    key: 12,
                                                    on: {
                                                        click:
                                                            c ||
                                                            (a._m1 = h(
                                                                t.startGame
                                                            ))
                                                    }
                                                },
                                                [i('Start Game')]
                                            )
                                  ]
                              )
                          ])
                        : null
                ])
            ];
        }
        var o = Object(a.registerTemplate)(l);
        (l.stylesheets = []),
            r && l.stylesheets.push.apply(l.stylesheets, r),
            (l.stylesheetTokens = {
                hostAttribute: 'my-game-_game-host',
                shadowAttribute: 'my-game-_game'
            });
        class n extends a.LightningElement {
            constructor(...e) {
                super(...e),
                    (this.score = 0),
                    (this.highScore = 0),
                    (this.blockSize = 20),
                    (this.gameBlocks = []),
                    (this.renderComplete = !1),
                    (this.xSpeed = 1),
                    (this.ySpeed = 0),
                    (this.xHead = 0),
                    (this.yHead = 0),
                    (this.xMax = void 0),
                    (this.yMax = void 0),
                    (this.tail = []),
                    (this.showOverlay = !0),
                    (this.gameOver = !1),
                    (this.speed = 1),
                    (this.intervalObj = void 0);
            }
            connectedCallback() {
                this.highScore = localStorage.getItem('lwc_snake_high')
                    ? localStorage.getItem('lwc_snake_high')
                    : 0;
            }
            get displaySpeed() {
                return this.speed.toFixed(1);
            }
            startGame() {
                (this.showOverlay = !1),
                    (this.intervalObj = setInterval(() => {
                        this.move();
                    }, 300 / this.speed));
            }
            addSpeed() {
                (this.speed = this.speed + 0.1),
                    clearInterval(this.intervalObj),
                    this.startGame();
            }
            move() {
                if (
                    this.tail[this.tail.length - 1] !==
                    `${this.xHead}:${this.yHead}`
                ) {
                    this.tail.push(`${this.xHead}:${this.yHead}`);
                    let e = this.tail.shift(),
                        t = this.gameBlocks.findIndex((t) => t.id === e);
                    (this.gameBlocks[t].snake = !1),
                        (this.gameBlocks[t].class = '');
                }
                if (
                    ((this.xHead += this.xSpeed),
                    (this.yHead += this.ySpeed),
                    this.xHead >= this.xMax && (this.xHead = 0),
                    this.xHead < 0 && (this.xHead = this.xMax - 1),
                    this.yHead >= this.yMax && (this.yHead = 0),
                    this.yHead < 0 && (this.yHead = this.yMax - 1),
                    this.tail.includes(`${this.xHead}:${this.yHead}`))
                )
                    this.exitGame();
                else {
                    let e = this.gameBlocks.findIndex(
                        (e) => e.id === `${this.xHead}:${this.yHead}`
                    );
                    (this.gameBlocks[e].snake = !0),
                        (this.gameBlocks[e].class = 'snake'),
                        this.gameBlocks[e].food &&
                            (this.score++,
                            this.score > this.highScore &&
                                ((this.highScore = this.score),
                                localStorage.setItem(
                                    'lwc_snake_high',
                                    this.highScore
                                )),
                            this.addSpeed(),
                            this.tail.push(`${this.xHead}:${this.yHead}`),
                            (this.gameBlocks[e].food = !1),
                            this.generateFood());
                }
            }
            addKeyboardControls() {
                window.addEventListener('keydown', (e) => {
                    switch ((e.preventDefault(), e.key)) {
                        case 'ArrowUp':
                            (this.xSpeed = 0), (this.ySpeed = -1);
                            break;
                        case 'ArrowDown':
                            (this.xSpeed = 0), (this.ySpeed = 1);
                            break;
                        case 'ArrowLeft':
                            (this.xSpeed = -1), (this.ySpeed = 0);
                            break;
                        case 'ArrowRight':
                            (this.xSpeed = 1), (this.ySpeed = 0);
                    }
                });
            }
            generateFood() {
                let e = Math.floor(Math.random() * (this.xMax - 1)),
                    t = Math.floor(Math.random() * (this.yMax - 1));
                if (this.tail.includes(`${e}:${t}`)) this.generateFood();
                else {
                    let s = this.gameBlocks.findIndex(
                        (s) => s.id === `${e}:${t}`
                    );
                    (this.gameBlocks[s].food = !0),
                        (this.gameBlocks[s].class = 'food');
                }
            }
            renderGameBlocks() {
                let e = this.template.querySelector('.game-container')
                        .clientWidth,
                    t = this.template.querySelector('.game-container')
                        .clientHeight;
                (this.xMax = Math.floor(e / this.blockSize)),
                    (this.yMax = Math.floor(t / this.blockSize));
                let s = [];
                for (let e = 0; e < this.yMax; e++)
                    for (let t = 0; t < this.xMax; t++) {
                        let a;
                        (a =
                            0 === t && 0 === e
                                ? {
                                      id: `${t}:${e}`,
                                      snake: !0,
                                      food: !1,
                                      class: 'snake'
                                  }
                                : {
                                      id: `${t}:${e}`,
                                      snake: !1,
                                      food: !1,
                                      class: ''
                                  }),
                            s.push(a);
                    }
                this.gameBlocks = s;
            }
            renderedCallback() {
                this.renderComplete ||
                    ((this.renderComplete = !0),
                    this.renderGameBlocks(),
                    this.addKeyboardControls(),
                    this.generateFood());
            }
            resetGame() {
                (this.xSpeed = 1),
                    (this.ySpeed = 0),
                    (this.xHead = 0),
                    (this.yHead = 0),
                    (this.tail = []),
                    (this.score = 0),
                    (this.speed = 1),
                    this.renderGameBlocks(),
                    this.generateFood(),
                    this.startGame();
            }
            exitGame() {
                (this.showOverlay = !0),
                    (this.gameOver = !0),
                    clearInterval(this.intervalObj);
            }
        }
        Object(a.registerDecorators)(n, {
            track: { gameBlocks: 1 },
            fields: [
                'score',
                'highScore',
                'blockSize',
                'renderComplete',
                'xSpeed',
                'ySpeed',
                'xHead',
                'yHead',
                'xMax',
                'yMax',
                'tail',
                'showOverlay',
                'gameOver',
                'speed',
                'intervalObj'
            ]
        });
        var h = Object(a.registerComponent)(n, { tmpl: o });
        function d(e, t, s, a) {
            const { t: i, h: r, c: l } = e;
            return [
                r(
                    'header',
                    {
                        classMap: {
                            'slds-size_full': !0,
                            'slds-p-around_large': !0,
                            'slds-text-align_center': !0,
                            'slds-text-heading_large': !0,
                            'slds-m-top_large': !0,
                            header: !0
                        },
                        key: 2
                    },
                    [
                        i(
                            '🐍 Snake Game built with Lightning Web Components 🐍'
                        ),
                        r(
                            'div',
                            {
                                classMap: {
                                    'slds-text-heading_small': !0,
                                    'slds-m-top_small': !0
                                },
                                key: 1
                            },
                            [
                                r(
                                    'a',
                                    {
                                        attrs: {
                                            href:
                                                'https://github.com/adityanaag3/snake-game-lwc',
                                            target: '_blank'
                                        },
                                        key: 0
                                    },
                                    [i('View Source Code')]
                                )
                            ]
                        )
                    ]
                ),
                r('div', { classMap: { container: !0 }, key: 4 }, [
                    l('my-game', h, { key: 3 }, [])
                ]),
                r(
                    'footer',
                    {
                        classMap: {
                            'slds-size_full': !0,
                            'slds-text-align_center': !0,
                            'slds-m-top_large': !0,
                            'slds-m-bottom_small': !0
                        },
                        key: 9
                    },
                    [
                        i('Built by Aditya Naag Topalli'),
                        r('br', { key: 5 }, []),
                        r(
                            'a',
                            {
                                attrs: {
                                    href: 'http://adityanaag.com',
                                    target: '_blank'
                                },
                                key: 6
                            },
                            [i('Website')]
                        ),
                        i(' | '),
                        r(
                            'a',
                            {
                                attrs: {
                                    href: 'https://twitter.com/adityanaag',
                                    target: '_blank'
                                },
                                key: 7
                            },
                            [i('Twitter')]
                        ),
                        i(' | '),
                        r(
                            'a',
                            {
                                attrs: {
                                    href:
                                        'https://www.linkedin.com/in/adityanaag3/',
                                    target: '_blank'
                                },
                                key: 8
                            },
                            [i('LinkedIn')]
                        )
                    ]
                )
            ];
        }
        var c = Object(a.registerTemplate)(d);
        (d.stylesheets = []),
            i && d.stylesheets.push.apply(d.stylesheets, i),
            (d.stylesheetTokens = {
                hostAttribute: 'my-app-_app-host',
                shadowAttribute: 'my-app-_app'
            });
        class p extends a.LightningElement {}
        var g = Object(a.registerComponent)(p, { tmpl: c });
        const m = Object(a.createElement)('my-app', { is: g });
        document.querySelector('#main').appendChild(m);
    }
]);
