/*const reviews = [
    {id:1,
    name:"aaaaa",
    job:"aaaaaaaaaaaaaaa",
    info:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {id:2,
        name:"bbbbbb",
        job:"bbbbbbbbbbbbbb",
        info:"bbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    },
    {id:3,
            name:"ccccccc",
            job:"cccccccccccc",
            info:"cccccccccccccccccccccccccc",
    },
    {id:4,
                name:"dddddd",
                job:"dddddddddd",
                info:"ddddddddddddddddddddddddddd",
    },
]
const name = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const randomBtn = document.querySelector(".random");

let currentItem = 0;
window.addEventListener("DOMContentLoaded" , function(){
    showPerson()
})
function showPerson(){
    const item = reviews[currentItem];
    name.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}
nextBtn.addEventListener("click" ,()=>{
    currentItem++
    if(currentItem > reviews.length - 1){
        currentItem = 0
    }
    showPerson()
})
prevBtn.addEventListener("click" ,()=>{
    currentItem--
    if(currentItem < 0 ){
        currentItem = reviews.length - 1
    }
    showPerson()
})
randomBtn.addEventListener("click" ,()=>{
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson()
})*/

const reviews = [
    {id:1,
    name:"aaaaaaaaaaaa",
    job:"aaaaaaaaaaaaaaaaaaaa",
    info:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {id:1,
        name:"bbbbbbbbbbbb",
        job:"bbbbbbbbbbbbbbbbbbbb",
        info:"bbbbbbbbbbbbbbbbbbbbbbbbbb",
        },
        {id:1,
            name:"ccccccccccccc",
            job:"cccccccccccccccccccccccc",
            info:"cccccccccccccccccccccccccccc",
            },
            {id:1,
                name:"dddddddddd",
                job:"dddddddddddddddddddd",
                info:"dddddddddddddddddddddddddd",
                },
                {id:1,
                    name:"eeeeeeeee",
                    job:"eeeeeeeeeeeeeeeee",
                    info:"eeeeeeeeeeeeeeeeeeeeeeeeee",
                    },
]

const name = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const randomBtn = document.querySelector(".random");

currentValue = 0;

window.addEventListener("DOMContentLoaded",()=>{
    showContent();
})
function showContent(){
    const item = reviews[currentValue];
    name.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}
prevBtn.addEventListener("click",()=>{
    currentValue--
    if(currentValue < 0){
        currentValue = reviews.length - 1
    }
    showContent();
})
nextBtn.addEventListener("click",()=>{
    currentValue++
    if(currentValue > reviews.length){
        currentValue = 0;
    }
    showContent();
})
randomBtn.addEventListener("click",()=>{
    currentValue = Math.floor(Math.random() * reviews.length)
    showContent();

})