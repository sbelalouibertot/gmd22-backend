CREATE VIEW "recipe_replacement" AS SELECT
	r.id,
	r. "name",
	re.id AS "re.id",
	e. "date"
FROM
	recipes r
	LEFT JOIN recipes_events re ON r.id = re.recipe_id
	LEFT JOIN events e ON e.id = re.event_id
ORDER BY
	e. "date" DESC;