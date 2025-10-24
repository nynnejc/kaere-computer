module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[externals]/react [external] (react, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react", () => require("react"));

module.exports = mod;
}),
"[project]/components/StarCursor.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
const StarCursor = ()=>{
    const colour = "random"; // "random" can be replaced with any valid colour ie: "red"...
    const sparkles = 300; // increase or decrease for number of sparkles falling
    const n = 10;
    const tiny = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])([]);
    const star = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])([]);
    const starv = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])([]);
    const starx = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])([]);
    const stary = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])([]);
    const tinyx = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])([]);
    const tinyy = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])([]);
    const tinyv = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])([]);
    const x = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(400);
    const y = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(300);
    const ox = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(400);
    const oy = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(300);
    const swide = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 0);
    const shigh = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 0);
    const sleft = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(0);
    const sdown = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const colours = [
            '#ff0000',
            '#00ff00',
            '#ffffff',
            '#ff00ff',
            '#ffa500',
            '#ffff00',
            '#00ff00',
            '#ffffff',
            'ff00ff'
        ];
        const handleMouseMove = (evnt)=>{
            y.current = evnt.clientY + 4; // Use clientY instead of pageY
            x.current = evnt.clientX + 1;
        };
        const setScroll = ()=>{
            sdown.current = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
            sleft.current = window.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
        };
        const setWidth = ()=>{
            swide.current = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            shigh.current = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        };
        const animate = ()=>{
            for(let i = 0; i < n; i++){
                const temp1 = document.getElementById(`dots${i}`);
                const randcolours = colours[Math.floor(Math.random() * colours.length)];
                temp1.style.backgroundColor = randcolours;
                if (i < n - 1) {
                    const temp2 = document.getElementById(`dots${i + 1}`);
                    temp1.style.top = parseInt(temp2.style.top) + 'px';
                    temp1.style.left = parseInt(temp2.style.left) + 'px';
                } else {
                    temp1.style.top = y.current + sdown.current + 'px';
                    temp1.style.left = x.current + 'px';
                }
            }
            setTimeout(animate, 10);
        };
        const sparkle = ()=>{
            if (Math.abs(x.current - ox.current) > 1 || Math.abs(y.current - oy.current) > 1) {
                ox.current = x.current;
                oy.current = y.current;
                for(let c = 0; c < sparkles; c++){
                    if (!starv.current[c]) {
                        star.current[c].style.left = (starx.current[c] = x.current) + "px";
                        star.current[c].style.top = (stary.current[c] = y.current + 1 + sdown.current) + "px";
                        star.current[c].style.clip = "rect(0px, 5px, 5px, 0px)";
                        star.current[c].childNodes[0].style.backgroundColor = star.current[c].childNodes[1].style.backgroundColor = ("TURBOPACK compile-time truthy", 1) ? newColour() : "TURBOPACK unreachable";
                        star.current[c].style.visibility = "visible";
                        starv.current[c] = 50;
                        break;
                    }
                }
            }
            for(let c = 0; c < sparkles; c++){
                if (starv.current[c]) updateStar(c);
                if (tinyv.current[c]) updateTiny(c);
            }
            setTimeout(sparkle, 40);
        };
        const updateStar = (i)=>{
            if (--starv.current[i] === 25) star.current[i].style.clip = "rect(1px, 4px, 4px, 1px)";
            if (starv.current[i]) {
                stary.current[i] += 1 + Math.random() * 3;
                starx.current[i] += (i % 5 - 2) / 5;
                if (stary.current[i] < shigh.current + sdown.current) {
                    star.current[i].style.top = stary.current[i] + "px";
                    star.current[i].style.left = starx.current[i] + "px";
                } else {
                    star.current[i].style.visibility = "hidden";
                    starv.current[i] = 0;
                    return;
                }
            } else {
                tinyv.current[i] = 50;
                tiny.current[i].style.top = (tinyy.current[i] = stary.current[i]) + "px";
                tiny.current[i].style.left = (tinyx.current[i] = starx.current[i]) + "px";
                tiny.current[i].style.width = "2px";
                tiny.current[i].style.height = "2px";
                tiny.current[i].style.backgroundColor = star.current[i].childNodes[0].style.backgroundColor;
                star.current[i].style.visibility = "hidden";
                tiny.current[i].style.visibility = "visible";
            }
        };
        const updateTiny = (i)=>{
            if (--tinyv.current[i] === 25) {
                tiny.current[i].style.width = "1px";
                tiny.current[i].style.height = "1px";
            }
            if (tinyv.current[i]) {
                tinyy.current[i] += 1 + Math.random() * 3;
                tinyx.current[i] += (i % 5 - 2) / 5;
                if (tinyy.current[i] < shigh.current + sdown.current) {
                    tiny.current[i].style.top = tinyy.current[i] + "px";
                    tiny.current[i].style.left = tinyx.current[i] + "px";
                } else {
                    tiny.current[i].style.visibility = "hidden";
                    tinyv.current[i] = 0;
                    return;
                }
            } else {
                tiny.current[i].style.visibility = "hidden";
            }
        };
        const createDiv = (height, width)=>{
            const div = document.createElement("div");
            div.style.position = "absolute";
            div.style.height = `${height}px`;
            div.style.width = `${width}px`;
            div.style.overflow = "hidden";
            return div;
        };
        const newColour = ()=>{
            const c = [
                255,
                Math.floor(Math.random() * 256),
                Math.floor(Math.random() * (256 - Math.floor(Math.random() * 256) / 2))
            ];
            c.sort(()=>0.5 - Math.random());
            return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
        };
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    return null;
};
const __TURBOPACK__default__export__ = StarCursor;
}),
"[project]/pages/_app.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StarCursor$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/StarCursor.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
;
;
const MyApp = ({ Component, pageProps })=>{
    const effect = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{}, []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        effect();
    }, [
        effect
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StarCursor$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/_app.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
                ...pageProps
            }, void 0, false, {
                fileName: "[project]/pages/_app.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = MyApp;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__047a9e31._.js.map