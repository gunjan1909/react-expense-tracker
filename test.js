function write() {
  const a = "Hello World!";
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a);
    }, 2000);
  });
}

async function bruh() {
  const promise = await write();
  console.log(promise);
  console.log("loading..");
}
bruh();
console.log("function called but its async so waiting for promise to resolve");
