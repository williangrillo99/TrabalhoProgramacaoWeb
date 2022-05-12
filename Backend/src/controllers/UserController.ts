import { Request, Response } from "express";
import * as yup from "yup";
import { AppError } from "../errors/AppError";
import { users } from "../models";

class UserController {
  // Function de registrar usuário (create = criar)
  async create(req: Request, res: Response) {
    // Define o esquema do usuário que será validado pela biblioteca yup
    // Onde eu digo que ele tem um name, que é uma string e obrigatório
    // Que ele tem um email
    // E que tem password
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required()
    });

    // Aqui eu faço a validação do schema que criei, utilizando o req.body
    // O req.body é o que recebemos do frontend, é o corpo do request.
    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (err) {
      // Caso a validação falhe, eu dou um erro.
      throw new AppError(err.errors);
    }

    // Aqui eu desestruturo todos os dados passados pelo frontend
    // É basicamente uma simplificação, para não ter que ficar utilizando req.body.name, req.body.email, req.body.password...
    const { name, email, password } = req.body;

    // Busco para saber se existe algum usuário com o email que foi passado
    const userAlreadyExists = await users.findOne({ email }).exec();

    // Caso já exista, dou o erro.
    if (userAlreadyExists) {
      throw new AppError("User already exists");
    }

    // Se não, vou criar o usuário
    const user = await users.create({name, email, password});

    // Retorno o usuário, com status de HTTP 201 (Created).
    return res.status(201).json(user);
  }
}

export { UserController };
