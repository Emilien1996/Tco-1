import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Input,
} from "reactstrap";

const CardContainer = ({
  _id,
  title,
  description,
  created_at,
  status,
  onRemove,
  onEdit,
  editbutton,
  setedit,
}) => {
  const [editInput, setEditInput] = useState({
    title: {
      value: title,
    },
    description: {
      value: description,
    },
  });

  const editHandler = (e) => {
    setEditInput((prev) => {
      return {
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          value: e.target.value,
        },
      };
    });
  };
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">
            {editbutton ? (
              <Input
                type="text"
                value={editInput.title.value}
                onChange={editHandler}
                name="title"
              />
            ) : (
              title
            )}
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {editbutton ? (
              <Input
                type="text"
                value={editInput.description.value}
                onChange={editHandler}
                name="description"
              />
            ) : (
              description
            )}
          </CardSubtitle>
          {editbutton && (
            <Button
              color="success"
              onClick={() =>
                onEdit(_id, editInput.title.value, editInput.description.value)
              }
            >
              OK
            </Button>
          )}
        </CardBody>
        <img alt="Ca" src="https://picsum.photos/318/180" width="100%" />
        <CardBody>
          <CardText>{status}</CardText>
          <Button color="success" onClick={() => onRemove(_id)}>
            Done
          </Button>
          <Button color="success" onClick={() => setedit((prev) => !prev)}>
            Edit
          </Button>
          <CardText>{created_at}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};
export default CardContainer;
