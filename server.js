const express = require("express");
const app = express();

const configs = {
    forcarHTTPS: false, //Defina para true se desejar que o redirecionamento para HTTPS seja forÃ§ado (Ã© necessÃ¡rio certificado SSL ativo)
    port: process.env.PORT || 3000
}

if (configs.forcarHTTPS) //Se o redirecionamento HTTP estiver habilitado, registra o middleware abaixo
    app.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele
        if (req.headers["x-forwarded-proto"] == "http") //Checa se o protocolo informado nos headers Ã© HTTP
            res.redirect(`https://${req.headers.host}${req.url}`); //Redireciona pra HTTPS
        else //Se a requisiÃ§Ã£o jÃ¡ Ã© HTTPS
            next(); //NÃ£o precisa redirecionar, passa para os prÃ³ximos middlewares que servirÃ£o com o conteÃºdo desejado
    });

app.use(express.static(`dist`)); //Serve os outros arquivos, como CSSs, Javascripts, Imagens etc.

app.get("*", (req, res) => {// O wildcard '*' serve para servir o mesmo index.html independente do caminho especificado pelo navegador.
   // res.sendFile(`${__dirname}/dist/index.html`);
   res.sendFile(`dist/index.html`);
});

app.listen(configs.port, () => {
    console.log(`Escutando na ${configs.port}!`);
});