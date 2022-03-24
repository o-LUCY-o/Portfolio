/* excercise part */
const excerciseButton = document.getElementById("excercises").getElementsByTagName("button");
const excerciseBox = document.querySelector(".excercise-box-wrapper");


var excercise = [{
  name: "Formulář jako nákupní košík",
  img: "img/shopping-cart.png",
  codeLang: ["HTML", "CSS", "JS"], /* !!!! description - </p> <p> !!! nahradit */
  description: "Jednoduchý nákupní košík vznikl jako cvičení od startupové firmy Fapi. Podle zadání jsem vytvořila frontendovou podobu nákupního košíku a formuláře s validátorem vložených údajů, ve které se po odeslání zobrazí souhrn objednávky.",
  linkDemo: "https://www.skrytavystava.cz/fapi/",
  linkCode: "https://github.com/o-LUCY-o/FapiCode"
},
{
  name: "Formulář jako nákupní košík",
  img: "img/shopping-cart.png",
  codeLang: ["HTML", "CSS", "JS"], /* !!!! description - </p> <p> !!! nahradit */
  description: "Jednoduchý nákupní košík vznikl jako cvičení od startupové firmy Fapi. Podle zadání jsem vytvořila frontendovou podobu nákupního košíku a formuláře s validátorem vložených údajů, ve které se po odeslání zobrazí souhrn objednávky.",
  linkDemo: "https://www.skrytavystava.cz/fapi/",
  linkCode: "https://github.com/o-LUCY-o/FapiCode"
},
{
  name: "Formulář jako nákupní košík",
  img: "img/shopping-cart.png",
  codeLang: ["HTML", "CSS", "JS"], /* !!!! description - </p> <p> !!! nahradit */
  description: "Jednoduchý nákupní košík vznikl jako cvičení od startupové firmy Fapi. Podle zadání jsem vytvořila frontendovou podobu nákupního košíku a formuláře s validátorem vložených údajů, ve které se po odeslání zobrazí souhrn objednávky.",
  linkDemo: "https://www.skrytavystava.cz/fapi/",
  linkCode: "https://github.com/o-LUCY-o/FapiCode"
}]

for(let i = 0; i < excercise.length; i++){
  const excerciseWrapper = document.querySelector(".excercises-wrapper");
  excerciseWrapper.innerHTML +=  
  `
  <div class="excercise">
                 <img src="${excercise[i].img}" alt="Excercise picture"/>
                 <button>
                     <svg id="Capa_2"x="0px" y="0px" viewBox="0 0 600 500"  xml:space="preserve">
 <g>
   <g> <path d="M609.608,315.426c3.19-5.874,3.19-12.979,0-18.853c-58.464-107.643-172.5-180.72-303.607-180.72
       S60.857,188.931,2.393,296.573c-3.19,5.874-3.19,12.979,0,18.853C60.858,423.069,174.892,496.147,306,496.147
       S551.143,423.069,609.608,315.426z M306,451.855c-80.554,0-145.855-65.302-145.855-145.855S225.446,160.144,306,160.144
       S451.856,225.446,451.856,306S386.554,451.855,306,451.855z"/>
     <path d="M306,231.67c-6.136,0-12.095,0.749-17.798,2.15c5.841,6.76,9.383,15.563,9.383,25.198c0,21.3-17.267,38.568-38.568,38.568
       c-9.635,0-18.438-3.541-25.198-9.383c-1.401,5.703-2.15,11.662-2.15,17.798c0,41.052,33.279,74.33,74.33,74.33
       s74.33-33.279,74.33-74.33S347.052,231.67,306,231.67z"/>
   </g>
 </g>
 </svg> 
                      Cvičení</button>
 
             </div>
 `;
 
 }
 
 
 var listExcercise = [];
 
 for (let i = 0; i < excerciseButton.length; i++){
 
   listExcercise[i] = excercise[i].codeLang.map(i => '<li>' + i + '</li>')
 
 
   excerciseButton[i].addEventListener("click", () => {
    excerciseBox.style.display = "block";
    excerciseBox.style.transition = "all .2s linear";
   setTimeout(()=>{excerciseBox.style.opacity = "1";},50)
 
   excerciseBox.innerHTML = 
   `
   <div class="excercise-box">
     <div class="close-project"></div>
     <div class="img-wrapper">
       <img src="${excercise[i].img}" alt="excercise picture"/>
     </div>
     <div class="excercise-info">
         <div class="excercise-title">Název</div>
         <div class="excercise-name">${excercise[i].name}</div>
         <ul class="excercise-coding-lng">
             ${list[i].join("")}
         </ul>
         <div class="excercise-about-title">O Cvičení</div>
         <div class="excercise-about"><p>${excercise[i].description}</p></div>
         <div class="excercise-buttons">
             <a class="excercise-button demo" href="${excercise[i].linkDemo}" rel="noopener noreferrer" target="_blank">
             <svg id="Capa_2"x="0px" y="0px" viewBox="0 0 600 500"  xml:space="preserve"><g><g><path d="M609.608,315.426c3.19-5.874,3.19-12.979,0-18.853c-58.464-107.643-172.5-180.72-303.607-180.72 S60.857,188.931,2.393,296.573c-3.19,5.874-3.19,12.979,0,18.853C60.858,423.069,174.892,496.147,306,496.147 S551.143,423.069,609.608,315.426z M306,451.855c-80.554,0-145.855-65.302-145.855-145.855S225.446,160.144,306,160.144 S451.856,225.446,451.856,306S386.554,451.855,306,451.855z"/><path d="M306,231.67c-6.136,0-12.095,0.749-17.798,2.15c5.841,6.76,9.383,15.563,9.383,25.198c0,21.3-17.267,38.568-38.568,38.568 c-9.635,0-18.438-3.541-25.198-9.383c-1.401,5.703-2.15,11.662-2.15,17.798c0,41.052,33.279,74.33,74.33,74.33 s74.33-33.279,74.33-74.33S347.052,231.67,306,231.67z"/></g></g></svg> 
             DEMO</a>
             <a class="excercise-button code" href="${excercise[i].linkCode}" rel="noopener noreferrer" target="_blank">
             <svg viewBox="0 0 640 512"><path fill="currentColor" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z" ></path></svg>
             CODE</a>
         </div>
     </div>
   </div>
   `
 
   const excerciseBoxChild = document.querySelector(".excercise-box");
   setTimeout(()=>{excerciseBoxChild.style.animation = "excerciseBox .7s cubic-bezier(.68,-0.55,.27,1.55) forwards";},50);
 
   const excerciseClose = document.querySelectorAll(".close-project");
 
 excerciseClose.forEach(c => c.addEventListener("click", function() {
  excerciseBox.style.display = "none";
  excerciseBox.innerHTML = "hidden easter egg :)"; /* to bych měla přidat i close button */
 
 }))
 
})}

