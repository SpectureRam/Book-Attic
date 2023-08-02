import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link, NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  // margin-left:100px;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container style={{backgroundColor:"#d1e0e0"}}>
  
      <Left>
        <Logo style={{fontWeight:"800"}}>BOOK ATTIC</Logo>
        <Desc>
       Buy Books Online At Book Attic
Whether reading is your passion or you read occasionally on a rainy day with a mug of coffee in your hand, you can take your pick from the wide range of books available at Book Attic. Books also make the best gift for everyone, be it for children or the elderly. You can buy books online from all genres and satisfy the cravings of bibliophiles. 
        </Desc>
      </Left>
      <Center>
        <Title><u>Useful Links</u></Title>
        <List>
        <ListItem><NavLink to={"/"} > Home </NavLink></ListItem>
          <ListItem><NavLink to={"/novel"} >Novels </NavLink></ListItem>
          <ListItem><NavLink to={"/article"} >Articles </NavLink></ListItem>
          <ListItem><NavLink to={"/horror"} >Horror Books </NavLink></ListItem>
          
          <ListItem><NavLink to={"/genre"} >Genre </NavLink></ListItem>
          <ListItem><NavLink to={"/mystery"} >Mystery Books </NavLink></ListItem>
          <ListItem><NavLink to={"/toppicks"} >Top Picks </NavLink></ListItem>
          <ListItem><NavLink to={"/fiction"} >Fiction Books </NavLink></ListItem>
          <ListItem><NavLink to={"/cart"} >Cart </NavLink></ListItem>
          <ListItem><NavLink to={"/adventure"} >Adventure </NavLink></ListItem>
        </List>
        
      </Center>
      <Right>
        <Title>Contact</Title>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
          
        </SocialContainer>
        <ContactItem style={{lineHeight:"100px"}}>
          <MailOutline style={{ marginRight: "10px" }} /> contact@bookattic.in
        </ContactItem>
        {/* <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" /> */}
      </Right>
    </Container>
  );
};

export default Footer;
