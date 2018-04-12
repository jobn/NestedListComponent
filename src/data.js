export const data = {
  categories: [
    {
      id: 1,
      name: "first"
    },
    {
      id: 2,
      name: "second",
      categories: [
        {
          id: 21,
          name: "inner-first"
        },
        {
          id: 22,
          name: "inner-second",
          categories: [
            {
              id: 221,
              name: "inner-inner-first"
            },
            {
              id: 222,
              name: "inner-iiner-second"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "third"
    }
  ]
};
