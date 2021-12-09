SELECT 
  MAX(salary) AS Maior, 
  MIN(salary) AS Menor, 
  SUM(salary) AS Soma, 
  ROUND(AVG(salary), 2) AS Média 
FROM hr.employees;