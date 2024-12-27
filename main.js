const btn = document.querySelector('.btn');
const box2 = document.querySelector('.box-2');

btn.addEventListener('click', function () {

    let num = Math.round(Math.random() * 10);
    const result = num % 2

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

    btn.disabled = true;

    setTimeout(() => {
        deleteBox2();
        num = 0;
    }, 2000);
})

function deleteBox2() {
    box2.innerHTML = '';
    btn.disabled = false;
}


