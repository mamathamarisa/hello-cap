module.exports=
(srv)=>{
    srv.on("sayHello",() =>
        {
        return 'Hello CAP apps';

        });
}
//srv is instance of my emmiter