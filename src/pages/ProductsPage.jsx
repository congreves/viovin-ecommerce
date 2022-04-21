import React, { useState, useEffect } from "react";
import ProductContainer from "../components/Product/ProductContainer";
import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";
import { wineList } from "../data";
import { useRecoilState } from "recoil";
import { filterState } from "../stores/atom";

const Categories = styled.div`
  display: flex;
`;

const Filter = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1.4em;
`;

const FilterOption = styled.li`
  display: flex;
`;

function ProductsPage() {
  const [filter, setFilter] = useRecoilState(filterState);
  const [categoryFilter, setCategoryFilter] = useState("none");

  const filterList = wineList.filter((wine) => {
    if (categoryFilter === "none") {
      return true;
    }
    if (wine.category === categoryFilter) {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    setFilter(filterList);
  }, [categoryFilter]);

  return (
    <div>
      <Navbar />
      <Categories>
        <Filter>
          Filter by:
          <FilterOption
            id="red"
            onClick={(e) => setCategoryFilter(e.target.id)}
            style={
              categoryFilter === "red"
                ? { color: "#9B753A", fontWeight: "500" }
                : {}
            }
          >
            Red
          </FilterOption>
          <FilterOption
            id="white"
            onClick={(e) => setCategoryFilter(e.target.id)}
            style={
              categoryFilter === "white"
                ? { color: "#9B753A", fontWeight: "500" }
                : {}
            }
          >
            White
          </FilterOption>
          <FilterOption
            id="rose"
            onClick={(e) => setCategoryFilter(e.target.id)}
            style={
              categoryFilter === "rose"
                ? { color: "#9B753A", fontWeight: "500" }
                : {}
            }
          >
            Rose
          </FilterOption>
          <FilterOption
            onClick={() => setCategoryFilter("none")}
            style={
              categoryFilter === "none"
                ? { color: "#9B753A", fontWeight: "500" }
                : {}
            }
          >
            See all
          </FilterOption>
        </Filter>
        {/* <Filter>
          Producent
          <FilterOption>A</FilterOption>
          <FilterOption>B</FilterOption>
          <FilterOption>C</FilterOption>
        </Filter> */}
      </Categories>
      <ProductContainer />
    </div>
  );
}

export default ProductsPage;