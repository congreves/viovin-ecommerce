import { MailOutlined, Phone } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { BannerSubtitle, BannerText, BannerTitle } from "../About/About.styles";




const Container = styled.div`
  display: flex;
 
`;
const Column = styled.div`
 display: flex:
 flex-direction: column:
  background: rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: inset -8px -8px 16px rgba(239, 239, 239, 0.35), inset 8px 8px 16px rgba(163, 181, 208, 0.39);
  border-radius: 10px;
  padding: 2em;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: auto;
  ${mobile({ width: " 100%", padding: "2.5em" })}

 
`;


function Card() {
  
  return (
    <Container>
      <Column>
        <BannerSubtitle>Önskar du att köpa våra viner?</BannerSubtitle>
        <BannerText>
        → Vi vänder oss till företag inom restaurang, barer och hotell
          verksamhet.
         
        </BannerText>
        <BannerText> → Framöver kommer vi även att erbjuda våra viner till
          privatpersoner via Systembolaget.</BannerText>
          <BannerText>Vid övriga frågor är du välkommen att kontakta oss antingen mail eller via telefon.</BannerText>
          <BannerText> <MailOutlined style={{ marginRight: "0.5em", fontSize: "16px" }}/> info@viovin.se</BannerText>
          <BannerText> <Phone style={{ marginRight: "0.5em" ,fontSize: "16px" }}/> 0704600560</BannerText>
          <BannerText>Välkommen!</BannerText>
          
      </Column>
    </Container>
  );
}

export default Card;
/*


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
           Alla
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
            Vitt
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
            Rosé
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
            Rött
          </FilterOption>
        </Filter>
        {}
        </Categories>
        <ProductContainer />
      </div>
    );
  }
  
*/ 