const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');
const cors = require('cors');

const app = express();
const port = 3333;

app.use(bodyParser.json());
app.use(cors({
    origin: '*',
  }))

// Endpoint para login
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const result = await pool.query('SELECT * FROM usuarios WHERE username = $1 and password = $2', [username, password]);
        
        const user = result.rows[0]
        
        if(user){
            console.log(user)
            return res.status(200).json({ acesso: 'Autorizado' })
        } else {
            console.log(user)
            return res.status(401).json({ acesso: 'Negado', error: 'Usuário ou senha incorretos' })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Endpoint para obter todos os usuários
app.get('/usuarios', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuarios');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Endpoint para adicionar um novo usuário
app.post('/usuarios', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const result = await pool.query('INSERT INTO usuarios (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, password]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Endpoint para obter todos os jogos
app.get('/jogos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM jogos');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Endpoint para adicionar um jogo
app.post('/jogos', async (req, res) => {
    const { nome, descricao } = req.body;

    try {
        const result = await pool.query('INSERT INTO jogos (nome, descricao) VALUES ($1, $2) RETURNING *', [nome, descricao]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Endpoint para deletar um jogo
app.delete('/jogos/:id', async (req, res) => {
    const jogoId = req.params.id;

    try {
        const result = await pool.query('DELETE FROM jogos WHERE id = $1 RETURNING *', [jogoId]);

        if (result.rows.length > 0) {
            res.json({ message: 'Jogo removido com sucesso', removedGame: result.rows[0] });
        } else {
            res.status(404).json({ error: 'Jogo não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Endpoint para atualizar um jogo
app.put('/jogos/:id', async (req, res) => {
    const jogoId = req.params.id;
    const { nome, descricao } = req.body;

    try {
        const result = await pool.query('UPDATE jogos SET nome = $1, descricao = $2 WHERE id = $3 RETURNING *', [nome, descricao, jogoId]);

        if (result.rows.length > 0) {
            res.json({ message: 'Jogo atualizado com sucesso', updatedGame: result.rows[0] });
        } else {
            res.status(404).json({ error: 'Jogo não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Endpoint para obter todas as plataformas de jogos
app.get('/plataformas', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM plataforma_de_jogos');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Endpoint para adicionar uma plataforma de jogos
app.post('/plataformas', async (req, res) => {
    const { nome } = req.body;

    try {
        const result = await pool.query('INSERT INTO plataforma_de_jogos (nome) VALUES ($1) RETURNING *', [nome]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Endpoint para deletar uma plataforma de jogos
app.delete('/plataformas/:id', async (req, res) => {
    const plataformaId = req.params.id;

    try {
        const result = await pool.query('DELETE FROM plataforma_de_jogos WHERE id = $1 RETURNING *', [plataformaId]);

        if (result.rows.length > 0) {
            res.json({ message: 'Plataforma removida com sucesso', removedGame: result.rows[0] });
        } else {
            res.status(404).json({ error: 'Plataforma não encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Endpoint para atualizar um jogo
app.put('/plataformas/:id', async (req, res) => {
    const plataformaId = req.params.id;
    const { nome} = req.body;

    try {
        const result = await pool.query('UPDATE plataforma_de_jogos SET nome = $1 WHERE id = $2 RETURNING *', [nome, plataformaId]);

        if (result.rows.length > 0) {
            res.json({ message: 'Plataforma atualizada com sucesso', updatedGame: result.rows[0] });
        } else {
            res.status(404).json({ error: 'Plataforma não encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});


  
  
  


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

