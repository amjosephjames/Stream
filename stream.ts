import express from "express";
import { createReadStream, createWriteStream } from "fs";

const readMyStream = createReadStream(__dirname + "/readme.txt", "utf8");

const writeMyStream = createWriteStream(__dirname + "/mywrite.txt");

readMyStream.on("data", (chunk) => {
  console.log("Received new chunks");
  console.log(chunk);
  writeMyStream.write(chunk);
});

writeMyStream.write("my name is joseph");

const writeStream = createWriteStream(__dirname + "/file.txt");

process.stdin.pipe(writeStream);

console.log(process.versions);
