import { useState } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import RecipeListPage from "./pages/RecipeListPage";
import RecipePage from "./components/RecipePage";

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <ChakraProvider>
      <Box>
        {selectedRecipe ? (
          <RecipePage
            recipe={selectedRecipe}
            onBack={() => setSelectedRecipe(null)}
          />
        ) : (
          <RecipeListPage onSelectRecipe={setSelectedRecipe} />
        )}
      </Box>
    </ChakraProvider>
  );
};

export default App;
