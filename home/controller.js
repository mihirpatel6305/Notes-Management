const home =  (req,res) => {
    try {
        console.log("thiis is homdoijf")
        res.send('this is  home');
    } catch (error) {
        res.send("something is wrong in home",error);
    }
}

module.exports={home}