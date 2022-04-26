import React, { useState, useEffect } from "react";
import ProductContainer from "../components/Product/ProductContainer";
import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";
import { wineList } from "../data";
import { useRecoilState } from "recoil";
import { filterState } from "../stores/atom";

const Categories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 8em;
  padding-top: 1.5em;
  padding-left: 5%;
  padding-right: 5%;
  background-color: transparent;
  position: sticky;
  width: 100%;
  z-index: 99;
  backdrop-filter: blur(50px);
`;

const Filter = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1.4em;
`;

const FilterOption = styled.li`
  display: flex;
  font-size: 1.4rem;
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
          <FilterOption
            onClick={() => setCategoryFilter("none")}
            style={
              categoryFilter === "none"
                ? {
                    color: "#9B753A",
                    fontWeight: "600",
                    textDecoration: "underline",
                  }
                : {}
            }
          >
           All
          </FilterOption>

          <FilterOption
            id="white"
            onClick={(e) => setCategoryFilter(e.target.id)}
            style={
              categoryFilter === "white"
                ? {
                    color: "#9B753A",
                    fontWeight: "600",
                    textDecoration: "underline",
                  }
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
                ? {
                    color: "#9B753A",
                    fontWeight: "600",
                    textDecoration: "underline",
                  }
                : {}
            }
          >
            Rose
          </FilterOption>

          <FilterOption
            id="red"
            onClick={(e) => setCategoryFilter(e.target.id)}
            style={
              categoryFilter === "red"
                ? {
                    color: "#9B753A",
                    fontWeight: "600",
                    textDecoration: "underline",
                  }
                : {}
            }
          >
            Red
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
