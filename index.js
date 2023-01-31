const btnEl =document.getElementById("btn");
const jokeEl=document.getElementById("joke");
const apikey="ENG3Ta99TIE6ZopIZY7NyQ==IEbDgOpLWc20zC8V";
const options={
  method:"GET",
  headers:{
    "X-Api-Key":apikey,
  },
};
const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getjoke(){
  try {
    jokeEl.innerText="updating...";
    btnEl.disabled= true;
    btnEl.innerText="LOADING...";
  const response= await fetch(apiURL,options);
  const data=await response.json();
  btnEl.disabled= false;
  btnEl.innerText="TELL ME A JOKE";


  jokeEl.innerText=data[0].joke;
  } catch (e) {
    jokeEl.innerText="An error happened,try again later ";
    btnEl.disabled= false;
    btnEl.innerText="TELL ME A JOKE";
    console.log(e);
  }

}



btnEl.addEventListener("click",getjoke);
