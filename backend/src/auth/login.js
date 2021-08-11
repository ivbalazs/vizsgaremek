const jwt = require('jsonwebtoken');

const Users = [
    {
        email: 'admin@gmail.com',
        // username: 'admin',
        password: 'admin_pw',
        role: 'admin'
    },
    {
        username: 'user',
        password: 'user_pw',
        role: 'user'
    }
];

module.exports = (req, res) => {
    const { email, password } = req.body;

    const user = Users.find(
        u => u.email === email && u.password === password
    );

    if (user) {
        const accessToken = jwt.sign({
            email: user.email,
            role: user.role
        }, process.env.ACCESS_TOKEN_SECRET);

        res.json({
            accessToken
        });
    } else {
        res.send('Username or password incorrect.');
    }

};
