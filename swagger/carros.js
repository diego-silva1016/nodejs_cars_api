/**
 * @swagger
 * components:
 *   schemas:
 *     Carro:
 *       type: object
 *       required:
 *         - modelo
 *         - ano
 *         - placa
 *       properties:
 *         id:
 *           type: string
 *           description: Identificador do carro gerado automaticamente
 *         modelo:
 *           type: string
 *           description: Modelo do carro
 *         ano:
 *           type: integer
 *           description: Ano do carro
 *         placa:
 *           type: string
 *           description: Placa do carro
 */

/**
 * @swagger
 * tags:
 *   name: Carros
 *   description: API de carros
 * /carros:
 *   get:
 *     summary: Buscar carros
 *     tags: [Carros]
 *     responses:
 *       200:
 *         description: Carros.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Carro'
 *       500:
 *         description: Some server error
 *   post:
 *     summary: Criar um novo carro
 *     tags: [Carros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Carro'
 *     responses:
 *       200:
 *         description: Carro criado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Carro'
 *       500:
 *         description: Some server error
 * /carros/{id}:
 *   get:
 *     summary: Buscar carro por id
 *     tags: [Carros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Carro id
 *     responses:
 *       200:
 *         description: Carro encontrado por id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Carro'
 *       204:
 *         description: Carro não encontrado
 *   put:
 *    summary: Atualizar carro por id
 *    tags: [Carros]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Carro id
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Carro'
 *    responses:
 *      200:
 *        description: Carro atualizado
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Carro'
 *   delete:
 *     summary: Remove um carro
 *     tags: [Carros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Carro id
 *
 *     responses:
 *       200:
 *         description: Carro deletado
 */