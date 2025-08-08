import { Button, Flex } from "antd";

const FilterButtons = ({ filter, setFilter }) => {
  return (
    <>
      <p>{filter}</p>
      <div className="buttonsFilters">
        <Flex gap="small" wrap>
          <Button
            color="cyan"
            variant="solid"
            type="primary"
            onClick={() => setFilter("Все")}
          >
            Все
          </Button>
          <Button
            color="cyan"
            variant="solid"
            type="primary"
            onClick={() => setFilter("Активные")}
          >
            Активные
          </Button>
          <Button
            color="cyan"
            variant="solid"
            type="primary"
            onClick={() => setFilter("Завершенные")}
          >
            Завершенные
          </Button>
        </Flex>
      </div>
    </>
  );
};

export default FilterButtons;
