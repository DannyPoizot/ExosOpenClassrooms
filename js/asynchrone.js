
async function getNumber1() {
  return 10;
}

async function getNumber2() {
  return 4;
}

let promise = new Promise(() => {
  async function compute() {
    let gN1 = await getNumber1;
    let gN2 = await getNumber2;
    return gN1 + gN2;
  }
});
console.log(promise);
promise.then(posts => {
  document.getElementById("result").innerHTML = posts;
})
.catch(error => { });
