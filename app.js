let nums = [1,2,3,4,67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];

let body = document.querySelector("body")

nums.map(num => {
    let p = document.createElement('h1');
    p.textContent = num;
    p.style.color = 'white';
    p.style.alignItems = 'center'
    if (num > 23) {
        p.style.backgroundColor = 'red';
    } else {
        p.style.backgroundColor = 'green';
    }

    body.appendChild(p);
});

