import PropTypes from "prop-types"
import { Card } from 'react-bootstrap';

export const CardProfile = ({albums, photos, users}) => {
    const data = ["Sincere@april.biz", "1-770-736-8031", "Kulas Light, Apt. 556, Gwenborough", "Romaguera-Crona", "hildegard.org"]
    return (
        <Card className="card-profile">
            <Card.Header className="text-center">
            <p className="mb-0">@Bret</p>
            <h3>Leanne Graham</h3>
            </Card.Header>
            <Card.Body>
                <h4>Bio</h4>
                <div className="list-item">
                {
                    data.length > 0 && data.map((item, i)=>{
                    return (
                        <div className="item" key={i}>
                        {item}
                        </div>
                    )
                    })
                }
            </div>
            </Card.Body>
            <Card.Footer>
                <h4>Album</h4>
                <div className="list-item">
                {
                    data.length > 0 && data.map((item, i)=>{
                    return (
                        <div className="item" key={i}>
                        {item}
                        </div>
                    )
                    })
                }
            </div>
            </Card.Footer>
        </Card>
    )
}

CardProfile.propTypes = {
    users: PropTypes.array,
    albums: PropTypes.array,
    photos: PropTypes.array
}
  