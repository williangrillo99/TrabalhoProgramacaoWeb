import { Router } from "express";

import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

// Rota para gerenciamento de usuários
router.post("/users", userController.create);

// Rota para gerenciamento de pesquisas
router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

// Rota para gerenciamento de emails/surveys_users
router.post("/sendMail", sendMailController.execute);

// Rota para alteração de respostas
router.get("/answers/:value", answerController.execute);

// Rota para calcular NPS de uma survey
router.get("/nps/:survey_id", npsController.execute);
export { router };
