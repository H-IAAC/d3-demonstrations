import { ciclePack } from "./circle-packing.js";

async function run() {
  var data = await d3.json("flare-2.json");
  ciclePack(data, "body");
  console.log(data)
}

run();
