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

//content item
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
divPages.textContent=obj.pages;
divPages.classList.add("pages");
divContent.appendChild(divPages);

//options item
const divOptions=document.createElement("div");
divOptions.classList.add("options");
divCard.appendChild(divOptions);

//read item
const checkRead=document.createElement("input");
checkRead.setAttribute("type","checkbox");
checkRead.checked=obj.read;
checkRead.classList.add("read");
divOptions.appendChild(checkRead);
}
}

addBookToLibrary("Rejto Jeno","A huszonnegy karatos auto",345,false);
addBookToLibrary("Mark Twain","20 miles under the ocean",546,true);


//dom manipulation
const myContainer=document.querySelector(".container");
showBooks(myLibrary);
