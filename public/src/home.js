// returnes author with the corosponding id.
function findAuthorById(authors, id) {
  return authors.find((auther)=> auther.id === id);
}

// gets the total book count
function getTotalBooksCount(books) {
  return books.length;
}

// gets the total account count
function getTotalAccountsCount(accounts) {
  return accounts.length;
}

// get the number of books currently borrowed
function getBooksBorrowedCount(books) {
  let count =0;
  for(let book in books){
    if(books[book].borrows[0].returned == false){count++};
  }
  return count;
}

// gets top 5 most common genres
function getMostCommonGenres(books) {
  let mostCommonGenres=[];
  let genres=[];
  let genreCount=[];
  let genreOb=[];
  for(let  i=0; i< books.length; i++){
    if(genres.find((genre)=> genre ==books[i].genre)==undefined){
      genres.push(books[i].genre);
      genreCount.push(1);
    }else{
      let index = genres.indexOf(books[i].genre);
      genreCount[index]+=1;
    }
  }
  for(let i=0; i<genres.length; i++){
    genreOb.push({name:genres[i], count: genreCount[i]})
  }
  genreOb.sort((genreA, genreB)=>genreA.count<genreB.count?1:-1);
  for(let i=0; i<5;i++){
    mostCommonGenres.push(genreOb[i]);
  }
  return mostCommonGenres;
}

// gets top 5 most popular books
function getMostPopularBooks(books) {
  let PopularBooks =[];
  let Borrows=[];
  let bookOb =[];
  let mostPopularBooks=[];
  for(let i=0; i<books.length; i++){
    PopularBooks.push(books[i].title);
    Borrows.push(books[i].borrows.length);
  }
  for(let i=0; i<PopularBooks.length;i++){
    bookOb.push({name:PopularBooks[i], count: Borrows[i]});
  }
  bookOb.sort((bookA, bookB)=> bookA.count<bookB.count?1:-1);
  for(let i=0; i<5;i++){
    mostPopularBooks.push(bookOb[i]);
  }
  return mostPopularBooks;
}

// gets top 5 most popular authors
function getMostPopularAuthors(books, authors) {
  let popularAuthers =[];
  let borrows=[];
  let newOb =[];
  let mostPopularAuthers=[];
  for(let i=0; i<books.length; i++){
    if(popularAuthers.find((auther)=> auther== books[i].authorId)==undefined){
      popularAuthers.push(books[i].authorId);
      borrows.push(books[i].borrows.length);
    }else{
      let index = popularAuthers.indexOf(books[i].authorId);
      borrows[index]+=books[i].borrows.length;
    }
  }
  for(let i=0; i<popularAuthers.length; i++){
    let auther = findAuthorById(authors, popularAuthers[i]);
    newOb.push({name:`${auther.name.first} ${auther.name.last}`, count:borrows[i]});
  }
  newOb.sort((authorA,authorB)=> authorA.count<authorB.count?1:-1);
  for(let i=0; i<newOb.length;i++){
    if(i<5){
      mostPopularAuthers.push(newOb[i]);
    }else{break;}
  }
  return mostPopularAuthers;
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
