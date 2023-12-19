const user = {
    nome: "Juliana", 
    email: "juliana@juliana.com",
    nascimento: "2021/01/01", 
    role: "estudante", 
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "mariana", 
    email: "m@m.com", 
    role: "admin",
    criarCurso (){
        console.log("Curso criado.");
    }
}

Object.setPrototypeOf(admin, user) //protótipos faz com que objetos herdem recursos de outros. 
admin.criarCurso();
admin.exibirInfos();
