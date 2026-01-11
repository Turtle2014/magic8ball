let responses = ["It is the same in every universe, YES!!!", "There was this random guy and he told me to say yes","Cupcakes have a very good flavor, a mix of sweetness and sprinkles", "I ate it", "The answer Starts with an n and ends with an r and has eve in the middle", "No Doubt contains no which means that it means no, right?"];
// The random is just a portal to the divine realm and it gives the answer so that you can get the answer, to get the answer requires one button push, somtimes the divines are busy so you might see *walks away*


function askQuestion(){
  let randomIndex = Math.floor(Math.random() * responses.length);
  let TheChosenOne = responses[randomIndex];
  
  let questionAskedID = document.getElementById('Askmequestion');
  let questionAsked = questionAskedID.value;
  questionAskedID.value = '';
  
  document.getElementById("answer").innerHTML = TheChosenOne;
  document.getElementById("question").innerHTML = questionAsked;
  
}
