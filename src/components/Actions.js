import { useRouter } from 'next/router';
import { Button, ButtonGroup, useColorMode } from '@chakra-ui/react';
import { FaAngleLeft, FaAngleRight, FaRegMoon, FaRegSun } from 'react-icons/fa';

const Actions = ({ switchName }) => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  let actions = (
    <>
      <Button
        leftIcon={colorMode === 'light' ? <FaRegMoon /> : <FaRegSun />}
        onClick={toggleColorMode}
      >
        {colorMode === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
      <Button
        rightIcon={<FaAngleRight />}
        onClick={() =>
          router.push(switchName === 'Second Page' ? '/second' : '/')
        }
      >
        {switchName}
      </Button>
    </>
  );

  if (switchName === 'First Page') {
    actions = (
      <>
        <Button
          leftIcon={<FaAngleLeft />}
          onClick={() =>
            router.push(switchName === 'Second Page' ? '/second' : '/')
          }
        >
          {switchName}
        </Button>
        <Button
          rightIcon={colorMode === 'light' ? <FaRegMoon /> : <FaRegSun />}
          onClick={toggleColorMode}
        >
          {colorMode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </>
    );
  }

  return <ButtonGroup>{actions}</ButtonGroup>;
};

export default Actions;
