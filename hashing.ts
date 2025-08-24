// standard library untuk hashing

const password = "paspsword123"
const passwordHash = await Bun.password.hash(password, {
  algorithm: "bcrypt",
  cost: 12,
})

const result = await Bun.password.verify(password, passwordHash, "bcrypt")
console.log(result)