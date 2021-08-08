import { Container } from 'react-bootstrap'
import Banner from "assets/img/bg/banner.jpeg"

export const Cover = ({
    title
}) => {
    return (
        <div 
            className="cover"
            style={{
                background: `url(${Banner.src}) no-repeat center`,
                // backgroundColor: "blue",
                backgroundSize: "cover",
                position: "relative",
            }}
        >
            <Container>
                {
                    title && <h1 className="cover-text typing">{title}</h1>
                }
            </Container>
        </div>
    )
  }
  