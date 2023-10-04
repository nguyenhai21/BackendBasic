const connection = require('../config/database');

const getAllUser = async () => {
    let [results, fields] = await connection.query('select * from Users');
    return results;
};

const getUserId = async (userID) => {
    let [results, fields] = await connection.query('select * from Users where id = ?', [userID]);

    let user = results && results.length > 0 ? results[0] : {};

    return user;
}

const UpdateUserID = async (email, city, name, userID) => {
    let [results, fields] = await connection.query(
        `UPDATE Users 
        SET email = ?,city = ?, name = ? 
        WHERE id = ?`,
        [email, city, name, userID]
    );
}

const DeleteUserID = async (id) => {
    let [results, fields] = await connection.query(
        `DELETE FROM Users WHERE id=?`,
        [id]
    );
}

module.exports = {
    getAllUser, getUserId, UpdateUserID, DeleteUserID
}