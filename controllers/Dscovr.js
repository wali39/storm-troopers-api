const dscovr = require("../model/Dscovr")
const getValues = (req, res) => {
    const timestamps = decodeURIComponent(req.query.timestamps);
    dscovr.findOne({ date: timestamps }).then((data) => res.status(200).json(data))

}

const addData = (req, res) => {

    if (req.body && req.body.timestamps && req.body.records) {
        const dscovrx = new dscovr({
            timestamp: req.body.timestamps,
            records: req.body.records
        })
        dscovrx.save().then(() =>
            res.status(200).json({
                success: true,
                data: dscovrx
            })).then((err) => console.log());
    } else {
        res.status(500).json({ success: false, msg: "request does not contain timestamps and records" })
    }
}

module.exports = {
    addData,
    getValues
}


