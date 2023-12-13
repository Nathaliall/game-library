const pool = require('./db');

class PopularBanco {
    async init(){
        await this.criarTabelas()
        await this.popularBanco()
    }
    async criarTabelas(){
        await this.criaTabelaDeJogos()
        await this.criaTabelaPlataformaDeJogos()
        await this.criaTabelaUsuarios()
    }
    
    async criaTabelaUsuarios(){
        await pool.query(`
            CREATE TABLE IF NOT EXISTS usuarios (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                password VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL
            );
        `)
        console.log("Tabela usuarios criada com sucesso")
        return
    }
    
    async criaTabelaDeJogos(){
        await pool.query(`
            CREATE TABLE IF NOT EXISTS jogos (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(60) UNIQUE NOT NULL,
                descricao VARCHAR(150) NOT NULL
            );
        `)
        console.log("Tabela jogos criada com sucesso")
        return
    }
    
    async criaTabelaPlataformaDeJogos(){
        await pool.query(`
            CREATE TABLE IF NOT EXISTS plataforma_de_jogos (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(60) UNIQUE NOT NULL
            );
        `)
        console.log("Tabela plataforma_de_jogos criada com sucesso")
        return
    }

    async insereNovaPlataformaDeJogos(nome){
        await pool.query(`
            INSERT INTO plataforma_de_jogos (nome)
            VALUES ($1)
            ON CONFLICT (nome) DO NOTHING
            RETURNING *;`, [nome]);
    }
    
    async insereNovoUsuario(username, password, email ){
        await pool.query(`
            INSERT INTO usuarios (username, password, email)
            VALUES ($1, $2, $3)
            ON CONFLICT (username) DO NOTHING
            RETURNING *;`, [username, password, email]);
    }
    
    async insereNovoJogo(nome, descricao ){
        await pool.query('INSERT INTO jogos (nome, descricao) VALUES ($1, $2) RETURNING *', [nome, descricao]);
    }

    async popularBanco(){

        // inserindo os 10 objetos de plataformas
        await banco.insereNovaPlataformaDeJogos("Playstation")
        await banco.insereNovaPlataformaDeJogos("Xbox")
        await banco.insereNovaPlataformaDeJogos("Steam")
        await banco.insereNovaPlataformaDeJogos("EpicGame")
        await banco.insereNovaPlataformaDeJogos("Android")
        await banco.insereNovaPlataformaDeJogos("Ios")
        await banco.insereNovaPlataformaDeJogos("Desktop")
        await banco.insereNovaPlataformaDeJogos("PSN")
        await banco.insereNovaPlataformaDeJogos("Streaming")
        await banco.insereNovaPlataformaDeJogos("Mobile")
        
        // inserindo os 10 objetos de usuarios
        await banco.insereNovoUsuario("usuario1", "senha1", "usuario1@email.com")
        await banco.insereNovoUsuario("usuario2", "senha2", "usuario2@email.com")
        await banco.insereNovoUsuario("usuario3", "senha3", "usuario3@email.com")
        await banco.insereNovoUsuario("usuario4", "senha4", "usuario4@email.com")
        await banco.insereNovoUsuario("usuario5", "senha5", "usuario5@email.com")
        await banco.insereNovoUsuario("usuario6", "senha6", "usuario6@email.com")
        await banco.insereNovoUsuario("usuario7", "senha7", "usuario7@email.com")
        await banco.insereNovoUsuario("usuario8", "senha8", "usuario8@email.com")
        await banco.insereNovoUsuario("usuario9", "senha9", "usuario9@email.com")
        await banco.insereNovoUsuario("usuario10", "senha10", "usuario10@email.com")
        
        // inserindo os 10 objetos de jogos
        await banco.insereNovoJogo("Jogo1", "Descrição 1")
        await banco.insereNovoJogo("Jogo2", "Descrição 2")
        await banco.insereNovoJogo("Jogo3", "Descrição 3")
        await banco.insereNovoJogo("Jogo4", "Descrição 4")
        await banco.insereNovoJogo("Jogo5", "Descrição 5")
        await banco.insereNovoJogo("Jogo6", "Descrição 6")
        await banco.insereNovoJogo("Jogo7", "Descrição 7")
        await banco.insereNovoJogo("Jogo8", "Descrição 8")
        await banco.insereNovoJogo("Jogo9", "Descrição 9")
        await banco.insereNovoJogo("Jogo10", "Descrição 10")
        }
}

const banco = new PopularBanco()

banco.init()




