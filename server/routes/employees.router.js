const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // req.user
  console.log(req.user); // is a logged in user
  const queryUserRole = `SELECT * FROM "roles" WHERE "id" = $1;`;
  // GET route code here

  pool
    .query(queryUserRole, [req.user.role_id])
    .then((response) => {
      const userAccess = response.rows[0].access_level;

      const queryText = `SELECT "user".id, "user".username, "user".role_id, "role".label, "role".access_level
      FROM "user"
      JOIN "roles" ON "user".role_id = "roles".id
      WHERE "roles".access_level < $1
      ORDER BY username ASC;`;

      pool
        .query(queryText, [userAccess])
        .then((responseEmployees) => {
          res.send(responseEmployees.rows);
        })
        .catch((err) => {
          console.log(err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
