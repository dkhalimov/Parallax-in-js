//parallax header start

let fantasy = document.querySelector('.fantasy'),
    clouds = document.querySelectorAll('.cloud'),
    boat = document.querySelector('.boat');

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    fantasy.style.objectPosition = `0 ${value / 10}%`;
    clouds.forEach(item=>{
        let speed = item.getAttribute('data-speed');
        item.style.transform = `translateX(${value * speed}px)`;
        boat.style.transform = `translateX(${value * -0.5}px)`;
    })

})

//parallax header end

//section parallax start

let sectionBox = document.querySelector('.section__box'),
    layer = document.querySelectorAll('.layer');

sectionBox.addEventListener('mousemove', (e)=>{
    layer.forEach(item=>{
        let speed = item.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX * speed) / 100;
        let y = (window.innerHeight - e.pageY * speed) / 100;
        item.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
})

//section parallax end

//timer count start

let timer = document.querySelector('.timer'),
    timerNums = document.querySelectorAll('.timer__num');

function scrollCount(dur=2000){
    let id;
    timerNums.forEach(item=>{
        let count = item.getAttribute('data-num');
        item.innerHTML = 0;
        plus(0, item, count);
    })
    function plus(i, elem, num){
        if(i < num){
            i++;
            elem.innerHTML = i;
            id = setTimeout(plus, dur/num, i , elem, num);
        }
    }
}
window.addEventListener('scroll', function onScroll(){
    if(window.scrollY > timer.offsetTop - timer.clientHeight){
        scrollCount(3000);
        this.removeEventListener('scroll', onScroll);
    }
})
//timer count end

//todolist start

let form = document.querySelector('form.box'),
    formInput = document.querySelector('.box__inp'),
    list = document.querySelector('.list');
form.addEventListener('submit', function(e){
    e.preventDefault();
    let li = document.createElement('li');
    li.className = 'list__item';
    li.innerHTML = `${formInput.value} <button class="list__btn remove">X</button>`;
    list.append(li);
    rmList();
    this.reset();
})


function rmList(){
    let rm = document.querySelectorAll('.remove');
    rm.forEach(item=>{
        item.addEventListener('click', function(e){
            e.preventDefault();
            this.parentElement.remove();
        })
    })
}
rmList();
//todolist end

//accordion start

let accordName = document.querySelectorAll('.accord__name');
accordName.forEach(item=>{
    item.addEventListener('click', function(e){
        e.preventDefault();
        if(!this.classList.contains('active')){
            accordName.forEach(elem=>{
                elem.classList.remove('active');
                elem.nextElementSibling.style.height = '0px';
            })
            this.classList.add('active');
            this.nextElementSibling.style.height = `${ this.nextElementSibling.scrollHeight}px`;
        }
        else{
            this.classList.remove('active');
            this.nextElementSibling.style.height = '0px';
        }
    })
})

//accordion end

//hover images start

let hoverImg = document.querySelectorAll('.hover__item img');
hoverImg.forEach(item=>{
    item.addEventListener('mousemove', function(e){
        let bound = this.getBoundingClientRect();
        let x = bound.left + bound.width - e.clientX;
        let y = bound.top + bound.height - e.clientY;
        if(x > bound.width / 2 && y > bound.height / 2){
            this.style.transform = `rotateX(24deg) rotateY(-8deg)`;
        }
        if(x < bound.width / 2 && y > bound.height / 2){
            this.style.transform = `rotateX(24deg) rotateY(8deg)`;
        }
        if(x > bound.width / 2 && y < bound.height / 2){
            this.style.transform = `rotateX(-24deg) rotateY(-8deg)`;
        }
        if(x < bound.width / 2 && y < bound.height / 2){
            this.style.transform = `rotateX(-24deg) rotateY(8deg)`;
        }
    })
    item.addEventListener('mouseout', function(){
        this.style.transform = '';
    })
})


//hover images end