import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const FriendsCard = ({ friend }) => {
  return (
    <>
      {friend.map(person => (
        <Card className="friend-card">
          <CardBody>
            <CardTitle className="friend-title">{person.name}</CardTitle>
            <CardSubtitle>
              <span className="friend-em">Age:</span> {person.age}
            </CardSubtitle>
            <CardText>
              <span className="friend-em">Email:</span> {person.email}
            </CardText>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default FriendsCard;
