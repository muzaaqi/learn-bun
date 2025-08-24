// standard library untuk membaca dan menulis file

const file = Bun.file(".env");
const content = await file.text();
console.log(content);

await Bun.write(".env.test", content);