const power = document.querySelector(".power-btn");
const title = document.querySelector(".title-box");
const keys = Array.from(document.querySelectorAll('.key'));

powerOn = true;

function powerOnOff(){
    if(powerOn==true){
        powerOn = false;
        power.style.color = '#FF0000';
        power.style.borderColor = '#FF0000';
        title.style.color = 'grey';
    }
    else{
        powerOn = true;
        power.style.color = '#00BD30';
        power.style.borderColor = '#00BD30';
        title.style.color = 'black';
    }
}

function play(e){
    if(powerOn==true){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if (!audio){
            return;
        }
        key.classList.add('hit');
        audio.currentTime = 0;
        audio.play();
        
    }
}

function removeTransition(e) {
    if (e.propertyName !== 'transform'){
        return;
    }
    e.target.classList.remove('hit');
}

window.addEventListener('keydown', play);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));