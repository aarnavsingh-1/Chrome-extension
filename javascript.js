inputEl=document.getElementById("input-el");
inputBtn=document.getElementById("input-btn");
ulEl=document.querySelector("#ul-el");
const deleteBtn=document.getElementById("delete-btn");
const saveBtn=document.getElementById("save-btn");
let myLeads=[];

let leads=JSON.parse(localStorage.getItem("myLeads"));
if(leads){
myLeads=leads;
renderEl(myLeads);
}
deleteBtn.addEventListener("dblclick",function(){
   localStorage.clear();
   myLeads=[];
renderEl(myLeads);
})
saveBtn.addEventListener("click",function(){
   chrome.tabs.query({active:true,currentWindow:true},function(tabs){
      myLeads.push(tabs[0].url);
      localStorage.setItem("myLeads",JSON.stringify(myLeads));
      renderEl(myLeads);
   })
  
})


inputBtn.addEventListener("click",function(){

    myLeads.push(inputEl.value);
    inputEl.value=" ";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));

    renderEl(myLeads);
    console.log(localStorage.getItem("myLeads"));
 })
 
 function renderEl(yolo){
let listItems=" ";
for(let i=0;i<yolo.length;i++){
   listItems+=`<li><a  href='${yolo[i]} ' target='_main' >${yolo[i]}
  </a>
  </li> 
  `
 
}
ulEl.innerHTML=listItems;


 }

