//Get refs to all sounds

let rideSound = document.getElementById("ride-sound");
let tomSound = document.getElementById("tom-sound");
let kickSound = document.getElementById("kick-sound");
let snareSound = document.getElementById("snare-sound");
let hiHatSound = document.getElementById("hi-hat-sound");
let openHatSound = document.getElementById("open-hat-sound");
let clapSound = document.getElementById("clap-sound");
let boomSound = document.getElementById("boom-sound");
let tinkSound = document.getElementById("tink-sound");

let drumImages = document.querySelectorAll(".drum-img");

let masterSlider = document.getElementById("master-volume");
masterSlider.value=0.5;
rideSound.volume = 0.5;

let drum = [['ride', rideSound.volume],
            ['tom', tomSound.volume],
            ['kick', kickSound.volume],
            ['snare', snareSound.volume],
            ['hi-hat', hiHatSound.volume],
            ['open-hat', openHatSound.volume],
            ['clap', clapSound.volume],
            ['boom', boomSound.volume],
            ['tink', tinkSound.volume]];

//Master volume is set to 1 on load
let masterVolume = masterSlider.value;
//Need to add event listener to change master volume
// master volume to be multiplied by sub volumes

masterSlider.addEventListener("mouseup", ()=>{
    masterVolume=masterSlider.value;
    console.log(masterSlider.value)
})

// Get an array of all the volume slider elements (excluding master master)
let volumeControls = document.querySelectorAll('.volume');

// This adds an event listener onto all but the master volume slider
volumeControls.forEach(slider => {
    // Initialise all sliders to 50% on load
    slider.value=0.5;
    //Add eventlisteners for change of slider
    slider.addEventListener('mouseup', ()=>{
        console.log(`slider ${slider.name} has ${slider.value} volume`)
        // assign slider.value = <drum>.volume
        for (let i=0; i<drum.length; i++) {
            if (slider.name == drum[i][0]) {
                drum[i][1] = slider.value;
            }
        }
    })
})

function animateDrum(drumImage) {

}
// Event listener applied to whole window; checks for key presses
// key presses will update the new volume selected via sliders before
// playing sound.
window.addEventListener("keydown", (key)=>{
    if (key.key == 'a') {
        rideSound.pause();
        rideSound.volume=drum[0][1]*masterVolume;
        rideSound.currentTime = 0;
        //Trigger animation to 'rideimg' element
        // drumImages[0].style.animation="drum-hit 0.1s linear";
        console.log(drumImages[0])
        // THIS WORKS!!
        drumImages[0].style.animation = "drum-hit 0.1s linear"
        setTimeout(()=> {
            drumImages[0].style.removeProperty('animation')
        }, 100)
        
        rideSound.play();
    }
    if (key.key == 's') {
        tomSound.pause();
        tomSound.volume=drum[1][1]*masterVolume;
        tomSound.currentTime = 0;
        drumImages[2].style.animation = "drum-hit 0.1s linear"
        setTimeout(()=> {
            drumImages[2].style.removeProperty('animation')
        }, 100)
        tomSound.play();
    }
    if (key.key == 'd') {
        kickSound.pause();
        kickSound.volume=drum[2][1]*masterVolume;
        kickSound.currentTime = 0;
        drumImages[4].style.animation = "drum-hit 0.1s linear"
        setTimeout(()=> {
            drumImages[4].style.removeProperty('animation')
        }, 100)
        drumImages[6].style.animation = "drum-hit 0.1s linear"
        setTimeout(()=> {
            drumImages[6].style.removeProperty('animation')
        }, 100)
        kickSound.play();
    }
    if (key.key == 'f') {
        snareSound.pause();
        snareSound.volume=drum[3][1]*masterVolume;
        snareSound.currentTime = 0;
        drumImages[8].style.animation = "drum-hit 0.1s linear"
        setTimeout(()=> {
            drumImages[8].style.removeProperty('animation')
        }, 100)
        snareSound.play();
    }
    if (key.key == 'g') {
        hiHatSound.pause();
        hiHatSound.volume=drum[4][1]*masterVolume;
        hiHatSound.currentTime = 0;
        drumImages[10].style.animation = "drum-hit 0.1s linear"
        setTimeout(()=> {
            drumImages[10].style.removeProperty('animation')
        }, 100)
        hiHatSound.play();
        
    }
    if (key.key == 'h') {
        openHatSound.pause();
        openHatSound.volume=drum[5][1]*masterVolume;
        openHatSound.currentTime = 0;
        drumImages[10].style.animation = "drum-hit 0.1s linear"
        setTimeout(()=> {
            drumImages[10].style.removeProperty('animation')
        }, 100)
        openHatSound.play();
    }
    if (key.key == 'j') {
        clapSound.pause();
        clapSound.volume=drum[6][1]*masterVolume;
        clapSound.currentTime = 0;
        clapSound.play();
    }
    if (key.key == 'k') {
        boomSound.pause();
        boomSound.volume=drum[7][1]*masterVolume;
        boomSound.currentTime = 0;
        boomSound.play();
    }
    if (key.key == 'l') {
        tinkSound.pause();
        tinkSound.volume=drum[8][1]*masterVolume;
        tinkSound.currentTime = 0;
        tinkSound.play();
    }
})

// This is is creating a 'BaseAudioContext' for us.
// This is how we access the features of the Web Audio API.
// const AudioContext = window.AudioContext || window.webkitAudioContext;
// const audioCtx = new AudioContext();

// const audioElement = document.getElementById("ride-sound");
// const track = audioCtx.createMediaElementSource(audioElement);


// const gainNode = audioCtx.createGain();
// const volumeControl = document.querySelector('[data-action="volume"]')
// volumeControl.addEventListener('input', () => {
//     console.log(this.value);
//     gainNode.gain.value = 0.1;
    
//     track.connect(audioCtx.destination);
// }, false);
//THIS DIDNT WORK :(
//this.value always undefined OR infinite float, so gainNode.gain.value
// would not assign.