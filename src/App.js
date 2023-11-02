import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
  Button,
  Table,
  Th,
  Tbody,
  Tr,
  Thead,
  Td,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <SimpleGrid columns={1} gap={5}>
        <Box>
          {/*Table>Thead>Tr>Th*4>lorem1^^^Tbody>Tr*5>Td*4>lorem1*/}
          <Table>
            <Thead>
              <Tr>
                <Th>Lorem.</Th>
                <Th>Soluta.</Th>
                <Th>At.</Th>
                <Th>Facilis.</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Laborum.</Td>
                <Td>Atque!</Td>
                <Td>Esse.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Excepturi!</Td>
                <Td>Labore.</Td>
                <Td>Et.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Repellendus?</Td>
                <Td>Eos.</Td>
                <Td>Dolor?</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Nobis.</Td>
                <Td>Repudiandae.</Td>
                <Td>Dolorum!</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Sequi.</Td>
                <Td>Odio?</Td>
                <Td>Maxime?</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        {/*Box>Table[variant=striped]>Thead>Tr>Th*4>lorem1^^^Tbody>Tr*5>Td*4>lorem1*/}
        <Box>
          <Table variant="striped" colorScheme="pink" size="sm">
            <Thead>
              <Tr>
                <Th>Lorem.</Th>
                <Th>Dolorem!</Th>
                <Th>Blanditiis?</Th>
                <Th isNumeric>Debitis?</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Tempore.</Td>
                <Td>Ut!</Td>
                <Td isNumeric>Saepe.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Ab.</Td>
                <Td>Qui?</Td>
                <Td isNumeric>Sint?</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Omnis?</Td>
                <Td>Soluta.</Td>
                <Td isNumeric>Beatae.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Ullam.</Td>
                <Td>Porro?</Td>
                <Td isNumeric>Possimus.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Culpa?</Td>
                <Td>Adipisci.</Td>
                <Td isNumeric>Atque.</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default App;
