const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Create JWT Token
const createToken = (id) => {
  const secret = process.env.JWT_SECRET || 'default_secret_key';
  return jwt.sign({ id }, secret, {
    expiresIn: '7d',
  });
};

// Register User
exports.register = async (req, res) => {
  try {
    const { fullName, phoneNumber, email, password, companyName, isAgency } = req.body;

    // Validation
    if (!fullName || !phoneNumber || !email || !password) {
      return res.status(400).json({ message: 'Please fill all required fields' });
    }

    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    user = await User.create({
      fullName,
      phoneNumber,
      email,
      password,
      companyName,
      isAgency,
    });

    // Create token
    const token = createToken(user._id);

    res.status(201).json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        fullName: user.fullName,
      },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login User
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    // Check user
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create token
    const token = createToken(user._id);

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        fullName: user.fullName,
      },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
