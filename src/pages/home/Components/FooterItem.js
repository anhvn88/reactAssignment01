import React from "react";

const FooterItem = (props) => {
  const colValues = props.col_values;
  const listItems = colValues.map((colValue) => <li>{colValue}</li>);

  return (
    <div className="listItem">
      <div className={props.col_number}>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
};
export default FooterItem;
