//Array de metodos (C R U D)
const reviewsController = {};
import reviewsModel from "../models/reviews.js";

// SELECT
reviewsController.getReviews = async (req, res) => {
  const review = await reviewsModel.find().populate('idCliente');
  res.json(reviews);
};

// INSERT
reviewsController.createReviews = async (req, res) => {
  const { comment, rating, idCliente  } = req.body;
  const newReview = new reiewsModel({ comment, rating, idCliente });
  await newReview.save();
  res.json({ message: "review saved" });
};

// DELETE
reviewController.deleteReview = async (req, res) => {
  const deletedReview = await reviewModel.findByIdAndDelete(req.params.id);
  if (!deletedReview) {
    return res.status(404).json({ message: "Review no encontrado" });
  }
  res.json({ message: "review deleted" });
};

// UPDATE
reviewsController.updateReviews = async (req, res) => {
  // Solicito todos los valores
  const { comment, rating, idCliente} = req.body;
  // Actualizo
  await reviewsModel.findByIdAndUpdate(
    req.params.id,
    {
        comment, rating, idCliente
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "review updated" });
};

export default reviewController;
