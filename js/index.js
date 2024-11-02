//start navbar
$("#btn").click(function () { 
    // console.log("hhhhh");
    $(".nav-content").css("margin-left", "250px")
    $(".side-nav").css("margin-left", "0px")

    $("#btn").css("display","none")
    $("#btn2").css("display","block");
    $(".mation-ul").slideDown(1000)
});
$("#btn2").click(function () { 
    // console.log("eehhh");
    $(".nav-content").css("margin-left", "0")
    $(".side-nav").css("margin-left", "-250px")

    $("#btn").css("display","block")
    $("#btn2").css("display","none");
    $(".mation-ul").slideUp(100)
});
// end navbar








// start home
async function api(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmJlYzA4OGU3YjE2MzIwNTk0MTAxMGY2ODIyMmIwMSIsIm5iZiI6MTczMDU2OTg4MC4yMzY5NDU5LCJzdWIiOiI2NzI2MjkyODYxNTQ3NDhhNTM2ZTRjYWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KI6DUS2JjW8FBE_tJOyQy6G6aJiOmXMH543Hwtgbh78'
        }
      };
const url=await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, options)
let data=await url.json();
display(data.results)
loading=document.querySelector(".loading").classList.add("d-none")


// console.log(data);    
}
$("#playing").click(  async function api(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmJlYzA4OGU3YjE2MzIwNTk0MTAxMGY2ODIyMmIwMSIsIm5iZiI6MTczMDU2OTg4MC4yMzY5NDU5LCJzdWIiOiI2NzI2MjkyODYxNTQ3NDhhNTM2ZTRjYWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KI6DUS2JjW8FBE_tJOyQy6G6aJiOmXMH543Hwtgbh78'
        }
      };
const url=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
let data=await url.json();
loading=document.querySelector(".loading").classList.add("d-none")
display(data.results)
   
});

$("#popular").click(  async function api(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmJlYzA4OGU3YjE2MzIwNTk0MTAxMGY2ODIyMmIwMSIsIm5iZiI6MTczMDU2OTg4MC4yMzY5NDU5LCJzdWIiOiI2NzI2MjkyODYxNTQ3NDhhNTM2ZTRjYWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KI6DUS2JjW8FBE_tJOyQy6G6aJiOmXMH543Hwtgbh78'
        }
      };
const url=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
let data=await url.json();
loading=document.querySelector(".loading").classList.add("d-none")
display(data.results)
   
});
$("#topRated").click(  async function api(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmJlYzA4OGU3YjE2MzIwNTk0MTAxMGY2ODIyMmIwMSIsIm5iZiI6MTczMDU2OTg4MC4yMzY5NDU5LCJzdWIiOiI2NzI2MjkyODYxNTQ3NDhhNTM2ZTRjYWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KI6DUS2JjW8FBE_tJOyQy6G6aJiOmXMH543Hwtgbh78'
        }
      };
const url=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
let data=await url.json();
loading=document.querySelector(".loading").classList.add("d-none")
display(data.results)  
});

$("#trending").click(  async function api(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmJlYzA4OGU3YjE2MzIwNTk0MTAxMGY2ODIyMmIwMSIsIm5iZiI6MTczMDU2OTg4MC4yMzY5NDU5LCJzdWIiOiI2NzI2MjkyODYxNTQ3NDhhNTM2ZTRjYWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KI6DUS2JjW8FBE_tJOyQy6G6aJiOmXMH543Hwtgbh78'
        }
      };
const url=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
let data=await url.json();
loading=document.querySelector(".loading").classList.add("d-none")
display(data.results)  
});
$("#upcoming").click(  async function api(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmJlYzA4OGU3YjE2MzIwNTk0MTAxMGY2ODIyMmIwMSIsIm5iZiI6MTczMDU2OTg4MC4yMzY5NDU5LCJzdWIiOiI2NzI2MjkyODYxNTQ3NDhhNTM2ZTRjYWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KI6DUS2JjW8FBE_tJOyQy6G6aJiOmXMH543Hwtgbh78'
        }
      };
const url=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
let data=await url.json();
display(data.results)  
loading=document.querySelector(".loading").classList.add("d-none")


});


function display(data){
    // console.log(data);
    let box = ``;
for (i = 0; i < data.length; i++) {
    // console.log("ttt");
   box +=
    `
  <div class="col-4">
                <div class="items position-relative text-white">
                    <div class="image2">

                        <img class="image d-block" src="https://image.tmdb.org/t/p/w500/${data[i].poster_path}" alt="poster">
                    </div>
                    <div class="layer  position-absolute top-0">
                        <h1 class=" ps-1l"> ${data[i].title}</h1><br>
                        <p class=" ps-1 "> ${data[i].overview}</p>
                        <div class="up">
                        <h6>Relese Date:${data[i].release_date}</h6>
                        <span class=" rateStars p-1"><i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                        <i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i></span><br><br>
                        <span class=" rate p-1">${data[i].vote_average}</span>
                        </div>
                    </div>
                </div>

            </div>
  `;
}
document.querySelector(".row").innerHTML = box;

}
api()

loading=document.querySelector(".loading").classList.remove("d-none")




// end home





// start contact

$(".pass").click(function(){
    // console.log("hello");
        $(".eye").animate({'top':'22px'},function(){
            $(".eye").fadeIn(90)
        });
})
$(".eye").click(function(){
    $("#signinPassword").removeAttr("type",);
    $(".eye").click(function(){
        $("#signinPassword").attr("type", "password");
    })
})

var signinName= document.getElementById("signinName")
var signinemail= document.getElementById("signinemail")
var phone= document.getElementById("phone")
var age= document.getElementById("age")
var signinPassword= document.getElementById("signinPassword")

function cheekValidation2(element2) {

    
    var inputsValid={
        signinName:/^[a-z,A-z].{3,15}/ ,
        phone:/^01[0-9].{8}$/ ,
        signinemail:/^[a-z].{1,}@gmail[.]com$/i,
        signinPassword:/^.{3,15}$/,
        age:/[16-] /
    }
    if(inputsValid[element2.id].test(element2.value)){
        element2.classList.remove('is-invalid');
        element2.classList.add('is-valid');
        $(".bbbb").removeClass(" bg-danger");
        return true;
    }
    else{
        element2.classList.remove('is-valid');
        element2.classList.add('is-invalid');
        $(".bbbb").addClass(" bg-danger");
        return false;
    }
}

// end contact