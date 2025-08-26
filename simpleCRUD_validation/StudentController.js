exports.index=(req,res) => {
    res.send("Hello,MCA\n");
};

exports.show=(req,res) => {
    res.send(`Hii,Student\nId: ${req.params.id},${req.body.name},${req.body.city}`);
};

exports.store=(req,res) => {
    res.send(`Successfully inserted\n${req.body.name},${req.body.city}`);
};

exports.update=(req,res) => {
    res.send(`Successfully updated\nID:${req.params.id},Name:${req.body.name},${req.body.city}`);
};

exports.destroy=(req,res) => {
    res.send(`Successfully deleted\nId: ${req.params.id}`);
};