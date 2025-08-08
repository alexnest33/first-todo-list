import { Button, Flex } from "antd";

const ClearDoneTask = ({ state, clear }) => {
  return (
    <>
      <div className="cleartask">
        <Flex gap="small" wrap>
          <Button color="cyan" variant="solid" type="primary" onClick={clear}>
            Очистить выполненные
          </Button>
        </Flex>
      </div>
      <h2>Список оставшихся дел: {state.length}</h2>
    </>
  );
};

export default ClearDoneTask;
