import styled from "styled-components";

const PageStyle = styled.header`
  .pageClass {
    width: 800px;
    height:1100px;
    position:relative;
    top:0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding: 30px 10px 60px 10px;
    box-shadow: 5px 5px 5px 5px #dddddd, -5px 5px 5px 5px #dddddd;
    background-color: white;
  }

  @media only screen and (max-width: 807px) {
    .pageClass {
      width: 100%;
      padding: 30px 10px 250px 10px;
      /*      padding: 100px 60px 60px 60px;  */
    }
  }
`;

export default PageStyle;