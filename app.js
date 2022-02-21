fetch("rams.svg")
    .then(response => response.text())
    .then(svg => document.querySelector('.wrapper').insertAdjacentHTML("afterbegin", svg))
    // .then(setSvgAttrs)
    .then(startAnimation)
;


function startAnimation() {


    const wrapper = document.querySelector('.wrapper')
    const rams = document.querySelector('#rams')
    const ramGl = document.querySelector('#ram-g-l')
    const torsoL = document.querySelector('#torso-l')
    const legL = document.querySelector('#leg-l')
    const headL = document.querySelector('#head-l')
    const ramGr = document.querySelector('#ram-g-r')
    const torsoR = document.querySelector('#torso-r')
    const legR = document.querySelector('#leg-r')
    const headR = document.querySelector('#head-r')

    gsap.set(wrapper, {visibility: 'visible'});
    gsap.set(wrapper, {scale: 0.95});


    const tl = gsap.timeline({defaults: {duration: 1, transformOrigin: 'center center'}});
    const tlShake = gsap.timeline();
    const tlBuild = gsap.timeline();

    tlBuild

        .from(rams, {
            autoAlpha: 0, stagger: {
                each: -0.1,
                from: "center",
                grid: "auto",
                ease: "power2.inOut",
            }
        })


    tlShake
        .to(wrapper, {duration: 0.2, y: '-=1.5', repeat: 2})
        .to(wrapper, {duration: 0.2, scale: 1, transformOrigin: 'center center'}, '<');

    tl
        .from(ramGl, {x: -100, y: '-=5'})
        .from(ramGr, {x: 100, y: '-=5'}, '<')
        .to(headL, {rotation: -4}, '-=0.5')
        .to(headR, {rotation: 4}, '<')
        .to(torsoL, {x: '-=2', rotation: 2}, '<')
        .to(torsoR, {x: '+=2', rotation: -2}, '<')
        .to(legL, {rotation: 4, x: '-=2', y: '+=4'}, '<')
        .to(legR, {rotation: -4, x: '+=2', y: '+=4'}, '<')


    ;

    const master = gsap.timeline({repeat: 10, yoyo: true});

    master
        // .add(tlBuild)
        .add(tl)
        .add(tlShake, '-=0.6')

    ;

    master.timeScale(1);
    GSDevTools.create()

    return master;
}





