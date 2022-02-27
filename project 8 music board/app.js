const sounds=['make easy','applause','imagine','boom','family','gasp']

sounds.forEach(x =>{
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = x
    btn.addEventListener('click',()=> {
        stopSongs()
        document.getElementById(x).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}
    
