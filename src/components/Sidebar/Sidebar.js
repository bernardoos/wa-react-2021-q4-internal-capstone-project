import React from "react";
import { MdFilterAlt } from "react-icons/md";

function Sidebar({
  isLoading,
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

  const clearFilters = () => {
    setSelectedProductsIds([]);
  };

  return (
    <>
      <div id="sidebar-wrapper">
        {isLoading && <h2 style={{ color: "white" }}>Loading categories</h2>}
        <ul className="sidebar-nav">
          {categoriesInfo.results?.map(({ id, data: { name } }) => (
            <li className="sidebar-brand" key={id} onClick={selectCategory}>
              <span
                role="listitem"
                title="sidebarCategory"
                data-testid={`sidebar${name}`}
                className={
                  selectedProductsIds.includes(id) ? "selected-category" : null
                }
                id={id}
              >
                {name}
              </span>
            </li>
          ))}
          {selectedProductsIds.length > 0 && (
            <li className="sidebar-brand" onClick={clearFilters}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: 15,
                }}
              >
                <MdFilterAlt />
                Clear filters
              </span>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
