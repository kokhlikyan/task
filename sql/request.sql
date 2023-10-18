
select
  *
from
  `routes`
where
  `company_id` = 1
  and `routes`.`office_id` = 1
  and exists (
    select
      *
    from
      `drivers`
      inner join `route_users` on `drivers`.`id` = `route_users`.`user_id`
    where
      `routes`.`id` = `route_users`.`route_id`
      and `route_users`.`user_type` = 'App\\Models\\Driver'
      and (
        `name` like '%гвоз%'
        or `surname` like '%гвоз%'
        or `middlename` like '%гвоз%'
      )
  )
order by
  `id` desc
limit
  15