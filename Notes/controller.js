const Notes = require("./model");

const getNote = async (req,res) => {
    try {
        const id = req.params.id;
        const note=await Notes.findById(id);
        res.json({
          message: "notes retrieved successfully",
          data: note,
        });
    } catch (error) {
        res.send("something is wrong in  fetching Note",error);
    }
}

const addNote = async (req,res) => {
    try {
        const { title, content } = req.body;
        const addNotes = new Notes({ title, content });
        await addNotes.save();
        res.send("Note Added successfully");
    } catch {
        res.send("notes is not added")
    }
};

const allNotes = async (req, res) => {
//   try {
//     res.send("Note Added successfully");
//   } catch {}
};



module.exports = { getNote, addNote, allNotes };