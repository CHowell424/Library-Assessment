// finds account by id using the find function
function findAccountById(accounts, id) {
  return accounts.find((acount)=> acount.id === id);
}

//sorts the array of accounts by using the sort function
function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB)=> accountA.name.last >= accountB.name.last? 1: -1);
}

// this is a helper function for getTotalNumberOfBorrows that returns in the book has been borroed.
function bookHasBeenBarrowed(account, book){
  let borrows = book.borrows;
  let hasBeenBarrowed = false;
  borrows.forEach(borrow => {
    if(borrow.id == account.id){hasBeenBarrowed = true;}
  });
  return hasBeenBarrowed;
}

// retruns the number of books the accouint has borrowed.
function getTotalNumberOfBorrows(account, books) {
  let count =0;
  for(let book in books){
    if(bookHasBeenBarrowed(account, books[book])){
      count++;
    }
  }
  return count;
}

// helper function for getBooksPossessedByAccount that returns a new book object with the author imbeded
function makeNewBookObject({id,title,genre,authorId,borrows}, authors)
{
  const author = authors.find((athor)=> athor.id === authorId);
  let newBookObject ={
    id: id,
    title: title,
    genre: genre,
    authorId:authorId,
    author:{...author},
    borrows:borrows
  }
  return newBookObject;
}

// retruns an array of book objects that the given account is in possesion of.
function getBooksPossessedByAccount(account, books, authors) {
  let possessedBooks =[];
  for(let book in books){
    let bookOb = books[book];
    if(bookHasBeenBarrowed(account, bookOb)){
      // checks to see if the usser has the book still
      let isInPossesion = !(bookOb.borrows.find((b00k)=> b00k.id === account.id)).returned;
      if(isInPossesion){
        const newBookObject = makeNewBookObject(bookOb,authors);
        possessedBooks.push(newBookObject);
      }
    }
  }
  return possessedBooks;
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
