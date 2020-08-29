!(function (e) {
    function t(t) {
        for (
            var a, o, n = t[0], h = t[1], l = t[2], c = 0, p = [];
            c < n.length;
            c++
        )
            (o = n[c]),
                Object.prototype.hasOwnProperty.call(i, o) &&
                    i[o] &&
                    p.push(i[o][0]),
                (i[o] = 0);
        for (a in h)
            Object.prototype.hasOwnProperty.call(h, a) && (e[a] = h[a]);
        for (d && d(t); p.length; ) p.shift()();
        return r.push.apply(r, l || []), s();
    }
    function s() {
        for (var e, t = 0; t < r.length; t++) {
            for (var s = r[t], a = !0, n = 1; n < s.length; n++) {
                var h = s[n];
                0 !== i[h] && (a = !1);
            }
            a && (r.splice(t--, 1), (e = o((o.s = s[0]))));
        }
        return e;
    }
    var a = {},
        i = { 1: 0 },
        r = [];
    function o(t) {
        if (a[t]) return a[t].exports;
        var s = (a[t] = { i: t, l: !1, exports: {} });
        return e[t].call(s.exports, s, s.exports, o), (s.l = !0), s.exports;
    }
    (o.m = e),
        (o.c = a),
        (o.d = function (e, t, s) {
            o.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: s });
        }),
        (o.r = function (e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module'
                }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (o.t = function (e, t) {
            if ((1 & t && (e = o(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var s = Object.create(null);
            if (
                (o.r(s),
                Object.defineProperty(s, 'default', {
                    enumerable: !0,
                    value: e
                }),
                2 & t && 'string' != typeof e)
            )
                for (var a in e)
                    o.d(
                        s,
                        a,
                        function (t) {
                            return e[t];
                        }.bind(null, a)
                    );
            return s;
        }),
        (o.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return o.d(t, 'a', t), t;
        }),
        (o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (o.p = './');
    var n = (window.webpackJsonp = window.webpackJsonp || []),
        h = n.push.bind(n);
    (n.push = t), (n = n.slice());
    for (var l = 0; l < n.length; l++) t(n[l]);
    var d = h;
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
                return ['.container', t, '{width:70vw;margin:10% auto 0}'].join(
                    ''
                );
            }
        ];
        var r = [
            function (e, t, s) {
                return [
                    '.header',
                    t,
                    '{background:#a0f;color:#fff}.game-container',
                    t,
                    '{width:100%;height:60vh;background:#c1ff46}.game-container',
                    t,
                    ' div',
                    t,
                    '{width:20px;height:20px;background:#e6fabe;display:inline-block}.snake',
                    t,
                    '{background:green!important}.food',
                    t,
                    '{background:red!important}'
                ].join('');
            }
        ];
        function o(e, t, s, a) {
            const { t: i, d: r, h: o, k: n, i: h } = e;
            return [
                o(
                    'div',
                    {
                        classMap: {
                            header: !0,
                            'slds-var-p-around_medium': !0,
                            'slds-text-align_center': !0
                        },
                        key: 0
                    },
                    [i('Score: '), r(t.score)]
                ),
                o(
                    'div',
                    { classMap: { 'game-container': !0 }, key: 2 },
                    h(t.gameBlocks, function (e) {
                        return o(
                            'div',
                            { className: e.class, key: n(1, e.id) },
                            [i(' ')]
                        );
                    })
                )
            ];
        }
        var n = Object(a.registerTemplate)(o);
        (o.stylesheets = []),
            r && o.stylesheets.push.apply(o.stylesheets, r),
            (o.stylesheetTokens = {
                hostAttribute: 'my-game-_game-host',
                shadowAttribute: 'my-game-_game'
            });
        class h extends a.LightningElement {
            constructor(...e) {
                super(...e),
                    (this.score = 0),
                    (this.blockSize = 20),
                    (this.gameBlocks = []),
                    (this.renderComplete = !1),
                    (this.xSpeed = 1),
                    (this.ySpeed = 0),
                    (this.xHead = 0),
                    (this.yHead = 0),
                    (this.xMax = void 0),
                    (this.yMax = void 0),
                    (this.tail = []);
            }
            startGame() {
                setInterval(() => {
                    this.move();
                }, 300);
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
                (this.xHead += this.xSpeed),
                    (this.yHead += this.ySpeed),
                    this.xHead >= this.xMax && (this.xHead = 0),
                    this.xHead < 0 && (this.xHead = this.xMax - 1),
                    this.yHead >= this.yMax && (this.yHead = 0),
                    this.yHead < 0 && (this.yHead = this.yMax - 1),
                    this.tail.includes(`${this.xHead}:${this.yHead}`) &&
                        (alert('Game Over'),
                        (this.tail = []),
                        (this.xHead = 0),
                        (this.yHead = 0));
                let e = this.gameBlocks.findIndex(
                    (e) => e.id === `${this.xHead}:${this.yHead}`
                );
                (this.gameBlocks[e].snake = !0),
                    (this.gameBlocks[e].class = 'snake'),
                    this.gameBlocks[e].food &&
                        (this.score++,
                        this.tail.push(`${this.xHead}:${this.yHead}`),
                        (this.gameBlocks[e].food = !1),
                        this.generateFood());
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
                let e = Math.floor(Math.random() * this.xMax),
                    t = Math.floor(Math.random() * this.yMax),
                    s = this.gameBlocks.findIndex((s) => s.id === `${e}:${t}`);
                (this.gameBlocks[s].food = !0),
                    (this.gameBlocks[s].class = 'food');
            }
            renderedCallback() {
                if (!this.renderComplete) {
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
                    (this.renderComplete = !0),
                        (this.gameBlocks = s),
                        this.addKeyboardControls(),
                        this.generateFood(),
                        this.startGame();
                }
            }
        }
        Object(a.registerDecorators)(h, {
            track: { gameBlocks: 1 },
            fields: [
                'score',
                'blockSize',
                'renderComplete',
                'xSpeed',
                'ySpeed',
                'xHead',
                'yHead',
                'xMax',
                'yMax',
                'tail'
            ]
        });
        var l = Object(a.registerComponent)(h, { tmpl: n });
        function d(e, t, s, a) {
            const { c: i, h: r } = e;
            return [
                r('div', { classMap: { container: !0 }, key: 1 }, [
                    i('my-game', l, { key: 0 }, [])
                ])
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
        var u = Object(a.registerComponent)(p, { tmpl: c });
        const y = Object(a.createElement)('my-app', { is: u });
        document.querySelector('#main').appendChild(y);
    }
]);
