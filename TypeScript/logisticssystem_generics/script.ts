// Define this as generic function to handle any type of package
// The <T> syntax makes the function generic
function deliverPackage<T>(item: T): void {
    // Fill your logic here
    // Based on the sample output image, it logs "Delivering package:" followed by the object
    console.log("Delivering package:", item);
}

// Define different package types for Book, Electronic, Food 
type Book = { 
    title: string; 
    author: string 
};

type Electronic = { 
    brand: string; // Based on the terminal image provided
    model: string; 
};

type Food = { 
    name: string; 
    isPerishable: boolean; // Based on the terminal image provided
};

// Create package objects for Book, Electronic, Food Objects
const bookPackage: Book = { 
    title: 'Clean Code', 
    author: 'Robert C. Martin' 
};

const phonePackage: Electronic = { 
    brand: 'Apple', 
    model: 'iPhone 14' 
};

const foodPackage: Food = { 
    name: 'Pizza', 
    isPerishable: true 
};

// Call the same generic function for all the 3 packages types
deliverPackage<Book>(bookPackage);
deliverPackage<Electronic>(phonePackage);
deliverPackage<Food>(foodPackage);

// Comment the above calls before evaluating if required by your environment