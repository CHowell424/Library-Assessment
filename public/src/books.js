// returnes author with the corosponding id.
function findAuthorById(authors, id) {
  return authors.find((auther)=> auther.id === id);
}

// returnes the book with corosponding id
function findBookById(books, id) {
  return books.find((book)=> book.id === id);
}

// this is a helper function for getBorrowersForBook and returns a new object that include the returned value
function makeNewAccountOb(borrow,account){
  let newAccountObject ={...borrow,...account};
  return newAccountObject;
}

// retruns an array with 2 arrays in it depending on if the book is still checked out
function partitionBooksByBorrowedStatus(books) {
  let checked_out =[];
  let retuned =[];
  for(let book in books){
    let bookOb =books[book];
    console.log(bookOb);
    if(bookOb.borrows[0].returned == true){
      retuned.push(bookOb);
    }else{checked_out.push(bookOb)};
  }
  return [checked_out,retuned];
}

// returns an arrau of accounts that have checked out that book.
function getBorrowersForBook(book, accounts) {
  let accountsThathaveBarrowed =[];
  const bookBorrows = book.borrows;
  const borrowIDs = book.borrows.map((borrow)=> borrow.id);
  let count =0;

  for(let entry in borrowIDs){
    let borrow = borrowIDs[entry];
    if(count<10){
      for(let account in accounts){
        let accountA = accounts[account].id;
        if(accountA == borrow){
          count++;
          let newAccountOb = makeNewAccountOb(bookBorrows[entry],accounts[account])
          accountsThathaveBarrowed.push(newAccountOb);
        }
      }
    }else{break;}
  }
  return accountsThathaveBarrowed;
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
