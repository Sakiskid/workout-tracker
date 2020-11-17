const db = require('../models');

const router = require('express').Router();

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
    console.log("posting to workouts");

    db.Workout.create({})
    .then(newWorkout => {
        console.log("new workout: ", newWorkout);
        res.json(newWorkout);
    })
    .catch(err => {
        res.json(err);
    })
})

router.put("/api/workouts/:id", ({params, body}, res) => {
    console.log("putting with id: ", params.id);

    db.Workout.findByIdAndUpdate(
        { _id: params.id },
        { $push: { exercises: body } },
    )
    .then(newWorkout => {
        res.json(newWorkout);
    })
    .catch(err => {
        res.json(err);
    })

})

module.exports = router;