
let store = []

function roll(){
    let myNumber1 = Math.floor(Math.random() * 6) + 1
    let myNumber2 = Math.floor(Math.random() * 6) + 1
    document.getElementById("Box1").innerHTML = myNumber1;
    document.getElementById("Box2").innerHTML = myNumber2;

    if(store.length >= 9){
        alert("You have thrown 10 times")
        
    }
    store.push([myNumber1, myNumber2]+"<br>")

}

function show(){
    if(store.length >= 9){
        document.getElementById("display").innerHTML = store
    } else{
        alert("you need to throw ten times")
    }
}
