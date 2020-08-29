(window.webpackJsonp = window.webpackJsonp || []).push([
    [2],
    [
        ,
        ,
        function (e, t) {
            var n = Object.freeze({
                __proto__: null,
                invariant: function (e, t) {
                    if (!e) throw new Error('Invariant Violation: ' + t);
                },
                isTrue: function (e, t) {
                    if (!e) throw new Error('Assert Violation: ' + t);
                },
                isFalse: function (e, t) {
                    if (e) throw new Error('Assert Violation: ' + t);
                },
                fail: function (e) {
                    throw new Error(e);
                }
            });
            const {
                    assign: l,
                    create: o,
                    defineProperties: r,
                    defineProperty: a,
                    freeze: i,
                    getOwnPropertyDescriptor: c,
                    getOwnPropertyNames: s,
                    getPrototypeOf: u,
                    hasOwnProperty: h,
                    isFrozen: f,
                    keys: p,
                    seal: d,
                    setPrototypeOf: m
                } = Object,
                { isArray: g } = Array,
                {
                    filter: b,
                    find: E,
                    indexOf: y,
                    join: w,
                    map: v,
                    push: T,
                    reduce: N,
                    reverse: L,
                    slice: S,
                    splice: O,
                    unshift: M,
                    forEach: C
                } = Array.prototype,
                {
                    charCodeAt: $,
                    replace: _,
                    slice: H,
                    toLowerCase: R
                } = String.prototype;
            function A(e) {
                return void 0 === e;
            }
            function I(e) {
                return null === e;
            }
            function D(e) {
                return !0 === e;
            }
            function P(e) {
                return !1 === e;
            }
            function B(e) {
                return 'function' == typeof e;
            }
            const x = {}.toString;
            function k(e) {
                return e && e.toString
                    ? g(e)
                        ? w.call(v.call(e, k), ',')
                        : e.toString()
                    : 'object' == typeof e
                    ? x.call(e)
                    : e + F;
            }
            const F = '',
                W = o(null),
                j = o(null);
            C.call(
                [
                    'ariaActiveDescendant',
                    'ariaAtomic',
                    'ariaAutoComplete',
                    'ariaBusy',
                    'ariaChecked',
                    'ariaColCount',
                    'ariaColIndex',
                    'ariaColSpan',
                    'ariaControls',
                    'ariaCurrent',
                    'ariaDescribedBy',
                    'ariaDetails',
                    'ariaDisabled',
                    'ariaErrorMessage',
                    'ariaExpanded',
                    'ariaFlowTo',
                    'ariaHasPopup',
                    'ariaHidden',
                    'ariaInvalid',
                    'ariaKeyShortcuts',
                    'ariaLabel',
                    'ariaLabelledBy',
                    'ariaLevel',
                    'ariaLive',
                    'ariaModal',
                    'ariaMultiLine',
                    'ariaMultiSelectable',
                    'ariaOrientation',
                    'ariaOwns',
                    'ariaPlaceholder',
                    'ariaPosInSet',
                    'ariaPressed',
                    'ariaReadOnly',
                    'ariaRelevant',
                    'ariaRequired',
                    'ariaRoleDescription',
                    'ariaRowCount',
                    'ariaRowIndex',
                    'ariaRowSpan',
                    'ariaSelected',
                    'ariaSetSize',
                    'ariaSort',
                    'ariaValueMax',
                    'ariaValueMin',
                    'ariaValueNow',
                    'ariaValueText',
                    'role'
                ],
                (e) => {
                    const t = R.call(_.call(e, /^aria/, 'aria-'));
                    (W[t] = e), (j[e] = t);
                }
            );
            !(function () {
                if ('object' == typeof globalThis) return globalThis;
                let e;
                try {
                    Object.defineProperty(Object.prototype, '__magic__', {
                        get: function () {
                            return this;
                        },
                        configurable: !0
                    }),
                        (e = __magic__),
                        delete Object.prototype.__magic__;
                } catch (e) {
                } finally {
                    void 0 === e && (e = window);
                }
            })();
            const U = 'Symbol(x)' === Symbol('x').toString();
            function K(e, t) {
                return U ? Symbol(e) : `$$lwc-${t}-${e}$$`;
            }
            const V = new WeakMap();
            function q(e, t, n) {
                let l = V.get(e);
                A(l) && ((l = o(null)), V.set(e, l)), (l[t] = n);
            }
            function G(e, t) {
                const n = V.get(e);
                if (!A(n)) return n[t];
            }
            p({
                accesskey: 'accessKey',
                readonly: 'readOnly',
                tabindex: 'tabIndex',
                bgcolor: 'bgColor',
                colspan: 'colSpan',
                rowspan: 'rowSpan',
                contenteditable: 'contentEditable',
                crossorigin: 'crossOrigin',
                datetime: 'dateTime',
                formaction: 'formAction',
                ismap: 'isMap',
                maxlength: 'maxLength',
                minlength: 'minLength',
                novalidate: 'noValidate',
                usemap: 'useMap',
                for: 'htmlFor'
            }).forEach((e) => {});
            const {
                    DOCUMENT_POSITION_CONTAINED_BY: z,
                    DOCUMENT_POSITION_CONTAINS: Y,
                    DOCUMENT_POSITION_PRECEDING: X,
                    DOCUMENT_POSITION_FOLLOWING: J,
                    ELEMENT_NODE: Q,
                    TEXT_NODE: Z,
                    CDATA_SECTION_NODE: ee,
                    PROCESSING_INSTRUCTION_NODE: te,
                    COMMENT_NODE: ne,
                    DOCUMENT_FRAGMENT_NODE: le
                } = Node,
                {
                    appendChild: oe,
                    cloneNode: re,
                    compareDocumentPosition: ae,
                    insertBefore: ie,
                    removeChild: ce,
                    replaceChild: se,
                    hasChildNodes: ue
                } = Node.prototype,
                { contains: he } = HTMLElement.prototype,
                fe = c(Node.prototype, 'firstChild').get,
                pe = c(Node.prototype, 'lastChild').get,
                de = c(Node.prototype, 'textContent').get,
                me = c(Node.prototype, 'parentNode').get,
                ge = c(Node.prototype, 'ownerDocument').get,
                be = h.call(Node.prototype, 'parentElement')
                    ? c(Node.prototype, 'parentElement').get
                    : c(HTMLElement.prototype, 'parentElement').get,
                Ee = c(Node.prototype, 'textContent').set,
                ye = h.call(Node.prototype, 'childNodes')
                    ? c(Node.prototype, 'childNodes').get
                    : c(HTMLElement.prototype, 'childNodes').get,
                we = h.call(Node.prototype, 'isConnected')
                    ? c(Node.prototype, 'isConnected').get
                    : function () {
                          const e = ge.call(this);
                          return null === e || 0 != (ae.call(e, this) & z);
                      },
                {
                    addEventListener: ve,
                    getAttribute: Te,
                    getBoundingClientRect: Ne,
                    getElementsByTagName: Le,
                    getElementsByTagNameNS: Se,
                    hasAttribute: Oe,
                    querySelector: Me,
                    querySelectorAll: Ce,
                    removeAttribute: $e,
                    removeEventListener: _e,
                    setAttribute: He
                } = Element.prototype,
                Re = h.call(Element.prototype, 'attachShadow')
                    ? Element.prototype.attachShadow
                    : () => {
                          throw new TypeError(
                              'attachShadow() is not supported in current browser. Load the @lwc/synthetic-shadow polyfill and use Lightning Web Components'
                          );
                      },
                Ae = c(Element.prototype, 'childElementCount').get,
                Ie = c(Element.prototype, 'firstElementChild').get,
                De = c(Element.prototype, 'lastElementChild').get,
                Pe = h.call(Element.prototype, 'innerHTML')
                    ? c(Element.prototype, 'innerHTML')
                    : c(HTMLElement.prototype, 'innerHTML'),
                Be = Pe.get,
                xe = Pe.set,
                ke = h.call(Element.prototype, 'outerHTML')
                    ? c(Element.prototype, 'outerHTML')
                    : c(HTMLElement.prototype, 'outerHTML'),
                Fe = ke.get,
                We = ke.set,
                je = c(Element.prototype, 'tagName').get,
                Ue = c(HTMLElement.prototype, 'tabIndex'),
                Ke = Ue.get,
                Ve = Ue.set,
                qe = h.call(Element.prototype, 'matches')
                    ? Element.prototype.matches
                    : Element.prototype.msMatchesSelector,
                Ge = h.call(Element.prototype, 'children')
                    ? c(Element.prototype, 'children').get
                    : c(HTMLElement.prototype, 'children').get,
                { getElementsByClassName: ze } = HTMLElement.prototype,
                Ye = h.call(Element.prototype, 'shadowRoot')
                    ? c(Element.prototype, 'shadowRoot').get
                    : () => null;
            let Xe, Je;
            'undefined' != typeof HTMLSlotElement
                ? ((Xe = HTMLSlotElement.prototype.assignedNodes),
                  (Je = HTMLSlotElement.prototype.assignedElements))
                : ((Xe = () => {
                      throw new TypeError(
                          "assignedNodes() is not supported in current browser. Load the @lwc/synthetic-shadow polyfill to start using <slot> elements in your Lightning Web Component's template"
                      );
                  }),
                  (Je = () => {
                      throw new TypeError(
                          "assignedElements() is not supported in current browser. Load the @lwc/synthetic-shadow polyfill to start using <slot> elements in your Lightning Web Component's template"
                      );
                  }));
            const Qe =
                    'EventTarget' in window
                        ? EventTarget.prototype.dispatchEvent
                        : Node.prototype.dispatchEvent,
                Ze = c(Event.prototype, 'target').get,
                et = c(Event.prototype, 'currentTarget').get,
                tt = c(FocusEvent.prototype, 'relatedTarget').get,
                nt = c(Document.prototype, 'activeElement').get,
                lt = h.call(Document.prototype, 'elementFromPoint')
                    ? Document.prototype.elementFromPoint
                    : Document.prototype.msElementFromPoint,
                ot = c(Document.prototype, 'defaultView').get,
                {
                    createComment: rt,
                    querySelectorAll: at,
                    getElementById: it,
                    getElementsByClassName: ct,
                    getElementsByTagName: st,
                    getElementsByTagNameNS: ut
                } = Document.prototype,
                { getElementsByName: ht } = HTMLDocument.prototype,
                { addEventListener: ft, removeEventListener: pt } = window,
                dt = MutationObserver,
                mt = dt.prototype.observe;
            const { createElement: gt } = Document.prototype;
            'undefined' == typeof HTMLSlotElement &&
                (function () {
                    class e {}
                    m(e, HTMLElement.constructor),
                        m(e.prototype, HTMLElement.prototype),
                        (Window.prototype.HTMLSlotElement = e),
                        a(Document.prototype, 'createElement', {
                            value: function (t, n) {
                                const l = gt.apply(this, S.call(arguments));
                                return (
                                    4 === t.length &&
                                        115 === $.call(t, 0) &&
                                        108 === $.call(t, 1) &&
                                        111 === $.call(t, 2) &&
                                        116 === $.call(t, 3) &&
                                        m(l, e.prototype),
                                    l
                                );
                            }
                        });
                })();
            const {
                    assign: bt,
                    create: Et,
                    defineProperties: yt,
                    defineProperty: wt,
                    freeze: vt,
                    getOwnPropertyDescriptor: Tt,
                    getOwnPropertyNames: Nt,
                    getPrototypeOf: Lt,
                    hasOwnProperty: St,
                    isFrozen: Ot,
                    keys: Mt,
                    seal: Ct,
                    setPrototypeOf: $t
                } = Object,
                {
                    filter: _t,
                    find: Ht,
                    indexOf: Rt,
                    join: At,
                    map: It,
                    push: Dt,
                    reduce: Pt,
                    reverse: Bt,
                    slice: xt,
                    splice: kt,
                    unshift: Ft,
                    forEach: Wt
                } = Array.prototype,
                {
                    charCodeAt: jt,
                    replace: Ut,
                    slice: Kt,
                    toLowerCase: Vt
                } = String.prototype,
                qt = Et(null),
                Gt = Et(null);
            Wt.call(
                [
                    'ariaActiveDescendant',
                    'ariaAtomic',
                    'ariaAutoComplete',
                    'ariaBusy',
                    'ariaChecked',
                    'ariaColCount',
                    'ariaColIndex',
                    'ariaColSpan',
                    'ariaControls',
                    'ariaCurrent',
                    'ariaDescribedBy',
                    'ariaDetails',
                    'ariaDisabled',
                    'ariaErrorMessage',
                    'ariaExpanded',
                    'ariaFlowTo',
                    'ariaHasPopup',
                    'ariaHidden',
                    'ariaInvalid',
                    'ariaKeyShortcuts',
                    'ariaLabel',
                    'ariaLabelledBy',
                    'ariaLevel',
                    'ariaLive',
                    'ariaModal',
                    'ariaMultiLine',
                    'ariaMultiSelectable',
                    'ariaOrientation',
                    'ariaOwns',
                    'ariaPlaceholder',
                    'ariaPosInSet',
                    'ariaPressed',
                    'ariaReadOnly',
                    'ariaRelevant',
                    'ariaRequired',
                    'ariaRoleDescription',
                    'ariaRowCount',
                    'ariaRowIndex',
                    'ariaRowSpan',
                    'ariaSelected',
                    'ariaSetSize',
                    'ariaSort',
                    'ariaValueMax',
                    'ariaValueMin',
                    'ariaValueNow',
                    'ariaValueText',
                    'role'
                ],
                (e) => {
                    const t = Vt.call(Ut.call(e, /^aria/, 'aria-'));
                    (qt[t] = e), (Gt[e] = t);
                }
            );
            const zt = (function () {
                if ('object' == typeof globalThis) return globalThis;
                let e;
                try {
                    Object.defineProperty(Object.prototype, '__magic__', {
                        get: function () {
                            return this;
                        },
                        configurable: !0
                    }),
                        (e = __magic__),
                        delete Object.prototype.__magic__;
                } catch (e) {
                } finally {
                    void 0 === e && (e = window);
                }
                return e;
            })();
            Symbol('x').toString();
            Mt({
                accesskey: 'accessKey',
                readonly: 'readOnly',
                tabindex: 'tabIndex',
                bgcolor: 'bgColor',
                colspan: 'colSpan',
                rowspan: 'rowSpan',
                contenteditable: 'contentEditable',
                crossorigin: 'crossOrigin',
                datetime: 'dateTime',
                formaction: 'formAction',
                ismap: 'isMap',
                maxlength: 'maxLength',
                minlength: 'minLength',
                novalidate: 'noValidate',
                usemap: 'useMap',
                for: 'htmlFor'
            }).forEach((e) => {}),
                zt.lwcRuntimeFlags ||
                    Object.defineProperty(zt, 'lwcRuntimeFlags', {
                        value: Et(null)
                    });
            const Yt = zt.lwcRuntimeFlags;
            function Xt(e) {
                const t = ge.call(e);
                return null === t ? e : t;
            }
            function Jt(e) {
                const t = Xt(e),
                    n = ot.call(t);
                if (null === n) throw new TypeError();
                return n;
            }
            let Qt;
            function Zt(e) {
                if (A(Qt)) {
                    const t = Xt(e);
                    Qt =
                        t.body &&
                        'temporary-bypass' ===
                            Te.call(t.body, 'data-global-patching-bypass');
                }
                return D(Qt);
            }
            function en(e) {
                const t = e.length,
                    n = [];
                if (t > 0) for (let l = 0; l < t; l++) n[l] = e[l];
                return n;
            }
            function tn(e, t) {
                const n = [];
                let l = e;
                const o = e instanceof Window ? e : e.getRootNode();
                for (; !I(l); ) {
                    n.push(l);
                    let e = null;
                    l instanceof Element && (e = l.assignedSlot),
                        (l = I(e)
                            ? l instanceof ShadowRoot && (t || l !== o)
                                ? l.host
                                : l.parentNode
                            : e);
                }
                let r;
                return (
                    (r = e instanceof Window ? e.document : Xt(e)),
                    n[n.length - 1] === r && n.push(window),
                    n
                );
            }
            function nn(e, t) {
                if (I(e)) return null;
                const n = tn(e, !0),
                    l = t;
                for (let e, t, o, r, a = 0; a < l.length; a++)
                    if (
                        ((e = l[a]),
                        (o = e instanceof Window ? e : e.getRootNode()),
                        o !== t && ((r = n.indexOf(o)), (t = o)),
                        !(o instanceof Yn) || (!A(r) && r > -1))
                    )
                        return e;
                return null;
            }
            var ln;
            !(function (e) {
                (e[(e.CUSTOM_ELEMENT_LISTENER = 1)] =
                    'CUSTOM_ELEMENT_LISTENER'),
                    (e[(e.SHADOW_ROOT_LISTENER = 2)] = 'SHADOW_ROOT_LISTENER');
            })(ln || (ln = {}));
            const on = new WeakMap();
            function rn(e, t) {
                return !!(ae.call(e, t) & z);
            }
            const an = { composed: !1 };
            function cn(e, t) {
                let n = e.getRootNode(t);
                return 'mode' in n && 'delegatesFocus' in n && (n = Un(n)), n;
            }
            function sn() {
                const e = et.call(this),
                    t = Ze.call(this),
                    n = tn(t, this.composed),
                    l = Xt(t);
                if (!(e instanceof Node))
                    return I(e) && A(sl(t)) ? t : nn(l, n);
                if (e === l || e === l.body) return A(sl(t)) ? t : nn(l, n);
                return nn(
                    on.get(this) === ln.SHADOW_ROOT_LISTENER ? Kn(e) : e,
                    n
                );
            }
            function un() {
                const e = Ze.call(this);
                return I(et.call(this)) ? [] : tn(e, this.composed);
            }
            function hn(e) {
                if (on.has(e)) return;
                r(e, {
                    target: { get: sn, enumerable: !0, configurable: !0 },
                    composedPath: {
                        value: un,
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    },
                    srcElement: { get: sn, enumerable: !0, configurable: !0 },
                    path: { get: un, enumerable: !0, configurable: !0 }
                });
                const t = (function (e, t) {
                    do {
                        const n = c(e, t);
                        if (!A(n)) return n;
                        e = u(e);
                    } while (null !== e);
                })(e, 'relatedTarget');
                if (!A(t)) {
                    const n = t.get;
                    a(e, 'relatedTarget', {
                        get() {
                            const e = on.get(this),
                                t = et.call(this),
                                l = n.call(this);
                            if (I(l)) return null;
                            return nn(
                                e === ln.SHADOW_ROOT_LISTENER ? Kn(t) : t,
                                tn(l, !0)
                            );
                        },
                        enumerable: !0,
                        configurable: !0
                    });
                }
                on.set(e, 0);
            }
            const fn = new WeakMap();
            function pn(e) {
                let t = fn.get(e);
                return A(t) && ((t = o(null)), fn.set(e, t)), t;
            }
            const dn = new WeakMap();
            function mn(e, t) {
                if (!B(t)) throw new TypeError();
                let n = dn.get(t);
                return (
                    A(n) &&
                        ((n = function (n) {
                            const { composed: l } = n,
                                o = Ze.call(n),
                                r = et.call(n);
                            if (o !== r) {
                                const a = cn(o, { composed: l });
                                (rn(a, r) || (!1 === l && a === r)) &&
                                    t.call(e, n);
                            }
                        }),
                        (n.placement = ln.SHADOW_ROOT_LISTENER),
                        (n.original = t),
                        dn.set(t, n)),
                    n
                );
            }
            const gn = new WeakMap();
            function bn(e, t) {
                if (!B(t)) throw new TypeError();
                let n = gn.get(t);
                return (
                    A(n) &&
                        ((n = function (n) {
                            (function (e) {
                                const t = Ze.call(e),
                                    n = et.call(e),
                                    { composed: l } = e;
                                return !0 === l || t === n || rn(cn(t, an), n);
                            })(n) && t.call(e, n);
                        }),
                        (n.placement = ln.CUSTOM_ELEMENT_LISTENER),
                        (n.original = t),
                        gn.set(t, n)),
                    n
                );
            }
            function En(e) {
                hn(e);
                let t = !1,
                    n = !1;
                const {
                        type: l,
                        stopImmediatePropagation: o,
                        stopPropagation: r
                    } = e,
                    i = pn(et.call(e))[l];
                a(e, 'stopImmediatePropagation', {
                    value() {
                        (t = !0), o.call(e);
                    },
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                }),
                    a(e, 'stopPropagation', {
                        value() {
                            (n = !0), r.call(e);
                        },
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    });
                const c = S.call(i);
                function s(n) {
                    C.call(c, (l) => {
                        P(t) &&
                            l.placement === n &&
                            -1 !== y.call(i, l) &&
                            l.call(void 0, e);
                    });
                }
                on.set(e, ln.SHADOW_ROOT_LISTENER),
                    s(ln.SHADOW_ROOT_LISTENER),
                    P(t) &&
                        P(n) &&
                        (on.set(e, ln.CUSTOM_ELEMENT_LISTENER),
                        s(ln.CUSTOM_ELEMENT_LISTENER)),
                    on.set(e, 0);
            }
            function yn(e, t, n) {
                const l = pn(e);
                let o = l[t];
                A(o) && (o = l[t] = []),
                    0 === o.length && ve.call(e, t, En),
                    T.call(o, n);
            }
            function wn(e, t, n) {
                let l, o;
                A((o = pn(e)[t])) ||
                    -1 === (l = y.call(o, n)) ||
                    (O.call(o, l, 1), 0 === o.length && _e.call(e, t, En));
            }
            function vn(e) {
                switch (e.nodeType) {
                    case Q: {
                        const t = al(e);
                        let n = '';
                        for (let e = 0, l = t.length; e < l; e += 1) {
                            const l = t[e];
                            l.nodeType !== ne && (n += vn(l));
                        }
                        return n;
                    }
                    default:
                        return e.nodeValue;
                }
            }
            const Tn = K('StaticNodeListItems', 'synthetic-shadow');
            function Nn() {
                throw new TypeError('Illegal constructor');
            }
            function Ln(e) {
                const t = o(Nn.prototype);
                return (
                    q(t, Tn, e),
                    C.call(e, (e, n) => {
                        a(t, n, { value: e, enumerable: !0, configurable: !0 });
                    }),
                    t
                );
            }
            (Nn.prototype = o(NodeList.prototype, {
                constructor: { writable: !0, configurable: !0, value: Nn },
                item: {
                    writable: !0,
                    enumerable: !0,
                    configurable: !0,
                    value(e) {
                        return this[e];
                    }
                },
                length: {
                    enumerable: !0,
                    configurable: !0,
                    get() {
                        return G(this, Tn).length;
                    }
                },
                forEach: {
                    writable: !0,
                    enumerable: !0,
                    configurable: !0,
                    value(e, t) {
                        C.call(G(this, Tn), e, t);
                    }
                },
                entries: {
                    writable: !0,
                    enumerable: !0,
                    configurable: !0,
                    value() {
                        return v.call(G(this, Tn), (e, t) => [t, e]);
                    }
                },
                keys: {
                    writable: !0,
                    enumerable: !0,
                    configurable: !0,
                    value() {
                        return v.call(G(this, Tn), (e, t) => t);
                    }
                },
                values: {
                    writable: !0,
                    enumerable: !0,
                    configurable: !0,
                    value() {
                        return G(this, Tn);
                    }
                },
                [Symbol.iterator]: {
                    writable: !0,
                    configurable: !0,
                    value() {
                        let e = 0;
                        return {
                            next: () => {
                                const t = G(this, Tn);
                                return e < t.length
                                    ? { value: t[e++], done: !1 }
                                    : { done: !0 };
                            }
                        };
                    }
                },
                [Symbol.toStringTag]: {
                    configurable: !0,
                    get: () => 'NodeList'
                },
                toString: {
                    writable: !0,
                    configurable: !0,
                    value: () => '[object NodeList]'
                }
            })),
                m(Nn, NodeList);
            const Sn = K('StaticHTMLCollectionItems', 'synthetic-shadow');
            function On() {
                throw new TypeError('Illegal constructor');
            }
            function Mn(e) {
                const t = o(On.prototype);
                return (
                    q(t, Sn, e),
                    C.call(e, (e, n) => {
                        a(t, n, { value: e, enumerable: !0, configurable: !0 });
                    }),
                    t
                );
            }
            (On.prototype = o(HTMLCollection.prototype, {
                constructor: { writable: !0, configurable: !0, value: On },
                item: {
                    writable: !0,
                    enumerable: !0,
                    configurable: !0,
                    value(e) {
                        return this[e];
                    }
                },
                length: {
                    enumerable: !0,
                    configurable: !0,
                    get() {
                        return G(this, Sn).length;
                    }
                },
                namedItem: {
                    writable: !0,
                    enumerable: !0,
                    configurable: !0,
                    value(e) {
                        if ('' === e) return null;
                        const t = G(this, Sn);
                        for (let n = 0, l = t.length; n < l; n++) {
                            const n = t[l];
                            if (
                                e === Te.call(n, 'id') ||
                                e === Te.call(n, 'name')
                            )
                                return n;
                        }
                        return null;
                    }
                },
                forEach: {
                    writable: !0,
                    enumerable: !0,
                    configurable: !0,
                    value(e, t) {
                        C.call(G(this, Sn), e, t);
                    }
                },
                entries: {
                    writable: !0,
                    enumerable: !0,
                    configurable: !0,
                    value() {
                        return v.call(G(this, Sn), (e, t) => [t, e]);
                    }
                },
                keys: {
                    writable: !0,
                    enumerable: !0,
                    configurable: !0,
                    value() {
                        return v.call(G(this, Sn), (e, t) => t);
                    }
                },
                values: {
                    writable: !0,
                    enumerable: !0,
                    configurable: !0,
                    value() {
                        return G(this, Sn);
                    }
                },
                [Symbol.iterator]: {
                    writable: !0,
                    configurable: !0,
                    value() {
                        let e = 0;
                        return {
                            next: () => {
                                const t = G(this, Sn);
                                return e < t.length
                                    ? { value: t[e++], done: !1 }
                                    : { done: !0 };
                            }
                        };
                    }
                },
                [Symbol.toStringTag]: {
                    configurable: !0,
                    get: () => 'HTMLCollection'
                },
                toString: {
                    writable: !0,
                    configurable: !0,
                    value: () => '[object HTMLCollection]'
                }
            })),
                m(On, HTMLCollection);
            const Cn = /[&\u00A0"]/g,
                $n = /[&\u00A0<>]/g,
                { replace: _n, toLowerCase: Hn } = String.prototype;
            function Rn(e) {
                switch (e) {
                    case '&':
                        return '&amp;';
                    case '<':
                        return '&lt;';
                    case '>':
                        return '&gt;';
                    case '"':
                        return '&quot;';
                    case ' ':
                        return '&nbsp;';
                    default:
                        return '';
                }
            }
            function An(e) {
                return _n.call(e, Cn, Rn);
            }
            const In = new Set([
                    'AREA',
                    'BASE',
                    'BR',
                    'COL',
                    'COMMAND',
                    'EMBED',
                    'HR',
                    'IMG',
                    'INPUT',
                    'KEYGEN',
                    'LINK',
                    'META',
                    'PARAM',
                    'SOURCE',
                    'TRACK',
                    'WBR'
                ]),
                Dn = new Set([
                    'STYLE',
                    'SCRIPT',
                    'XMP',
                    'IFRAME',
                    'NOEMBED',
                    'NOFRAMES',
                    'PLAINTEXT',
                    'NOSCRIPT'
                ]);
            function Pn(e) {
                switch (e.nodeType) {
                    case Q: {
                        const { attributes: t } = e,
                            n = je.call(e);
                        let l = '<' + Hn.call(n);
                        for (let e, n = 0; (e = t[n]); n++)
                            l += ' ' + e.name + '="' + An(e.value) + '"';
                        return (
                            (l += '>'),
                            In.has(n)
                                ? l
                                : l +
                                  (function (e) {
                                      let t = '';
                                      const n = al(e);
                                      for (
                                          let e = 0, l = n.length;
                                          e < l;
                                          e += 1
                                      )
                                          t += Pn(n[e]);
                                      return t;
                                  })(e) +
                                  '</' +
                                  Hn.call(n) +
                                  '>'
                        );
                    }
                    case Z: {
                        const { data: n, parentNode: l } = e;
                        return l instanceof Element && Dn.has(je.call(l))
                            ? n
                            : ((t = n), _n.call(t, $n, Rn));
                    }
                    case ee:
                        return `<!CDATA[[${e.data}]]>`;
                    case te:
                        return `<?${e.target} ${e.data}?>`;
                    case ne:
                        return `\x3c!--${e.data}--\x3e`;
                    default:
                        return '';
                }
                var t;
            }
            const Bn = K('shadowRecord', 'synthetic-shadow'),
                { createDocumentFragment: xn } = document;
            function kn(e) {
                const t = G(e, Bn);
                if (A(t)) throw new TypeError();
                return t;
            }
            function Fn(e) {
                return e.$shadowResolver$;
            }
            function Wn(e, t) {
                e.$shadowResolver$ = t;
            }
            function jn(e) {
                return kn(e).delegatesFocus;
            }
            function Un(e) {
                return kn(e).host;
            }
            function Kn(e) {
                return kn(e).shadowRoot;
            }
            function Vn(e) {
                return !A(G(e, Bn));
            }
            a(Node.prototype, '$shadowResolver$', {
                set(e) {
                    var t, n;
                    (this.$$ShadowResolverKey$$ = e),
                        (t = this),
                        (n = e.nodeKey),
                        a(t, '$$OwnerKey$$', { value: n, configurable: !0 });
                },
                get() {
                    return this.$$ShadowResolverKey$$;
                },
                configurable: !0,
                enumerable: !0
            });
            let qn = 0;
            function Gn(e, t) {
                if (!A(G(e, Bn)))
                    throw new Error(
                        "Failed to execute 'attachShadow' on 'Element': Shadow root cannot be created on a host which already hosts a shadow tree."
                    );
                const { mode: n, delegatesFocus: l } = t,
                    o = Xt(e),
                    r = xn.call(o),
                    i = {
                        mode: n,
                        delegatesFocus: !!l,
                        host: e,
                        shadowRoot: r
                    };
                q(r, Bn, i), q(e, Bn, i);
                const c = () => r,
                    s = (c.nodeKey = qn++);
                return (
                    a(e, '$$OwnKey$$', { value: s }),
                    Wn(r, c),
                    m(r, Yn.prototype),
                    r
                );
            }
            const zn = {
                constructor: { writable: !0, configurable: !0, value: Yn },
                toString: {
                    writable: !0,
                    configurable: !0,
                    value: () => '[object ShadowRoot]'
                }
            };
            function Yn() {
                throw new TypeError('Illegal constructor');
            }
            function Xn(e) {
                let t = be.call(e);
                for (; !I(t) && Zn(t); ) (e = t), (t = be.call(e));
                return e;
            }
            function Jn(e, t) {
                n.invariant(
                    e instanceof HTMLElement,
                    'isNodeSlotted() should be called with a host as the first argument instead of ' +
                        e
                ),
                    n.invariant(
                        t instanceof Node,
                        'isNodeSlotted() should be called with a node as the second argument instead of ' +
                            t
                    ),
                    n.invariant(
                        ae.call(t, e) & Y,
                        'isNodeSlotted() should never be called with a node that is not a child node of ' +
                            e
                    );
                const l = ul(e);
                let o = t instanceof Element ? t : be.call(t);
                for (; !I(o) && o !== e; ) {
                    const t = hl(o),
                        n = be.call(o);
                    if (t === l) return Zn(o);
                    if (n === e) return !1;
                    if (I(n) || hl(n) === t) o = n;
                    else {
                        if (!Zn(n)) return !1;
                        if (((o = Qn(Xn(n))), !I(o))) {
                            if (o === e) return !0;
                            if (hl(o) === l) return !0;
                        }
                    }
                }
                return !1;
            }
            function Qn(e) {
                if (!(e instanceof Node)) return null;
                const t = hl(e);
                if (A(t)) return null;
                let n = e;
                for (; !I(n) && ul(n) !== t; ) n = me.call(n);
                return I(n) ? null : n;
            }
            function Zn(e) {
                return e instanceof HTMLSlotElement;
            }
            function el(e, t) {
                n.invariant(
                    e instanceof HTMLElement,
                    'isNodeOwnedBy() should be called with an element as the first argument instead of ' +
                        e
                ),
                    n.invariant(
                        t instanceof Node,
                        'isNodeOwnedBy() should be called with a node as the second argument instead of ' +
                            t
                    ),
                    n.invariant(
                        ae.call(t, e) & Y,
                        'isNodeOwnedBy() should never be called with a node that is not a child node of ' +
                            e
                    );
                const l = hl(t);
                return A(l) || ul(e) === l;
            }
            function tl(e) {
                const t = Un(e);
                return ol(t, en(ye.call(t)));
            }
            function nl(e, t) {
                const n = [];
                for (let l = 0, o = t.length; l < o; l += 1) {
                    const o = t[l];
                    !el(e, o) && Jn(e, o) && T.call(n, o);
                }
                return n;
            }
            function ll(e, t) {
                for (let n = 0, l = t.length; n < l; n += 1) {
                    const l = t[n];
                    if (!el(e, l) && Jn(e, l)) return l;
                }
                return null;
            }
            function ol(e, t) {
                const n = [];
                for (let l = 0, o = t.length; l < o; l += 1) {
                    const o = t[l];
                    el(e, o) && T.call(n, o);
                }
                return n;
            }
            function rl(e, t) {
                for (let n = 0, l = t.length; n < l; n += 1)
                    if (el(e, t[n])) return t[n];
                return null;
            }
            function al(e) {
                let t;
                if (!Vn(e) && !Zn(e)) return (t = ye.call(e)), en(t);
                if (Vn(e)) {
                    const t = en(Ce.call(e, 'slot')),
                        n = Fn(Kn(e));
                    return N.call(
                        t,
                        (e, t) => (n === Fn(t) && T.apply(e, il(t)), e),
                        []
                    );
                }
                {
                    t = en(ye.call(e));
                    const n = Fn(e);
                    return N.call(
                        t,
                        (e, t) => (n === Fn(t) && T.call(e, t), e),
                        []
                    );
                }
            }
            function il(e) {
                const t = Qn(e);
                if (I(t)) return [];
                const n = en(ye.call(e));
                return N.call(n, (e, n) => (el(t, n) || T.call(e, n), e), []);
            }
            l(
                zn,
                {
                    insertBefore: {
                        writable: !0,
                        enumerable: !0,
                        configurable: !0,
                        value(e, t) {
                            return ie.call(Un(this), e, t), e;
                        }
                    },
                    removeChild: {
                        writable: !0,
                        enumerable: !0,
                        configurable: !0,
                        value(e) {
                            return ce.call(Un(this), e), e;
                        }
                    },
                    appendChild: {
                        writable: !0,
                        enumerable: !0,
                        configurable: !0,
                        value(e) {
                            return oe.call(Un(this), e), e;
                        }
                    },
                    replaceChild: {
                        writable: !0,
                        enumerable: !0,
                        configurable: !0,
                        value(e, t) {
                            return se.call(Un(this), e, t), t;
                        }
                    },
                    addEventListener: {
                        writable: !0,
                        enumerable: !0,
                        configurable: !0,
                        value(e, t, n) {
                            !(function (e, t, n, l) {
                                if (!B(n))
                                    throw new TypeError(
                                        `Invalid second argument for ShadowRoot.addEventListener() in ${k(
                                            e
                                        )} for event "${t}". Expected an EventListener but received ${n}.`
                                    );
                                yn(Un(e), t, mn(e, n));
                            })(this, e, t);
                        }
                    },
                    removeEventListener: {
                        writable: !0,
                        enumerable: !0,
                        configurable: !0,
                        value(e, t, n) {
                            !(function (e, t, n, l) {
                                wn(Un(e), t, mn(e, n));
                            })(this, e, t);
                        }
                    },
                    baseURI: {
                        enumerable: !0,
                        configurable: !0,
                        get() {
                            return Un(this).baseURI;
                        }
                    },
                    childNodes: {
                        enumerable: !0,
                        configurable: !0,
                        get() {
                            return Ln(tl(this));
                        }
                    },
                    compareDocumentPosition: {
                        writable: !0,
                        enumerable: !0,
                        configurable: !0,
                        value(e) {
                            const t = Un(this);
                            return this === e
                                ? 0
                                : this.contains(e)
                                ? 20
                                : ae.call(t, e) & z
                                ? 37
                                : 35;
                        }
                    },
                    contains: {
                        writable: !0,
                        enumerable: !0,
                        configurable: !0,
                        value(e) {
                            if (this === e) return !0;
                            const t = Un(this);
                            return 0 != (ae.call(t, e) & z) && el(t, e);
                        }
                    },
                    firstChild: {
                        enumerable: !0,
                        configurable: !0,
                        get() {
                            return Cl(this)[0] || null;
                        }
                    },
                    lastChild: {
                        enumerable: !0,
                        configurable: !0,
                        get() {
                            const e = Cl(this);
                            return e[e.length - 1] || null;
                        }
                    },
                    hasChildNodes: {
                        writable: !0,
                        enumerable: !0,
                        configurable: !0,
                        value() {
                            return Cl(this).length > 0;
                        }
                    },
                    isConnected: {
                        enumerable: !0,
                        configurable: !0,
                        get() {
                            return we.call(Un(this));
                        }
                    },
                    nextSibling: {
                        enumerable: !0,
                        configurable: !0,
                        get: () => null
                    },
                    previousSibling: {
                        enumerable: !0,
                        configurable: !0,
                        get: () => null
                    },
                    nodeName: {
                        enumerable: !0,
                        configurable: !0,
                        get: () => '#document-fragment'
                    },
                    nodeType: {
                        enumerable: !0,
                        configurable: !0,
                        get: () => 11
                    },
                    nodeValue: {
                        enumerable: !0,
                        configurable: !0,
                        get: () => null
                    },
                    ownerDocument: {
                        enumerable: !0,
                        configurable: !0,
                        get() {
                            return Un(this).ownerDocument;
                        }
                    },
                    parentElement: {
                        enumerable: !0,
                        configurable: !0,
                        get: () => null
                    },
                    parentNode: {
                        enumerable: !0,
                        configurable: !0,
                        get: () => null
                    },
                    textContent: {
                        enumerable: !0,
                        configurable: !0,
                        get() {
                            const e = Cl(this);
                            let t = '';
                            for (let n = 0, l = e.length; n < l; n += 1) {
                                const l = e[n];
                                l.nodeType !== ne && (t += vn(l));
                            }
                            return t;
                        },
                        set(e) {
                            const t = Un(this);
                            Ee.call(t, e);
                        }
                    },
                    getRootNode: {
                        writable: !0,
                        enumerable: !0,
                        configurable: !0,
                        value(e) {
                            return !A(e) && D(e.composed)
                                ? Un(this).getRootNode(e)
                                : this;
                        }
                    }
                },
                {
                    childElementCount: {
                        enumerable: !0,
                        configurable: !0,
                        get() {
                            return this.children.length;
                        }
                    },
                    children: {
                        enumerable: !0,
                        configurable: !0,
                        get() {
                            return Mn(
                                b.call(tl(this), (e) => e instanceof Element)
                            );
                        }
                    },
                    firstElementChild: {
                        enumerable: !0,
                        configurable: !0,
                        get() {
                            return this.children[0] || null;
                        }
                    },
                    lastElementChild: {
                        enumerable: !0,
                        configurable: !0,
                        get() {
                            const { children: e } = this;
                            return e.item(e.length - 1) || null;
                        }
                    },
                    querySelector: {
                        writable: !0,
                        enumerable: !0,
                        configurable: !0,
                        value(e) {
                            return (function (e, t) {
                                const n = Un(e),
                                    l = en(Ce.call(n, t));
                                return rl(n, l);
                            })(this, e);
                        }
                    },
                    querySelectorAll: {
                        writable: !0,
                        enumerable: !0,
                        configurable: !0,
                        value(e) {
                            return Ln(
                                (function (e, t) {
                                    const n = Un(e),
                                        l = Ce.call(n, t);
                                    return ol(n, en(l));
                                })(this, e)
                            );
                        }
                    }
                },
                {
                    innerHTML: {
                        enumerable: !0,
                        configurable: !0,
                        get() {
                            const e = Cl(this);
                            let t = '';
                            for (let n = 0, l = e.length; n < l; n += 1)
                                t += Pn(e[n]);
                            return t;
                        },
                        set(e) {
                            const t = Un(this);
                            xe.call(t, e);
                        }
                    }
                },
                {
                    activeElement: {
                        enumerable: !0,
                        configurable: !0,
                        get() {
                            const e = Un(this),
                                t = Xt(e),
                                n = nt.call(t);
                            if (I(n)) return n;
                            if (0 == (ae.call(e, n) & z)) return null;
                            let l = n;
                            for (; !el(e, l); ) l = be.call(l);
                            return Zn(l) ? null : l;
                        }
                    },
                    delegatesFocus: {
                        configurable: !0,
                        get() {
                            return kn(this).delegatesFocus;
                        }
                    },
                    elementFromPoint: {
                        writable: !0,
                        enumerable: !0,
                        configurable: !0,
                        value(e, t) {
                            const n = Xt(Un(this)),
                                l = lt.call(n, e, t);
                            return I(l) ? l : nn(this, tn(l, !0));
                        }
                    },
                    elementsFromPoint: {
                        writable: !0,
                        enumerable: !0,
                        configurable: !0,
                        value(e, t) {
                            throw new Error();
                        }
                    },
                    getSelection: {
                        writable: !0,
                        enumerable: !0,
                        configurable: !0,
                        value() {
                            throw new Error();
                        }
                    },
                    host: {
                        enumerable: !0,
                        configurable: !0,
                        get() {
                            return Un(this);
                        }
                    },
                    mode: {
                        configurable: !0,
                        get() {
                            return kn(this).mode;
                        }
                    },
                    styleSheets: {
                        enumerable: !0,
                        configurable: !0,
                        get() {
                            throw new Error();
                        }
                    }
                }
            ),
                (Yn.prototype = o(DocumentFragment.prototype, zn));
            const cl = 'Symbol(x)' === Symbol('x').toString();
            function sl(e) {
                return e.$$OwnerKey$$;
            }
            function ul(e) {
                return e.$$OwnKey$$;
            }
            function hl(e) {
                let t,
                    n = e;
                for (; !I(n); ) {
                    if (((t = sl(n)), !A(t))) return t;
                    n = me.call(n);
                }
            }
            function fl(e) {
                return !A(sl(e));
            }
            function pl(e) {
                return Zn(e) || Vn(e);
            }
            function dl(e, t) {
                const n = Qn(e);
                if (t === n) return Kn(n);
                if (t instanceof Element) {
                    if (hl(e) === hl(t)) return t;
                    if (!I(n) && Zn(t)) {
                        const e = Qn(t);
                        if (!I(e) && el(n, e)) return e;
                    }
                }
                return null;
            }
            function ml() {
                return Cl(this).length > 0;
            }
            function gl() {
                return Cl(this)[0] || null;
            }
            function bl() {
                const e = Cl(this);
                return e[e.length - 1] || null;
            }
            function El() {
                return vn(this);
            }
            function yl() {
                const e = me.call(this);
                return I(e) ? e : dl(this, e);
            }
            function wl() {
                const e = me.call(this);
                if (I(e)) return null;
                const t = dl(this, e);
                return t instanceof Element ? t : null;
            }
            function vl(e) {
                return this.getRootNode() === e
                    ? 10
                    : sl(this) !== sl(e)
                    ? 35
                    : ae.call(this, e);
            }
            function Tl(e) {
                return (
                    null != e &&
                    sl(this) === sl(e) &&
                    0 != (ae.call(this, e) & z)
                );
            }
            function Nl(e) {
                const t = re.call(this, !1);
                if (!e) return t;
                const n = Cl(this);
                for (let e = 0, l = n.length; e < l; e += 1)
                    t.appendChild(n[e].cloneNode(!0));
                return t;
            }
            function Ll() {
                if (this instanceof Element && Vn(this)) {
                    const e = Qn(this),
                        t = I(e) ? [] : ol(e, al(this));
                    return (
                        P(cl) &&
                            !Ml &&
                            M.call(
                                t,
                                (function (e) {
                                    const t = Kn(e);
                                    let n = t.$$placeholder$$;
                                    if (!A(n)) return n;
                                    const l = Xt(e);
                                    return (
                                        (n = t.$$placeholder$$ = rt.call(
                                            l,
                                            ''
                                        )),
                                        r(n, {
                                            childNodes: {
                                                get: () => t.childNodes,
                                                enumerable: !0,
                                                configurable: !0
                                            },
                                            tagName: {
                                                get: () =>
                                                    `#shadow-root (${t.mode})`,
                                                enumerable: !0,
                                                configurable: !0
                                            }
                                        }),
                                        n
                                    );
                                })(this)
                            ),
                        Ln(t)
                    );
                }
                return ye.call(this);
            }
            const Sl = Node.prototype.getRootNode,
                Ol = A(Sl)
                    ? function () {
                          let e,
                              t = this;
                          for (; !I((e = me.call(t))); ) t = e;
                          return t;
                      }
                    : Sl;
            r(Node.prototype, {
                firstChild: {
                    get() {
                        return pl(this) ? gl.call(this) : fe.call(this);
                    },
                    enumerable: !0,
                    configurable: !0
                },
                lastChild: {
                    get() {
                        return pl(this) ? bl.call(this) : pe.call(this);
                    },
                    enumerable: !0,
                    configurable: !0
                },
                textContent: {
                    get() {
                        return Yt.ENABLE_NODE_PATCH
                            ? Zt(this)
                                ? de.call(this)
                                : El.call(this)
                            : fl(this) || Vn(this)
                            ? El.call(this)
                            : de.call(this);
                    },
                    set: function (e) {
                        Ee.call(this, e);
                    },
                    enumerable: !0,
                    configurable: !0
                },
                parentNode: {
                    get() {
                        return fl(this) ? yl.call(this) : me.call(this);
                    },
                    enumerable: !0,
                    configurable: !0
                },
                parentElement: {
                    get() {
                        return fl(this) ? wl.call(this) : be.call(this);
                    },
                    enumerable: !0,
                    configurable: !0
                },
                childNodes: {
                    get() {
                        return pl(this) ? Ll.call(this) : ye.call(this);
                    },
                    enumerable: !0,
                    configurable: !0
                },
                hasChildNodes: {
                    value() {
                        return pl(this) ? ml.call(this) : ue.call(this);
                    },
                    enumerable: !0,
                    writable: !0,
                    configurable: !0
                },
                compareDocumentPosition: {
                    value(e) {
                        return Zt(this) ? ae.call(this, e) : vl.call(this, e);
                    },
                    enumerable: !0,
                    writable: !0,
                    configurable: !0
                },
                contains: {
                    value(e) {
                        return (
                            this === e ||
                            (Yt.ENABLE_NODE_PATCH
                                ? Zt(this)
                                    ? he.call(this, e)
                                    : Tl.call(this, e)
                                : null != e &&
                                  (fl(this) || Vn(this)
                                      ? Tl.call(this, e)
                                      : he.call(this, e)))
                        );
                    },
                    enumerable: !0,
                    writable: !0,
                    configurable: !0
                },
                cloneNode: {
                    value(e) {
                        return Yt.ENABLE_NODE_PATCH
                            ? D(e)
                                ? Zt(this)
                                    ? re.call(this, e)
                                    : Nl.call(this, e)
                                : re.call(this, e)
                            : fl(this) || Vn(this)
                            ? Nl.call(this, e)
                            : re.call(this, e);
                    },
                    enumerable: !0,
                    writable: !0,
                    configurable: !0
                },
                getRootNode: {
                    value: function (e) {
                        return D(!A(e) && !!e.composed)
                            ? Ol.call(this, e)
                            : (function (e) {
                                  const t = Qn(e);
                                  return I(t) ? Ol.call(e) : Kn(t);
                              })(this);
                    },
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                },
                isConnected: {
                    enumerable: !0,
                    configurable: !0,
                    get() {
                        return we.call(this);
                    }
                }
            });
            let Ml = !1;
            const Cl = P(cl)
                ? function (e) {
                      let t;
                      Ml = !0;
                      let n = null;
                      try {
                          t = e.childNodes;
                      } catch (e) {
                          n = e;
                      } finally {
                          if (((Ml = !1), !I(n))) throw n;
                      }
                      return t;
                  }
                : function (e) {
                      return e.childNodes;
                  };
            function $l(e) {
                const t = Ze.call(e);
                return t instanceof Node && !A(hl(t));
            }
            function _l(e) {
                return (
                    B(e) || (!I(e) && 'object' == typeof e && B(e.handleEvent))
                );
            }
            function Hl(e) {
                if ('$$lwcEventWrapper$$' in e) return e.$$lwcEventWrapper$$;
                const t = B(e);
                return (e.$$lwcEventWrapper$$ = function (n) {
                    return (
                        $l(n) && hn(n),
                        t ? e.call(this, n) : e.handleEvent && e.handleEvent(n)
                    );
                });
            }
            h.call(HTMLElement.prototype, 'contains') &&
                a(
                    HTMLElement.prototype,
                    'contains',
                    c(Node.prototype, 'contains')
                ),
                h.call(HTMLElement.prototype, 'parentElement') &&
                    a(
                        HTMLElement.prototype,
                        'parentElement',
                        c(Node.prototype, 'parentElement')
                    ),
                (Document.prototype.elementFromPoint = function (e, t) {
                    const n = lt.call(this, e, t);
                    return I(n) ? n : nn(this, tn(n, !0));
                }),
                a(Document.prototype, 'activeElement', {
                    get() {
                        let e = nt.call(this);
                        if (I(e)) return e;
                        for (; !A(sl(e)); )
                            if (((e = be.call(e)), I(e))) return null;
                        return 'HTML' === e.tagName && (e = this.body), e;
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                a(Document.prototype, 'getElementById', {
                    value() {
                        const e = it.apply(this, S.call(arguments));
                        return I(e) ? null : A(sl(e)) || Zt(e) ? e : null;
                    },
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                }),
                a(Document.prototype, 'querySelector', {
                    value() {
                        const e = en(at.apply(this, S.call(arguments))),
                            t = E.call(e, (e) => A(sl(e)) || Zt(e));
                        return A(t) ? null : t;
                    },
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                }),
                a(Document.prototype, 'querySelectorAll', {
                    value() {
                        const e = en(at.apply(this, S.call(arguments)));
                        return Ln(b.call(e, (e) => A(sl(e)) || Zt(e)));
                    },
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                }),
                a(Document.prototype, 'getElementsByClassName', {
                    value() {
                        const e = en(ct.apply(this, S.call(arguments)));
                        return Mn(b.call(e, (e) => A(sl(e)) || Zt(e)));
                    },
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                }),
                a(Document.prototype, 'getElementsByTagName', {
                    value() {
                        const e = en(st.apply(this, S.call(arguments)));
                        return Mn(b.call(e, (e) => A(sl(e)) || Zt(e)));
                    },
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                }),
                a(Document.prototype, 'getElementsByTagNameNS', {
                    value() {
                        const e = en(ut.apply(this, S.call(arguments)));
                        return Mn(b.call(e, (e) => A(sl(e)) || Zt(e)));
                    },
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                }),
                a(
                    c(HTMLDocument.prototype, 'getElementsByName')
                        ? HTMLDocument.prototype
                        : Document.prototype,
                    'getElementsByName',
                    {
                        value() {
                            const e = en(ht.apply(this, S.call(arguments)));
                            return Ln(b.call(e, (e) => A(sl(e)) || Zt(e)));
                        },
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    }
                ),
                Object.defineProperty(window, 'ShadowRoot', {
                    value: Yn,
                    configurable: !0,
                    writable: !0
                }),
                (window.addEventListener = function (e, t, n) {
                    if (!_l(t)) return;
                    const l = Hl(t);
                    ft.call(this, e, l, n);
                }),
                (window.removeEventListener = function (e, t, n) {
                    if (!_l(t)) return;
                    const l = Hl(t);
                    pt.call(this, e, l || t, n);
                });
            const Rl =
                'undefined' != typeof EventTarget
                    ? EventTarget.prototype
                    : Node.prototype;
            r(Rl, {
                addEventListener: {
                    value: function (e, t, n) {
                        if (!_l(t)) return;
                        const l = Hl(t);
                        ve.call(this, e, l, n);
                    },
                    enumerable: !0,
                    writable: !0,
                    configurable: !0
                },
                removeEventListener: {
                    value: function (e, t, n) {
                        if (!_l(t)) return;
                        const l = Hl(t);
                        _e.call(this, e, l || t, n);
                    },
                    enumerable: !0,
                    writable: !0,
                    configurable: !0
                }
            });
            const Al = Object.getOwnPropertyDescriptor(
                Event.prototype,
                'composed'
            );
            const Il = Object.getOwnPropertyDescriptor(
                HTMLElement.prototype,
                'click'
            );
            function Dl(e) {
                Object.defineProperty(e, 'composed', {
                    configurable: !0,
                    enumerable: !0,
                    get: () => !0
                });
            }
            (function () {
                if (!Al) return !1;
                let e = new Event('click');
                const t = document.createElement('button');
                return (
                    t.addEventListener('click', (t) => (e = t)),
                    t.click(),
                    !Al.get.call(e)
                );
            })() &&
                (HTMLElement.prototype.click = function () {
                    ve.call(this, 'click', Dl);
                    try {
                        Il.value.call(this);
                    } finally {
                        _e.call(this, 'click', Dl);
                    }
                }),
                !0 !== new Event('test', { composed: !0 }).composed &&
                    (function () {
                        const e = l(o(null), {
                                beforeinput: 1,
                                blur: 1,
                                click: 1,
                                compositionend: 1,
                                compositionstart: 1,
                                compositionupdate: 1,
                                copy: 1,
                                cut: 1,
                                dblclick: 1,
                                DOMActivate: 1,
                                DOMFocusIn: 1,
                                DOMFocusOut: 1,
                                drag: 1,
                                dragend: 1,
                                dragenter: 1,
                                dragleave: 1,
                                dragover: 1,
                                dragstart: 1,
                                drop: 1,
                                focus: 1,
                                focusin: 1,
                                focusout: 1,
                                gotpointercapture: 1,
                                input: 1,
                                keydown: 1,
                                keypress: 1,
                                keyup: 1,
                                lostpointercapture: 1,
                                mousedown: 1,
                                mouseenter: 1,
                                mouseleave: 1,
                                mousemove: 1,
                                mouseout: 1,
                                mouseover: 1,
                                mouseup: 1,
                                paste: 1,
                                pointercancel: 1,
                                pointerdown: 1,
                                pointerenter: 1,
                                pointerleave: 1,
                                pointermove: 1,
                                pointerout: 1,
                                pointerover: 1,
                                pointerup: 1,
                                touchcancel: 1,
                                touchend: 1,
                                touchmove: 1,
                                touchstart: 1,
                                wheel: 1
                            }),
                            t = Event;
                        function n(e, n) {
                            const l = new t(e, n),
                                o = !(!n || !n.composed);
                            return (
                                Object.defineProperties(l, {
                                    composed: {
                                        get: () => o,
                                        configurable: !0,
                                        enumerable: !0
                                    }
                                }),
                                l
                            );
                        }
                        (n.prototype = t.prototype),
                            (n.AT_TARGET = t.AT_TARGET),
                            (n.BUBBLING_PHASE = t.BUBBLING_PHASE),
                            (n.CAPTURING_PHASE = t.CAPTURING_PHASE),
                            (n.NONE = t.NONE),
                            (window.Event = n),
                            Object.defineProperties(Event.prototype, {
                                composed: {
                                    get() {
                                        const { type: t } = this;
                                        return 1 === e[t];
                                    },
                                    configurable: !0,
                                    enumerable: !0
                                }
                            });
                    })();
            const Pl = CustomEvent;
            function Bl(e, t) {
                const n = new Pl(e, t),
                    l = !(!t || !t.composed);
                return (
                    Object.defineProperties(n, {
                        composed: {
                            get: () => l,
                            configurable: !0,
                            enumerable: !0
                        }
                    }),
                    n
                );
            }
            if (
                ((Bl.prototype = Pl.prototype),
                (window.CustomEvent = Bl),
                'undefined' != typeof ClipboardEvent)
            ) {
                const e = l(o(null), { copy: 1, cut: 1, paste: 1 });
                r(ClipboardEvent.prototype, {
                    composed: {
                        get() {
                            const { type: t } = this;
                            return 1 === e[t];
                        },
                        configurable: !0,
                        enumerable: !0
                    }
                });
            }
            'undefined' != typeof HTMLIFrameElement &&
                (function () {
                    const e = c(HTMLIFrameElement.prototype, 'contentWindow'),
                        { get: t } = e;
                    (e.get = function () {
                        const e = t.call(this);
                        return I(e) || A(sl(this))
                            ? e
                            : ((n = e),
                              {
                                  addEventListener() {
                                      return n.addEventListener.apply(
                                          n,
                                          arguments
                                      );
                                  },
                                  blur() {
                                      return n.blur.apply(n, arguments);
                                  },
                                  close() {
                                      return n.close.apply(n, arguments);
                                  },
                                  focus() {
                                      return n.focus.apply(n, arguments);
                                  },
                                  postMessage() {
                                      return n.postMessage.apply(n, arguments);
                                  },
                                  removeEventListener() {
                                      return n.removeEventListener.apply(
                                          n,
                                          arguments
                                      );
                                  },
                                  get closed() {
                                      return n.closed;
                                  },
                                  get frames() {
                                      return n.frames;
                                  },
                                  get length() {
                                      return n.length;
                                  },
                                  get location() {
                                      return n.location;
                                  },
                                  set location(e) {
                                      n.location = e;
                                  },
                                  get opener() {
                                      return n.opener;
                                  },
                                  get parent() {
                                      return n.parent;
                                  },
                                  get self() {
                                      return n.self;
                                  },
                                  get top() {
                                      return n.top;
                                  },
                                  get window() {
                                      return n.window;
                                  }
                              });
                        var n;
                    }),
                        a(HTMLIFrameElement.prototype, 'contentWindow', e);
                })();
            const xl = MutationObserver,
                { disconnect: kl, observe: Fl, takeRecords: Wl } = xl.prototype,
                jl = new WeakMap();
            function Ul(e) {
                return e.$$lwcNodeObservers$$;
            }
            function Kl(e) {
                const {
                        addedNodes: t,
                        removedNodes: n,
                        target: l,
                        type: a
                    } = e,
                    i = o(MutationRecord.prototype);
                return (
                    r(i, {
                        addedNodes: {
                            get: () => t,
                            enumerable: !0,
                            configurable: !0
                        },
                        removedNodes: {
                            get: () => n,
                            enumerable: !0,
                            configurable: !0
                        },
                        type: {
                            get: () => a,
                            enumerable: !0,
                            configurable: !0
                        },
                        target: {
                            get: () => l.shadowRoot,
                            enumerable: !0,
                            configurable: !0
                        }
                    }),
                    i
                );
            }
            function Vl(e, t) {
                let n = t;
                for (; !I(n); ) {
                    const t = Ul(n);
                    if (!A(t) && (t[0] === e || -1 !== y.call(t, e))) return !0;
                    n = n.parentNode;
                }
                return !1;
            }
            function ql(e, t) {
                return N.call(
                    e,
                    (e, n) => {
                        const {
                            target: l,
                            addedNodes: o,
                            removedNodes: r,
                            type: a
                        } = n;
                        if ('childList' !== a || A(ul(l)))
                            Vl(t, l) && T.call(e, n);
                        else if (o.length > 0) {
                            const r = o[0];
                            if (Vl(t, r)) {
                                const o = Ul(l);
                                !o || (o[0] !== t && -1 === y.call(o, t))
                                    ? T.call(e, Kl(n))
                                    : T.call(e, n);
                            }
                        } else {
                            const o = l.shadowRoot,
                                a = r[0];
                            if (hl(l) === hl(a) && Vl(t, l)) T.call(e, n);
                            else if (o) {
                                const l = Ul(o);
                                !l ||
                                    (l[0] !== t && -1 === y.call(l, t)) ||
                                    T.call(e, Kl(n));
                            }
                        }
                        return e;
                    },
                    []
                );
            }
            function Gl(e) {
                const t = (function (e) {
                    let t = e.$$lwcObserverCallbackWrapper$$;
                    return (
                        A(t) &&
                            (t = e.$$lwcObserverCallbackWrapper$$ = (t, n) => {
                                const l = ql(t, n);
                                0 !== l.length && e.call(n, l, n);
                            }),
                        t
                    );
                })(e);
                return new xl(t);
            }
            let zl;
            (Gl.prototype = xl.prototype),
                (Gl.prototype.disconnect = function () {
                    kl.call(this);
                    const e = jl.get(this);
                    A(e) ||
                        (C.call(e, (e) => {
                            const t = e.$$lwcNodeObservers$$;
                            if (!A(t)) {
                                const e = y.call(t, this);
                                -1 !== e && O.call(t, e, 1);
                            }
                        }),
                        (e.length = 0));
                }),
                (Gl.prototype.observe = function (e, t) {
                    let n = Ul(e);
                    var l;
                    if (
                        (A(n) &&
                            ((n = []), (l = n), (e.$$lwcNodeObservers$$ = l)),
                        -1 === y.call(n, this) && T.call(n, this),
                        e instanceof Yn && (e = e.host),
                        jl.has(this))
                    ) {
                        const t = jl.get(this);
                        -1 === y.call(t, e) && T.call(t, e);
                    } else jl.set(this, [e]);
                    return Fl.call(this, e, t);
                }),
                (Gl.prototype.takeRecords = function () {
                    return ql(Wl.call(this), this);
                }),
                a(window, 'MutationObserver', {
                    value: Gl,
                    configurable: !0,
                    writable: !0
                });
            const Yl = { childList: !0 },
                Xl = K('slotchange', 'synthetic-shadow');
            function Jl(e) {
                const t = en(ye.call(e));
                return N.call(
                    t,
                    (e, t) => (
                        t instanceof Element && Zn(t)
                            ? T.apply(e, Jl(t))
                            : T.call(e, t),
                        e
                    ),
                    []
                );
            }
            function Ql() {
                const e = me.call(this);
                return I(e) || !Zn(e) || hl(e) === hl(this) ? null : e;
            }
            function Zl(e, t) {
                let n;
                const l = sl(e);
                if (A(l))
                    n =
                        e instanceof HTMLBodyElement
                            ? b.call(t, (t) => A(sl(t)) || Zt(e))
                            : S.call(t);
                else if (Vn(e)) {
                    const l = Qn(e);
                    n = I(l) ? [] : ul(e) ? nl(e, t) : ol(l, t);
                } else n = b.call(t, (e) => hl(e) === l);
                return n;
            }
            var eo;
            function to() {
                const e = Cl(this);
                let t = '';
                for (let n = 0, l = e.length; n < l; n += 1) t += Pn(e[n]);
                return t;
            }
            function no() {
                return Pn(this);
            }
            function lo() {
                const e = Qn(this),
                    t = I(e) ? [] : ol(e, al(this));
                return Mn(b.call(t, (e) => e instanceof Element));
            }
            function oo() {
                return this.children.length;
            }
            function ro() {
                return this.children[0] || null;
            }
            function ao() {
                const { children: e } = this;
                return e.item(e.length - 1) || null;
            }
            function io(e, t, n) {
                let l;
                if (Vn(e)) {
                    const n = Qn(e);
                    l = I(n) ? [] : ul(e) ? nl(e, t) : ol(n, t);
                } else if (fl(e)) {
                    const o = sl(e);
                    if (A(o))
                        if (n === eo.Enabled) {
                            const n = hl(e);
                            l = b.call(t, (e) => hl(e) === n);
                        } else l = S.call(t);
                    else l = b.call(t, (e) => hl(e) === o);
                } else
                    l =
                        e instanceof HTMLBodyElement || n === eo.Enabled
                            ? b.call(t, (t) => A(sl(t)) || Zt(e))
                            : S.call(t);
                return l;
            }
            r(HTMLSlotElement.prototype, {
                addEventListener: {
                    value(e, t, l) {
                        HTMLElement.prototype.addEventListener.call(
                            this,
                            e,
                            t,
                            l
                        ),
                            'slotchange' !== e ||
                                G(this, Xl) ||
                                (q(this, Xl, !0),
                                zl ||
                                    (zl = new dt((e) => {
                                        const t = [];
                                        C.call(e, (e) => {
                                            n.invariant(
                                                'childList' === e.type,
                                                `Invalid mutation type: ${e.type}. This mutation handler for slots should only handle "childList" mutations.`
                                            );
                                            const { target: l } = e;
                                            -1 === y.call(t, l) &&
                                                (T.call(t, l),
                                                Qe.call(
                                                    l,
                                                    new CustomEvent(
                                                        'slotchange'
                                                    )
                                                ));
                                        });
                                    })),
                                mt.call(zl, this, Yl));
                    },
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                },
                assignedElements: {
                    value(e) {
                        if (fl(this)) {
                            const t =
                                !A(e) && D(e.flatten) ? Jl(this) : il(this);
                            return b.call(t, (e) => e instanceof Element);
                        }
                        return Je.apply(this, S.call(arguments));
                    },
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                },
                assignedNodes: {
                    value(e) {
                        if (fl(this)) {
                            return !A(e) && D(e.flatten) ? Jl(this) : il(this);
                        }
                        return Xe.apply(this, S.call(arguments));
                    },
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                },
                name: {
                    get() {
                        const e = Te.call(this, 'name');
                        return I(e) ? '' : e;
                    },
                    set(e) {
                        He.call(this, 'name', e);
                    },
                    enumerable: !0,
                    configurable: !0
                },
                childNodes: {
                    get() {
                        if (fl(this)) {
                            const e = Qn(this);
                            return Ln(I(e) ? [] : ol(e, al(this)));
                        }
                        return ye.call(this);
                    },
                    enumerable: !0,
                    configurable: !0
                }
            }),
                r(Text.prototype, {
                    assignedSlot: { get: Ql, enumerable: !0, configurable: !0 }
                }),
                (function (e) {
                    (e[(e.Disabled = 0)] = 'Disabled'),
                        (e[(e.Enabled = 1)] = 'Enabled');
                })(eo || (eo = {})),
                r(Element.prototype, {
                    innerHTML: {
                        get() {
                            return Yt.ENABLE_ELEMENT_PATCH
                                ? Zt(this)
                                    ? Be.call(this)
                                    : to.call(this)
                                : fl(this) || Vn(this)
                                ? to.call(this)
                                : Be.call(this);
                        },
                        set(e) {
                            xe.call(this, e);
                        },
                        enumerable: !0,
                        configurable: !0
                    },
                    outerHTML: {
                        get() {
                            return Yt.ENABLE_ELEMENT_PATCH
                                ? Zt(this)
                                    ? Fe.call(this)
                                    : no.call(this)
                                : fl(this) || Vn(this)
                                ? no.call(this)
                                : Fe.call(this);
                        },
                        set(e) {
                            We.call(this, e);
                        },
                        enumerable: !0,
                        configurable: !0
                    },
                    attachShadow: {
                        value: function (e) {
                            return D(e['$$lwc-synthetic-mode$$'])
                                ? Gn(this, e)
                                : Re.call(this, e);
                        },
                        enumerable: !0,
                        writable: !0,
                        configurable: !0
                    },
                    shadowRoot: {
                        get: function () {
                            if (Vn(this)) {
                                const e = Kn(this);
                                if ('open' === e.mode) return e;
                            }
                            return Ye.call(this);
                        },
                        enumerable: !0,
                        configurable: !0
                    },
                    children: {
                        get() {
                            return pl(this) ? lo.call(this) : Ge.call(this);
                        },
                        enumerable: !0,
                        configurable: !0
                    },
                    childElementCount: {
                        get() {
                            return pl(this) ? oo.call(this) : Ae.call(this);
                        },
                        enumerable: !0,
                        configurable: !0
                    },
                    firstElementChild: {
                        get() {
                            return pl(this) ? ro.call(this) : Ie.call(this);
                        },
                        enumerable: !0,
                        configurable: !0
                    },
                    lastElementChild: {
                        get() {
                            return pl(this) ? ao.call(this) : De.call(this);
                        },
                        enumerable: !0,
                        configurable: !0
                    },
                    assignedSlot: { get: Ql, enumerable: !0, configurable: !0 }
                }),
                h.call(HTMLElement.prototype, 'innerHTML') &&
                    a(
                        HTMLElement.prototype,
                        'innerHTML',
                        c(Element.prototype, 'innerHTML')
                    ),
                h.call(HTMLElement.prototype, 'outerHTML') &&
                    a(
                        HTMLElement.prototype,
                        'outerHTML',
                        c(Element.prototype, 'outerHTML')
                    ),
                h.call(HTMLElement.prototype, 'children') &&
                    a(
                        HTMLElement.prototype,
                        'children',
                        c(Element.prototype, 'children')
                    ),
                r(Element.prototype, {
                    querySelector: {
                        value: function () {
                            const e = en(Ce.apply(this, S.call(arguments)));
                            if (Vn(this)) {
                                const t = Qn(this);
                                return I(t)
                                    ? null
                                    : ul(this)
                                    ? ll(this, e)
                                    : rl(t, e);
                            }
                            if (fl(this)) {
                                const t = sl(this);
                                if (A(t)) {
                                    if (!Yt.ENABLE_NODE_LIST_PATCH)
                                        return 0 === e.length ? null : e[0];
                                    const t = hl(this),
                                        n = E.call(e, (e) => hl(e) === t);
                                    return A(n) ? null : n;
                                }
                                {
                                    const n = E.call(e, (e) => hl(e) === t);
                                    return A(n) ? null : n;
                                }
                            }
                            {
                                if (
                                    !(
                                        Yt.ENABLE_NODE_LIST_PATCH ||
                                        this instanceof HTMLBodyElement
                                    )
                                ) {
                                    const t = e[0];
                                    return A(t) ? null : t;
                                }
                                const t = E.call(
                                    e,
                                    (e) => A(sl(e)) || Zt(this)
                                );
                                return A(t) ? null : t;
                            }
                        },
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    },
                    querySelectorAll: {
                        value() {
                            const e = en(Ce.apply(this, S.call(arguments)));
                            if (!Yt.ENABLE_NODE_LIST_PATCH) {
                                return Ln(io(this, e, eo.Disabled));
                            }
                            return Ln(io(this, e, eo.Enabled));
                        },
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    }
                }),
                r(Element.prototype, {
                    getElementsByClassName: {
                        value() {
                            const e = en(ze.apply(this, S.call(arguments)));
                            if (!Yt.ENABLE_HTML_COLLECTIONS_PATCH)
                                return Mn(Zl(this, e));
                            return Mn(io(this, e, eo.Enabled));
                        },
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    },
                    getElementsByTagName: {
                        value() {
                            const e = en(Le.apply(this, S.call(arguments)));
                            if (!Yt.ENABLE_HTML_COLLECTIONS_PATCH)
                                return Mn(Zl(this, e));
                            return Mn(io(this, e, eo.Enabled));
                        },
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    },
                    getElementsByTagNameNS: {
                        value() {
                            const e = en(Se.apply(this, S.call(arguments)));
                            if (!Yt.ENABLE_HTML_COLLECTIONS_PATCH)
                                return Mn(Zl(this, e));
                            return Mn(io(this, e, eo.Enabled));
                        },
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    }
                }),
                h.call(HTMLElement.prototype, 'getElementsByClassName') &&
                    a(
                        HTMLElement.prototype,
                        'getElementsByClassName',
                        c(Element.prototype, 'getElementsByClassName')
                    );
            const co =
                    '\n    [contenteditable],\n    [tabindex],\n    a[href],\n    area[href],\n    audio[controls],\n    button,\n    iframe,\n    input,\n    select,\n    textarea,\n    video[controls]\n',
                so = new Set(['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA']);
            function uo(e) {
                return e.filter((e) =>
                    Oe.call(e, 'tabindex')
                        ? '0' === Te.call(e, 'tabindex')
                        : !so.has(je.call(e)) || !Oe.call(e, 'disabled')
                );
            }
            const ho = K('DidAddMouseDownListener', 'synthetic-shadow');
            function fo(e) {
                return (
                    (!Vn(e) || !jn(e)) &&
                    qe.call(e, co) &&
                    (function (e) {
                        const { width: t, height: n } = Ne.call(e),
                            l = t > 0 || n > 0,
                            o = 'AREA' === e.tagName;
                        return (
                            (l || o) &&
                            'hidden' !== getComputedStyle(e).visibility
                        );
                    })(e)
                );
            }
            function po() {
                const e = this.getRootNode();
                if (e === this) {
                    const e = Me.call(this, co);
                    return void (I(e) || e.focus.apply(e, arguments));
                }
                const t = e;
                if (t.activeElement === this) return;
                const n = en(Ce.call(this, co));
                let l = !1;
                for (; !l && 0 !== n.length; ) {
                    const e = n.shift();
                    e.focus.apply(e, arguments);
                    l = e.getRootNode().activeElement === e;
                }
            }
            function mo(e) {
                const t = Xt(e),
                    l = uo(en(at.call(t, co))),
                    o = uo(en(Ce.call(e, co)));
                n.invariant(
                    '-1' === Te.call(e, 'tabindex') || jn(e),
                    'The focusin event is only relevant when the tabIndex property is -1 on the host.'
                );
                const r = o[0],
                    a = o[o.length - 1],
                    i = y.call(l, e),
                    c = i > -1 ? i : y.call(l, r),
                    s = 0 === o.length ? c + 1 : y.call(l, a) + 1;
                return { prev: S.call(l, 0, c), inner: o, next: S.call(l, s) };
            }
            function go(e, t) {
                const n = ae.call(e, t);
                return n & z ? 0 : n & X ? 1 : n & J ? 2 : -1;
            }
            function bo(e) {
                e.preventDefault(), e.stopPropagation();
            }
            function Eo(e, t) {
                ft.call(e, 'focusin', bo, !0),
                    ft.call(e, 'focusout', bo, !0),
                    t(),
                    pt.call(e, 'focusin', bo, !0),
                    pt.call(e, 'focusout', bo, !0);
            }
            function yo(e, t, n) {
                const l = Jt(n),
                    o = (function (e, t) {
                        const n = e.length;
                        if (n > 0)
                            for (let l = 0; l < n; l += 1) {
                                const n = e[l];
                                if (So(t.getRootNode(), n)) return n;
                            }
                        return null;
                    })(e, n);
                I(o)
                    ? Eo(l, () => {
                          t.blur();
                      })
                    : Eo(l, () => {
                          o.focus();
                      });
            }
            let wo = !1;
            function vo() {
                wo = !0;
            }
            function To() {
                wo = !1;
            }
            function No(e) {
                if (wo) return void To();
                const t = et.call(e),
                    n = Ze.call(e);
                if (t !== n) return;
                const l = tt.call(e);
                if (I(l)) return;
                const o = mo(t);
                if (1 === go(t, l)) {
                    const e = So.bind(null, t.getRootNode()),
                        r = E.call(o.inner, e);
                    if (A(r)) yo(o.next, n, l);
                    else {
                        Eo(Jt(r), () => {
                            r.focus();
                        });
                    }
                } else t === n && yo(L.call(o.prev), n, l);
            }
            function Lo(e) {
                if (wo) return void To();
                const t = tt.call(e);
                if (I(t)) return;
                const n = et.call(e),
                    l = mo(n);
                if (-1 !== y.call(l.inner, t)) return;
                const o = Ze.call(e),
                    r = go(n, t);
                1 === r && yo(l.next, o, t),
                    2 === r && yo(L.call(l.prev), o, t);
            }
            function So(e, t) {
                if (!fo(t)) return !1;
                const n = Xt(t);
                let l = t.getRootNode();
                for (; l !== n && l !== e; ) {
                    const e = l.host;
                    if ('-1' === Te.call(e, 'tabindex')) return !1;
                    l = e && e.getRootNode();
                }
                return !0;
            }
            function Oo(e) {
                _e.call(e, 'focusin', No, !0);
            }
            function Mo(e) {
                const t = Xt(e);
                G(t, ho) ||
                    (q(t, ho, !0),
                    ve.call(t, 'mousedown', vo, !0),
                    ve.call(
                        t,
                        'mouseup',
                        () => {
                            setTimeout(To);
                        },
                        !0
                    ));
            }
            function Co(e) {
                _e.call(e, 'focusin', Lo, !0);
            }
            const { blur: $o, focus: _o } = HTMLElement.prototype;
            function Ho() {
                return jn(this) && P(Oe.call(this, 'tabindex'))
                    ? 0
                    : Ke.call(this);
            }
            function Ro(e) {
                const t = jn(this),
                    l = Ke.call(this),
                    o = Oe.call(this, 'tabindex');
                Ve.call(this, e);
                const r = Ke.call(this),
                    a = Oe.call(this, 'tabindex'),
                    i = l !== r;
                var c;
                (o &&
                    (i || P(a)) &&
                    (-1 === l && Co(this), 0 === l && t && Oo(this)),
                P(a)) ||
                    (o && a && P(i)) ||
                    (-1 === r &&
                        ((c = this),
                        n.invariant(
                            -1 === Ke.call(c),
                            `Invalid attempt to handle focus in  ${k(c)}. ${k(
                                c
                            )} should have tabIndex -1, but has tabIndex ${Ke.call(
                                c
                            )}`
                        ),
                        Mo(c),
                        Oo(c),
                        ve.call(c, 'focusin', Lo, !0)),
                    0 === r &&
                        t &&
                        (function (e) {
                            n.invariant(
                                jn(e),
                                `Invalid attempt to handle focus event for ${k(
                                    e
                                )}. ${k(
                                    e
                                )} should have delegates focus true, but is not delegating focus`
                            ),
                                Mo(e),
                                Co(e),
                                ve.call(e, 'focusin', No, !0);
                        })(this));
            }
            function Ao() {
                if (jn(this)) {
                    const e = (function (e) {
                        const t = Xt(e),
                            n = nt.call(t);
                        return I(n) || 0 != (ae.call(e, n) & z) ? n : null;
                    })(this);
                    if (!I(e)) return void e.blur();
                }
                return $o.call(this);
            }
            function Io() {
                vo(),
                    Vn(this) && jn(this)
                        ? po.call(this)
                        : (_o.apply(this, arguments), To());
            }
            r(HTMLElement.prototype, {
                tabIndex: {
                    get() {
                        return Vn(this) ? Ho.call(this) : Ke.call(this);
                    },
                    set(e) {
                        return Vn(this) ? Ro.call(this, e) : Ve.call(this, e);
                    },
                    enumerable: !0,
                    configurable: !0
                },
                blur: {
                    value() {
                        if (Vn(this)) return Ao.call(this);
                        $o.call(this);
                    },
                    enumerable: !0,
                    writable: !0,
                    configurable: !0
                },
                focus: {
                    value() {
                        Io.apply(this, arguments);
                    },
                    enumerable: !0,
                    writable: !0,
                    configurable: !0
                }
            });
            const {
                addEventListener: Do,
                removeEventListener: Po
            } = Node.prototype;
            function Bo(e, t, n) {
                Vn(this)
                    ? (function (e, t, n, l) {
                          if (!B(n))
                              throw new TypeError(
                                  `Invalid second argument for Element.addEventListener() in ${k(
                                      e
                                  )} for event "${t}". Expected an EventListener but received ${n}.`
                              );
                          yn(e, t, bn(e, n));
                      })(this, e, t)
                    : Do.call(this, e, t, n);
            }
            function xo(e, t, n) {
                Vn(this)
                    ? (function (e, t, n, l) {
                          wn(e, t, bn(e, n));
                      })(this, e, t)
                    : Po.call(this, e, t, n);
            }
            'undefined' != typeof EventTarget
                ? r(EventTarget.prototype, {
                      addEventListener: {
                          value: Bo,
                          enumerable: !0,
                          writable: !0,
                          configurable: !0
                      },
                      removeEventListener: {
                          value: xo,
                          enumerable: !0,
                          writable: !0,
                          configurable: !0
                      }
                  })
                : r(Node.prototype, {
                      addEventListener: {
                          value: Bo,
                          enumerable: !0,
                          writable: !0,
                          configurable: !0
                      },
                      removeEventListener: {
                          value: xo,
                          enumerable: !0,
                          writable: !0,
                          configurable: !0
                      }
                  });
            a(Element.prototype, '$shadowToken$', {
                set(e) {
                    const t = this.$$ShadowTokenKey$$;
                    A(t) || t === e || $e.call(this, t),
                        A(e) || He.call(this, e, ''),
                        (this.$$ShadowTokenKey$$ = e);
                },
                get() {
                    return this.$$ShadowTokenKey$$;
                },
                configurable: !0
            });
            const ko = function () {};
            let Fo;
            const Wo = { childList: !0 };
            function jo(e, t, n) {
                const l = Fn(e);
                if (l !== t && (Wn(e, t), e instanceof Element)) {
                    if (
                        ((function (e, t) {
                            e.$shadowToken$ = t;
                        })(e, n),
                        Vn(e))
                    )
                        return;
                    A(l) && mt.call(Fo, e, Wo);
                    const o = ye.call(e);
                    for (let e = 0, l = o.length; e < l; e += 1) jo(o[e], t, n);
                }
            }
            function Uo(e) {
                if (
                    (A(Fo) &&
                        (Fo = new dt((e) => {
                            C.call(e, (e) => {
                                const {
                                        target: t,
                                        addedNodes: n,
                                        removedNodes: l
                                    } = e,
                                    o = Fn(t),
                                    r = t.$shadowToken$;
                                for (let e = 0, n = l.length; e < n; e += 1) {
                                    const n = l[e];
                                    ae.call(t, n) &
                                        Node.DOCUMENT_POSITION_CONTAINED_BY ||
                                        jo(n, ko, void 0);
                                }
                                for (let e = 0, l = n.length; e < l; e += 1) {
                                    const l = n[e];
                                    ae.call(t, l) &
                                        Node.DOCUMENT_POSITION_CONTAINED_BY &&
                                        jo(l, o, r);
                                }
                            });
                        })),
                    A(Fn(e)))
                )
                    throw new Error('Invalid Element');
                mt.call(Fo, e, Wo);
            }
            a(Element.prototype, '$domManual$', {
                set(e) {
                    (this.$$DomManualKey$$ = e), D(e) && Uo(this);
                },
                get() {
                    return this.$$DomManualKey$$;
                },
                configurable: !0
            });
        },
        function (e, t) {
            var n;
            n = (function () {
                return this;
            })();
            try {
                n = n || new Function('return this')();
            } catch (e) {
                'object' == typeof window && (n = window);
            }
            e.exports = n;
        }
    ]
]);
