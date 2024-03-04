function setup(){
    canvas= createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function clearCanvas(){

    background("white");
}
function preload(){
    classifier = m15.imageClassifier('DoodleNet');
}
function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(promousX,prmouseY,mouseX,mouseY);
    }
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML='Label:'+results[0].label;

    document.getElementById('confidence').innerHTML='Confidence'+ Math.round(results[0].confidence*100)+'%';

    utterThis= new SpeechSynthesisisUtterance(results[0].label);
}