/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const SignupPage = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButttonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
      toast.success("Signup Successfull");
    } catch (error: any) {
      console.log("Signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButttonDisabled(false);
    } else {
      setButttonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-xl font-semibold py-3">
        {loading ? "Processing" : "Signup"}
      </h1>

      <hr />
      <label htmlFor="username">Username</label>
      <input
        className="px-3 py-2 rounded my-2 text-black"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Username"
        required
      />
      <label htmlFor="email">Email</label>
      <input
        className="px-3 py-2 rounded my-2 text-black"
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
        required
      />
      <label htmlFor="password">Password</label>
      <input
        className="px-3 py-2 rounded my-2 text-black"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
        required
      />
      <button
        className="px-6 py-2 border mt-2 mb-4 rounded border-gray-300 focus:outline-none focus:border-gray-600"
        onClick={onSignup}
      >
        {buttonDisabled ? "No Signup" : "Signup"}
      </button>
      <Link href="/login">Visit Login Page</Link>
    </div>
  );
};

export default SignupPage;
