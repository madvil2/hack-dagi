import React from "react";

const DataRenderer = ({
  data,
  Component,
  getProps = (item) => ({}),
  componentProps = {},
}) => {
  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((item, index) => (
        <Component
          key={item.id || index}
          {...getProps(item)}
          {...componentProps}
        />
      ))}
    </>
  );
};

export default DataRenderer;
