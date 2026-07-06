import {z} from 'zod';

export const registerSchema=z.object({
    body:z.object({
        name:z
        .string({required_error:'Name is Required'})
        .trim()
        .min(2, 'Name must be at least 2 characters long')
        .max(50,'Name cannot exceed 50 Characters'),

       email: z
      .string({ required_error: 'Email is required' })
      .trim()
      .email('Please provide a valid email address'),

      password: z
      .string({ required_error: 'Password is required' })
      .min(6, 'Password must be at least 6 characters long')
      .max(30, 'Password cannot exceed 30 characters')
      .refine((val)=>!val.toLowerCase().includes(password),{
        message:'password camot contain the word password'
      })
    })
});

// Define rules for a Login request
export const loginSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error: 'Email is required' })
      .trim()
      .email('Please provide a valid email address'),
    
    password: z
      .string({ required_error: 'Password is required' })
  })
});