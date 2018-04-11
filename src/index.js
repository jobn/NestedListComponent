import React, { Fragment } from "react";
import { render } from "react-dom";
import { data } from "./data";

// this produces a flat html structure
// replacing the Fragments with ul and li respectively
// would produce a "normal" nested html list structure
const NestedList = ({ data, keyName, level = 0, render }) => {
  if (!data[keyName]) return null;

  return (
    <Fragment>
      {data[keyName].map(item => (
        <Fragment key={item.id}>
          {render(item, level)}
          {item[keyName] && (
            <NestedList
              data={item}
              keyName={keyName}
              level={level + 1}
              render={render}
            />
          )}
        </Fragment>
      ))}
    </Fragment>
  );
};

// The rendering component gets a "level" prop that can be
// used for any type of conditional rendering or styling
const Category = ({ name, level }) => (
  <h4 style={{ marginLeft: `${level}rem` }}>{name}</h4>
);

const App = () => (
  <NestedList
    data={data}
    keyName="categories"
    render={(item, level) => <Category {...item} level={level} key={item.id} />}
  />
);

render(<App />, document.getElementById("root"));
