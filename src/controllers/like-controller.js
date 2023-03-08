import LikeService from "../services/like-service.js";

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
  try {
    const response = await likeService.toggleLike(
      req.query.modelId,
      req.query.modelType,
      req.body.userId
    );
    return res.status(200).json({
      success: true,
      error: {},
      data: response,
      message: "Successfully Toggled Like",
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      success: false,
      error: error,
      data: {},
      message: "Something went wrong",
    });
  }
};
