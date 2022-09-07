const inputFields = document.querySelectorAll('.percentValue');

inputFields.forEach((e, i) => {
    e.addEventListener('change', (e) => {
        let val = parseInt(e.target.value);
        let circle = document.getElementById(`circle${i + 1}`);
        let r = circle.getAttribute('r');
        let circ = Math.PI * 2 * r;
        let counter = 0;

        if (isNaN(val)) {
            val = 100;
        }
        if (val < 0) {
            val = 0;
        }
        if (val > 100) {
            val = 100;
        }
        if (val === 0) {
            document.getElementById(`progressNumber${i + 1}`).innerText = '0%';
        }
        let fillValue = (circ * (100 - val)) / 100;

        circle.style.strokeDashoffset = fillValue;

        setInterval(() => {
            if (counter === val) {
                clearInterval();
            } else {
                counter += 1;
                document.getElementById(`progressNumber${i + 1}`).innerText =
                    counter + '%';
            }
        }, 1000 / val);
    });
});
