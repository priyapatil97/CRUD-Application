const userModuel = require("./../modules/user");


//to create new user

exports.createUser = async (req, res) => {
    try {
        const saveData = await new userModuel(req.body).save();
        res.status(201).json(saveData);
    } catch (err) {
        res.status(500).json({ err })
    }
}

// to get all user

exports.getAlluser = async (req, res) => {
    try {
        const users = await userModuel.find();
        res.json(users);
    }
    catch (err) {
        res.json({ err })
    }
}

// to get specific user Data

exports.getUser = async (req, res) => {
    try {
        const users = await userModuel.find({ _id: req.params.userID });
        res.json(users);
    }
    catch (err) {
        res.json({ err });
    }
}

// to delete user from data

exports.deleteUser = (req, res) => {
    userModuel.findOneAndDelete({ _id: req.params.userID }, (err, data) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(data);
        }
    });

}

// to update data
exports.updateUser = (req, res) => {
    userModuel.findOneAndUpdate({ _id: req.params.userID }, req.body, { new: true }, (err, data) => {
        if (err) {
            res.json({ err });
        }
        else {
            res.json(data);
        }
    })
}
