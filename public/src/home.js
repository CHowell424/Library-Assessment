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
  let count = books.reduce((result,book)=> {
    for(let book in books){
      if(books[book].borrows[0].returned == false){result++};
  }
  return result
  },0);
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
  mostPopularAuthers= newOb.filter((auther)=> auther.count>=newOb[4].count);
  return mostPopularAuthers;
}
const authors = [
  {
    id: 0,
    name: {
      first: "Lucia",
      last: "Moreno",
    },
  },
  {
    id: 1,
    name: {
      first: "Trisha",
      last: "Mathis",
    },
  },
  {
    id: 2,
    name: {
      first: "Arnold",
      last: "Marks",
    },
  },
  {
    id: 3,
    name: {
      first: "Faye",
      last: "Arnold",
    },
  },
  {
    id: 4,
    name: {
      first: "Tami",
      last: "Hurst",
    },
  },
  {
    id: 5,
    name: {
      first: "Farmer",
      last: "Stevenson",
    },
  },
  {
    id: 6,
    name: {
      first: "Hancock",
      last: "Fuller",
    },
  },
  {
    id: 7,
    name: {
      first: "Ila",
      last: "Reid",
    },
  },
  {
    id: 8,
    name: {
      first: "Susanne",
      last: "Lawson",
    },
  },
  {
    id: 9,
    name: {
      first: "Olson",
      last: "Rowland",
    },
  },
  {
    id: 10,
    name: {
      first: "Giles",
      last: "Barlow",
    },
  },
  {
    id: 11,
    name: {
      first: "Luz",
      last: "Beach",
    },
  },
  {
    id: 12,
    name: {
      first: "Chrystal",
      last: "Lester",
    },
  },
  {
    id: 13,
    name: {
      first: "Heidi",
      last: "Burks",
    },
  },
  {
    id: 14,
    name: {
      first: "Wanda",
      last: "Shannon",
    },
  },
  {
    id: 15,
    name: {
      first: "Smith",
      last: "Wiley",
    },
  },
  {
    id: 16,
    name: {
      first: "Austin",
      last: "Patton",
    },
  },
  {
    id: 17,
    name: {
      first: "Elva",
      last: "Robles",
    },
  },
  {
    id: 18,
    name: {
      first: "George",
      last: "Gentry",
    },
  },
  {
    id: 19,
    name: {
      first: "Sally",
      last: "Wooten",
    },
  },
  {
    id: 20,
    name: {
      first: "Tate",
      last: "Fletcher",
    },
  },
  {
    id: 21,
    name: {
      first: "Baxter",
      last: "Powell",
    },
  },
  {
    id: 22,
    name: {
      first: "Rodriquez",
      last: "Meyer",
    },
  },
  {
    id: 23,
    name: {
      first: "Alexander",
      last: "Cervantes",
    },
  },
  {
    id: 24,
    name: {
      first: "Snow",
      last: "Irwin",
    },
  },
  {
    id: 25,
    name: {
      first: "Matthews",
      last: "Sanders",
    },
  },
  {
    id: 26,
    name: {
      first: "Briana",
      last: "Cooke",
    },
  },
  {
    id: 27,
    name: {
      first: "Stefanie",
      last: "Justice",
    },
  },
  {
    id: 28,
    name: {
      first: "Conway",
      last: "Booker",
    },
  },
  {
    id: 29,
    name: {
      first: "Kerri",
      last: "Keith",
    },
  },
  {
    id: 30,
    name: {
      first: "Rhonda",
      last: "Hoover",
    },
  },
  {
    id: 31,
    name: {
      first: "Warren",
      last: "Potts",
    },
  },
  {
    id: 32,
    name: {
      first: "Ochoa",
      last: "Levy",
    },
  },
  {
    id: 33,
    name: {
      first: "Maddox",
      last: "Parker",
    },
  },
  {
    id: 34,
    name: {
      first: "Alfreda",
      last: "Moore",
    },
  },
  {
    id: 35,
    name: {
      first: "Mae",
      last: "Thompson",
    },
  },
  {
    id: 36,
    name: {
      first: "Riley",
      last: "Miranda",
    },
  },
  {
    id: 37,
    name: {
      first: "Cristina",
      last: "Buchanan",
    },
  },
  {
    id: 38,
    name: {
      first: "Jaime",
      last: "Carroll",
    },
  },
  {
    id: 39,
    name: {
      first: "Galloway",
      last: "Poole",
    },
  },
  {
    id: 40,
    name: {
      first: "Alyson",
      last: "Sampson",
    },
  },
  {
    id: 41,
    name: {
      first: "Warner",
      last: "Head",
    },
  },
  {
    id: 42,
    name: {
      first: "Castillo",
      last: "Sandoval",
    },
  },
  {
    id: 43,
    name: {
      first: "Duran",
      last: "Norton",
    },
  },
  {
    id: 44,
    name: {
      first: "Hensley",
      last: "Banks",
    },
  },
  {
    id: 45,
    name: {
      first: "Park",
      last: "Reeves",
    },
  },
  {
    id: 46,
    name: {
      first: "Haley",
      last: "Peterson",
    },
  },
  {
    id: 47,
    name: {
      first: "Shauna",
      last: "Hess",
    },
  },
  {
    id: 48,
    name: {
      first: "Emerson",
      last: "Gamble",
    },
  },
  {
    id: 49,
    name: {
      first: "Mcintosh",
      last: "Whitney",
    },
  },
];
const books = [
  {
    id: "5f447132d487bd81da01e25e",
    title: "sit eiusmod occaecat eu magna",
    genre: "Science",
    authorId: 8,
    borrows: [
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: false,
      },
      {
        id: "5f446f2ed3609b719568a415",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2ede05a0b1e3394d8b",
        returned: true,
      },
      {
        id: "5f446f2e4081699cdc6a2735",
        returned: true,
      },
      {
        id: "5f446f2e3900dfec59489477",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2e3900dfec59489477",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2eed18105706d6ca19",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2e91c2af00cb74e82b",
        returned: true,
      },
      {
        id: "5f446f2e5aa2bb5545a0f8a6",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2e0b3e2ff72fc503e7",
        returned: true,
      },
      {
        id: "5f446f2e91c2af00cb74e82b",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2e2f35653fa80bf490",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471329627160be1e8ce92",
    title: "esse ea veniam non occaecat",
    genre: "Classics",
    authorId: 10,
    borrows: [
      {
        id: "5f446f2ed3609b719568a415",
        returned: false,
      },
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2e7a1be21e362b82f9",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: true,
      },
      {
        id: "5f446f2e59f9380a1d03d766",
        returned: true,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2ee176f80b8d5d24da",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2eef419207c5fa4ec9",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2e4081699cdc6a2735",
        returned: true,
      },
    ],
  },
  {
    id: "5f44713265e5d8d17789beb0",
    title: "tempor occaecat fugiat",
    genre: "Travel",
    authorId: 16,
    borrows: [
      {
        id: "5f446f2e4eff1030e7316861",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2ee1661e64cde14e55",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2e3e70bb4e1ab821c9",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2e136866e4fe60c893",
        returned: true,
      },
    ],
  },
  {
    id: "5f44713264bb872240dd62d0",
    title: "proident cupidatat fugiat aliquip do",
    genre: "Young Adult",
    authorId: 20,
    borrows: [
      {
        id: "5f446f2efa7fe184c4014dd2",
        returned: false,
      },
      {
        id: "5f446f2e59f9380a1d03d766",
        returned: true,
      },
      {
        id: "5f446f2ede05a0b1e3394d8b",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
      {
        id: "5f446f2e136866e4fe60c893",
        returned: true,
      },
      {
        id: "5f446f2eef419207c5fa4ec9",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2e59f9380a1d03d766",
        returned: true,
      },
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: true,
      },
      {
        id: "5f446f2e3e70bb4e1ab821c9",
        returned: true,
      },
      {
        id: "5f446f2e5abedb2ba5eecd16",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2e5a23764338868b10",
        returned: true,
      },
      {
        id: "5f446f2ea0502bf8cbc7676a",
        returned: true,
      },
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: true,
      },
      {
        id: "5f446f2eef419207c5fa4ec9",
        returned: true,
      },
      {
        id: "5f446f2e91a138c3a8ac6980",
        returned: true,
      },
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: true,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2efa2e5110917e5929",
        returned: true,
      },
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: true,
      },
      {
        id: "5f446f2e4081699cdc6a2735",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132a476ece080afa067",
    title: "ullamco est minim",
    genre: "Nonfiction",
    authorId: 25,
    borrows: [
      {
        id: "5f446f2e189628dfd4e6225e",
        returned: false,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2e2f35653fa80bf490",
        returned: true,
      },
      {
        id: "5f446f2ee1661e64cde14e55",
        returned: true,
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2e91c2af00cb74e82b",
        returned: true,
      },
      {
        id: "5f446f2e2f35653fa80bf490",
        returned: true,
      },
      {
        id: "5f446f2ed92454081fb1999b",
        returned: true,
      },
      {
        id: "5f446f2e136866e4fe60c893",
        returned: true,
      },
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
      {
        id: "5f446f2e93963fcd4e5adf00",
        returned: true,
      },
      {
        id: "5f446f2e4081699cdc6a2735",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2e136866e4fe60c893",
        returned: true,
      },
      {
        id: "5f446f2ef055e8f3064b763e",
        returned: true,
      },
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
      {
        id: "5f446f2efa2e5110917e5929",
        returned: true,
      },
      {
        id: "5f446f2e3e70bb4e1ab821c9",
        returned: true,
      },
      {
        id: "5f446f2e6dd33178245e5771",
        returned: true,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2eef419207c5fa4ec9",
        returned: true,
      },
      {
        id: "5f446f2ef055e8f3064b763e",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
      {
        id: "5f446f2eeb9463f976413b65",
        returned: true,
      },
      {
        id: "5f446f2e138a3841f7aeccf2",
        returned: true,
      },
      {
        id: "5f446f2e4081699cdc6a2735",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132024bec2f2a94dedc",
    title: "ad incididunt magna",
    genre: "Fantasy",
    authorId: 38,
    borrows: [
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2e4eff1030e7316861",
        returned: true,
      },
      {
        id: "5f446f2ede05a0b1e3394d8b",
        returned: true,
      },
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: true,
      },
      {
        id: "5f446f2e189628dfd4e6225e",
        returned: true,
      },
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: true,
      },
      {
        id: "5f446f2ed3609b719568a415",
        returned: true,
      },
      {
        id: "5f446f2e91c2af00cb74e82b",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2e9487cb7bf46726b5",
        returned: true,
      },
      {
        id: "5f446f2e73359bee0fec4ba9",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2ea0502bf8cbc7676a",
        returned: true,
      },
      {
        id: "5f446f2ea0502bf8cbc7676a",
        returned: true,
      },
      {
        id: "5f446f2ead0070f44676f2f6",
        returned: true,
      },
      {
        id: "5f446f2e93963fcd4e5adf00",
        returned: true,
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: true,
      },
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: true,
      },
      {
        id: "5f446f2ee176f80b8d5d24da",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2ee1661e64cde14e55",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
      {
        id: "5f446f2e22469f38e4455c73",
        returned: true,
      },
      {
        id: "5f446f2eeb9463f976413b65",
        returned: true,
      },
      {
        id: "5f446f2ef055e8f3064b763e",
        returned: true,
      },
      {
        id: "5f446f2e73359bee0fec4ba9",
        returned: true,
      },
      {
        id: "5f446f2eeb9463f976413b65",
        returned: true,
      },
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471328ea4e12c67d5f691",
    title: "eiusmod pariatur Lorem ipsum consectetur",
    genre: "Comics",
    authorId: 32,
    borrows: [
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: false,
      },
      {
        id: "5f446f2e2f35653fa80bf490",
        returned: true,
      },
      {
        id: "5f446f2e637138095dcc3db2",
        returned: true,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
      {
        id: "5f446f2e73359bee0fec4ba9",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2efa7fe184c4014dd2",
        returned: true,
      },
      {
        id: "5f446f2ec926a2ac98231a64",
        returned: true,
      },
      {
        id: "5f446f2e138a3841f7aeccf2",
        returned: true,
      },
      {
        id: "5f446f2efa2e5110917e5929",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2e93963fcd4e5adf00",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2ead0070f44676f2f6",
        returned: true,
      },
      {
        id: "5f446f2ed524723353040e5c",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: true,
      },
      {
        id: "5f446f2ec926a2ac98231a64",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2eef419207c5fa4ec9",
        returned: true,
      },
      {
        id: "5f446f2ebe8314bcec531cc5",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2eeb9463f976413b65",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471327864ee880caf5afc",
    title: "reprehenderit quis laboris adipisicing et",
    genre: "Poetry",
    authorId: 20,
    borrows: [
      {
        id: "5f446f2e2a4fcd687493a775",
        returned: false,
      },
      {
        id: "5f446f2ebe8314bcec531cc5",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: true,
      },
      {
        id: "5f446f2ebe8314bcec531cc5",
        returned: true,
      },
      {
        id: "5f446f2ee176f80b8d5d24da",
        returned: true,
      },
      {
        id: "5f446f2ed524723353040e5c",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471328e1d477ba53c1ac5",
    title: "qui cillum exercitation quis",
    genre: "Memoir",
    authorId: 2,
    borrows: [
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: false,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132e9b1972bfad09dbe",
    title: "ea cillum cupidatat",
    genre: "Art",
    authorId: 40,
    borrows: [
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: false,
      },
      {
        id: "5f446f2ed92454081fb1999b",
        returned: true,
      },
      {
        id: "5f446f2ef3942f4e607e47e2",
        returned: true,
      },
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
      {
        id: "5f446f2e22469f38e4455c73",
        returned: true,
      },
      {
        id: "5f446f2e4081699cdc6a2735",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132075cb9ebf2f72def",
    title: "exercitation consectetur quis duis aliquip",
    genre: "Young Adult",
    authorId: 11,
    borrows: [
      {
        id: "5f446f2e637138095dcc3db2",
        returned: false,
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2e7a1be21e362b82f9",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2e91a138c3a8ac6980",
        returned: true,
      },
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: true,
      },
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2e637138095dcc3db2",
        returned: true,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: true,
      },
      {
        id: "5f446f2e5aa2bb5545a0f8a6",
        returned: true,
      },
      {
        id: "5f446f2eeb9463f976413b65",
        returned: true,
      },
    ],
  },
  {
    id: "5f44713245a57860eea8cff9",
    title: "proident ad excepteur",
    genre: "Poetry",
    authorId: 37,
    borrows: [
      {
        id: "5f446f2edc76a41729492d41",
        returned: false,
      },
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2e0b3e2ff72fc503e7",
        returned: true,
      },
      {
        id: "5f446f2e2a4fcd687493a775",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2e189628dfd4e6225e",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2e7a1be21e362b82f9",
        returned: true,
      },
      {
        id: "5f446f2ed92454081fb1999b",
        returned: true,
      },
      {
        id: "5f446f2efa7fe184c4014dd2",
        returned: true,
      },
      {
        id: "5f446f2e9487cb7bf46726b5",
        returned: true,
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2e136866e4fe60c893",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: true,
      },
      {
        id: "5f446f2e5a23764338868b10",
        returned: true,
      },
      {
        id: "5f446f2e93963fcd4e5adf00",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2e5a23764338868b10",
        returned: true,
      },
      {
        id: "5f446f2e138a3841f7aeccf2",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132e2dada403217bb7c",
    title: "magna est ad laborum Lorem",
    genre: "Historical Fiction",
    authorId: 46,
    borrows: [
      {
        id: "5f446f2eae901a82e0259947",
        returned: false,
      },
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: true,
      },
      {
        id: "5f446f2e4081699cdc6a2735",
        returned: true,
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2ea0502bf8cbc7676a",
        returned: true,
      },
      {
        id: "5f446f2efa7fe184c4014dd2",
        returned: true,
      },
      {
        id: "5f446f2ed92454081fb1999b",
        returned: true,
      },
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: true,
      },
      {
        id: "5f446f2ebe8314bcec531cc5",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132c3199cf9881f8054",
    title: "nisi qui aliqua nisi",
    genre: "Nonfiction",
    authorId: 21,
    borrows: [
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2e138a3841f7aeccf2",
        returned: true,
      },
      {
        id: "5f446f2ed46724f41c9fc431",
        returned: true,
      },
      {
        id: "5f446f2e637138095dcc3db2",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2e102899f8b6d2c20e",
        returned: true,
      },
      {
        id: "5f446f2e102899f8b6d2c20e",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2ebe8314bcec531cc5",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2e3900dfec59489477",
        returned: true,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2ec926a2ac98231a64",
        returned: true,
      },
    ],
  },
  {
    id: "5f44713227d10697d606bd97",
    title: "consequat velit sunt dolore duis",
    genre: "Historical Fiction",
    authorId: 47,
    borrows: [
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: false,
      },
      {
        id: "5f446f2e5abedb2ba5eecd16",
        returned: true,
      },
      {
        id: "5f446f2e5abedb2ba5eecd16",
        returned: true,
      },
      {
        id: "5f446f2e4eff1030e7316861",
        returned: true,
      },
      {
        id: "5f446f2ed524723353040e5c",
        returned: true,
      },
      {
        id: "5f446f2ed46724f41c9fc431",
        returned: true,
      },
      {
        id: "5f446f2edc76a41729492d41",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2e2f35653fa80bf490",
        returned: true,
      },
    ],
  },
  {
    id: "5f44713296c37341b203cc33",
    title: "aute duis ea occaecat veniam",
    genre: "Nonfiction",
    authorId: 39,
    borrows: [
      {
        id: "5f446f2e59f9380a1d03d766",
        returned: true,
      },
      {
        id: "5f446f2e5abedb2ba5eecd16",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2ef3942f4e607e47e2",
        returned: true,
      },
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: true,
      },
      {
        id: "5f446f2e102899f8b6d2c20e",
        returned: true,
      },
      {
        id: "5f446f2e22469f38e4455c73",
        returned: true,
      },
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2e4eff1030e7316861",
        returned: true,
      },
      {
        id: "5f446f2efa2e5110917e5929",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: true,
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: true,
      },
      {
        id: "5f446f2e93963fcd4e5adf00",
        returned: true,
      },
      {
        id: "5f446f2e7a1be21e362b82f9",
        returned: true,
      },
      {
        id: "5f446f2e3900dfec59489477",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132e3bd9feb6151fc57",
    title: "duis ea sunt nulla est",
    genre: "Psychology",
    authorId: 40,
    borrows: [
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2e91c2af00cb74e82b",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
      {
        id: "5f446f2ead0070f44676f2f6",
        returned: true,
      },
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: true,
      },
      {
        id: "5f446f2ef055e8f3064b763e",
        returned: true,
      },
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: true,
      },
      {
        id: "5f446f2e9487cb7bf46726b5",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2eeb9463f976413b65",
        returned: true,
      },
      {
        id: "5f446f2ead0070f44676f2f6",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2e136866e4fe60c893",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2ed3609b719568a415",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2edc76a41729492d41",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2ede4d3317692340da",
        returned: true,
      },
      {
        id: "5f446f2e102899f8b6d2c20e",
        returned: true,
      },
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
      {
        id: "5f446f2ea0502bf8cbc7676a",
        returned: true,
      },
      {
        id: "5f446f2e102899f8b6d2c20e",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132b842835fcac10606",
    title: "nisi voluptate et consectetur proident",
    genre: "Nonfiction",
    authorId: 12,
    borrows: [
      {
        id: "5f446f2e141b97d842b680fd",
        returned: false,
      },
      {
        id: "5f446f2ea2944b432d63f072",
        returned: true,
      },
      {
        id: "5f446f2ead0070f44676f2f6",
        returned: true,
      },
      {
        id: "5f446f2e2f35653fa80bf490",
        returned: true,
      },
      {
        id: "5f446f2efa7fe184c4014dd2",
        returned: true,
      },
      {
        id: "5f446f2e73359bee0fec4ba9",
        returned: true,
      },
      {
        id: "5f446f2e91c2af00cb74e82b",
        returned: true,
      },
      {
        id: "5f446f2e9487cb7bf46726b5",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2e4eff1030e7316861",
        returned: true,
      },
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2ead0070f44676f2f6",
        returned: true,
      },
      {
        id: "5f446f2ec926a2ac98231a64",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2edc76a41729492d41",
        returned: true,
      },
      {
        id: "5f446f2e22469f38e4455c73",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
      {
        id: "5f446f2e637138095dcc3db2",
        returned: true,
      },
    ],
  },
  {
    id: "5f44713297238c4eee17103c",
    title: "consectetur quis aliquip",
    genre: "Nonfiction",
    authorId: 33,
    borrows: [
      {
        id: "5f446f2eae901a82e0259947",
        returned: false,
      },
      {
        id: "5f446f2e136866e4fe60c893",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2e9487cb7bf46726b5",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471321b324af1d44816de",
    title: "incididunt officia amet nulla",
    genre: "Memoir",
    authorId: 25,
    borrows: [
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: false,
      },
      {
        id: "5f446f2efa2e5110917e5929",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: true,
      },
      {
        id: "5f446f2ee176f80b8d5d24da",
        returned: true,
      },
      {
        id: "5f446f2eef419207c5fa4ec9",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2ef3942f4e607e47e2",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2ed524723353040e5c",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132ee5532b325d575ac",
    title: "commodo ut ipsum",
    genre: "Young Adult",
    authorId: 31,
    borrows: [
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: false,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: true,
      },
      {
        id: "5f446f2e138a3841f7aeccf2",
        returned: true,
      },
      {
        id: "5f446f2e136866e4fe60c893",
        returned: true,
      },
      {
        id: "5f446f2ede05a0b1e3394d8b",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2e91a138c3a8ac6980",
        returned: true,
      },
      {
        id: "5f446f2e4081699cdc6a2735",
        returned: true,
      },
      {
        id: "5f446f2e0b3e2ff72fc503e7",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2e73359bee0fec4ba9",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
      {
        id: "5f446f2eed18105706d6ca19",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
      {
        id: "5f446f2e93963fcd4e5adf00",
        returned: true,
      },
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
      {
        id: "5f446f2efa2e5110917e5929",
        returned: true,
      },
      {
        id: "5f446f2ebe8314bcec531cc5",
        returned: true,
      },
      {
        id: "5f446f2e91a138c3a8ac6980",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
    ],
  },
  {
    id: "5f44713285313723dc44e96b",
    title: "adipisicing irure excepteur",
    genre: "Music",
    authorId: 39,
    borrows: [
      {
        id: "5f446f2e22469f38e4455c73",
        returned: false,
      },
      {
        id: "5f446f2e4081699cdc6a2735",
        returned: true,
      },
      {
        id: "5f446f2efa7fe184c4014dd2",
        returned: true,
      },
      {
        id: "5f446f2edc76a41729492d41",
        returned: true,
      },
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2e4eff1030e7316861",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2e3e70bb4e1ab821c9",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2e189628dfd4e6225e",
        returned: true,
      },
      {
        id: "5f446f2ebe8314bcec531cc5",
        returned: true,
      },
      {
        id: "5f446f2eeb9463f976413b65",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471327b4fc27678e1410e",
    title: "labore sit eu",
    genre: "Fiction",
    authorId: 18,
    borrows: [
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
      {
        id: "5f446f2edc76a41729492d41",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2ed3609b719568a415",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2e91a138c3a8ac6980",
        returned: true,
      },
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2e91a138c3a8ac6980",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2e637138095dcc3db2",
        returned: true,
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2e102899f8b6d2c20e",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471320520954466e4b9ca",
    title: "sunt esse ullamco",
    genre: "Nonfiction",
    authorId: 3,
    borrows: [
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: false,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2e7a1be21e362b82f9",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2ed3609b719568a415",
        returned: true,
      },
      {
        id: "5f446f2e5a23764338868b10",
        returned: true,
      },
      {
        id: "5f446f2ed92454081fb1999b",
        returned: true,
      },
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: true,
      },
    ],
  },
  {
    id: "5f44713241697c4536b330a2",
    title: "laborum minim voluptate nostrud",
    genre: "Psychology",
    authorId: 13,
    borrows: [
      {
        id: "5f446f2ede05a0b1e3394d8b",
        returned: true,
      },
      {
        id: "5f446f2e73359bee0fec4ba9",
        returned: true,
      },
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471327330752e469b5a2b",
    title: "nisi adipisicing consectetur tempor",
    genre: "Historical Fiction",
    authorId: 35,
    borrows: [
      {
        id: "5f446f2ee1661e64cde14e55",
        returned: true,
      },
      {
        id: "5f446f2ee176f80b8d5d24da",
        returned: true,
      },
      {
        id: "5f446f2ed524723353040e5c",
        returned: true,
      },
      {
        id: "5f446f2ed46724f41c9fc431",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2ed92454081fb1999b",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2e5a23764338868b10",
        returned: true,
      },
      {
        id: "5f446f2e5aa2bb5545a0f8a6",
        returned: true,
      },
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
      {
        id: "5f446f2ed524723353040e5c",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2e5abedb2ba5eecd16",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
      {
        id: "5f446f2e2f35653fa80bf490",
        returned: true,
      },
      {
        id: "5f446f2ea0502bf8cbc7676a",
        returned: true,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
      {
        id: "5f446f2eed18105706d6ca19",
        returned: true,
      },
      {
        id: "5f446f2e5aa2bb5545a0f8a6",
        returned: true,
      },
      {
        id: "5f446f2e5abedb2ba5eecd16",
        returned: true,
      },
      {
        id: "5f446f2e93963fcd4e5adf00",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132e0afc277c105bc87",
    title: "mollit amet veniam",
    genre: "Comics",
    authorId: 43,
    borrows: [
      {
        id: "5f446f2e141b97d842b680fd",
        returned: false,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2e3900dfec59489477",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132afcf7e8a94d85e5b",
    title: "culpa nulla ipsum id esse",
    genre: "Historical Fiction",
    authorId: 21,
    borrows: [
      {
        id: "5f446f2e141b97d842b680fd",
        returned: false,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
      {
        id: "5f446f2ede4d3317692340da",
        returned: true,
      },
      {
        id: "5f446f2ef3942f4e607e47e2",
        returned: true,
      },
      {
        id: "5f446f2edc76a41729492d41",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2e2f35653fa80bf490",
        returned: true,
      },
      {
        id: "5f446f2e0b3e2ff72fc503e7",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
      {
        id: "5f446f2ea0502bf8cbc7676a",
        returned: true,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: true,
      },
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: true,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
      {
        id: "5f446f2ed524723353040e5c",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
      {
        id: "5f446f2e91a138c3a8ac6980",
        returned: true,
      },
      {
        id: "5f446f2ee176f80b8d5d24da",
        returned: true,
      },
      {
        id: "5f446f2ef3942f4e607e47e2",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471320dd80f42b780c29e",
    title: "fugiat laborum officia ea aute",
    genre: "Travel",
    authorId: 9,
    borrows: [
      {
        id: "5f446f2e5aa2bb5545a0f8a6",
        returned: false,
      },
      {
        id: "5f446f2ede4d3317692340da",
        returned: true,
      },
      {
        id: "5f446f2e22469f38e4455c73",
        returned: true,
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2ee1661e64cde14e55",
        returned: true,
      },
      {
        id: "5f446f2e0b3e2ff72fc503e7",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2e138a3841f7aeccf2",
        returned: true,
      },
      {
        id: "5f446f2eeb9463f976413b65",
        returned: true,
      },
      {
        id: "5f446f2e9487cb7bf46726b5",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: true,
      },
      {
        id: "5f446f2e3900dfec59489477",
        returned: true,
      },
      {
        id: "5f446f2ee176f80b8d5d24da",
        returned: true,
      },
      {
        id: "5f446f2e91c2af00cb74e82b",
        returned: true,
      },
      {
        id: "5f446f2e2a4fcd687493a775",
        returned: true,
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2e637138095dcc3db2",
        returned: true,
      },
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: true,
      },
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132e7b393a3200bf810",
    title: "esse nisi commodo non id",
    genre: "Fantasy",
    authorId: 46,
    borrows: [
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: true,
      },
      {
        id: "5f446f2ec926a2ac98231a64",
        returned: true,
      },
      {
        id: "5f446f2e0b3e2ff72fc503e7",
        returned: true,
      },
      {
        id: "5f446f2edc76a41729492d41",
        returned: true,
      },
      {
        id: "5f446f2e637138095dcc3db2",
        returned: true,
      },
      {
        id: "5f446f2eeb9463f976413b65",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2e0b3e2ff72fc503e7",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2ed92454081fb1999b",
        returned: true,
      },
      {
        id: "5f446f2ed46724f41c9fc431",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2e9487cb7bf46726b5",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2e5abedb2ba5eecd16",
        returned: true,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2e4eff1030e7316861",
        returned: true,
      },
      {
        id: "5f446f2e102899f8b6d2c20e",
        returned: true,
      },
      {
        id: "5f446f2eed18105706d6ca19",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132ffbbf8cc8c3eb7f1",
    title: "est proident deserunt",
    genre: "Fantasy",
    authorId: 3,
    borrows: [
      {
        id: "5f446f2e5abedb2ba5eecd16",
        returned: false,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
      {
        id: "5f446f2ef3942f4e607e47e2",
        returned: true,
      },
      {
        id: "5f446f2e138a3841f7aeccf2",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471320ca2cfc95254423d",
    title: "do irure aliquip eu nisi",
    genre: "Romance",
    authorId: 13,
    borrows: [
      {
        id: "5f446f2e136866e4fe60c893",
        returned: true,
      },
      {
        id: "5f446f2ed524723353040e5c",
        returned: true,
      },
      {
        id: "5f446f2e59f9380a1d03d766",
        returned: true,
      },
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: true,
      },
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
      {
        id: "5f446f2ea2944b432d63f072",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2efa2e5110917e5929",
        returned: true,
      },
      {
        id: "5f446f2ef3942f4e607e47e2",
        returned: true,
      },
      {
        id: "5f446f2ed92454081fb1999b",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2e93963fcd4e5adf00",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2e4eff1030e7316861",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2ede4d3317692340da",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
      {
        id: "5f446f2e93963fcd4e5adf00",
        returned: true,
      },
      {
        id: "5f446f2edc76a41729492d41",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
      {
        id: "5f446f2e102899f8b6d2c20e",
        returned: true,
      },
      {
        id: "5f446f2e59f9380a1d03d766",
        returned: true,
      },
      {
        id: "5f446f2e637138095dcc3db2",
        returned: true,
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
      {
        id: "5f446f2e7a1be21e362b82f9",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132aa997e58a3341859",
    title: "sit tempor aliqua ut",
    genre: "Fantasy",
    authorId: 34,
    borrows: [
      {
        id: "5f446f2e1c71888e2233621e",
        returned: false,
      },
      {
        id: "5f446f2e6dd33178245e5771",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2e91a138c3a8ac6980",
        returned: true,
      },
      {
        id: "5f446f2ea2944b432d63f072",
        returned: true,
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: true,
      },
      {
        id: "5f446f2e6dd33178245e5771",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2e189628dfd4e6225e",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2e91a138c3a8ac6980",
        returned: true,
      },
      {
        id: "5f446f2e5a23764338868b10",
        returned: true,
      },
      {
        id: "5f446f2e91c2af00cb74e82b",
        returned: true,
      },
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2efa7fe184c4014dd2",
        returned: true,
      },
      {
        id: "5f446f2e9487cb7bf46726b5",
        returned: true,
      },
      {
        id: "5f446f2e93963fcd4e5adf00",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471325d2eaf3e54cbf734",
    title: "exercitation irure labore",
    genre: "Memoir",
    authorId: 30,
    borrows: [
      {
        id: "5f446f2ee176f80b8d5d24da",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2eeb9463f976413b65",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
    ],
  },
  {
    id: "5f44713204b0ed36c95a6fea",
    title: "ad anim voluptate ex labore",
    genre: "Fiction",
    authorId: 23,
    borrows: [
      {
        id: "5f446f2ed3609b719568a415",
        returned: false,
      },
      {
        id: "5f446f2e7a1be21e362b82f9",
        returned: true,
      },
      {
        id: "5f446f2eef419207c5fa4ec9",
        returned: true,
      },
      {
        id: "5f446f2ead0070f44676f2f6",
        returned: true,
      },
      {
        id: "5f446f2e2a4fcd687493a775",
        returned: true,
      },
      {
        id: "5f446f2e0b3e2ff72fc503e7",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2e189628dfd4e6225e",
        returned: true,
      },
      {
        id: "5f446f2e136866e4fe60c893",
        returned: true,
      },
      {
        id: "5f446f2eeb9463f976413b65",
        returned: true,
      },
      {
        id: "5f446f2ed524723353040e5c",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2ed524723353040e5c",
        returned: true,
      },
      {
        id: "5f446f2edc76a41729492d41",
        returned: true,
      },
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
      {
        id: "5f446f2ef055e8f3064b763e",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132b830d7c5741c27ca",
    title: "id anim exercitation",
    genre: "Thriller",
    authorId: 6,
    borrows: [
      {
        id: "5f446f2ed92454081fb1999b",
        returned: false,
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2e189628dfd4e6225e",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132390aee45a097ab58",
    title: "dolore in labore",
    genre: "Biography",
    authorId: 8,
    borrows: [
      {
        id: "5f446f2ef3942f4e607e47e2",
        returned: false,
      },
      {
        id: "5f446f2ed524723353040e5c",
        returned: true,
      },
      {
        id: "5f446f2e2a4fcd687493a775",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2e3e70bb4e1ab821c9",
        returned: true,
      },
      {
        id: "5f446f2ec926a2ac98231a64",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2e2f35653fa80bf490",
        returned: true,
      },
      {
        id: "5f446f2e4eff1030e7316861",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2e5abedb2ba5eecd16",
        returned: true,
      },
      {
        id: "5f446f2e5aa2bb5545a0f8a6",
        returned: true,
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: true,
      },
      {
        id: "5f446f2ebe8314bcec531cc5",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2eed18105706d6ca19",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
      {
        id: "5f446f2efa7fe184c4014dd2",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
      {
        id: "5f446f2ec926a2ac98231a64",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2ee176f80b8d5d24da",
        returned: true,
      },
      {
        id: "5f446f2e5aa2bb5545a0f8a6",
        returned: true,
      },
      {
        id: "5f446f2e91c2af00cb74e82b",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
    ],
  },
  {
    id: "5f44713281466a21e2b3a372",
    title: "Lorem laboris duis aliquip magna",
    genre: "Thriller",
    authorId: 45,
    borrows: [
      {
        id: "5f446f2ed524723353040e5c",
        returned: false,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2e0b3e2ff72fc503e7",
        returned: true,
      },
      {
        id: "5f446f2efa7fe184c4014dd2",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2e0b3e2ff72fc503e7",
        returned: true,
      },
      {
        id: "5f446f2ebe8314bcec531cc5",
        returned: true,
      },
      {
        id: "5f446f2e91c2af00cb74e82b",
        returned: true,
      },
      {
        id: "5f446f2e73359bee0fec4ba9",
        returned: true,
      },
      {
        id: "5f446f2e7a1be21e362b82f9",
        returned: true,
      },
      {
        id: "5f446f2efa2e5110917e5929",
        returned: true,
      },
      {
        id: "5f446f2e91a138c3a8ac6980",
        returned: true,
      },
      {
        id: "5f446f2e102899f8b6d2c20e",
        returned: true,
      },
      {
        id: "5f446f2e91c2af00cb74e82b",
        returned: true,
      },
      {
        id: "5f446f2e5abedb2ba5eecd16",
        returned: true,
      },
      {
        id: "5f446f2eef419207c5fa4ec9",
        returned: true,
      },
      {
        id: "5f446f2e91a138c3a8ac6980",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
    ],
  },
  {
    id: "5f44713239b26b9da0b77fca",
    title: "amet in quis velit",
    genre: "Thriller",
    authorId: 48,
    borrows: [
      {
        id: "5f446f2e138a3841f7aeccf2",
        returned: true,
      },
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: true,
      },
      {
        id: "5f446f2e91a138c3a8ac6980",
        returned: true,
      },
      {
        id: "5f446f2ed3609b719568a415",
        returned: true,
      },
      {
        id: "5f446f2ed46724f41c9fc431",
        returned: true,
      },
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: true,
      },
      {
        id: "5f446f2ed46724f41c9fc431",
        returned: true,
      },
      {
        id: "5f446f2efa7fe184c4014dd2",
        returned: true,
      },
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2e4eff1030e7316861",
        returned: true,
      },
      {
        id: "5f446f2e189628dfd4e6225e",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2eed18105706d6ca19",
        returned: true,
      },
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: true,
      },
      {
        id: "5f446f2e637138095dcc3db2",
        returned: true,
      },
      {
        id: "5f446f2ed524723353040e5c",
        returned: true,
      },
      {
        id: "5f446f2ed3609b719568a415",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2edc76a41729492d41",
        returned: true,
      },
    ],
  },
  {
    id: "5f44713261c717f55f6db3f4",
    title: "eu sunt mollit elit mollit",
    genre: "History",
    authorId: 0,
    borrows: [
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: false,
      },
      {
        id: "5f446f2efa7fe184c4014dd2",
        returned: true,
      },
      {
        id: "5f446f2e7a1be21e362b82f9",
        returned: true,
      },
      {
        id: "5f446f2e91c2af00cb74e82b",
        returned: true,
      },
      {
        id: "5f446f2e93963fcd4e5adf00",
        returned: true,
      },
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: true,
      },
      {
        id: "5f446f2e5abedb2ba5eecd16",
        returned: true,
      },
      {
        id: "5f446f2e93963fcd4e5adf00",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132d19cb775a35cbb28",
    title: "cupidatat eu amet deserunt",
    genre: "Fiction",
    authorId: 15,
    borrows: [
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: false,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2ef3942f4e607e47e2",
        returned: true,
      },
      {
        id: "5f446f2e4eff1030e7316861",
        returned: true,
      },
      {
        id: "5f446f2e2a4fcd687493a775",
        returned: true,
      },
      {
        id: "5f446f2ef3942f4e607e47e2",
        returned: true,
      },
      {
        id: "5f446f2e136866e4fe60c893",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2ea2944b432d63f072",
        returned: true,
      },
      {
        id: "5f446f2e637138095dcc3db2",
        returned: true,
      },
      {
        id: "5f446f2eef419207c5fa4ec9",
        returned: true,
      },
      {
        id: "5f446f2e637138095dcc3db2",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132bd3624c866d92243",
    title: "fugiat ea voluptate consequat ipsum",
    genre: "Art",
    authorId: 32,
    borrows: [
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: true,
      },
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: true,
      },
      {
        id: "5f446f2e3900dfec59489477",
        returned: true,
      },
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: true,
      },
      {
        id: "5f446f2e22469f38e4455c73",
        returned: true,
      },
      {
        id: "5f446f2eeb9463f976413b65",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2e0b3e2ff72fc503e7",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2e5a23764338868b10",
        returned: true,
      },
      {
        id: "5f446f2e102899f8b6d2c20e",
        returned: true,
      },
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: true,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2e22469f38e4455c73",
        returned: true,
      },
      {
        id: "5f446f2e5abedb2ba5eecd16",
        returned: true,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2e4eff1030e7316861",
        returned: true,
      },
      {
        id: "5f446f2ee176f80b8d5d24da",
        returned: true,
      },
      {
        id: "5f446f2e5a23764338868b10",
        returned: true,
      },
      {
        id: "5f446f2e4081699cdc6a2735",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2e4eff1030e7316861",
        returned: true,
      },
      {
        id: "5f446f2ef055e8f3064b763e",
        returned: true,
      },
      {
        id: "5f446f2e91a138c3a8ac6980",
        returned: true,
      },
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471329e4c8f58e729aafa",
    title: "laboris nisi commodo",
    genre: "Music",
    authorId: 4,
    borrows: [
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: false,
      },
      {
        id: "5f446f2e102899f8b6d2c20e",
        returned: true,
      },
      {
        id: "5f446f2e73359bee0fec4ba9",
        returned: true,
      },
      {
        id: "5f446f2e22469f38e4455c73",
        returned: true,
      },
      {
        id: "5f446f2e5abedb2ba5eecd16",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
      {
        id: "5f446f2e4081699cdc6a2735",
        returned: true,
      },
      {
        id: "5f446f2eeb9463f976413b65",
        returned: true,
      },
      {
        id: "5f446f2efa7fe184c4014dd2",
        returned: true,
      },
      {
        id: "5f446f2ea2944b432d63f072",
        returned: true,
      },
      {
        id: "5f446f2ed46724f41c9fc431",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2eeb9463f976413b65",
        returned: true,
      },
      {
        id: "5f446f2edc76a41729492d41",
        returned: true,
      },
      {
        id: "5f446f2e4081699cdc6a2735",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2e9487cb7bf46726b5",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2e73359bee0fec4ba9",
        returned: true,
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: true,
      },
      {
        id: "5f446f2edc76a41729492d41",
        returned: true,
      },
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: true,
      },
      {
        id: "5f446f2e73359bee0fec4ba9",
        returned: true,
      },
      {
        id: "5f446f2e2a4fcd687493a775",
        returned: true,
      },
      {
        id: "5f446f2ead0070f44676f2f6",
        returned: true,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2e2a4fcd687493a775",
        returned: true,
      },
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: true,
      },
      {
        id: "5f446f2e136866e4fe60c893",
        returned: true,
      },
    ],
  },
  {
    id: "5f44713255f90dfaaba1e00e",
    title: "enim duis velit culpa ut",
    genre: "Fantasy",
    authorId: 0,
    borrows: [
      {
        id: "5f446f2ee176f80b8d5d24da",
        returned: true,
      },
      {
        id: "5f446f2ebe8314bcec531cc5",
        returned: true,
      },
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: true,
      },
      {
        id: "5f446f2ef3942f4e607e47e2",
        returned: true,
      },
      {
        id: "5f446f2e3e70bb4e1ab821c9",
        returned: true,
      },
      {
        id: "5f446f2e93963fcd4e5adf00",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
      {
        id: "5f446f2ee1661e64cde14e55",
        returned: true,
      },
      {
        id: "5f446f2eed18105706d6ca19",
        returned: true,
      },
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: true,
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: true,
      },
      {
        id: "5f446f2ebe8314bcec531cc5",
        returned: true,
      },
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
      {
        id: "5f446f2ef3942f4e607e47e2",
        returned: true,
      },
      {
        id: "5f446f2e102899f8b6d2c20e",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2ead0070f44676f2f6",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132d05f85a604162b68",
    title: "qui dolore elit veniam",
    genre: "Art",
    authorId: 37,
    borrows: [
      {
        id: "5f446f2e409f8883af2955dd",
        returned: false,
      },
      {
        id: "5f446f2e93963fcd4e5adf00",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: true,
      },
      {
        id: "5f446f2e5aa2bb5545a0f8a6",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
      {
        id: "5f446f2e2f35653fa80bf490",
        returned: true,
      },
      {
        id: "5f446f2e3900dfec59489477",
        returned: true,
      },
      {
        id: "5f446f2ea2944b432d63f072",
        returned: true,
      },
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132f18ba1e51e6332cf",
    title: "esse nulla mollit",
    genre: "Fiction",
    authorId: 37,
    borrows: [
      {
        id: "5f446f2ed92454081fb1999b",
        returned: false,
      },
      {
        id: "5f446f2e9487cb7bf46726b5",
        returned: true,
      },
      {
        id: "5f446f2e637138095dcc3db2",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2e59f9380a1d03d766",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2e73359bee0fec4ba9",
        returned: true,
      },
      {
        id: "5f446f2ede05a0b1e3394d8b",
        returned: true,
      },
      {
        id: "5f446f2e102899f8b6d2c20e",
        returned: true,
      },
      {
        id: "5f446f2e5a23764338868b10",
        returned: true,
      },
      {
        id: "5f446f2eeb9463f976413b65",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471321db144e328b8a6e0",
    title: "culpa est do mollit ut",
    genre: "Young Adult",
    authorId: 25,
    borrows: [
      {
        id: "5f446f2ed46724f41c9fc431",
        returned: false,
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: true,
      },
      {
        id: "5f446f2e91a138c3a8ac6980",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132b1cd3c79b1fd29b8",
    title: "incididunt nostrud minim",
    genre: "Classics",
    authorId: 4,
    borrows: [
      {
        id: "5f446f2e91c2af00cb74e82b",
        returned: false,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: true,
      },
      {
        id: "5f446f2ead0070f44676f2f6",
        returned: true,
      },
      {
        id: "5f446f2e59f9380a1d03d766",
        returned: true,
      },
      {
        id: "5f446f2e637138095dcc3db2",
        returned: true,
      },
      {
        id: "5f446f2e93963fcd4e5adf00",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: true,
      },
      {
        id: "5f446f2ea0502bf8cbc7676a",
        returned: true,
      },
      {
        id: "5f446f2ee176f80b8d5d24da",
        returned: true,
      },
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2e22469f38e4455c73",
        returned: true,
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: true,
      },
      {
        id: "5f446f2ede05a0b1e3394d8b",
        returned: true,
      },
      {
        id: "5f446f2ede4d3317692340da",
        returned: true,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: true,
      },
      {
        id: "5f446f2e637138095dcc3db2",
        returned: true,
      },
      {
        id: "5f446f2ed3609b719568a415",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2ea0502bf8cbc7676a",
        returned: true,
      },
      {
        id: "5f446f2ea0502bf8cbc7676a",
        returned: true,
      },
      {
        id: "5f446f2ef055e8f3064b763e",
        returned: true,
      },
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
      {
        id: "5f446f2ea2944b432d63f072",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471325c455daaad7796a0",
    title: "deserunt voluptate irure fugiat sunt",
    genre: "Graphic Novels",
    authorId: 11,
    borrows: [
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2e637138095dcc3db2",
        returned: true,
      },
      {
        id: "5f446f2efa7fe184c4014dd2",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132c962d9fa6a3b613d",
    title: "cupidatat nisi laboris sint",
    genre: "Nonfiction",
    authorId: 1,
    borrows: [
      {
        id: "5f446f2e7a1be21e362b82f9",
        returned: false,
      },
      {
        id: "5f446f2e2f35653fa80bf490",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2e5aa2bb5545a0f8a6",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2e73359bee0fec4ba9",
        returned: true,
      },
      {
        id: "5f446f2e5a23764338868b10",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2e7a1be21e362b82f9",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471322e308348d0bbbd69",
    title: "laboris fugiat anim excepteur",
    genre: "Business",
    authorId: 30,
    borrows: [
      {
        id: "5f446f2e3e70bb4e1ab821c9",
        returned: true,
      },
      {
        id: "5f446f2ec926a2ac98231a64",
        returned: true,
      },
      {
        id: "5f446f2e91c2af00cb74e82b",
        returned: true,
      },
      {
        id: "5f446f2e7a1be21e362b82f9",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: true,
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: true,
      },
      {
        id: "5f446f2ee176f80b8d5d24da",
        returned: true,
      },
      {
        id: "5f446f2eeb9463f976413b65",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132c3aa2b527bab1cfe",
    title: "amet consequat tempor",
    genre: "Cookbooks",
    authorId: 29,
    borrows: [
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: false,
      },
      {
        id: "5f446f2e102899f8b6d2c20e",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2ea2944b432d63f072",
        returned: true,
      },
      {
        id: "5f446f2eef419207c5fa4ec9",
        returned: true,
      },
      {
        id: "5f446f2ec926a2ac98231a64",
        returned: true,
      },
      {
        id: "5f446f2e6dd33178245e5771",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132894e04d45c00ffba",
    title: "ipsum et quis non",
    genre: "Horror",
    authorId: 14,
    borrows: [
      {
        id: "5f446f2e7a1be21e362b82f9",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
      {
        id: "5f446f2ec926a2ac98231a64",
        returned: true,
      },
      {
        id: "5f446f2e9487cb7bf46726b5",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2efa7fe184c4014dd2",
        returned: true,
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2eed18105706d6ca19",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2e4081699cdc6a2735",
        returned: true,
      },
      {
        id: "5f446f2e91c2af00cb74e82b",
        returned: true,
      },
      {
        id: "5f446f2e136866e4fe60c893",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: true,
      },
      {
        id: "5f446f2e0b3e2ff72fc503e7",
        returned: true,
      },
      {
        id: "5f446f2e136866e4fe60c893",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2e6dd33178245e5771",
        returned: true,
      },
      {
        id: "5f446f2e102899f8b6d2c20e",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132c65dc9fe21239346",
    title: "nulla incididunt amet reprehenderit",
    genre: "Science",
    authorId: 34,
    borrows: [
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: true,
      },
      {
        id: "5f446f2ee176f80b8d5d24da",
        returned: true,
      },
      {
        id: "5f446f2e5abedb2ba5eecd16",
        returned: true,
      },
      {
        id: "5f446f2ede05a0b1e3394d8b",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2ef3942f4e607e47e2",
        returned: true,
      },
      {
        id: "5f446f2e6dd33178245e5771",
        returned: true,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
    ],
  },
  {
    id: "5f44713239682135cb021630",
    title: "voluptate eu esse duis",
    genre: "Music",
    authorId: 34,
    borrows: [
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: true,
      },
      {
        id: "5f446f2e0b3e2ff72fc503e7",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2e73359bee0fec4ba9",
        returned: true,
      },
      {
        id: "5f446f2ed524723353040e5c",
        returned: true,
      },
      {
        id: "5f446f2e5aa2bb5545a0f8a6",
        returned: true,
      },
      {
        id: "5f446f2ef055e8f3064b763e",
        returned: true,
      },
      {
        id: "5f446f2ea0502bf8cbc7676a",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2e73359bee0fec4ba9",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132dbc4d68021c29ed1",
    title: "duis mollit sunt magna",
    genre: "Thriller",
    authorId: 0,
    borrows: [
      {
        id: "5f446f2e102899f8b6d2c20e",
        returned: false,
      },
      {
        id: "5f446f2e6dd33178245e5771",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132aca521f9ed1ee0ef",
    title: "ea non mollit incididunt",
    genre: "Mystery",
    authorId: 41,
    borrows: [
      {
        returned: false,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2eef419207c5fa4ec9",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2eed18105706d6ca19",
        returned: true,
      },
      {
        id: "5f446f2ee1661e64cde14e55",
        returned: true,
      },
      {
        id: "5f446f2e3e70bb4e1ab821c9",
        returned: true,
      },
      {
        id: "5f446f2e91a138c3a8ac6980",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132e8619ec96b81e80c",
    title: "veniam aute culpa officia incididunt",
    genre: "Comics",
    authorId: 8,
    borrows: [
      {
        id: "5f446f2eed18105706d6ca19",
        returned: false,
      },
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: true,
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
      {
        id: "5f446f2e73359bee0fec4ba9",
        returned: true,
      },
      {
        id: "5f446f2ed46724f41c9fc431",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
      {
        id: "5f446f2e138a3841f7aeccf2",
        returned: true,
      },
      {
        id: "5f446f2e6dd33178245e5771",
        returned: true,
      },
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2ea2944b432d63f072",
        returned: true,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2e5aa2bb5545a0f8a6",
        returned: true,
      },
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: true,
      },
      {
        id: "5f446f2e4eff1030e7316861",
        returned: true,
      },
      {
        id: "5f446f2e91a138c3a8ac6980",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471323994b1524d953cae",
    title: "sint commodo cillum",
    genre: "History",
    authorId: 33,
    borrows: [
      {
        id: "5f446f2ef055e8f3064b763e",
        returned: true,
      },
      {
        id: "5f446f2e59f9380a1d03d766",
        returned: true,
      },
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2ea0502bf8cbc7676a",
        returned: true,
      },
      {
        id: "5f446f2e93963fcd4e5adf00",
        returned: true,
      },
      {
        id: "5f446f2ed92454081fb1999b",
        returned: true,
      },
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
      {
        id: "5f446f2efa2e5110917e5929",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2ea0502bf8cbc7676a",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2ed524723353040e5c",
        returned: true,
      },
      {
        id: "5f446f2edc76a41729492d41",
        returned: true,
      },
      {
        id: "5f446f2e91c2af00cb74e82b",
        returned: true,
      },
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: true,
      },
      {
        id: "5f446f2ee176f80b8d5d24da",
        returned: true,
      },
      {
        id: "5f446f2e102899f8b6d2c20e",
        returned: true,
      },
      {
        id: "5f446f2ed524723353040e5c",
        returned: true,
      },
    ],
  },
  {
    id: "5f44713248878af48a5276f4",
    title: "qui excepteur ullamco proident",
    genre: "Nonfiction",
    authorId: 33,
    borrows: [
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: false,
      },
      {
        id: "5f446f2ede05a0b1e3394d8b",
        returned: true,
      },
      {
        id: "5f446f2ea0502bf8cbc7676a",
        returned: true,
      },
      {
        id: "5f446f2e138a3841f7aeccf2",
        returned: true,
      },
      {
        id: "5f446f2e102899f8b6d2c20e",
        returned: true,
      },
      {
        id: "5f446f2ed524723353040e5c",
        returned: true,
      },
      {
        id: "5f446f2e189628dfd4e6225e",
        returned: true,
      },
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
      {
        id: "5f446f2e6dd33178245e5771",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2ec926a2ac98231a64",
        returned: true,
      },
      {
        id: "5f446f2ef055e8f3064b763e",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132d615b1691872b9fb",
    title: "ex dolore exercitation commodo",
    genre: "Business",
    authorId: 12,
    borrows: [
      {
        returned: false,
      },
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
    ],
  },
  {
    id: "5f44713215ddc114aa68bc65",
    title: "dolor do exercitation sit",
    genre: "Thriller",
    authorId: 37,
    borrows: [
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2e136866e4fe60c893",
        returned: true,
      },
      {
        id: "5f446f2ea2944b432d63f072",
        returned: true,
      },
      {
        id: "5f446f2e7a1be21e362b82f9",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
      {
        id: "5f446f2e7a1be21e362b82f9",
        returned: true,
      },
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: true,
      },
      {
        id: "5f446f2e93963fcd4e5adf00",
        returned: true,
      },
      {
        id: "5f446f2ede4d3317692340da",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
    ],
  },
  {
    id: "5f44713262a38a6cd60afc9c",
    title: "duis mollit mollit pariatur",
    genre: "Historical Fiction",
    authorId: 21,
    borrows: [
      {
        id: "5f446f2e102899f8b6d2c20e",
        returned: false,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
      {
        id: "5f446f2ef055e8f3064b763e",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2e73359bee0fec4ba9",
        returned: true,
      },
      {
        id: "5f446f2ede05a0b1e3394d8b",
        returned: true,
      },
      {
        id: "5f446f2ede05a0b1e3394d8b",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2e5a23764338868b10",
        returned: true,
      },
      {
        id: "5f446f2e4eff1030e7316861",
        returned: true,
      },
    ],
  },
  {
    id: "5f44713285f19bfe375a0259",
    title: "nostrud labore magna sint",
    genre: "Biography",
    authorId: 24,
    borrows: [
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2ed3609b719568a415",
        returned: true,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: true,
      },
      {
        id: "5f446f2e6dd33178245e5771",
        returned: true,
      },
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: true,
      },
      {
        id: "5f446f2e2a4fcd687493a775",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2eef419207c5fa4ec9",
        returned: true,
      },
      {
        id: "5f446f2ee1661e64cde14e55",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
      {
        id: "5f446f2ead0070f44676f2f6",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2ed3609b719568a415",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: true,
      },
      {
        id: "5f446f2e5a23764338868b10",
        returned: true,
      },
      {
        id: "5f446f2ea0502bf8cbc7676a",
        returned: true,
      },
      {
        id: "5f446f2e3900dfec59489477",
        returned: true,
      },
      {
        id: "5f446f2efa2e5110917e5929",
        returned: true,
      },
      {
        id: "5f446f2e3900dfec59489477",
        returned: true,
      },
      {
        id: "5f446f2e22469f38e4455c73",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132ead2ba06de1183ce",
    title: "tempor sit reprehenderit consectetur commodo",
    genre: "Business",
    authorId: 3,
    borrows: [
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2efa7fe184c4014dd2",
        returned: true,
      },
      {
        id: "5f446f2efa2e5110917e5929",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: true,
      },
      {
        id: "5f446f2ec926a2ac98231a64",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2ed46724f41c9fc431",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2ef055e8f3064b763e",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
      {
        id: "5f446f2e138a3841f7aeccf2",
        returned: true,
      },
      {
        id: "5f446f2e5a23764338868b10",
        returned: true,
      },
      {
        id: "5f446f2ebe8314bcec531cc5",
        returned: true,
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471325663f12d3bbcabf0",
    title: "magna id id Lorem nulla",
    genre: "History",
    authorId: 39,
    borrows: [
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: false,
      },
      {
        id: "5f446f2e2a4fcd687493a775",
        returned: true,
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: true,
      },
      {
        id: "5f446f2e102899f8b6d2c20e",
        returned: true,
      },
      {
        id: "5f446f2e91a138c3a8ac6980",
        returned: true,
      },
      {
        id: "5f446f2e2a4fcd687493a775",
        returned: true,
      },
      {
        id: "5f446f2e2f35653fa80bf490",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471320da643337c377348",
    title: "proident nulla ipsum nisi",
    genre: "Fiction",
    authorId: 30,
    borrows: [
      {
        id: "5f446f2e22469f38e4455c73",
        returned: false,
      },
      {
        id: "5f446f2e2a4fcd687493a775",
        returned: true,
      },
      {
        id: "5f446f2ec926a2ac98231a64",
        returned: true,
      },
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
      {
        id: "5f446f2e6dd33178245e5771",
        returned: true,
      },
      {
        id: "5f446f2efa2e5110917e5929",
        returned: true,
      },
      {
        id: "5f446f2e7a1be21e362b82f9",
        returned: true,
      },
      {
        id: "5f446f2e59f9380a1d03d766",
        returned: true,
      },
      {
        id: "5f446f2e5abedb2ba5eecd16",
        returned: true,
      },
      {
        id: "5f446f2e6dd33178245e5771",
        returned: true,
      },
      {
        id: "5f446f2e6dd33178245e5771",
        returned: true,
      },
      {
        id: "5f446f2ede4d3317692340da",
        returned: true,
      },
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132031a07d9b54e0c54",
    title: "ea magna Lorem et",
    genre: "Poetry",
    authorId: 33,
    borrows: [
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: false,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
      {
        id: "5f446f2e3e70bb4e1ab821c9",
        returned: true,
      },
      {
        id: "5f446f2ee1661e64cde14e55",
        returned: true,
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2eeb9463f976413b65",
        returned: true,
      },
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: true,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132ad2bf3c7a11e91ab",
    title: "ipsum commodo est fugiat dolore",
    genre: "Nonfiction",
    authorId: 46,
    borrows: [
      {
        id: "5f446f2e0b3e2ff72fc503e7",
        returned: false,
      },
      {
        id: "5f446f2ea0502bf8cbc7676a",
        returned: true,
      },
      {
        id: "5f446f2ee176f80b8d5d24da",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2edc76a41729492d41",
        returned: true,
      },
      {
        id: "5f446f2e2a4fcd687493a775",
        returned: true,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471324d3e03447944198c",
    title: "id culpa reprehenderit",
    genre: "Memoir",
    authorId: 4,
    borrows: [
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: false,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2ed92454081fb1999b",
        returned: true,
      },
      {
        id: "5f446f2ed92454081fb1999b",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2ede4d3317692340da",
        returned: true,
      },
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2ec926a2ac98231a64",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2e138a3841f7aeccf2",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2ed46724f41c9fc431",
        returned: true,
      },
      {
        id: "5f446f2ed46724f41c9fc431",
        returned: true,
      },
      {
        id: "5f446f2e5abedb2ba5eecd16",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471323500c35b1a8d9535",
    title: "minim mollit veniam",
    genre: "Cookbooks",
    authorId: 37,
    borrows: [
      {
        id: "5f446f2e22469f38e4455c73",
        returned: true,
      },
      {
        id: "5f446f2e9487cb7bf46726b5",
        returned: true,
      },
      {
        id: "5f446f2efa2e5110917e5929",
        returned: true,
      },
      {
        id: "5f446f2eeb9463f976413b65",
        returned: true,
      },
      {
        id: "5f446f2e2a4fcd687493a775",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
      {
        id: "5f446f2ec926a2ac98231a64",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2e3900dfec59489477",
        returned: true,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
      {
        id: "5f446f2e73359bee0fec4ba9",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2e59f9380a1d03d766",
        returned: true,
      },
      {
        id: "5f446f2e73359bee0fec4ba9",
        returned: true,
      },
      {
        id: "5f446f2ee176f80b8d5d24da",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132a88aa830cc5aad39",
    title: "ullamco eiusmod proident dolor",
    genre: "Historical Fiction",
    authorId: 11,
    borrows: [
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
      {
        id: "5f446f2ea0502bf8cbc7676a",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2e0b3e2ff72fc503e7",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2ef055e8f3064b763e",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
      {
        id: "5f446f2e4eff1030e7316861",
        returned: true,
      },
      {
        id: "5f446f2e59f9380a1d03d766",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2e102899f8b6d2c20e",
        returned: true,
      },
      {
        id: "5f446f2ea2944b432d63f072",
        returned: true,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
      {
        id: "5f446f2e22469f38e4455c73",
        returned: true,
      },
      {
        id: "5f446f2e2a4fcd687493a775",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2edc76a41729492d41",
        returned: true,
      },
      {
        id: "5f446f2efa7fe184c4014dd2",
        returned: true,
      },
      {
        id: "5f446f2efa2e5110917e5929",
        returned: true,
      },
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2ea0502bf8cbc7676a",
        returned: true,
      },
      {
        id: "5f446f2ea2944b432d63f072",
        returned: true,
      },
      {
        id: "5f446f2e2a4fcd687493a775",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2ead0070f44676f2f6",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132c8ae46c7de530a3d",
    title: "ad laboris id",
    genre: "Classics",
    authorId: 8,
    borrows: [
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: false,
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: true,
      },
      {
        id: "5f446f2ea0502bf8cbc7676a",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471325127d93f32c3ee68",
    title: "exercitation consectetur consectetur consequat",
    genre: "Comics",
    authorId: 30,
    borrows: [
      {
        id: "5f446f2e4eff1030e7316861",
        returned: false,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2e4eff1030e7316861",
        returned: true,
      },
      {
        id: "5f446f2e59f9380a1d03d766",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2edc76a41729492d41",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2ed92454081fb1999b",
        returned: true,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
    ],
  },
  {
    id: "5f44713259117092ab5b7361",
    title: "anim dolor sint quis ipsum",
    genre: "Psychology",
    authorId: 18,
    borrows: [
      {
        id: "5f446f2e91c2af00cb74e82b",
        returned: false,
      },
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: true,
      },
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: true,
      },
      {
        id: "5f446f2e5a23764338868b10",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2ede4d3317692340da",
        returned: true,
      },
      {
        id: "5f446f2e0b3e2ff72fc503e7",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: true,
      },
      {
        id: "5f446f2efa2e5110917e5929",
        returned: true,
      },
      {
        id: "5f446f2e189628dfd4e6225e",
        returned: true,
      },
      {
        id: "5f446f2e91c2af00cb74e82b",
        returned: true,
      },
      {
        id: "5f446f2e189628dfd4e6225e",
        returned: true,
      },
      {
        id: "5f446f2e0b3e2ff72fc503e7",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2e136866e4fe60c893",
        returned: true,
      },
      {
        id: "5f446f2e3900dfec59489477",
        returned: true,
      },
      {
        id: "5f446f2ede4d3317692340da",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: true,
      },
    ],
  },
  {
    id: "5f44713287aa24ab50efdad2",
    title: "aliquip aliquip veniam Lorem",
    genre: "Self Help",
    authorId: 43,
    borrows: [
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2ed3609b719568a415",
        returned: true,
      },
      {
        id: "5f446f2e5aa2bb5545a0f8a6",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471324617634315012c21",
    title: "dolor tempor amet ea",
    genre: "Fiction",
    authorId: 10,
    borrows: [
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: false,
      },
      {
        id: "5f446f2ed524723353040e5c",
        returned: true,
      },
      {
        id: "5f446f2e2a4fcd687493a775",
        returned: true,
      },
      {
        id: "5f446f2e5abedb2ba5eecd16",
        returned: true,
      },
      {
        id: "5f446f2e0b3e2ff72fc503e7",
        returned: true,
      },
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: true,
      },
      {
        id: "5f446f2efa2e5110917e5929",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2ed46724f41c9fc431",
        returned: true,
      },
    ],
  },
  {
    id: "5f44713229afd8e081c13991",
    title: "proident nulla adipisicing dolore ut",
    genre: "Self Help",
    authorId: 14,
    borrows: [
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: false,
      },
      {
        id: "5f446f2e3e70bb4e1ab821c9",
        returned: true,
      },
      {
        id: "5f446f2eef419207c5fa4ec9",
        returned: true,
      },
      {
        id: "5f446f2e138a3841f7aeccf2",
        returned: true,
      },
      {
        id: "5f446f2e189628dfd4e6225e",
        returned: true,
      },
      {
        id: "5f446f2e93963fcd4e5adf00",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471323da820e9bceaa706",
    title: "aliquip labore ex",
    genre: "Fantasy",
    authorId: 42,
    borrows: [
      {
        id: "5f446f2e22469f38e4455c73",
        returned: true,
      },
      {
        id: "5f446f2ed46724f41c9fc431",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
      {
        id: "5f446f2e138a3841f7aeccf2",
        returned: true,
      },
      {
        id: "5f446f2e91c2af00cb74e82b",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2ef055e8f3064b763e",
        returned: true,
      },
      {
        id: "5f446f2ed524723353040e5c",
        returned: true,
      },
      {
        id: "5f446f2ea2944b432d63f072",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132d7e909cc89b0d507",
    title: "magna mollit excepteur pariatur aute",
    genre: "Travel",
    authorId: 13,
    borrows: [
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2ead0070f44676f2f6",
        returned: true,
      },
      {
        id: "5f446f2edc76a41729492d41",
        returned: true,
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: true,
      },
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: true,
      },
      {
        id: "5f446f2e93963fcd4e5adf00",
        returned: true,
      },
      {
        id: "5f446f2e22469f38e4455c73",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2eef419207c5fa4ec9",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2e73359bee0fec4ba9",
        returned: true,
      },
      {
        id: "5f446f2e5abedb2ba5eecd16",
        returned: true,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2e3900dfec59489477",
        returned: true,
      },
      {
        id: "5f446f2e102899f8b6d2c20e",
        returned: true,
      },
      {
        id: "5f446f2e93963fcd4e5adf00",
        returned: true,
      },
      {
        id: "5f446f2e6dd33178245e5771",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
      {
        id: "5f446f2e22469f38e4455c73",
        returned: true,
      },
      {
        id: "5f446f2e73359bee0fec4ba9",
        returned: true,
      },
    ],
  },
  {
    id: "5f44713237c009c9ed9cf0b3",
    title: "culpa do sint",
    genre: "Music",
    authorId: 2,
    borrows: [
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
      {
        id: "5f446f2e9487cb7bf46726b5",
        returned: true,
      },
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: true,
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: true,
      },
      {
        id: "5f446f2ed3609b719568a415",
        returned: true,
      },
      {
        id: "5f446f2efa7fe184c4014dd2",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2efa7fe184c4014dd2",
        returned: true,
      },
      {
        id: "5f446f2ebe8314bcec531cc5",
        returned: true,
      },
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
      {
        id: "5f446f2e136866e4fe60c893",
        returned: true,
      },
      {
        id: "5f446f2e6dd33178245e5771",
        returned: true,
      },
      {
        id: "5f446f2ed46724f41c9fc431",
        returned: true,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2efa2e5110917e5929",
        returned: true,
      },
      {
        id: "5f446f2ebe8314bcec531cc5",
        returned: true,
      },
      {
        id: "5f446f2ede4d3317692340da",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2e2f35653fa80bf490",
        returned: true,
      },
      {
        id: "5f446f2ede05a0b1e3394d8b",
        returned: true,
      },
      {
        id: "5f446f2ee176f80b8d5d24da",
        returned: true,
      },
      {
        id: "5f446f2ee1661e64cde14e55",
        returned: true,
      },
      {
        id: "5f446f2e7a1be21e362b82f9",
        returned: true,
      },
      {
        id: "5f446f2ec926a2ac98231a64",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471325d638fae68285403",
    title: "officia Lorem qui aliquip est",
    genre: "Memoir",
    authorId: 10,
    borrows: [
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: false,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2e0b3e2ff72fc503e7",
        returned: true,
      },
      {
        id: "5f446f2e5aa2bb5545a0f8a6",
        returned: true,
      },
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: true,
      },
      {
        id: "5f446f2e93963fcd4e5adf00",
        returned: true,
      },
      {
        id: "5f446f2eeb9463f976413b65",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2efa7fe184c4014dd2",
        returned: true,
      },
      {
        id: "5f446f2ea0502bf8cbc7676a",
        returned: true,
      },
      {
        id: "5f446f2e2f35653fa80bf490",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132f44aa4ec7a63a4de",
    title: "nulla incididunt excepteur est",
    genre: "Business",
    authorId: 4,
    borrows: [
      {
        id: "5f446f2e3e70bb4e1ab821c9",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2ede05a0b1e3394d8b",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132320b4bc16f950076",
    title: "est voluptate nisi",
    genre: "Classics",
    authorId: 12,
    borrows: [
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: false,
      },
      {
        id: "5f446f2ebe8314bcec531cc5",
        returned: true,
      },
      {
        id: "5f446f2ee176f80b8d5d24da",
        returned: true,
      },
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
      {
        id: "5f446f2ede05a0b1e3394d8b",
        returned: true,
      },
      {
        id: "5f446f2ef3942f4e607e47e2",
        returned: true,
      },
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2e2a4fcd687493a775",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2e22469f38e4455c73",
        returned: true,
      },
      {
        id: "5f446f2e2a4fcd687493a775",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2ea2944b432d63f072",
        returned: true,
      },
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: true,
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: true,
      },
      {
        id: "5f446f2e4081699cdc6a2735",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132408610c203c66280",
    title: "sint magna anim pariatur",
    genre: "Sports",
    authorId: 1,
    borrows: [
      {
        id: "5f446f2edc76a41729492d41",
        returned: true,
      },
      {
        id: "5f446f2ef055e8f3064b763e",
        returned: true,
      },
      {
        id: "5f446f2e4eff1030e7316861",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2e138a3841f7aeccf2",
        returned: true,
      },
      {
        id: "5f446f2e6dd33178245e5771",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132d5841a5ddca1aefd",
    title: "nulla esse enim enim dolor",
    genre: "Cookbooks",
    authorId: 12,
    borrows: [
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2e3900dfec59489477",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2ed92454081fb1999b",
        returned: true,
      },
      {
        id: "5f446f2ede4d3317692340da",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
      {
        id: "5f446f2e7a1be21e362b82f9",
        returned: true,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471326e1823e2c53dbd6f",
    title: "ex nostrud quis est excepteur",
    genre: "Science",
    authorId: 12,
    borrows: [
      {
        id: "5f446f2ed92454081fb1999b",
        returned: false,
      },
      {
        id: "5f446f2e9487cb7bf46726b5",
        returned: true,
      },
      {
        id: "5f446f2e5abedb2ba5eecd16",
        returned: true,
      },
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: true,
      },
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: true,
      },
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
      {
        id: "5f446f2e6dd33178245e5771",
        returned: true,
      },
      {
        id: "5f446f2ea0502bf8cbc7676a",
        returned: true,
      },
      {
        id: "5f446f2ede4d3317692340da",
        returned: true,
      },
      {
        id: "5f446f2e637138095dcc3db2",
        returned: true,
      },
      {
        id: "5f446f2ede4d3317692340da",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2e5aa2bb5545a0f8a6",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2ef055e8f3064b763e",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2ef055e8f3064b763e",
        returned: true,
      },
      {
        id: "5f446f2ead0070f44676f2f6",
        returned: true,
      },
    ],
  },
  {
    id: "5f44713277b1ab9e64ceffb8",
    title: "excepteur cupidatat sit",
    genre: "Poetry",
    authorId: 10,
    borrows: [
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: false,
      },
      {
        id: "5f446f2eeb9463f976413b65",
        returned: true,
      },
      {
        id: "5f446f2e91a138c3a8ac6980",
        returned: true,
      },
      {
        id: "5f446f2ead0070f44676f2f6",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2e189628dfd4e6225e",
        returned: true,
      },
      {
        id: "5f446f2ee1661e64cde14e55",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2eef419207c5fa4ec9",
        returned: true,
      },
      {
        id: "5f446f2e5abedb2ba5eecd16",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2efa2e5110917e5929",
        returned: true,
      },
      {
        id: "5f446f2e91a138c3a8ac6980",
        returned: true,
      },
      {
        id: "5f446f2edc76a41729492d41",
        returned: true,
      },
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2e2a4fcd687493a775",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2e5a23764338868b10",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132210a223e711bee2e",
    title: "sit aute minim",
    genre: "Science",
    authorId: 0,
    borrows: [
      {
        id: "5f446f2e5aa2bb5545a0f8a6",
        returned: false,
      },
      {
        id: "5f446f2ef3942f4e607e47e2",
        returned: true,
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2e6dd33178245e5771",
        returned: true,
      },
      {
        id: "5f446f2efa7fe184c4014dd2",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2ede4d3317692340da",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2ede4d3317692340da",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: true,
      },
      {
        id: "5f446f2ef055e8f3064b763e",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132aab831060a2766e9",
    title: "commodo quis Lorem",
    genre: "Thriller",
    authorId: 7,
    borrows: [
      {
        id: "5f446f2ec926a2ac98231a64",
        returned: true,
      },
      {
        id: "5f446f2ec926a2ac98231a64",
        returned: true,
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: true,
      },
      {
        id: "5f446f2e6dd33178245e5771",
        returned: true,
      },
      {
        id: "5f446f2e93963fcd4e5adf00",
        returned: true,
      },
      {
        id: "5f446f2ec926a2ac98231a64",
        returned: true,
      },
      {
        id: "5f446f2e136866e4fe60c893",
        returned: true,
      },
      {
        id: "5f446f2e7a1be21e362b82f9",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132d11a2ee31385f05e",
    title: "sit voluptate fugiat",
    genre: "History",
    authorId: 48,
    borrows: [
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2e6dd33178245e5771",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2e59f9380a1d03d766",
        returned: true,
      },
      {
        id: "5f446f2ed3609b719568a415",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132784ba31e2720ed69",
    title: "nisi ut officia ullamco",
    genre: "Romance",
    authorId: 11,
    borrows: [
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: false,
      },
      {
        id: "5f446f2e22469f38e4455c73",
        returned: true,
      },
      {
        id: "5f446f2efa7fe184c4014dd2",
        returned: true,
      },
      {
        id: "5f446f2e7d3e00a5efe35b6e",
        returned: true,
      },
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: true,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2e73359bee0fec4ba9",
        returned: true,
      },
      {
        id: "5f446f2efa2e5110917e5929",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: true,
      },
      {
        id: "5f446f2ef3942f4e607e47e2",
        returned: true,
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2e5e2952040e9f9b88",
        returned: true,
      },
      {
        id: "5f446f2e5abedb2ba5eecd16",
        returned: true,
      },
      {
        id: "5f446f2e5aa2bb5545a0f8a6",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2ed92454081fb1999b",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: true,
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132c010f23abf4c1884",
    title: "nisi ullamco quis laboris officia",
    genre: "Self Help",
    authorId: 33,
    borrows: [
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: false,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2ea2944b432d63f072",
        returned: true,
      },
      {
        id: "5f446f2ea0502bf8cbc7676a",
        returned: true,
      },
      {
        id: "5f446f2ee176f80b8d5d24da",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2e93963fcd4e5adf00",
        returned: true,
      },
      {
        id: "5f446f2e9487cb7bf46726b5",
        returned: true,
      },
      {
        id: "5f446f2e5a23764338868b10",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2e2a4fcd687493a775",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471321d09e20ce99e2448",
    title: "sunt dolore duis veniam",
    genre: "Psychology",
    authorId: 32,
    borrows: [
      {
        id: "5f446f2ed46724f41c9fc431",
        returned: false,
      },
      {
        id: "5f446f2efa7fe184c4014dd2",
        returned: true,
      },
      {
        id: "5f446f2ed46724f41c9fc431",
        returned: true,
      },
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: true,
      },
      {
        id: "5f446f2ef3942f4e607e47e2",
        returned: true,
      },
      {
        id: "5f446f2e7a1be21e362b82f9",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
      {
        id: "5f446f2e5aa2bb5545a0f8a6",
        returned: true,
      },
      {
        id: "5f446f2ee1661e64cde14e55",
        returned: true,
      },
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: true,
      },
      {
        id: "5f446f2e91a138c3a8ac6980",
        returned: true,
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2ede05a0b1e3394d8b",
        returned: true,
      },
      {
        id: "5f446f2e0cb6abe0576cf60d",
        returned: true,
      },
      {
        id: "5f446f2eaf32d8ddf09e8f83",
        returned: true,
      },
      {
        id: "5f446f2ee176f80b8d5d24da",
        returned: true,
      },
      {
        id: "5f446f2e6dd33178245e5771",
        returned: true,
      },
      {
        id: "5f446f2e189628dfd4e6225e",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132f9d63d6e325f13ff",
    title: "incididunt reprehenderit amet commodo",
    genre: "Thriller",
    authorId: 5,
    borrows: [
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2e07ed0822aa926d16",
        returned: true,
      },
      {
        id: "5f446f2e91a138c3a8ac6980",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471320868fd1604f23fc9",
    title: "velit ipsum esse aliquip enim",
    genre: "Mystery",
    authorId: 17,
    borrows: [
      {
        id: "5f446f2ede4d3317692340da",
        returned: false,
      },
      {
        id: "5f446f2e2a4fcd687493a775",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2ede05a0b1e3394d8b",
        returned: true,
      },
      {
        id: "5f446f2e4081699cdc6a2735",
        returned: true,
      },
      {
        id: "5f446f2ebe8314bcec531cc5",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2e9487cb7bf46726b5",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132a91e572d0877a2fb",
    title: "anim labore non adipisicing",
    genre: "Romance",
    authorId: 10,
    borrows: [
      {
        id: "5f446f2ec926a2ac98231a64",
        returned: false,
      },
      {
        id: "5f446f2e4081699cdc6a2735",
        returned: true,
      },
      {
        id: "5f446f2e7a1be21e362b82f9",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: true,
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2e3900dfec59489477",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132625303497952bf0e",
    title: "eiusmod cupidatat incididunt aliqua",
    genre: "Mystery",
    authorId: 49,
    borrows: [
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: false,
      },
      {
        id: "5f446f2eeb9463f976413b65",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
      {
        id: "5f446f2e5aa2bb5545a0f8a6",
        returned: true,
      },
      {
        id: "5f446f2e5a23764338868b10",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2e2f35653fa80bf490",
        returned: true,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2ef7fc711c78b57e51",
        returned: true,
      },
      {
        id: "5f446f2e3e70bb4e1ab821c9",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2e7eb4accbc92cb7a8",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2eeb9463f976413b65",
        returned: true,
      },
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132e58654abcadda4ae",
    title: "culpa ea dolor",
    genre: "Cookbooks",
    authorId: 49,
    borrows: [
      {
        id: "5f446f2e2f35653fa80bf490",
        returned: false,
      },
      {
        id: "5f446f2eef419207c5fa4ec9",
        returned: true,
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: true,
      },
      {
        id: "5f446f2e91a138c3a8ac6980",
        returned: true,
      },
      {
        id: "5f446f2e5abedb2ba5eecd16",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2e59f9380a1d03d766",
        returned: true,
      },
      {
        id: "5f446f2ede4d3317692340da",
        returned: true,
      },
      {
        id: "5f446f2e136866e4fe60c893",
        returned: true,
      },
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: true,
      },
      {
        id: "5f446f2e2f35653fa80bf490",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132c30e8abe6c988a8b",
    title: "veniam voluptate magna ipsum officia",
    genre: "Historical Fiction",
    authorId: 37,
    borrows: [
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: false,
      },
      {
        id: "5f446f2ead0070f44676f2f6",
        returned: true,
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        returned: true,
      },
      {
        id: "5f446f2e141b97d842b680fd",
        returned: true,
      },
      {
        id: "5f446f2e2f35653fa80bf490",
        returned: true,
      },
      {
        id: "5f446f2e5abedb2ba5eecd16",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
      {
        id: "5f446f2e138a3841f7aeccf2",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
      {
        id: "5f446f2ee734f727dfceefbd",
        returned: true,
      },
      {
        id: "5f446f2ede05a0b1e3394d8b",
        returned: true,
      },
      {
        id: "5f446f2ec926a2ac98231a64",
        returned: true,
      },
      {
        id: "5f446f2e3e70bb4e1ab821c9",
        returned: true,
      },
      {
        id: "5f446f2e440d5fae3ef4c941",
        returned: true,
      },
      {
        id: "5f446f2e1ad91e9aaa88b80c",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2ead0070f44676f2f6",
        returned: true,
      },
      {
        id: "5f446f2e0f8e52a3ee861543",
        returned: true,
      },
      {
        id: "5f446f2ed524723353040e5c",
        returned: true,
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        returned: true,
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        returned: true,
      },
      {
        id: "5f446f2eed18105706d6ca19",
        returned: true,
      },
      {
        id: "5f446f2e365320cc6ed66535",
        returned: true,
      },
    ],
  },
];
getMostPopularBooks(books);
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
