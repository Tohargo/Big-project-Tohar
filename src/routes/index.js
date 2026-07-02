import {Router} from 'express';
import {mealplanRouter} from './mealplan.routes.js';
import {recipesRouter} from './recipes.routes.js';


const router = Router();

router.use("/mealplan",mealplanRouter);
router.use("/recipes",recipesRouter);


export default router;