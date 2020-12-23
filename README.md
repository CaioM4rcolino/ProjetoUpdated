# ProjetoUpdated
versão atualizada do projeto integrado com relatórios na API 

Domínio da API:

http://localhost/Caio/ProjetoUpdated/ProjetoIntegrado/api/api.php/



ENDPOINTS:


'/clientes' - PARA MÉTODO GET & POST

'/clientes/{id}' - PARA MÉTODO GET, PUT, & DELETE

{id} -- corresponde ao ID do campo no banco de dados, voltado ao desenvolvedor


*Registros: corresponde aos valores que a empresa precisa para determinar quanto é cobrado por hora, quantas vagas, disponíveis e se há um desconto atribuído

'/registros' - PARA MÉTODO GET, POST & PUT

'/registros/{id}' - PARA MÉTODO DELETE


*Relatórios: Exibem quantos clientes a empresa recebeu em um determinado dia, mês, ou ano; Retorna-se a quantidade de clientes, a data e o valor total ganho

'/relatorios/{tipo}' - PARA MÉTODO GET

{tipo} -- 'diario', 'mensal', 'anual'
