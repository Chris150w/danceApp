window.onload = () =>{}

step =(e)=>{
	size=1/12
	if(e.key==","){vid.currentTime-=size}
	if(e.key=="."){vid.currentTime+=size}
}

looper =(e)=>{
	if(+loopE.value-+loopS.value<0.1){return}
	if(vid.currentTime>+loopE.value){vid.currentTime = +loopS.value}
}

tempo = tempos.MGT

beatFinder = (e, time) =>{ 
	if(e.key=="ArrowUp")  {e.preventDefault(); return( beatFrwd(+e.target.value) ) }
	if(e.key=="ArrowDown"){e.preventDefault(); return( beatBack(+e.target.value) ) }
	return +e.target.value
}

beatFrwd =(time)=>{
    let x = false; let q = tempo.length 
while (!x) {
    if(+tempo[q] <= time){
        return (tempo[q+1])
        x = true
    }
    q--
}
}

beatBack =(time)=>{
    let x = false; let q = 0 
while (!x) {
    if(+tempo[q] >= time){
        return (tempo[q-1])
        x = true
    }
    q++
}
}

speedUpdate = () =>{
	vid.playbackRate = +speed.value
}

pauser = (e) =>{vid.blur();
	if((e.key==" ")){
	if(vid.paused) {vid.play() }
	else           {vid.pause()}
	}
}
