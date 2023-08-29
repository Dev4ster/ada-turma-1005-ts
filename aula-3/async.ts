// const delay = (ms: number) => {
//     return new Promise()
// }

// console.log("--INIT--");
// setTimeout(() => {
//   console.log("--command 1--");
// }, 5000);

// setTimeout(() => {
//   console.log("--command 2--");
// }, 3000);
// console.log("--PROCESSO--");
// setTimeout(() => {
//   console.log("--command 3--");
// }, 1000);
// console.log("--FIM PROCESSO--");
// setTimeout(() => {
//   console.log("--command 4--");
// }, 500);

console.log("--INIT--");

// fetch("https://jsonplaceholder.typicode.com/posts ")
//   .then((response) => {
//     return response.text();
//   })
//   .then((response) => {
//     const transformarEmOBJ = JSON.parse(response);
//     console.log(transformarEmOBJ[0].title);
//   })
//   .finally(() => {
//     console.log("terminou a chamada a api");
//   });

const main = async () => {
  let eELE = false;
  const apiResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts "
  );
  const post = await apiResponse.json();

  eELE = post[0].userId === 2;
  console.log(eELE);
};

main();

console.log("--FIM PROCESSO--");
