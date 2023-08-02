import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
  <Container><marquee direction="right"  >
    <div style={{display:"inline-flex"}}>
    <h1>250+ BOOKS AVAILABLE  </h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  One-stop &nbsp;&nbsp;shopping &nbsp;&nbsp;for&nbsp;&nbsp;the&nbsp;&nbsp;mind&nbsp;&nbsp;and&nbsp;&nbsp;the &nbsp;spirit !..
  </div>
  </marquee>
  
  {/* <h1>One-stop &nbsp;&nbsp;shopping &nbsp;&nbsp;for&nbsp;&nbsp;the&nbsp;&nbsp;mind&nbsp;&nbsp;and&nbsp;&nbsp;the &nbsp;spirit !...</h1> */}
  </Container>
  )
};

export default Announcement;
