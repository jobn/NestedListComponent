export const data = {
  categories: [
    {
      id: 1,
      name: "first",
      categories: []
    },
    {
      id: 2,
      name: "second",
      categories: [
        {
          id: 21,
          name: "inner-first",
          categories: []
        },
        {
          id: 22,
          name: "inner-second",
          categories: [
            {
              id: 221,
              name: "inner-inner-first",
              categories: []
            },
            {
              id: 222,
              name: "inner-iiner-second",
              categories: []
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "third",
      categories: []
    }
  ]
};
