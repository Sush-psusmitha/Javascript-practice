const ratings = document.querySelectorAll('.rating'); 
const ratingContainer = document.querySelector('.ratings-container'); 
const SendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel'); 

let selectedRating = 'Satisfied'

ratingContainer.addEventListener("click", (e)=> {
    if(e.target.parentNode.classList.contains('rating')){
        //console.log(e.target.parentNode.classList.contains('rating'))//return true if emoji is clicked
       removeActive();

       e.target.parentNode.classList.add("active"); 
       selectedRating = e.target.nextElementSibling.innerHTML;
    } 
}); 

SendBtn.addEventListener('click', () => {
    panel.innerHTML = `
      <p class="heart">💖</p>
      <b>Thank You!!</b>
      <br> 
      <b>Feedback: ${selectedRating}</b>
     
    `
})

function removeActive(){
   for(let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active")
   }
}
