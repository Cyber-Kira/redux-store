export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: "Production-Ready Microservices",
        author: "Susan J. Fowler",
        price: 34,
        coverImage: "/Production-Ready.jpg",
      },
      {
        id: 2,
        title: "release It!",
        author: "Michael T. Nygard",
        price: 45,
        coverImage: "/Release-It.jpg",
      },
    ];
  }
}
