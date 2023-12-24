console.log('PREDICTION: ');
(async function () {
	
	let model = await tf.loadLayersModel('brainmodel/model.json');
	$("#selected-image").attr("src", "Y90.jpg");
		
	
})();


//const model = await tf.loadLayersModel('brainmodel/model.json');
(async function()
{
    let image = $('#selected-image').get(0);

    const example = tf.fromPixels(image);  // for example
    const prediction = model.predict(example);
    console.log(prediction);
});
console.log('PREDICTION: ');
