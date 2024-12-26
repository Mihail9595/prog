let num = Math.round(Math.random() * 10);
let result = num % 2

let btn = document.querySelector('.btn');
const box2 = document.querySelector('.box-2');


btn.addEventListener('click', function (event) {

    if (result == 0) {
        const box = `
        <div class="box-3">
             Да
        </div>
     `;
        box2.insertAdjacentHTML('beforeend', box);

    } else {
    
        const box = `
               <div class="box-4">
                    Нет
               </div>
            `;
        box2.insertAdjacentHTML('beforeend', box);
    }
})


