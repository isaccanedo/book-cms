const getID = () => Math.floor(Math.random() * 1000);

const books = (state = [], action) => {
  const id = getID();
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, {
        id,
        title: action.book.title,
        category: action.book.category,
      }];

    case 'REMOVE_BOOK':
      return state.filter(j => j.id !== action.book);

    default:
      return state;
  }
};

export default books;
