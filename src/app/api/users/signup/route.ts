import { connect } from '@/dbConfig/dbConfig.ts';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    console.log(reqBody, '15');

    // Check if the user already exists
    const user = await User.findOne({ email });
    console.log(user, '19');
    if (user) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Hash the password
    const salt = await bcryptjs.genSalt(10); // Correct method
    console.log(username, password, email, '26');
    const hashedPassword = await bcryptjs.hash(password, salt); // Correct arguments
    console.log(hashedPassword, '28');

    // Create a new user
    const newUser = new User({ username, email, password: hashedPassword });
    console.log(newUser, '31');
    const savedUser = await newUser.save();
    console.log(savedUser, '32');

    return NextResponse.json({ message: 'User created successfully', success: true, savedUser });
  } catch (error: any) {
    console.log(error.message, '37');
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
