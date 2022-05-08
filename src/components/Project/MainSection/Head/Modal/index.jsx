import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ModalButton = () => {
  return (
    <div>
      <Button color="danger" onClick={function noRefCheck() {}}>
        Modal WIndow
      </Button>
      <Modal toggle={function noRefCheck() {}}>
        <ModalHeader toggle={function noRefCheck() {}}>Modal title</ModalHeader>
        <ModalBody>Modal window</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={function noRefCheck() {}}>
            Do Something
          </Button>{" "}
          <Button onClick={function noRefCheck() {}}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default ModalButton;
