export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Production-Ready Microservices",
      author: "Susan J. Fowler",
      price: 34,
      coverImage: "/Production-Ready.jpg",
    },
    {
      id: 2,
      title: "Release It!",
      author: "Michael T. Nygard",
      price: 45,
      coverImage: "/Release-It.jpg",
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 700);
    });
  }
}
