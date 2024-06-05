import { useState } from "react";
import {
  Box,
  Image,
  Input,
  Text,
  Center,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { data } from "../utils/data";

const RecipeListPage = ({ onSelectRecipe }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredRecipes = data.hits.filter((hit) =>
    hit.recipe.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box bg="blue.500" p={10}>
      <Center flexDir="column" mb={5}>
        <Heading mb={5} color="white">
          Winc Recipe Checker
        </Heading>
        <Input
          placeholder="Zoek recepten..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          mb={5}
          width="300px"
          bg="white"
        />
      </Center>
      <Center>
        <Flex wrap="wrap" justify="center" width="100%">
          {filteredRecipes.map((hit) => (
            <Box
              key={hit.recipe.label}
              onClick={() => onSelectRecipe(hit.recipe)}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              bg="white"
              cursor="pointer"
              _hover={{ bg: "gray.100" }}
              m={2}
              maxWidth="300px"
              flex="1 1 300px"
            >
              <Image
                src={hit.recipe.image}
                alt={hit.recipe.label}
                height="200px"
                width="100%"
                objectFit="cover"
              />
              <Box p={5} textAlign="center">
                <Text mb={2}>
                  <strong>Meal Type:</strong> {hit.recipe.mealType}
                </Text>
                <Text fontSize="xl" fontWeight="bold" mb={3}>
                  {hit.recipe.label}
                </Text>

                <Box mb={1}>
                  {hit.recipe.healthLabels.includes("Vegetarian") && (
                    <Text
                      display="inline-block"
                      bg="purple.100"
                      px={2}
                      py={1}
                      borderRadius="md"
                      mr={1}
                    >
                      Vegetarian
                    </Text>
                  )}
                  {hit.recipe.healthLabels.includes("Vegan") && (
                    <Text
                      display="inline-block"
                      bg="purple.100"
                      px={2}
                      py={1}
                      borderRadius="md"
                      mr={1}
                    >
                      Vegan
                    </Text>
                  )}
                </Box>

                <Box mb={1}>
                  {hit.recipe.dietLabels.map((label) => (
                    <Text
                      key={label}
                      display="inline-block"
                      bg="green.100"
                      px={2}
                      py={1}
                      borderRadius="md"
                      m={1}
                    >
                      {label}
                    </Text>
                  ))}
                </Box>

                <Text mb={2}>
                  <strong>Dish:</strong> {hit.recipe.dishType}
                </Text>

                <Box mb={1}>
                  {hit.recipe.cautions.map((caution) => (
                    <Text
                      key={caution}
                      display="inline-block"
                      bg="red.100"
                      px={2}
                      py={1}
                      borderRadius="md"
                      m={1}
                    >
                      {caution}
                    </Text>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Center>
    </Box>
  );
};

export default RecipeListPage;
