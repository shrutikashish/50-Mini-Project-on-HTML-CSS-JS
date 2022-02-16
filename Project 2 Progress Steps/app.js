const progress=document.getElementById('progress');
const prev = document.getElementById('prev');
const nextbtn = document.getElementById('nextbtn');
const stars= document.querySelectorAll('.Star');

let currentActive = 1;
nextbtn.addEventListener('click',()=>{
    currentActive++

    if (currentActive>stars.length){
        currentActive=stars.length
    }

    update()
})


prev.addEventListener('click',()=>{
    currentActive--
    if (currentActive<1){
        currentActive=1;
    }
    update()
})

function update(){
    stars.forEach((Star,idx) => {
        if(idx<currentActive){
            Star.classList.add('active')
        }
        else{
            Star.classList.remove('active')
        }

    })
    const actives = document.querySelectorAll('.active')
    progress.style.width=(actives.length-1)/ (stars.length-1) * 100 + '%'
    if(currentActive==1){
        prev.disabled=true
    }
    else if(currentActive===stars.length) {
        nextbtn.disabled=true
    }
    else{
        prev.disabled = false
        nextbtn.disabled=false
    }
}

