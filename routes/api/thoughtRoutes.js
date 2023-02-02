const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/thoughtController.js');

// /api/user
router.route('/').get(getUsers);

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser)
  .post(createUser);

module.exports = router;
