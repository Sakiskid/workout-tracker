const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter an exercise type",
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter an exercise name",
            },
            duration: {
                type: Number,
                required: "Please enter an exercise duration",
            },
            reps: { type: Number, },
            sets: { type: Number, },
            resistance: { type: Number, },
            distance: { type: Number, },
            weight: { type: Number, },            
        },
    ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;