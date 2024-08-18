const Sphere = require("../model/Sphere")
const getShpere = (req, res) => {

    const timestamps = decodeURIComponent(req.query.timestamps);

    Sphere.findOne({ timestamps }).then((data) => res.status(200).json(data))

}

const addSphere = (req, res) => {

    if (req.body && req.body.timestamps && req.body.records) {
        const Spherex = new Sphere({
            timestamp: req.body.timestamps,
            records: req.body.records
        })
        Spherex.save().then(() =>
            res.status(200).json({
                success: true,
                data: Spherex
            })).then((err) => console.log());
    } else {
        res.status(500).json({ success: false, msg: "request does not contain timestamps and records" })
    }
}

module.exports = {
    addSphere,
    getShpere
}


