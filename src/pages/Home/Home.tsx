import { observer } from "mobx-react";
import * as React from "react";
import { AppContext } from "../../AppContext";
import { Box } from "../../components/Box";
import { Button } from "../../components/Button";

interface Props {}

export const Home = observer(function (props: Props) {
  const { applicationStore } = React.useContext(AppContext);

  return (
    <>
      <Box>
        <Button onClick={applicationStore.decrement}>-</Button>
        <div data-testid="counter-value">{applicationStore.counter}</div>
        <Button onClick={applicationStore.increment}>+</Button>
      </Box>
      <Box>
        <Button onClick={applicationStore.autoIncrement}>Auto</Button>
        <Button onClick={applicationStore.cancelAutoIncrement}>Cancel</Button>
      </Box>
    </>
  );
});
