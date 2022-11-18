// DIVS
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')
const mil = document.querySelector('#mil')

// DEFAULT VALUES
min.textContent = `00`
sec.textContent = `00`
mil.textContent = `00`

// BUTTONS
const resetBtn = document.querySelector('#reset')
const start_pauseBtn = document.querySelector('#start-pause')

// GLOBAL INTERVALS
let minInt
let secInt
let milInt

// FUNCTIONS
function startIntervals(){
    minInt = setInterval(()=>{
        min.textContent++
        if(min.textContent<10) min.textContent = `0${min.textContent}`
        if(min.textContent==60) min.textContent = 0
    }, 1000 * 60)

    secInt = setInterval(()=>{
        sec.textContent++
        if(sec.textContent<10) sec.textContent = `0${sec.textContent}`
        if(sec.textContent==60) sec.textContent = 0
    }, 1000)

    milInt = setInterval(()=>{
        mil.textContent++
        if(mil.textContent<10) mil.textContent = `0${mil.textContent}`
        if(mil.textContent==99) mil.textContent = 0
    }, 10)
}

function stopIntervals(){
    clearInterval(minInt)
    clearInterval(secInt)
    clearInterval(milInt)
}

function resetIntervals(){
    min.textContent = `00`
    sec.textContent = `00`
    mil.textContent = `00`
    stopIntervals()
    start_pauseBtn.textContent = `Start`
    start_pauseBtn.classList.remove('on')
}


// EVENT LISTENERS
resetBtn.addEventListener('click', resetIntervals)

start_pauseBtn.addEventListener('click', e=>{

    e.target.classList.toggle('on')

    if(e.target.classList.contains('on')){
        e.target.textContent = `Pause`
        startIntervals()
    }else{
        e.target.textContent = `Resume`
        stopIntervals()
    }
})