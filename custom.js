(()=>{//data manipulation

class Book{
  constructor(author,title,pages,read){
  this.author=author;
  this.title=title;
  this.pages=pages;
  this.read=read;
  this.id=self.crypto.randomUUID();
}
}

class Library{
  constructor(){
    this.library=[];
  }
  addBookToLibrary(usrAuthor,usrTitle,usrPages,usrRead){
  const myBook=new Book(usrAuthor,usrTitle,usrPages,usrRead);
  this.library.push(myBook);
  }

  get books(){
    return this.library;
  }

  setBookRead(bookIndex,bookRead){  
  this.library[bookIndex].read=bookRead;
  }

  getBookRead(bookIndex){
  return this.library[bookIndex].read;
  }
}

const newLibrary=new Library();
newLibrary.addBookToLibrary("Rejto Jeno","A huszonnegy karatos auto",345,false);
newLibrary.addBookToLibrary("Mark Twain","20 miles under",546,true);


class Dom{
constructor(){
  this.myContainer=document.querySelector(".container");

}

showBooks(arr){
arr.forEach(element => {
  this.useTemplate(element);  
});
}

useTemplate(obj){
//card item  
 this.divCard=document.createElement("div");
  this.divCard.id=obj.id;
  this.divCard.classList.add("card");
  this.myContainer.appendChild(this.divCard);

//CONTENT item
this.divContent=document.createElement("div");
this.divContent.classList.add("content");
this.divCard.appendChild(this.divContent);

//author item
this.divAuthor=document.createElement("div");
this.divAuthor.textContent=obj.author;
this.divAuthor.classList.add("author");
this.divContent.appendChild(this.divAuthor);

//title item
this.divTitle=document.createElement("div");
this.divTitle.textContent=obj.title;
this.divTitle.classList.add("title");
this.divContent.appendChild(this.divTitle);

//pages item
this.divPages=document.createElement("div");
this.divPages.textContent=obj.pages + " pages";
this.divPages.classList.add("pages");
this.divContent.appendChild(this.divPages);

//read item
this.checkLabel=document.createElement("label");
this.checkLabel.textContent="Read: ";
this.checkRead=document.createElement("input");
this.checkRead.setAttribute("type","checkbox");
this.checkRead.checked=obj.read;
this.checkRead.disabled=true;
this.checkRead.classList.add("read");
this.divContent.appendChild(this.checkLabel);
this.checkLabel.appendChild(this.checkRead)

//OPTIONS item
this.divOptions=document.createElement("div");
this.divOptions.classList.add("options");
this.divCard.appendChild(this.divOptions);



//toggle checked
this.btnCheck=document.createElement("button");
this.btnCheck.classList.add("toggle");
if(this.checkRead.checked){
  this.btnCheck.textContent="Mark as unread"; 
} else {
  this.btnCheck.textContent="Mark as read"; 
}
this.divOptions.appendChild(this.btnCheck);



//delete item
this.btnDelete=document.createElement("button");
this.btnDelete.textContent="Delete";
this.btnDelete.classList.add("delete");
this.divOptions.appendChild(this.btnDelete);


}

clickMonitor(){
  this.myContainer.addEventListener("click",function(event){

 try{
  this.indexOfBook = newLibrary.books.findIndex(i => i.id === event.target.parentElement.parentElement.id);
 }
 catch (error) {
  console.error(error);
 }
  
      if(event.target.classList[0]==="delete"){
      newLibrary.books.splice(this.indexOfBook,1);
    }
    else if(event.target.classList[0]==="toggle"){ 
      if(newLibrary.getBookRead(this.indexOfBook)){
        newLibrary.setBookRead(this.indexOfBook,false);
      
      } else {
        newLibrary.setBookRead(this.indexOfBook,true);
        
      }
    }
    
  dom.clearContainer();
  dom.showBooks(newLibrary.books); 

});
}
//clear the whole library from the FE
clearContainer(){
  while (this.myContainer.firstChild) {
    this.myContainer.removeChild(this.myContainer.firstChild);
  }


}
}

const dom=new Dom();
dom.showBooks(newLibrary.books);
dom.clickMonitor();
//modal
  class Modal{
    constructor(){
    this.dialog=document.querySelector("#confirm-dialog");
    this.inputs=this.dialog.querySelectorAll("input");
    }
    
    listen(){
      this.dialog.addEventListener("command", (event) => {
    if (event.command == "--save"){
      if(this.inputs[0].value!="" && this.inputs[1].value!="" && this.inputs[2].value!="" && this.inputs[3].value!="")
    {    newLibrary.addBookToLibrary(this.inputs[0].value,this.inputs[1].value,this.inputs[2].value,this.inputs[3].checked);
        this.inputs[0].value="";
        this.inputs[1].value="";
        this.inputs[2].value="";
        this.inputs[3].checked=false;
        dom.clearContainer();
        dom.showBooks(newLibrary.books);
      }else {
    alert("Please complete every required field!");
            }
            }
    
  });
}
  }
const modal=new Modal();
modal.listen();

})();