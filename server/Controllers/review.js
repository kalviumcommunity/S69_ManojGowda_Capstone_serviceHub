const User = require("../models/user");
const Review = require("../models/review");

const reviews = async (req, res) => {
    try {
        const user = await User.findById(req.body.userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        let reviews;
        if (user.role === "client") {
            reviews = await Review.find({ clientId: req.body.userId })
                .populate("professionalId", "name email role");
        } else if (user.role === "professional") {
            reviews = await Review.find({ professionalId: req.body.userId })
                .populate("clientId", "name email role");
        } else {
            return res.status(400).json({ message: "Invalid role" });
        }

        res.status(200).json(reviews);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const postReview = async (req, res) => {
    try {
        const { rating, review, userId, professionalId } = req.body;

        if (!rating || !review || !userId || !professionalId) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        if (typeof rating !== "number" || rating < 1 || rating > 5) {
            return res.status(400).json({ message: "Rating must be a number between 1 and 5." });
        }

        const feedback = await Review.create({
            rating,
            review,
            clientId: userId,
            professionalId
        });

        console.log(feedback);
        res.status(201).json({ message: "Review added successfully", feedback });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


module.exports = { reviews, postReview };
