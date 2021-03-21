// this file will return a response if a user has accessed the private data
// it is used in (routes/private) 
exports.getPrivateData = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: "Accessed private route"
    })
}