import UserService from "../services/user-service.js";

const userService = new UserService();

// signup
export const signup = async (req, res) => {
  try {
    const response = await userService.signup({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });
    return res.status(201).json({
      message: "Something signed up user",
      data: response,
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something Went Wrong",
      data: {},
      success: false,
      err: error,
    });
  }
};

// login-->
export const login = async (req, res) => {
  try {
    //get user by email ->
    const token = await userService.signin(req.body);
    return res.status(200).json({
      success: true,
      message: "Successfully logged In",
      data: token,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something Went Wrong",
      data: {},
      success: false,
      err: error,
    });
  }
};
