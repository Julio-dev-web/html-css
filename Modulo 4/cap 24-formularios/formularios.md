# Form

parametro 

util para -> name =  PHP/BD
util para -> id = JS e label


# Label 
faz com que os campos estejam ligados
nao se faz form sem se relacionar aos seus elementos (inputs)por que isso dificulta os mecanismos de busca.


# parametro do form 
Auto compete = [off]



# Metodos de envio de Forms

GET
POST -> os dados ainda continuam na URL so que nao e visivel para o user.

ele nao protege os dados , para proteger os dados e preciso criptografar , usando o HTTPS (estudar no futuro, para proteger dados)

nos estamos usando o HTTP

# Quando usar 

GET -  > Quando os dados nao forem sensiveis,quando voce envia dados por GET , so pode enviar ate 3000bytes.


POST - > E o oposto


# TAg de Agrupamento de dados

fieldset > legend


# Tag radio

todas as bolinhas devem ter o mesmo nome nom atributo "Name"


# Macete 

<input type="range" name="" id="inum" min="0" max="10"  value="5" oninput="ival.innerHTML=Number(inum.value)">

<output id="ival">5</output>

