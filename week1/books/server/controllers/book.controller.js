const Book = require('mongoose').model('Book');

module.exports = {
  // get all of resource
  index(request, response) {
    Book.find({})
      .then(books => response.json(books))
      .catch(console.log);
  },
  // create resource
  create(request, response) {
    Book.create(request.body)
      .then(book => response.json(book))
      .catch(error => {
        response
          .status(500)
          .json(
            Object.keys(error.errors).map(key => error.errors[key].message)
          );
      });
  },
  // get a single resource
  show(request, response) {
    Book.findById(request.params.book_id)
      .then(book => response.json(book))
      .catch(console.log);
  },
  // update a resource
  update(request, response) {
    Book.findByIdAndUpdate(request.params.book_id, request.body, { new: true })
      .then(book => response.json(book))
      .catch(console.log);
  },
  // destroy resource
  destroy(request, response) {
    Book.findByIdAndRemove(request.params.book_id)
      .then(book => response.json(book))
      .catch(console.log);
  },
};
