(function() {
    const options = {
        'text': prompt('Text:', 'Weee!'),
        'size': 150,
        'weight': 800,
        'speed': 50
    };

    let elements = [];

    for (let i = 0; i < 50; i++) {
        let element = document.createElement('div');
        element.style = `width: 100%; margin: auto; pointer-events: none; user-select: none; font-weight: ${options.weight}; font-size: ${options.size}px; position: absolute; z-index: 2147483647; transition: all ${10}s linear; transform-origin: center center; text-align: center;`;
        element.textContent = options.text;

        document.body.appendChild(element);
        elements.push(element);
    }

    setInterval(() => {
        const element = elements[Math.floor(Math.random() * elements.length)];

        element.style.color = color();
        element.style.opacity = Math.random() + 0.1;
        element.style.transform = `rotate(${random(0,360)}deg) translate(${random(-1000,1000)}px, ${random(-500,500)}px) translate3d(${random(0,200)}px,${random(0,200)}px,${random(0,200)}px) rotateX(${random(0,360)}deg) rotateY(${random(0,360)}deg) rotateZ(${random(0,360)}deg)`;
    
    }, options.speed);

    function random (min, max) { return Math.floor(Math.random() * (max - min) + min); }

    function color () {

        const ranges = [
            [150, 256],
            [0, 190],
            [0, 30]
        ];

        const rand = function () {

            const range = ranges.splice(Math.floor(Math.random()*ranges.length), 1)[0];

            return Math.floor(Math.random() * (range[1] - range[0])) + range[0];
        };

        return 'rgb(' + rand() + ',' + rand() + ',' + rand() +')';
    }

})();
