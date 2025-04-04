import React, { useState, useEffect} from 'react'
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import styles from './CadastroForm.module.css';

const CadastroForm = (props) => {
    const {register, handleSubmit, watch, formState: { errors }} = useForm();
    
    const onSubmit = (data) => {
        console.log("Dados: ", data);
        
       //Usando local storaje para salvar esses dados..
        localStorage.setItem("usuario", JSON.stringify({
         email: data.email,
          senha: data.senha
        }));
    
        alert("Usuário cadastrado com sucesso!");
    };

    const onError = (errors) => {
     console.log("Erros: ", errors);
    };
  
    return (
    <div>
        <div className={styles.form}>
            <form action="" onSubmit={handleSubmit(onSubmit, onError)}>
                <h2 className={styles.cadastro}>CADASTRO</h2>
                <label htmlFor="nome">
                    <input 
                        type="text" 
                        name="nome"
                        placeholder='Nome'
                        ClassName={styles.campo}
                        {...register("nome", {
                            required: "O nome é obrigatório.",
                            minLength: {value: 2, message: "O nome deve conter no mínimo 2 caracteres."},
                            maxLength: {value: 30, message: "O nome deve conter no máximo 30 caracteres."},
                            pattern: {value: /^[A-Za-zãõâôíìêüÃÕÂÔÍÌÊÜ ]+$/i, message: "O nome deve conter somente letras."}
                        })}
                    />
                    {errors.nome && <p className={styles.error}>{errors.nome.message}</p>}
                </label>
                
                <label htmlFor="email">
                    <input 
                        type="email"
                        name='nome'
                        placeholder='E-mail'
                        {...register("email",{
                            required: "O e-mail é obrigatório.",
                            pattern:{value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9,-]+\.[A-Za-z]{2,}$/, message: "Email inválido"},
                            validate: (value) => value.includes("@") || "Email inválido",
                        })} 
                    />
                    {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                </label>

                <label htmlFor="senha">
                    <input 
                        type="password"
                        name="senha"
                        placeholder='Senha'
                        {...register("senha",{
                            required: "A senha é obrigatória.",
                            minLength: {value: 8, message: "A senha deve conter pelo menos 8 caracteres."},
                            maxLength: {value: 25, message: "A senha deve conter no máximo 25 caracteres."},
                            pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%#*?&])[A-Za-z\d@$!#%*?&]{8,}$/, message: "A senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial"}
                        })}
                    />
                    {errors.senha && <p className={styles.error}>{errors.senha.message}</p>}
                </label>

                <label htmlFor="confirmar-senha">
                    <input 
                        type="password"
                        name='confirmar-senha'
                        placeholder='Confirmar senha'
                        {...register("confirmarSenha", {
                            required: "A confirmação de senha é obrigatória.",
                            validate: (value) => value === watch("senha") || "As senhas precisam ser iguais."
                        })}
                    />
                    {errors.confirmarSenha && <p className={styles.error}>{errors.confirmarSenha.message}</p>}
                </label>

                <input type="submit" value="Enviar" className={styles.btn}/>
            </form>
            
            <hr />
            <h4 className={styles.japossui}>Já possui uma conta?</h4>
            <Link to={"/"} className={styles.link}>Login</Link>
        </div>
    </div>
  )
}

export default CadastroForm