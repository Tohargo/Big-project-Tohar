import { Router } from "express";
import { getRecipes, getRecipeComplex } from "../controllers/recipes.controller.js";

const router = Router();

router.get("/", getRecipes);
router.get("/search", getRecipeComplex);

export default router;