
SELECT 
  AVG(SALARY), COUNT(department_id) AS Funcionarios 
FROM hr.employees 
GROUP BY department_id 
having Funcionarios > 10;