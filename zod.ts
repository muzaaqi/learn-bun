import { z } from 'zod';

const loginValidation = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
});


const request = {
  email: "user",
  password: "securepassword",
};

loginValidation.parse(request); // This will throw if validation fails

// ZodError: [
//   {
//     origin: "string",
//     code: "invalid_format",
//     format: "email",
//     pattern:
//       "/^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$/",
//     path: ["email"],
//     message: "Invalid email address",
//   },
// ];