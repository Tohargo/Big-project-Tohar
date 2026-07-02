import {Router} from 'express';
import {getMealPlan} from '../controllers/mealplan.controller.js';

const router = Router();

router.get("/", getMealPlan);

export default router;