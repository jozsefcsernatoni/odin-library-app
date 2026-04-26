//data manipulation
const myLibrary = [];

function Book(author,title,pages,read) {
  // the constructor...
  if(!new.target){
    throw Error("Use new keyword");
  }
  this.author=author;
  this.title=title;
  this.pages=pages;
  this.read=read;
  this.id=self.crypto.randomUUID();
}

function addBookToLibrary(usrAuthor,usrTitle,usrPages,usrRead) {
  // take params, create a book then store it in the array
  const myBook=new Book(usrAuthor,usrTitle,usrPages,usrRead);
  myLibrary.push(myBook);
}

function showBooks(arr){
arr.forEach(element => {
  useTemplate(element);  
});

function useTemplate(obj){
//card item  
const divCard=document.createElement("div");
  divCard.id=obj.id;
  divCard.classList.add("card");
  myContainer.appendChild(divCard);

//CONTENT item
const divContent=document.createElement("div");
divContent.classList.add("content");
divCard.appendChild(divContent);

//author item
const divAuthor=document.createElement("div");
divAuthor.textContent=obj.author;
divAuthor.classList.add("author");
divContent.appendChild(divAuthor);

//title item
const divTitle=document.createElement("div");
divTitle.textContent=obj.title;
divTitle.classList.add("title");
divContent.appendChild(divTitle);

//pages item
const divPages=document.createElement("div");
divPages.textContent=obj.pages + " pages";
divPages.classList.add("pages");
divContent.appendChild(divPages);

//read item
const checkLabel=document.createElement("label");
checkLabel.textContent="Read: ";
const checkRead=document.createElement("input");
checkRead.setAttribute("type","checkbox");
checkRead.checked=obj.read;
checkRead.disabled=true;
checkRead.classList.add("read");
divContent.appendChild(checkLabel);
checkLabel.appendChild(checkRead)

//OPTIONS item
const divOptions=document.createElement("div");
divOptions.classList.add("options");
divCard.appendChild(divOptions);



//toggle checked
const btnCheck=document.createElement("button");
btnCheck.classList.add("toggle");
if(checkRead.checked){
  btnCheck.textContent="Mark as unread"; 
} else {
  btnCheck.textContent="Mark as read"; 
}
divOptions.appendChild(btnCheck);

//delete item
const btnDelete=document.createElement("button");

btnDelete.classList.add("delete");
btnDelete.textContent="Delete";
divOptions.appendChild(btnDelete);
}
}

function clearContainer(){
  while (myContainer.firstChild) {
    myContainer.removeChild(myContainer.lastChild);
  }
}

addBookToLibrary("Rejto Jeno","A huszonnegy karatos auto",345,false);
addBookToLibrary("Mark Twain","20 miles under",546,true);


//dom manipulation
const myContainer=document.querySelector(".container");
showBooks(myLibrary);
const btnDelete=document.querySelectorAll(".delete");
myContainer.addEventListener("click",function(event){
  if(event.target.classList[0]=="delete"){ 
    if(event.target.parentElement.parentElement.id!="")
    {
      let indexOfBook = myLibrary.findIndex(i => i.id === event.target.parentElement.parentElement.id);
      myLibrary.splice(indexOfBook,1);
      clearContainer();
      showBooks(myLibrary);
    }}
});

const btnCheck=document.querySelectorAll(".toggle");
myContainer.addEventListener("click",function(event){
  if(event.target.classList[0]=="toggle"){ 
    if(event.target.parentElement.parentElement.id!="")
    {
      let indexOfBook = myLibrary.findIndex(i => i.id === event.target.parentElement.parentElement.id);
      if(myLibrary[indexOfBook].read){
        myLibrary[indexOfBook].read=false;
      } else {
        myLibrary[indexOfBook].read=true;
      }
      clearContainer();
      showBooks(myLibrary);
    }}
});



//modal
  const dialog=document.querySelector("#confirm-dialog");
  const inputs=dialog.querySelectorAll("input");
  dialog.addEventListener("command", (event) => {
 /* if (event.command == "close" && event.target.value=="cancel") {
    console.log("cancel was clicked");
  } else if (event.command == "close" && event.target.value=="close") {
    console.log("close was clicked");
  }  else */
    if (event.command == "--save"){
      if(inputs[0].value!="" && inputs[1].value!="" && inputs[2].value!="" && inputs[3].value!="")
    {    addBookToLibrary(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].checked);
        inputs[0].value="";
        inputs[1].value="";
        inputs[2].value="";
        inputs[3].checked=false;
        clearContainer();
        showBooks(myLibrary);}else {
    alert("Please complete every required field!");
  }
  } 
});