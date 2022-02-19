let like = document.getElementById("numberOfLikes");
let numberOfCount = document.getElementById("numberOfCount");
let dislike = document.getElementById("numberOfDislikes");

like.addEventListener('click', function(){
    count = numberOfCount.innerHTML
    count++;
    numberOfCount.innerHTML = count;
})

dislike.addEventListener('click', function(){
    count = numberOfCount.innerHTML
    count--;
    numberOfCount.innerHTML = count;
})