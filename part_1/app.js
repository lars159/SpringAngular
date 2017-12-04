

function addFoodToList(){
    foods.forEach(function(f){
        var div = document.createElement('li');
        div.innerHTML = f;
        $("ul").append(li)    
    })   
}

var foods = ["Fish", "Pie", "Meat"];

document.getElementById("myButton").addEventListener("click", addFoodToList);