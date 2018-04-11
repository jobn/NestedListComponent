import React, { Fragment } from "react";

const NestedList = ({ data, keyName, level = 0, render }) => (
  <Fragment>
    {data[keyName].map(item => (
      <Fragment>
        {render({ ...item, level })}
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

export default NestedList;
