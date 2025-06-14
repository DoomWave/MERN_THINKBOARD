import express from "express"
import { getAllNotes } from "../controllers/notesController";

const router = express.Router();

router.get("/", getAllNotes);

router.post("/", (req,res) => {
    res.status(201).send("Note created successfully!");
});

router.put("/:id", (req,res) => {
    res.status(200).json({message: "Note updated successfully"})
});

router.delete("/:id", (req,res) => {
    res.status(200).json({message: "Note deleted successfully"})
});

export default router



