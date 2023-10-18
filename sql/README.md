## SQL

### Результат выполнения этого запроса

alias 1 = true 
alias 0 = false

```sql
select
  *
from
  `routes`
where
  `company_id` = 1  
  and `routes`.`office_id` = 1
  and exists (  Этот проверяет существование определенных данных в связанных таблицах
    select
      *
    from
      `drivers`
      inner join `route_users` on `drivers`.`id` = `route_users`.`user_id` Он выбирает данные из двух таблиц, drivers и route_users, с использованием условия внутреннего соединения.
    where
      `routes`.`id` = `route_users`.`route_id` если это вернет 1
      идем дольше
      and `route_users`.`user_type` = 'App\\Models\\Driver' если это вернет 1 идем дольше и последний 3 условия написано с или если олин из них 1 значит все ок
      and (
        `name` like '%гвоз%'
        or `surname` like '%гвоз%'
        or `middlename` like '%гвоз%'
      )
  )
order by 
  `id` desc  это сортирует по идентификатору в обратном порядке
limit  это получает первые 15 записей
  15
```


В итоге этот SQL-запрос извлекает строки из таблицы routes, где company_id = 1, office_id = 1, и есть связанная запись в таблицах drivers и route_users с определенными критериями для user_type и имени (name), фамилии (surname) и отчества (middlename), содержащими подстроку '%гвоз%'. Результат затем сортируется по столбцу id в порядке убывания, и возвращается только верхние 15 строк.




