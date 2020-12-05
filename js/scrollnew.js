if (matchMedia("screen and (min-width: 1024px)").matches) {
    // 1024px 이상에서 사용할 JavaScript
    function scrollNew(){
        let yOffset = 0; // window.pageYOffset 대신 쓸 변수.
        let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset) 보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합.
        let currentScene = 0; // 현재 활성화된(눈 앞에 보고 있는) 씬(sticky)
        let enterNewScene = false; // 새로운 scene이 시작된 순간 true. 
    
        const sceneInfo = [
            {
                // 0 
                type: "sticky",
                heightNum: 4,
                // 스크롤 높이를 담을 것.
                scrollHeight: 0,
                objs: {
                    container: document.querySelector("#scroll-section-0")
                }
            },
            {
                // 1
                type: "sticky",
                heightNum: 5,
                // 스크롤 높이를 담을 것.
                scrollHeight: 0,
                objs: {
                    container: document.querySelector("#scroll-section-1")
                }
            },
            {
                // 2
                type: "sticky",
                heightNum: 6,
                // 스크롤 높이를 담을 것.
                scrollHeight: 0,
                objs: {
                    container: document.querySelector("#scroll-section-2")
                }
            },
            {
                // 3
                type: "sticky",
                heightNum: 5,
                // 스크롤 높이를 담을 것.
                scrollHeight: 0,
                objs: {
                    container: document.querySelector("#scroll-section-3"),
                    stickyA: document.querySelector("#scroll-section-3 .sticky.sticky-a"),
                    stickyB: document.querySelector("#scroll-section-3 .sticky.sticky-b"),
                    stickyC: document.querySelector("#scroll-section-3 .sticky.sticky-c"),
                    stickyD: document.querySelector("#scroll-section-3 .sticky.sticky-d"),
                    stickyiA: document.querySelector("#scroll-section-3 .stickyimg.stickyi-a"),
                    stickyiB: document.querySelector("#scroll-section-3 .stickyimg.stickyi-b"),
                    stickyiC: document.querySelector("#scroll-section-3 .stickyimg.stickyi-c"),
                    stickyiD: document.querySelector("#scroll-section-3 .stickyimg.stickyi-d"),
                    stickyLogo: document.querySelector("#scroll-section-3 .logoimage")
                },
                values: {
                    stickyA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
                    stickyB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
                    stickyC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
                    stickyD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
                    stickyiA_opacity_in: [0, 1, { start: 0.03, end: 0.2 }],
                    stickyiB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
                    stickyiC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
                    stickyiD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
                    stickyA_translateY_in: [15, 0, { start: 0.1, end: 0.2 }],
                    stickyB_translateY_in: [15, 0, { start: 0.3, end: 0.4 }],
                    stickyC_translateY_in: [15, 0, { start: 0.5, end: 0.6 }],
                    stickyD_translateY_in: [15, 0, { start: 0.7, end: 0.8 }],
                    stickyLogo_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
    
    
                    stickyA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
                    stickyB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
                    stickyC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
                    stickyD_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
                    stickyiA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
                    stickyiB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
                    stickyiC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
                    stickyiD_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
                    stickyA_translateY_out: [0, -15, { start: 0.25, end: 0.3 }],
                    stickyB_translateY_out: [0, -15, { start: 0.45, end: 0.5 }],
                    stickyC_translateY_out: [0, -15, { start: 0.65, end: 0.7 }],
                    stickyD_translateY_out: [0, -15, { start: 0.85, end: 0.9 }],
                    stickyLogo_opacity_out: [1, 0, { start: 0.85, end: 0.97 }]
                    
                }
            },
            {
                // 4
                type: "sticky",
                heightNum: 2,
                // 스크롤 높이를 담을 것.
                scrollHeight: 0,
                objs: {
                    container: document.querySelector("#scroll-section-4")
                }
            }
        ];
    
        function setLayout(){
            // 각 스크롤 섹션의 높이 세팅.
            for (let i = 0; i < sceneInfo.length; i++) {
                // sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
                sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * 1080;
                sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
            }
            // console.log(sceneInfo);
    
            YOffset = window.pageYOffset;
            let totalScrollHeight = 0;
            for (let i = 0; i < sceneInfo.length; i++) {
                totalScrollHeight += sceneInfo[i].scrollHeight;
                if (totalScrollHeight >= YOffset) {
                    currentScene = i;
                    break;
                }
            }
            document.body.setAttribute("id", `show-scene-${currentScene}`);
        }
    
        function calcValues(values, currentYOffset) {
            let rv;
            // 현재 씬(스크롤 섹션) 에서 스크롤된 범위를 비율로 구하기. 
            const scrollHeight = sceneInfo[currentScene].scrollHeight;
            const scrollRatio = currentYOffset / scrollHeight;
    
            if (values.length === 3) {
                // start ~ end 사이에 애니메이션 실행
                const partScrollStart = values[2].start * scrollHeight;
                const partScrollEnd = values[2].end * scrollHeight;
                const partScrollHeight = partScrollEnd - partScrollStart;
    
                if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
                    rv = (currentYOffset - partScrollStart) / partScrollHeight * (values[1] - values[0]) + values[0];
                } else if (currentYOffset < partScrollStart) {
                    rv = values[0];
                } else if (currentYOffset > partScrollEnd) {
                    rv = values[1];
                }
            } else {
                rv = scrollRatio * (values[1] - values[0]) + values[0];
            }
    
            
            // console.log(rv);
    
            return rv;
        }
    
        function playAnimation(){
            const objs = sceneInfo[currentScene].objs;
            const values = sceneInfo[currentScene].values;
            const currentYOffset = yOffset - prevScrollHeight;
            const scrollHeight = sceneInfo[currentScene].scrollHeight;
            const scrollRatio = currentYOffset / scrollHeight;
    
            // console.log(currentScene, currentYOffset);
    
            switch (currentScene) {
                case 0:
                    // console.log("0 play");
                    break;
                case 1:
                    // console.log("1 play");
                    break;
                case 2:
                    // console.log("2 play");
                    break;
                case 3:
                    // let stickyA_opacity_0 = values.stickyA_opacity[0];
                    // let stickyA_opacity_1 = values.stickyA_opacity[1];
                    const stickyA_opacity_in = calcValues(values.stickyA_opacity_in, currentYOffset);
                    const stickyA_opacity_out = calcValues(values.stickyA_opacity_out, currentYOffset);
                    const stickyB_opacity_in = calcValues(values.stickyB_opacity_in, currentYOffset);
                    const stickyB_opacity_out = calcValues(values.stickyB_opacity_out, currentYOffset);
                    const stickyC_opacity_in = calcValues(values.stickyC_opacity_in, currentYOffset);
                    const stickyC_opacity_out = calcValues(values.stickyC_opacity_out, currentYOffset);
                    const stickyD_opacity_in = calcValues(values.stickyD_opacity_in, currentYOffset);
                    const stickyD_opacity_out = calcValues(values.stickyD_opacity_out, currentYOffset);
    
                    const stickyiA_opacity_in = calcValues(values.stickyiA_opacity_in, currentYOffset);
                    const stickyiA_opacity_out = calcValues(values.stickyiA_opacity_out, currentYOffset);
                    const stickyiB_opacity_in = calcValues(values.stickyiB_opacity_in, currentYOffset);
                    const stickyiB_opacity_out = calcValues(values.stickyiB_opacity_out, currentYOffset);
                    const stickyiC_opacity_in = calcValues(values.stickyiC_opacity_in, currentYOffset);
                    const stickyiC_opacity_out = calcValues(values.stickyiC_opacity_out, currentYOffset);
                    const stickyiD_opacity_in = calcValues(values.stickyiD_opacity_in, currentYOffset);
                    const stickyiD_opacity_out = calcValues(values.stickyiD_opacity_out, currentYOffset);
    
    
                    const stickyA_translateY_in = calcValues(values.stickyA_translateY_in, currentYOffset);
                    const stickyA_translateY_out = calcValues(values.stickyA_translateY_out, currentYOffset);
                    const stickyB_translateY_in = calcValues(values.stickyB_translateY_in, currentYOffset);
                    const stickyB_translateY_out = calcValues(values.stickyB_translateY_out, currentYOffset);
                    const stickyC_translateY_in = calcValues(values.stickyC_translateY_in, currentYOffset);
                    const stickyC_translateY_out = calcValues(values.stickyC_translateY_out, currentYOffset);
                    const stickyD_translateY_in = calcValues(values.stickyD_translateY_in, currentYOffset);
                    const stickyD_translateY_out = calcValues(values.stickyD_translateY_out, currentYOffset);
    
                    const stickyLogo_opacity_in = calcValues(values.stickyLogo_opacity_in, currentYOffset);
                    const stickyLogo_opacity_out = calcValues(values.stickyLogo_opacity_out, currentYOffset);
    
                    if (scrollRatio <= 0.22) {
                        // in
                        objs.stickyA.style.opacity = stickyA_opacity_in;
                        objs.stickyiA.style.opacity = stickyiA_opacity_in;
                        objs.stickyA.style.transform = `translateY(${stickyA_translateY_in}%)`;
                        objs.stickyLogo.style.opacity = stickyLogo_opacity_in;
                    } else {
                        // out
                        objs.stickyA.style.opacity = stickyA_opacity_out;
                        objs.stickyiA.style.opacity = stickyiA_opacity_out;
                        objs.stickyA.style.transform =  `translateY(${stickyA_translateY_out}%)`;
                        objs.stickyLogo.style.opacity = stickyLogo_opacity_out;
                    }
    
                    if (scrollRatio <= 0.42) {
                        // in
                        objs.stickyB.style.opacity = stickyB_opacity_in;
                        objs.stickyiB.style.opacity = stickyiB_opacity_in;
                        objs.stickyB.style.transform = `translateY(${stickyB_translateY_in}%)`;
                    } else {
                        // out
                        objs.stickyB.style.opacity = stickyB_opacity_out;
                        objs.stickyiB.style.opacity = stickyiB_opacity_out;
                        objs.stickyB.style.transform =  `translateY(${stickyB_translateY_out}%)`;
                    }
    
                    if (scrollRatio <= 0.62) {
                        // in
                        objs.stickyC.style.opacity = stickyC_opacity_in;
                        objs.stickyiC.style.opacity = stickyiC_opacity_in;
                        objs.stickyC.style.transform = `translateY(${stickyC_translateY_in}%)`;
                    } else {
                        // out
                        objs.stickyC.style.opacity = stickyC_opacity_out;
                        objs.stickyiC.style.opacity = stickyiC_opacity_out;
                        objs.stickyC.style.transform =  `translateY(${stickyC_translateY_out}%)`;
                    }
    
                    if (scrollRatio <= 0.82) {
                        // in
                        objs.stickyD.style.opacity = stickyD_opacity_in;
                        objs.stickyiD.style.opacity = stickyiD_opacity_in;
                        objs.stickyD.style.transform = `translateY(${stickyD_translateY_in}%)`;
                    } else {
                        // out
                        objs.stickyD.style.opacity = stickyD_opacity_out;
                        objs.stickyiD.style.opacity = stickyiD_opacity_out;
                        objs.stickyD.style.transform =  `translateY(${stickyD_translateY_out}%)`;
                    }
    
    
                    // console.log(stickyA_opacity_in);
                    break;
            }
        }
    
        
        function scrollLoop(){
            enterNewScene = false;
            prevScrollHeight = 0;
            for (let i = 0; i < currentScene; i++) {
                prevScrollHeight += sceneInfo[i].scrollHeight;
            }
    
            if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight){
                enterNewScene = true;
                currentScene++;
                document.body.setAttribute("id", `show-scene-${currentScene}`);
            }
    
            if (yOffset < prevScrollHeight) {
                enterNewScene = true;
                if (currentScene === 0) return; // 브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지 (모바일)
                currentScene--;
                document.body.setAttribute("id", `show-scene-${currentScene}`);
            }
    
            if (enterNewScene) return;
    
            playAnimation();
    
            // console.log(currentScene);
            // document.body.setAttribute("id", `show-scene-${currentScene}`);
        }
    
        window.addEventListener("scroll",() => {
            yOffset = window.pageYOffset;
            scrollLoop();
        });
        window.addEventListener("resize", setLayout);
        // window.addEventListener("DOMContentLoaded", setLayout);
        window.addEventListener("load", setLayout);
        
        
    
        setLayout();
    }
    
    scrollNew();
  } else {
    // 1024px 미만에서 사용할 JavaScript
  }

