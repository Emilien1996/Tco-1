import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

const CardContainer = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
        </CardBody>
        <img alt="Ca" src="https://picsum.photos/318/180" width="100%" />
        <CardBody>
          <CardText>TASK</CardText>
        </CardBody>
      </Card>
    </div>
  );
};
export default CardContainer;
