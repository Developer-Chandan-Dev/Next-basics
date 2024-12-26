"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignupPage = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-xl font-semibold py-3">Sign up</h1>

      <hr />
      <label htmlFor="username">Username</label>
      <input
        className="px-3 py-2 rounded my-2"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Username"
      />
      <label htmlFor="email">Email</label>
      <input
        className="px-3 py-2 rounded my-2"
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />
      <label htmlFor="password">Password</label>
      <input
        className="px-3 py-2 rounded my-2"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
      />
      <button
        className="px-6 py-2 border mt-2 mb-4 rounded border-gray-300 focus:outline-none focus:border-gray-600"
        onClick={onSignup}
      >
        Signup
      </button>
      <Link href="/login">Visit Login Page</Link>
    </div>
  );
};

export default SignupPage;
