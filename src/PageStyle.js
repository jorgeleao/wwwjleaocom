import styled from "styled-components";

const PageStyle = styled.header`
  .pageClass {
    width: 700px;
    position:relative;
    top:0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding: 30px 1em 250px 1em;
    box-shadow: 5px 5px 5px 5px #dddddd, -5px 5px 5px 5px #dddddd;
    background-color: white;
  }

  @media only screen and (max-width: 750px) {
    .pageClass {
      width: 80%;
      padding: 30px 10px 250px 10px;
      /*      padding: 100px 60px 60px 60px;  */
    }
  }
`;

export default PageStyle;