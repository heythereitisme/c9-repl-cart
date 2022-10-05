import rl from "readline-sync";

let commands = ["list products", "show product", "add to cart"];
let products = [
  {
    name: "hair spray",
    price: "$5",
    description: "Keep your hair straight and tidy",
    upcCode: "123xyz",
  },
  {
    name: "fruit loops",
    price: "$2",
    description: "Best cereal ever",
    upcCode: "111yyy",
  },
  {
    name: "tweezers",
    price: "$1",
    description: "Tweek, Ow!",
    upcCode: "938ldk",
  },
  {
    name: "bananas",
    price: "$29",
    description: "Very luxurious",
    upcCode: "4011",
  },
  {
    name: "baseball cards",
    price: "$0.10",
    description: "Who will you get?",
    upcCode: "847kep",
  },
];

while (true) {
  console.log("\n The commands are:", commands);
  const theCommand = rl.question("What is your command? ");

  if (theCommand === "list products") {
    console.log("\n Here is the list of products: ");
    products.forEach((p) => {
      console.log(p.name);
    });
  } else if (theCommand === "show product") {
    console.log("product details go here");
  } else if (theCommand === "add to cart") {
    console.log("item is now in the cart!");
  } else {
    console.log(`Invalid command: ${theCommand}`);
  }
}
