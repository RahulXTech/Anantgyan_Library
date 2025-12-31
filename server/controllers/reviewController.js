import Review from "../models/Review.js";
import Student from "../models/Student.js";


//Add Review
export const addReview = async (req, res) => {
  try {
    const { studentId, message, rating } = req.body;

    if (!studentId || !message || !rating) {
      return res.status(400).json({ message: "All fields required" });
    }

    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const review = await Review.create({
      student: student._id,
      message,
      rating
    });

    res.status(201).json({
      message: "Review added successfully",
      review,
      studentName: student.name
    });
  } catch (error) {
    console.error("Add Review Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//Get All Reviews
export const getReviews = async (req, res) => {
    try {
      const reviews = await Review.find().populate("student", "name email");
  
      res.json({
        message: "Reviews fetched",
        reviews
      });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };

 
  //GET REVIEW BY ID
  export const getReviewById = async (req, res) => {
    try {
      const review = await Review.findById(req.params.id).populate("student");
  
      if (!review) {
        return res.status(404).json({ message: "Review not found" });
      }
  
      res.json(review);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };
  
//UPDATE REVIEW
export const updateReview = async (req, res) => {
    try {
      const { message, rating } = req.body;
  
      const review = await Review.findByIdAndUpdate(
        req.params.id,
        { message, rating },
        { new: true }
      ).populate("student");
  
      if (!review) {
        return res.status(404).json({ message: "Review not found" });
      }
  
      res.json({ message: "Review updated", review });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };

 // DELETE REVIEW
 export const deleteReview = async (req, res) => {
    try {
      const review = await Review.findByIdAndDelete(req.params.id);
  
      if (!review) {
        return res.status(404).json({ message: "Review not found" });
      }
  
      res.json({ message: "Review deleted" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };
  
