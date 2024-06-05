import {
  Box,
  Image,
  Text,
  Button,
  Heading,
  Grid,
  GridItem,
  Icon,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const RecipePage = ({ recipe, onBack }) => {
  return (
    <Box bg="blue.500" minHeight="100vh" p={15}>
      <Box
        bg="white"
        paddingTop={5}
        borderRadius="md"
        boxShadow="md"
        maxWidth="800px"
        mx="auto"
      >
        <Box display="flex" alignItems="center" mb={5}>
          <Button onClick={onBack} variant="ghost">
            <Icon as={ArrowBackIcon} w={6} h={6} />
          </Button>
          <Heading size="md" flex="1" textAlign="center">
            WINC
          </Heading>
          <Box width="24px" />
        </Box>
        <Image
          src={recipe.image}
          alt={recipe.label}
          mb={5}
          width="100%"
          height="300px"
          objectFit="cover"
        />

        <Box p={5}>
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
            <GridItem>
              <Text fontSize="lg" mb={2}>
                {recipe.mealType}
              </Text>

              <Heading mb={5} fontSize={25}>
                {recipe.label}
              </Heading>

              <Text fontSize="lg" mb={2}>
                Total cooking time: <strong>{recipe.totalTime} minutes </strong>
              </Text>

              <Text fontSize="lg" mt={2}>
                Servings: <strong>{recipe.yield}</strong>
              </Text>

              <Text fontSize="lg" mt={2}>
                <strong>Ingredients:</strong>
              </Text>
              <Box>
                {recipe.ingredientLines.map((ingredient, index) => (
                  <Text key={index} mt={2}>{ingredient}</Text>
                ))}
              </Box>
            </GridItem>

            <GridItem>

            <Box mt={4}>
                <Text fontSize="lg" mb={2}>
                  Health labels:
                </Text>
                <Box>
                  {recipe.healthLabels.includes("Vegetarian") && (
                    <Text
                      display="inline-block"
                      bg="purple.100"
                      px={2}
                      py={1}
                      borderRadius="md"
                      mr={1}
                      mb={1}
                    >
                      Vegetarian
                    </Text>
                  )}
                  {recipe.healthLabels.includes("Vegan") && (
                    <Text
                      display="inline-block"
                      bg="purple.100"
                      px={2}
                      py={1}
                      borderRadius="md"
                      mr={1}
                      mb={1}
                    >
                      Vegan
                    </Text>
                  )}
                </Box>
              </Box>

              <Box mt={4}>
                <Text fontSize="lg" mb={2}>
                  Diet:
                </Text>
                <Box>
                  {recipe.dietLabels.map((label) => (
                    <Text
                      key={label}
                      display="inline-block"
                      bg="green.100"
                      px={2}
                      py={1}
                      borderRadius="md"
                      mr={1}
                      mb={1}
                    >
                      {label}
                    </Text>
                  ))}
                </Box>
              </Box>

              

              <Box mt={4}>
                <Text fontSize="lg" mb={2}>
                  Cautions:
                </Text>
                <Box>
                  {recipe.cautions.map((caution) => (
                    <Text
                      key={caution}
                      display="inline-block"
                      bg="red.100"
                      px={2}
                      py={1}
                      borderRadius="md"
                      mr={1}
                      mb={1}
                    >
                      {caution}
                    </Text>
                  ))}
                </Box>
              </Box>

            
              <Box mt={5}>
                <Text fontSize="lg" mb={2}>
                  <strong>Total nutrients:</strong>
                </Text>
                <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                  <GridItem textAlign="left">
                    <Text fontSize="sm" fontWeight="bold">
                      {recipe.totalNutrients.ENERC_KCAL.quantity}
                    </Text>
                    <Text fontSize="sm">Energie (kcal)</Text>
                  </GridItem>
                  <GridItem textAlign="left">
                    <Text fontSize="sm" fontWeight="bold">
                      {recipe.totalNutrients.PROCNT.quantity}
                    </Text>
                    <Text fontSize="sm">Eiwit (g)</Text>
                  </GridItem>
                  <GridItem textAlign="left">
                    <Text fontSize="sm" fontWeight="bold">
                      {recipe.totalNutrients.FAT.quantity}
                    </Text>
                    <Text fontSize="sm">Vet (g)</Text>
                  </GridItem>
                  <GridItem textAlign="left">
                    <Text fontSize="sm" fontWeight="bold">
                      {recipe.totalNutrients.CHOCDF.quantity}
                    </Text>
                    <Text fontSize="sm">Koolhydraten (g)</Text>
                  </GridItem>
                  <GridItem textAlign="left">
                    <Text fontSize="sm" fontWeight="bold">
                      {recipe.totalNutrients.CHOLE.quantity}
                    </Text>
                    <Text fontSize="sm">Cholesterol (mg)</Text>
                  </GridItem>
                  <GridItem textAlign="left">
                    <Text fontSize="sm" fontWeight="bold">
                      {recipe.totalNutrients.NA.quantity}
                    </Text>
                    <Text fontSize="sm">Natrium (mg)</Text>
                  </GridItem>
                </Grid>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default RecipePage;
