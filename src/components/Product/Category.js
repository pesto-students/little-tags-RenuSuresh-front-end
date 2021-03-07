import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Category() {
  const categoryData = useSelector((state) => state);
  useEffect(() => {}, []);
  return <div></div>;
}

export default Category;
