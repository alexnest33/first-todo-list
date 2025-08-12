import { Button, Flex } from "antd";

const TaskItems = ({ tasks, checkedStatus, deleteTask }) => {
  return (
    <div className="task-card">
      {tasks.map((item) => (
        <div key={item.id}>
          <Flex gap="small" wrap>
            <li className={item.isDone ? "active" : ""}>
              <input
                type="checkbox"
                checked={item.isDone}
                onChange={() => checkedStatus(item.id)}
              />
              {item.task}

              <Button
                className="btndelete"
                color="cyan"
                variant="solid"
                type="primary"
                onClick={() => deleteTask(item.id)}
              >
                x
              </Button>
            </li>
          </Flex>
        </div>
      ))}
    </div>
  );
};

export default TaskItems;
