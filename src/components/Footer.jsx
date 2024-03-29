import { styled } from "styled-components";
import { FaPaperPlane } from "react-icons/fa";
import logo from "../images/logo-footer.png";

const Footer = () => {
    return (
        <FooterContainer>

            <div>
                <Img src={logo} alt="logo" />
                <p>From Montreal, Canada</p>
            </div>

            <div>
                <p><FaPaperPlane /> cami.rom16@gmail.com</p>
            </div>
            
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
background-color: #400361;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 40px 20px 40px;
font-family: 'Arvo', serif;
`;

const Img = styled.img`
    width: 15vw;
`;

export default Footer;