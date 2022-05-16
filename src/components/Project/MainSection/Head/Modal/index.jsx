import { useContext, useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { TaskContext } from "../..";
import AddTaskForm from "../ValidForm";

const ModalButton = () => {
  const [isopen, setisopen] = useState(false);
  const { SetTasks } = useContext(TaskContext);

  const toggle = () => {
    setisopen((isopen) => !isopen);
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Create Task
      </Button>
      <Modal isOpen={isopen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Title</ModalHeader>
        <ModalBody>
          <AddTaskForm toggle={toggle} addTask={SetTasks} />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};
export default ModalButton;
