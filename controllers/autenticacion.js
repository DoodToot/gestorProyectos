function login(req, res) {
    const {email, password} = req.body;
    Usuario.findOne({where: {email, password}})
    .then(usuario => {
        if (usuario) {
            req.session.usuario = usuario;
            res.redirect("/");
        } else {
            res.redirect("/login");
        }
    })
}

module.exports = {
    login
}