import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Input,
  Label,
} from "reactstrap";

const CardContainer = ({
  _id,
  title,
  description,
  created_at,
  status,
  onRemove,
  onEdit,
  editStatus,
  toggleDeletedTask
}) => {
  const [editInput, setEditInput] = useState({
    title: {
      value: title,
    },
    description: {
      value: description,
    },
  });
  const [isEditable, setEditable] = useState(false);
  console.log(editInput);
  const statusHandler = (e) => {
    if (status === "active") {
      editStatus(_id, "done");
    } else if (status === "done") {
      editStatus(_id, "active");
    }
  };

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
        <Input type="checkbox" onClick={() => toggleDeletedTask(_id)} />
        <Label check>
          Select card
        </Label>
        <CardBody>
          <NavLink to={`/${_id}`}>
            <CardTitle tag="h5">
              {isEditable ? (
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
          </NavLink>

          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {isEditable ? (
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
          {isEditable && (
            <Button
              color="primary"
              onClick={() =>
                onEdit(
                  _id,
                  editInput.title.value,
                  editInput.description.value,
                  () => setEditable(false)
                )
              }
            >
              OK
            </Button>
          )}
        </CardBody>
        <img alt="Ca" src="https://picsum.photos/318/180" width="100%" />
        <CardBody>
          <Button
            color={status === "active" ? "primary" : "danger"}
            onClick={statusHandler}
          >
            {status}
          </Button>
          <Button color="success" onClick={() => onRemove(_id)}>
            Delete
          </Button>
          <Button color="success" onClick={() => setEditable(true)}>
            Edit
          </Button>
          <CardText>{created_at}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};
export default CardContainer;
