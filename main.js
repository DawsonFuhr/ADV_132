Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

// prediction_1 = gotResult();

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("results").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

//create your model and store it in var classifier 
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/R2C6kWdrj/model.json',modelLoaded);
//define function modelLoaded
function modelLoaded() {
    console.log('Model Loaded!')
    }
//define function check() 
function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
//define function gotResult(error, results)

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("results_mask").innerHTML = results[0].label;
     
    prediction_1=results[0].label;
    
    }
    if (results[0] == "Accepted")
    {
        document.getElementById("update_mask").innerHTML = "&#";
    }
    if (results[0] == "Denied")
    {
        document.getElementById("update_mask").innerHTML = "&#";
    }
    }
    
    
    