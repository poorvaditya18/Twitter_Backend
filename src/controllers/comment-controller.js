import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req, res) => {
  try {
    const response = await commentService.create(
      req.query.modelId,
      req.query.modelType,
      req.body.userId,
      req.body.content
    );
    return res.status(201).json({
      success: true,
      message: "Successfully created a comment",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Something Went Wrong",
      data: {},
      err: error,
    });
  }
};