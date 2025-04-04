import React, { useState } from 'react';  
import styles from './Login.module.css';
import { Link } from "react-router-dom"

const Form = () => {
    const [Email, setEmail] = useState("");
    const [Senha, setSenha] = useState("");
    const [Error, setError] = useState("");

    //Validando se preencheu os campos
    const handleSubmit = (e) =>{
       e.preventDefault(); //Garantindo que não recarregue toda a página

       if(!Email || !Senha){ //Garante que nenhum dos campos seja vazio
            setError("Preencha todos os campos para prosseguir!");
            return;
       }
   
    const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

    if(!usuarioSalvo){
        setError("Usuário não encontrado");
        return;
    }

    if(Email !== usuarioSalvo.email || Senha !== usuarioSalvo.senha){
        setError("Email ou senha inválidos.");
        return;
    }

    setError(""); //Limpando o buffer
    alert("Autenticado com sucesso");
}

    return (
        <div className={styles.corpo}>
            <h1 className={styles.H1}>LOGIN</h1>

            {/* Exibindo a mensagem de erro */}
            {Error}

            <form onSubmit={handleSubmit}>
                <label htmlFor="Email">
                    <input 
                        type="email"
                        id="Email"
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label htmlFor="Senha">
                    <input 
                        type="password"
                        id="Senha"
                        placeholder="Senha"
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </label>

                <input 
                    type="submit"
                    value="Confirmar"
                    className={styles.btn}
                />

                <hr />
                <h4 className={styles.naopossui}>Não possui uma conta?</h4>
                <Link to={"Cadastro"} className={styles.link}>Cadastro</Link>
            </form>
        </div>
    );
}

export default Form;