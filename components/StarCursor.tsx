import React, { useEffect, useRef } from 'react';

const StarCursor: React.FC = () => {
    const colour: string = "random"; // "random" can be replaced with any valid colour ie: "red"...
    const sparkles: number = 100; // increase or decrease for number of sparkles falling

    const n = 10;
    const tiny = useRef<HTMLElement[]>([]);
    const star = useRef<HTMLElement[]>([]);
    const starv = useRef<number[]>([]);
    const starx = useRef<number[]>([]);
    const stary = useRef<number[]>([]);
    const tinyx = useRef<number[]>([]);
    const tinyy = useRef<number[]>([]);
    const tinyv = useRef<number[]>([]);

    const x = useRef<number>(400);
    const y = useRef<number>(300);
    const ox = useRef<number>(400);
    const oy = useRef<number>(300);
    const swide = useRef<number>(typeof window !== 'undefined' ? window.innerWidth : 0);
    const shigh = useRef<number>(typeof window !== 'undefined' ? window.innerHeight : 0);
    const sleft = useRef<number>(0);
    const sdown = useRef<number>(0);

    useEffect(() => {
        const colours: string[] = ['#ff0000', '#00ff00', '#ffffff', '#ff00ff', '#ffa500', '#ffff00', '#00ff00', '#ffffff', 'ff00ff'];

        const handleMouseMove = (evnt: MouseEvent) => {
            y.current = evnt.pageY + 4 - window.scrollY;
            x.current = evnt.pageX + 1;
        };

        const setScroll = () => {
            sdown.current = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
            sleft.current = window.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
        };

        const setWidth = () => {
            swide.current = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            shigh.current = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        };

        const animate = () => {
            const o = window.scrollY;
            for (let i = 0; i < n; i++) {
                const temp1 = document.getElementById(`dots${i}`) as HTMLElement;
                const randcolours = colours[Math.floor(Math.random() * colours.length)];
                temp1.style.backgroundColor = randcolours;

                if (i < n - 1) {
                    const temp2 = document.getElementById(`dots${i + 1}`) as HTMLElement;
                    temp1.style.top = parseInt(temp2.style.top!) + 'px';
                    temp1.style.left = parseInt(temp2.style.left!) + 'px';
                } else {
                    temp1.style.top = y.current + o + 'px';
                    temp1.style.left = x.current + 'px';
                }
            }
            setTimeout(animate, 10);
        };

        const sparkle = () => {
            if (Math.abs(x.current - ox.current) > 1 || Math.abs(y.current - oy.current) > 1) {
                ox.current = x.current;
                oy.current = y.current;
                for (let c = 0; c < sparkles; c++) {
                    if (!starv.current[c]) {
                        star.current[c].style.left = (starx.current[c] = x.current) + "px";
                        star.current[c].style.top = (stary.current[c] = y.current + 1) + "px";
                        star.current[c].style.clip = "rect(0px, 5px, 5px, 0px)";
                        (star.current[c].childNodes[0] as HTMLElement).style.backgroundColor = (star.current[c].childNodes[1] as HTMLElement).style.backgroundColor = (colour === "random") ? newColour() : colour;
                        star.current[c].style.visibility = "visible";
                        starv.current[c] = 50;
                        break;
                    }
                }
            }
            for (let c = 0; c < sparkles; c++) {
                if (starv.current[c]) updateStar(c);
                if (tinyv.current[c]) updateTiny(c);
            }
            setTimeout(sparkle, 40);
        };

        const updateStar = (i: number) => {
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
                tiny.current[i].style.backgroundColor = (star.current[i].childNodes[0] as HTMLElement).style.backgroundColor;
                star.current[i].style.visibility = "hidden";
                tiny.current[i].style.visibility = "visible";
            }
        };

        const updateTiny = (i: number) => {
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

        const createDiv = (height: number, width: number): HTMLElement => {
            const div = document.createElement("div");
            div.style.position = "absolute";
            div.style.height = `${height}px`;
            div.style.width = `${width}px`;
            div.style.overflow = "hidden";
            return div;
        };

        const newColour = (): string => {
            const c: number[] = [255, Math.floor(Math.random() * 256), Math.floor(Math.random() * (256 - Math.floor(Math.random() * 256) / 2))];
            c.sort(() => (0.5 - Math.random()));
            return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
        };

        if (typeof window !== 'undefined') {
            for (let i = 0; i < sparkles; i++) {
                const rats1 = createDiv(3, 3);
                rats1.style.visibility = "hidden";
                rats1.style.zIndex = "999";
                document.body.appendChild(tiny.current[i] = rats1);
                starv.current[i] = 0;
                tinyv.current[i] = 0;

                const rats2 = createDiv(5, 5);
                rats2.style.backgroundColor = "transparent";
                rats2.style.visibility = "hidden";
                rats2.style.zIndex = "999";
                const rlef = createDiv(1, 5);
                const rdow = createDiv(5, 1);
                rats2.appendChild(rlef);
                rats2.appendChild(rdow);
                rlef.style.top = "2px";
                rlef.style.left = "0px";
                rdow.style.top = "0px";
                rdow.style.left = "2px";
                document.body.appendChild(star.current[i] = rats2);
            }

            setWidth();
            sparkle();

            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('scroll', setScroll);
            window.addEventListener('resize', setWidth);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('scroll', setScroll);
                window.removeEventListener('resize', setWidth);
            };
        }
    }, []);

    return null;
};

export default StarCursor;
