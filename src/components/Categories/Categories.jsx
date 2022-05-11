import React, { useState, useEffect } from "react";
import {
  Container,
  CategoryItem,
  Image,
  Info,
  Button,
  CategoryContainer,
} from "./Categories.styles";
import { wineList } from "../../data";
import Description from "../Description/Description";
import { useRecoilState } from "recoil";
import { filterState } from "../../stores/atom";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  flex: "1",


};

function Categories() {
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
    <Container>
      <Description />
      <Link to="/viner" style={linkStyle}>
      <CategoryContainer>
        
        <CategoryItem>
          <Image src={"https://i.ibb.co/KhDmcy7/IMG-7387.jpg"} />
          <Info>
            <Button id="rose" onClick={(e) => setCategoryFilter(e.target.id)}>
              ROSÉ 
            </Button>
          </Info>
        </CategoryItem>
       
       
        <CategoryItem>
          <Image src={"https://i.ibb.co/64c0HfG/Benezet-84.jpg"} />
          <Info>
            <Button id="red" onClick={(e) => setCategoryFilter(e.target.id)}>
              RÖTT 
            </Button>
          </Info>
        </CategoryItem>


        <CategoryItem>
          <Image src={"https://i.ibb.co/HtvyF2H/Bellefontaine-37.jpg"} />
          <Info>
            <Button id="white" onClick={(e) => setCategoryFilter(e.target.id)}>
              VITT
            </Button>
          </Info>
        </CategoryItem>
       
      </CategoryContainer>
      </Link>
    </Container>
  );
}

export default Categories;

/* <a href="https://ibb.co/bshVW3K"><img src="https://i.ibb.co/HtvyF2H/Bellefontaine-37.jpg" alt="Bellefontaine-37" border="0"></a>
<a href="https://ibb.co/kDkfZkc"><img src="https://i.ibb.co/fNB5JB0/Bellefontaine-13.jpg" alt="Bellefontaine-13" border="0"></a>
<a href="https://ibb.co/0fpyCd1"><img src="https://i.ibb.co/64c0HfG/Benezet-84.jpg" alt="Benezet-84" border="0"></a>
<a href="https://ibb.co/6w8Ncsb"><img src="https://i.ibb.co/KhDmcy7/IMG-7387.jpg" alt="IMG-7387" border="0"></a>
<a href="https://ibb.co/64Zd696"><img src="https://i.ibb.co/MRhXqwq/Photos-Saint-benezet-137.jpg" alt="Photos-Saint-benezet-137" border="0"></a>*/
