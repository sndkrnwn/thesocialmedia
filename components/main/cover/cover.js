import { Container } from 'react-bootstrap'

export const Cover = ({
    title
}) => {
    return (
        <div className="cover">
            <Container>
                {
                    title && <h1 className="cover-text">{title}</h1>
                }
            </Container>
        </div>
    )
  }
  