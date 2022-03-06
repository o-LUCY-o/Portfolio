/* grafic text letters */

const nav = document.getElementById("slide-nav");
const menu = document.getElementById("menu-button");
var description =  document.getElementById("hoverEffect");
var descriptionText = description.innerText;
var descriptionArray = descriptionText.split(" ");
descriptionArray = descriptionArray.map(i => '<span class="word"><span class="word-hover-1">' + i + '</span> <span class="word-hover-2">' + i + '</span> </span>'); /* proč mi tu nešlo for each? https://stackoverflow.com/questions/20498409/adding-text-to-beginning-of-each-array-element */
descriptionArray = descriptionArray.join(' ');
description.innerHTML = descriptionArray;

var span = description.querySelectorAll(".word");
span.forEach((e)=>{
    e.addEventListener("mouseover", () => {
        setTimeout(function(){
        if(e.classList.contains('hoverEffectDeactive')){
            e.classList.remove("hoverEffectDeactive");
        }
        e.classList.add("hoverEffect");
    },30)
    })
    e.addEventListener("mouseout", ()=>{
        setTimeout(function(){
            e.classList.remove("hoverEffect");
            e.classList.add("hoverEffectDeactive");
    }, 1400)
    })
})
/* toggle menu */
menu.addEventListener("click", () => {
    menu.classList.toggle("menu-open");
    nav.classList.toggle("slide-up");
    nav.classList.toggle("slide-down");
    const slideDown = document.querySelector(".slide-down");

    setTimeout(function(){slideDown ?
      document.body.style.overflowY = "hidden" : document.body.style.overflowY = "scroll";},300);
})
nav.addEventListener("click", () =>{
    nav.classList.remove("slide-down");
    nav.classList.add("slide-up");
    document.getElementById("menu-button").classList.remove("menu-open");
    setTimeout(function(){document.body.style.overflowY = "scroll";},200);

})

/*project info */

const projectButton = document.getElementById("projects").getElementsByTagName("button");
const projectBox = document.querySelector(".project-box-wrapper");

var project = [{
  name: "Portfolio",
  img: "img/SVG/logo5.svg",
  codeLang: ["HTML", "CSS", "JS", "responsive"], /* !!!! description - </p> <p> !!! nahradit */
  description: "Portfolio bude sloužit k prezentace projektů, které v dalších týdnech vytvořím. </p><p> Stránka je napsaná v HTML, CSS a vanilla javaScriptu. Návštěvník v ní může scrollovat, nechat se navést tlačítkem nebo si vybrat z menu. Design by Martin Zane.",
  linkDemo: "https://www.skrytavystava.cz/portfolio",
  linkCode: "https://www.itsCode.com"
},{
  name: "Coming soon - Habbit tracker",
  img: "img/SVG/logo3.svg",
  codeLang: ["HTML", "CSS", "JS"],
  description: " V druhém projektu se zaměřím na práci s databází. Jako milovník seznamů a odškrtávání jeho položek jsem se rozhodla vytvořit habbit tracker a převést svou papírovou verzi do online prostředí. Kouzlo trackeru je v tom, že nám může dát zpětnou vazbu, čemu jsme se v posledních dnech i letech věnovali, a nasměrovat nás k vyváženému životnímu stylu.. nebo popostrčit k úklidu dlouho přehlíženého koutu v domácnosti.",
  linkDemo: "/work-in-progress.html",
  linkCode: "/work-in-progress.html",

}]


/*create div for each project */
for(let i = 0; i < project.length; i++){
 const projecstWrapper = document.querySelector(".projects-wrapper");
 projecstWrapper.innerHTML +=  
 `
 <div class="project">
                <img src="${project[i].img}" alt="Project picture"/>
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
                     Projekt</button>

            </div>
`;

}


var list = [];

for (let i = 0; i < projectButton.length; i++){

  list[i] = project[i].codeLang.map(i => '<li>' + i + '</li>')


projectButton[i].addEventListener("click", () => {
  projectBox.style.display = "block";
  projectBox.style.transition = "all .2s linear";
  setTimeout(()=>{projectBox.style.opacity = "1";},50)

  projectBox.innerHTML = 
  `
  <div class="project-box">
    <div class="close-project"></div>
    <div class="img-wrapper">
      <img src="${project[i].img}" alt="project picture"/>
    </div>
    <div class="project-info">
        <div class="project-title">Název</div>
        <div class="project-name">${project[i].name}</div>
        <ul class="project-codeing-lng">
            ${list[i].join("")}
        </ul>
        <div class="project-about-title">O Projektu</div>
        <div class="project-about"><p>${project[i].description}</p></div>
        <div class="project-buttons">
            <a class="project-button demo" href="${project[i].linkDemo}">
            <svg id="Capa_2"x="0px" y="0px" viewBox="0 0 600 500"  xml:space="preserve"><g><g><path d="M609.608,315.426c3.19-5.874,3.19-12.979,0-18.853c-58.464-107.643-172.5-180.72-303.607-180.72 S60.857,188.931,2.393,296.573c-3.19,5.874-3.19,12.979,0,18.853C60.858,423.069,174.892,496.147,306,496.147 S551.143,423.069,609.608,315.426z M306,451.855c-80.554,0-145.855-65.302-145.855-145.855S225.446,160.144,306,160.144 S451.856,225.446,451.856,306S386.554,451.855,306,451.855z"/><path d="M306,231.67c-6.136,0-12.095,0.749-17.798,2.15c5.841,6.76,9.383,15.563,9.383,25.198c0,21.3-17.267,38.568-38.568,38.568 c-9.635,0-18.438-3.541-25.198-9.383c-1.401,5.703-2.15,11.662-2.15,17.798c0,41.052,33.279,74.33,74.33,74.33 s74.33-33.279,74.33-74.33S347.052,231.67,306,231.67z"/></g></g></svg> 
            DEMO</a>
            <a class="project-button code" href="${project[i].linkCode}">
            <svg viewBox="0 0 640 512"><path fill="currentColor" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z" ></path></svg>
            CODE</a>
        </div>
    </div>
  </div>
  `

  const projectBoxChild = document.querySelector(".project-box");
  setTimeout(()=>{projectBoxChild.style.animation = "projectBox .7s cubic-bezier(.68,-0.55,.27,1.55) forwards";},50);

  const projectClose = document.querySelectorAll(".close-project");

projectClose.forEach(c => c.addEventListener("click", function() {
  projectBox.style.display = "none";
  projectBox.innerHTML = "hidden easter egg :)"; /* to bych měla přidat i close button */

}))

})}


/* animation of divs when enter the section */
const projectsTitle = document.querySelectorAll(".projects-title");
const projectsText = document.querySelectorAll(".projects-text");
const projects = document.querySelectorAll(".project");
const oddProjects = document.querySelectorAll(".project:nth-of-type(odd)");
const evenProjects = document.querySelectorAll(".project:nth-of-type(even)");
/*console.log(oddProjects);*/
const anchor = nav.querySelectorAll("a");
anchor.forEach(a => {
  a.addEventListener("click", function(){
    projects.forEach(p => {p.style.opacity = "0"});
    projectsTitle.forEach(p => aniSide(p,"fromTop"));
    projectsText.forEach(p => aniSide(p,"fromTop"));
    setTimeout(()=>{oddProjects.forEach(p => aniSide(p,"fromLeft"))},200);
    setTimeout(()=>{evenProjects.forEach(p => aniSide(p,"fromRight"))},200);
    function aniSide(p, ani){
      p.style.animation = "";
      setTimeout(()=>{p.style.animation = ani + ".4s linear forwards"},30);
    }
})})

/* view-projects button smooth scroll behavior */
const html = document.querySelector('html');
function smooth(){
  html.style.scrollBehavior = 'smooth';
  setTimeout(()=>{  html.style.scrollBehavior = 'auto';},400);
}


