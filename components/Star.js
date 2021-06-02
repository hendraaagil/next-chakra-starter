import { HStack, Link, Text, useColorMode } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const Star = () => {
  const { colorMode } = useColorMode();

  return (
    <Link href="https://github.com/hendraaagil/next-chakra-starter" isExternal>
      <HStack
        zIndex="docked"
        pos="fixed"
        py={3}
        px={4}
        bg={colorMode === 'light' ? 'gray.100' : 'gray.800'}
        borderBottomWidth="3px"
        borderRightWidth="3px"
        borderColor={colorMode === 'light' ? 'gray.800' : 'gray.100'}
        roundedBottomRight="3xl"
      >
        <FaGithub size="24px" />
        <Text fontWeight="600">Star me on GitHub</Text>
      </HStack>
    </Link>
  );
};

export default Star;
