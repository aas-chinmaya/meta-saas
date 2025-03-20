// 'use client'
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useRouter } from 'next/navigation';
// import { loginStart, loginSuccess, loginFailure } from '@/redux/slices/authSlice';
// import { motion } from 'framer-motion';  // Importing framer-motion

// export default function LoginPage() {
//   const [formData, setFormData] = useState({
//     email: 'it_chinmaya@outlook.com',
//     password: 'admin123',
//   });
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);  // Manage loading state
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     dispatch(loginStart());
//     setIsLoading(true);  // Start loading animation

//     try {
//       // In a real app, this would be an API call
//       const response = await mockLogin(formData);
//       dispatch(loginSuccess(response));
//       setIsLoading(false);  // Stop loading animation
//       router.push('/dashboard');
//     } catch (err) {
//       setIsLoading(false);  // Stop loading animation
//       dispatch(loginFailure(err.message));
//       setError(err.message);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Mock login function - replace with real API call
//   const mockLogin = async (credentials) => {
//     // Simulate API delay
//     await new Promise(resolve => setTimeout(resolve, 1000));

//     if (credentials.email === 'it_chinmaya@outlook.com' && credentials.password === 'admin123') {
//       return {
//         user: {
//           id: 1,
//           name: 'Chinmaya(Admin)',
//           email: credentials.email,
//           role: 'admin'
//         },
//         token: 'mock-jwt-token'
//       };
//     }
//     throw new Error('Invalid credentials');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">
//             Sign in to your account
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm space-y-4">
//             <div>
//               <label htmlFor="email" className="sr-only">Email address</label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 className="appearance-none rounded-lg relative block w-full px-6 py-3 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm dark:bg-gray-800"
//                 placeholder="Email address"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">Password</label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 className="appearance-none rounded-lg relative block w-full px-6 py-3 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm dark:bg-gray-800"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           {error && (
//             <div className="text-red-500 text-sm text-center">
//               {error}
//             </div>
//           )}

//           <div>
//             <motion.button
//               type="submit"
//               className="w-full cursor-pointer py-3 px-6 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               whileTap={{ scale: 0.95 }}  // Button press animation
//               animate={{ opacity: isLoading ? 0.6 : 1 }}  // Button opacity during loading
//               transition={{ duration: 0.2 }}
//               disabled={isLoading}
//             >
//               {isLoading ? 'Signing in...' : 'Sign in'}
//             </motion.button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useRouter } from 'next/navigation';
// import { loginStart, loginSuccess, loginFailure } from '@/redux/slices/authSlice';
// import { motion } from 'framer-motion';
// import { toast } from 'react-toastify';

// export default function LoginPage() {
//   const [formData, setFormData] = useState({
//     email: 'it_chinmaya@outlook.com',
//     password: 'admin123',
//   });
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const dispatch = useDispatch();
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     dispatch(loginStart());
//     setIsLoading(true);

//     try {
//       const response = await mockLogin(formData);
//       dispatch(loginSuccess(response));
//       setIsLoading(false);

//       // ✅ Success Toast Notification
//       toast.success('Login Successful!');
//       router.push('/dashboard');
//     } catch (err) {
//       setIsLoading(false);
//       dispatch(loginFailure(err.message));
//       setError(err.message);

//       // ❌ Error Toast Notification
//       toast.error('Invalid credentials. Please try again.');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const mockLogin = async (credentials) => {
//     await new Promise(resolve => setTimeout(resolve, 1000));

//     if (credentials.email === 'it_chinmaya@outlook.com' && credentials.password === 'admin123') {
//       return {
//         user: {
//           id: 1,
//           name: 'Chinmaya(Admin)',
//           email: credentials.email,
//           role: 'admin',
//         },
//         token: 'mock-jwt-token',
//       };
//     }
//     throw new Error('Invalid credentials');
//   };

//   return (
//     <motion.div
//       className="min-h-screen flex items-center justify-center bg-black px-6"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <motion.div
//         className="w-full max-w-md bg-gray-900 p-8 rounded-xl shadow-lg"
//         initial={{ y: 30, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ type: 'spring', stiffness: 120 }}
//       >
//         <h2 className="text-center text-3xl font-bold text-white mb-6">
//           Sign in to your account
//         </h2>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           {/* Email Input */}
//           <motion.div
//             initial={{ x: -30, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ type: 'spring', stiffness: 100 }}
//           >
//             <label htmlFor="email" className="block text-gray-400 mb-1">
//               Email address
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               required
//               className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </motion.div>

//           {/* Password Input */}
//           <motion.div
//             initial={{ x: 30, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ type: 'spring', stiffness: 100 }}
//           >
//             <label htmlFor="password" className="block text-gray-400 mb-1">
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               required
//               className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </motion.div>

//           {/* Error Message */}
//           {error && (
//             <motion.div
//               className="text-red-400 text-center text-sm"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.2 }}
//             >
//               {error}
//             </motion.div>
//           )}

//           {/* Submit Button */}
//           <motion.button
//             type="submit"
//             className="w-full py-3 px-6 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//             whileTap={{ scale: 0.95 }}
//             animate={{ opacity: isLoading ? 0.6 : 1 }}
//             disabled={isLoading}
//           >
//             {isLoading ? 'Signing in...' : 'Sign in'}
//           </motion.button>
//         </form>
//       </motion.div>
//     </motion.div>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useRouter } from 'next/navigation';
// import { loginStart, loginSuccess, loginFailure } from '@/redux/slices/authSlice';
// import { motion } from 'framer-motion';
// import { toast } from 'react-toastify';
// import { Eye, EyeOff } from 'lucide-react';

// export default function LoginPage() {
//   const [formData, setFormData] = useState({
//     email: 'it_chinmaya@outlook.com',
//     password: 'admin123',
//   });
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const dispatch = useDispatch();
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     dispatch(loginStart());
//     setIsLoading(true);

//     try {
//       const response = await mockLogin(formData);
//       dispatch(loginSuccess(response));
//       setIsLoading(false);

//       // ✅ Success Toast Notification
//       toast.success('Login Successful!');
//       router.push('/dashboard');
//     } catch (err) {
//       setIsLoading(false);
//       dispatch(loginFailure(err.message));
//       setError(err.message);

//       // ❌ Error Toast Notification
//       toast.error('Invalid credentials. Please try again.');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const mockLogin = async (credentials) => {
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     if (credentials.email === 'it_chinmaya@outlook.com' && credentials.password === 'admin123') {
//       return {
//         user: {
//           id: 1,
//           name: 'Chinmaya(Admin)',
//           email: credentials.email,
//           role: 'admin',
//         },
//         token: 'mock-jwt-token',
//       };
//     }
//     throw new Error('Invalid credentials');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black px-6">
//       <div className="w-full max-w-md bg-gray-900 p-8 rounded-xl shadow-lg">
//         <h2 className="text-center text-3xl font-bold text-white mb-6">
//           Sign in to your account
//         </h2>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           {/* Email Input */}
//           <div>
//             <label htmlFor="email" className="block text-gray-400 mb-1">
//               Email address
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               required
//               className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>

//           {/* Password Input */}
//           <div className="relative">
//             <label htmlFor="password" className="block text-gray-400 mb-1">
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type={showPassword ? 'text' : 'password'}
//               required
//               className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             <button
//               type="button"
//               className="absolute inset-y-0 top-7 cursor-pointer right-4 flex items-center text-gray-400 hover:text-gray-200"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="text-red-400 text-center text-sm">
//               {error}
//             </div>
//           )}

//           {/* Submit Button */}
//           <motion.button
//             type="submit"
//             className="w-full cursor-pointer py-3 px-6 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//             whileTap={{ scale: 0.95 }}
//             animate={{ opacity: isLoading ? 0.6 : 1 }}
//             disabled={isLoading}
//           >
//             {isLoading ? 'Signing in...' : 'Sign in'}
//           </motion.button>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "@/redux/slices/authSlice";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Eye, EyeOff, X } from "lucide-react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "it_chinmaya@outlook.com",
    password: "admin123",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    dispatch(loginStart());
    setIsLoading(true);

    try {
      const response = await mockLogin(formData);
      dispatch(loginSuccess(response));
      setIsLoading(false);

      // ✅ Success Toast Notification
      toast.success("Login Successful!");
      router.push("/dashboard");
    } catch (err) {
      setIsLoading(false);
      dispatch(loginFailure(err.message));
      setError(err.message);

      // ❌ Error Toast Notification
      toast.error("Invalid credentials. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const mockLogin = async (credentials) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (
      credentials.email === "it_chinmaya@outlook.com" &&
      credentials.password === "admin123"
    ) {
      return {
        user: {
          id: 1,
          name: "Chinmaya(Admin)",
          email: credentials.email,
          role: "admin",
        },
        token: "mock-jwt-token",
      };
    }
    throw new Error("Invalid credentials");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-xl shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={() => router.push("/")}
          className="cursor-pointer bg-gray-700 rounded-full p-2 absolute top-4 right-4 text-gray-400 hover:text-white hover:bg-gray-600 transition"
        >
          <X size={20} />
        </button>

        <h2 className="text-center text-3xl font-bold text-white mb-6">
          Sign in to your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-400 mb-1">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label htmlFor="password" className="block text-gray-400 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="absolute inset-y-0 top-7 cursor-pointer right-4 flex items-center text-gray-400 hover:text-gray-200"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-400 text-center text-sm">{error}</div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full cursor-pointer py-3 px-6 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            whileTap={{ scale: 0.95 }}
            animate={{ opacity: isLoading ? 0.6 : 1 }}
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </motion.button>
        </form>
      </div>
    </div>
  );
}
