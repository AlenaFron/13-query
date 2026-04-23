const convertQuery = (params) => {
  return new URLSearchParams(params).toString();
};

// Пример использования:
const queryObj = {
  search: 'Вася',
  take: 10,
};

const queryString = convertQuery(queryObj);
console.log(queryString); // "search=%D0%92%D0%B0%D1%81%D1%8F&take=10"