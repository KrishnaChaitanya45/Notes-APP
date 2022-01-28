

var container2=document.querySelector(".container2");
var container3=document.querySelector(".container3");
var CheckIcon = document.querySelector("#check-icon");
var XIcon = document.querySelector("#x-icon");
var i = 0;
showNotes();
var addnote_btn = document.querySelector("#addnote");
function AddNote(){
if(container3.style.display == "none"){
    container3.style.display = "block";
}
else{
    container3.style.display = "none";
    
}

}
function CreateNote(){

 let notes = localStorage.getItem("notes");
 var noteText = document.querySelector("#note-text");
 var noteTitle = document.querySelector("#notetitle");
 if(notes == null){
     notesObj = [];

 }else{
  notesObj = JSON.parse(notes);
 }
 let myobj={
     title: noteTitle.value,
     text:noteText.value

 }
 notesObj.push(myobj);
 localStorage.setItem("notes", JSON.stringify(notesObj));
 
 noteText.value = "";
 noteTitle.value = "";
 showNotes();
 
 
};
function margin(){
    var random_margin=["-5px","1px",'5px','10px','15px','20px'];
    return random_margin[Math.floor(Math.random()*random_margin.length)];
  };
  function rotate(){
  var random_rotate = ['rotate(3deg)','rotate(1deg)','rotate(-1deg)','rotate(-3deg)','rotate(-5deg)','rotate(-10deg)'];
  return random_rotate[Math.floor(Math.random()*random_rotate.length)];
  };
  function color(){
  var random_color = ['#c2ff3d','#ff3deg','#3dc2ff','#04e022','#bc83e6','#ebb328'];
  if(i>random_color.length -1){
      i=0;
  }
  return random_color[i++];
  };

 
function showNotes(){
    container3.style.display = "none";
    var noteText = document.querySelector("#note-text").value;
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
   
    }else{
     notesObj = JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element , index) {
html += ` <div id="card" style="margin:margin();background-color:color();rotation:rotate();" >
<h2 id="heading">${element.title}</h2>
<p id="notes">${element.text}</p>
<i class="far fa-trash-alt" type="button" id="${index}" onclick="deletenote(this.id)" style="color:red;margin-left:85px;margin-top:70px"></i>
</div>`;
      
    });
   let notesElem = document.querySelector(".container2");
   if(notesObj.lengtth != 0){
    notesElem.innerHTML = html;
   }else{
       notesElem.innerText = `Start Adding Your Notes By Clicking at "Create Note" button and your can delete your notes either by "delte icon" or double clicking Your Note`;
   };

  

};



XIcon.addEventListener("click",function(){
    AddNote();
});
CheckIcon.addEventListener("click",function(){
    CreateNote();


});
addnote_btn.addEventListener("click",function(){
    AddNote();
    

});

function deletenote(index){


let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
   
    }else{
     notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


let searchTxt = document.querySelector('#searchtext');
searchTxt.addEventListener("input", ()=>{

    let inputvalue = searchTxt.value.toLowerCase();
    var nodecards = document.querySelectorAll("#card");
        
        Array.from(nodecards).forEach(function(element){
          let cardTxt = element.getElementsByTagName("p")[0].innerText;
          let cardTitle = element.getElementsByTagName("h2")[0].innerText;
        
          if(cardTxt.includes(inputvalue) || cardTitle.includes(inputvalue)){
            // console.log("hello");
              element.style.display = 'block';
        
          }else{
            // console.log("hello");
              element.style.display = 'none';
          }

});

       
});