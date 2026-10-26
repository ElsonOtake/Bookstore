const storageKey = 'bookstore.books';

export const getBooks = async () => {
  const books = JSON.parse(localStorage.getItem(storageKey) || '[]');
  if (!Array.isArray(books)) {
    throw new Error('Invalid saved book collection.');
  }
  return books;
};

export const saveBook = async ({ item_id: id, ...book }) => {
  const books = await getBooks();
  localStorage.setItem(storageKey, JSON.stringify([...books, { id, ...book }]));
};

export const deleteBook = async (id) => {
  const books = await getBooks();
  localStorage.setItem(storageKey, JSON.stringify(books.filter((book) => book.id !== id)));
};
