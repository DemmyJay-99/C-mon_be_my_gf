const yes = document.getElementById('yes');
const no = document.getElementById('no');
const head = document.getElementById('head');
const message = document.getElementById('message');
const wrapper = document.querySelector('body');
var count = 0;

yes.addEventListener('click', ()=>{
    message.textContent = "Yayy";
    no.style.display = "none";
    head.style.display = "none";
    wrapper.style.background = "url(colorful-love-hearts-wallpaper-free-image.webp)"
}
);

no.addEventListener('click', ()=>{
    count++;
    console.log(count);
    if(count % 2 === 1){
        no.style.transform = 'translateY(-100px)';
    } else{
        no.style.transform = 'translateX(50px)';
    }
    switch (count) {
        case 1:
            no.style.opacity = ".9";
            yes.style.width = "120px";
            yes.style.height = "60px";
            message.textContent = "Pretty Please...🥲";
            break;
        case 2:
            no.style.opacity = ".7";
            yes.style.width = "140px";
            yes.style.height = "80px";
            message.textContent = "Just hit yesss😭😭";
            break;
        case 3:
            no.style.opacity = ".5";
            yes.style.width = "160px";
            yes.style.height = "100px"
            message.textContent = "Ouch...";
            break;
        // case 4:
        //     no.style.opacity = ".3";
        //     yes.style.width = "240px";
        //     yes.style.height = "160px";
        //     message.textContent = "";
        //     break;
        // case 5:
        //     no.style.opacity = ".1";
        //     yes.style.width = "280px";
        //     yes.style.height = "180px";
        //     yes.style.fontSize = "50px";
        //     message.textContent = "System ERROR... Acceptance is mandatory";
        //     break;
        case 4:
            no.style.opacity = "0";
            no.style.display = "none"; 
            message.textContent = "Ya got no choice now bud hehe";   
        default:
            break;
    }
}
);