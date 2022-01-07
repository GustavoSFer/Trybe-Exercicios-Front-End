1 - Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .
SELECT 
    actor.actor_id, actor.first_name, film.film_id
FROM
    sakila.actor AS actor
		INNER JOIN
    sakila.film_actor AS film ON actor.actor_id = film.actor_id;

2 - Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .
SELECT * FROM sakila.staff;

SELECT a.first_name, a.last_name, b.address FROM sakila.staff AS a
INNER JOIN sakila.address AS b
ON  a.address_id = b.address_id;

3 -Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .

SELECT c.customer_id, c.first_name, c.email, a.city_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

4 - Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer .

SELECT c.first_name, c.email, a.city_id, a.address, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%';