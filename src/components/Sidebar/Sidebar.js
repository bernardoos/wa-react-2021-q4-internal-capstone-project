import React from "react";

function Sidebar({
  categoriesInfo,
  selectedProductsIds,
  setSelectedProductsIds,
}) {
  const selectCategory = (event) => {
    const categoryId = event.target.id;

    let newIds = [];

    if (selectedProductsIds.includes(categoryId)) {
      newIds = selectedProductsIds.filter((id) => id !== categoryId);
    } else {
      newIds = [...selectedProductsIds, categoryId];
    }

    setSelectedProductsIds(newIds);
  };

  console.log("ids", selectedProductsIds);

  return (
    <div id="sidebar-wrapper">
      <ul className="sidebar-nav">
        {categoriesInfo.map(({ id, data: { name } }) => (
          <li className="sidebar-brand" key={id} onClick={selectCategory}>
            <span
              className={
                selectedProductsIds.includes(id) ? "selected-category" : null
              }
              id={id}
            >
              {name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
