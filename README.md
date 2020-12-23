# ProjetoUpdated
versão atualizada do projeto integrado com relatórios na API 

## Domínio da API:

http://localhost/Caio/ProjetoUpdated/ProjetoIntegrado/api/api.php/



ENDPOINTS:

**Título**          | **Listar, inserir clientes no sistema**
--------------------|-
URL                 | /clientes 
Método              | POST, GET
Resposta de sucesso | Código: 200 Retorna o JSON com os dados do cliente
Resposta de erro    | Código: 400 Bad Request
Resposta de erro    | Código: 401 {"status":"Fail", "Message":"Falha ao inserir os dados no BD. Verificar se os dados enviados estão corretos"}
Resposta de erro    | Código: 415 {"status":"Fail", "Message":"Erro no Content-Type da Requisição"}


**Título**          | **Atualizar e excluir clientes no sistema**
--------------------|-
URL                 | /clientes/{id}
Método              | PUT, DELETE
Resposta de sucesso | (PUT): Código 200 - Retorna o JSON com os dados atualizados
Resposta de sucesso | (DELETE): Código 200   { "status":"Sucesso", "message":"Contato deletado com sucesso." }
Resposta de erro    | (PUT): Código: 409 '{"status":"Fail", "message":"Esse cliente já foi atualizado."}'
Resposta de erro    | (PUT): Código: 400 {"status":"Fail","message":"Cliente inexistente."}              
Resposta de erro    | (DELETE): Código: 415 {"status":"Falha", "message":"Erro ao deletar o contato no banco de dados. }


~~~
{id} -- corresponde ao ID do campo no banco de dados, voltado ao desenvolvedor
~~~

~~~
Registros: corresponde aos valores que a empresa precisa para determinar quanto é cobrado por hora, quantas vagas, disponíveis e se há um desconto atribuído
~~~

**Título**          | **Buscar, inserir e atualizar um registro no sistema**
--------------------|-
URL                 | /registro/
Método              | GET, POST, PUT
Resposta de sucesso | Código 200 - Retorna o JSON com os dados do registro
Resposta de erro    | (GET) Código 400 Bad Request
Resposta de erro    | (PUT): Código: 409 '{"status":"Fail", "message":"Esse cliente já foi atualizado."}'
Resposta de erro    | (PUT): Código: 400 {"status":"Fail","message":"Cliente inexistente."}              
Resposta de erro    | (DELETE): Código: 415 {"status":"Falha", "message":"Erro ao deletar o contato no banco de dados. }



'/registros' - PARA MÉTODO GET, POST & PUT

'/registros/{id}' - PARA MÉTODO DELETE


*Relatórios: Exibem quantos clientes a empresa recebeu em um determinado dia, mês, ou ano; Retorna-se a quantidade de clientes, a data e o valor total ganho

'/relatorios/{tipo}' - PARA MÉTODO GET

{tipo} -- 'diario', 'mensal', 'anual'
