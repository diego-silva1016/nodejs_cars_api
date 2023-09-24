/**
 * @swagger
 * components:
 *   schemas:
 *     UserResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: Id do usuário gerado automaticamente
 *         nome:
 *           type: string
 *           description: Nome do usuário
 *         email:
 *           type: string
 *           description: Email do usuário
 * 
 *     UserCreateRequest:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *         - senha
 *       properties:
 *         nome:
 *           type: string
 *           description: Nome do usuário
 *         email:
 *           type: string
 *           description: Email do usuário
 *         senha:
 *           type: string
 *           description: Senha do usuário
 * 
 *     UserCreateResponse:
 *       type: object
 *       properties:
 *         nome:
 *           type: string
 *           description: Nome do usuário
 *         email:
 *           type: string  # Corrected type from "integer" to "string"
 *           description: Email do usuário
 *         senha:
 *           type: string
 *           description: Senha do usuário
 * 
 *     UserLoginRequest:
 *       type: object
 *       properties:
 *         email:
 *           type: string  # Corrected type from "integer" to "string"
 *           description: Email do usuário
 *         senha:
 *           type: string
 *           description: Senha do usuário
 * 
 *     UserLoginResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Identificador do usuário gerado automaticamente
 *         nome:
 *           type: string
 *           description: Nome do usuário
 *         email:
 *           type: string  # Corrected type from "integer" to "string"
 *           description: Email do usuário
 *         token:
 *           type: string
 *           description: Token de acesso do usuário do tipo JWT
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API de usuários
 * /user:
 *   get:
 *     summary: Buscar todos os usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Response de sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserResponse'
 *       500:
 *         description: Erro interno do servidor
 *   post:
 *     summary: Criar um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserCreateRequest'
 *     responses:
 *       200:
 *         description: Usuário criado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserCreateResponse'
 *       409:
 *         description: Usuário já cadastrado com este e-mail
 *       500:
 *         description: Some server error
 * /user/login:
 *   post:
 *     summary: Gerar token de login acesso para o usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserLoginRequest'
 *     responses:
 *       200:
 *         description: Token gerado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserLoginResponse'
 *       400:
 *         description: Usuário e/ou senha inválido
 */