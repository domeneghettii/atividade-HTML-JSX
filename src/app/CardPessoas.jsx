export default function CardPessoas({nome, email, idade}) {
    const nomeExibido = nome ? nome : "Nome não informado";
    const emailExibido = email ? email : "Email não informado";
    const idadeExibido = idade ? idade : "Idade não informada";
    return (
        <div>
            <p> Nome: {nomeExibido}</p>
            <p> E-mail: {emailExibido}</p>
            <p> Idade: {idadeExibido}</p>
            <hr />
        </div>
    )
}