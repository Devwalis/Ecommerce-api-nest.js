import { Module } from '@nestjs/common';

@Module({})
export class UsuarioModule {

   private id: number;
   private nome: string;
   private email: string;
   private cpf: string;
   private idade: number;
   private telefone: number;
   
   private administrador: boolean;
   private colaborador: boolean;
   private usuarioExterno: boolean;



public getId(): number {
   return this.id;
}
public getNome(): string{
   return this.nome;

}
public getEmail(): string {
   return this.email;

}
public getCpf(): string {
   return this.cpf;

}
public getIdade(): number{
   return this.idade;
}

public getTelefone(): number{
   return this.telefone;

}

public getAdministrador(): boolean {
   return this.administrador;

}
public getColaborador(): boolean{
   return this.colaborador;

}
public getusuarioExterno(): boolean{
   return this.usuarioExterno
}


public setId(id: number): void {
   this.id = id;

}
public setNome(nome: string): void{
   this.nome = nome;

}
public setEmail(email: string): void {
   this.email = email;

}
public setTelefone(telefone: number): void{
   this.telefone = telefone;
}
public setAdministrador(administrador: boolean): void{
   this.administrador = administrador;
}

public getUsuarioExterno(): boolean{
   return this.usuarioExterno;
}



public constructor(id: number, nome: string, email: string, cpf:string, idade: number, telefone: number, administrador: boolean, colaborador: boolean, usuarioExterno: boolean){
   this.id = id;
   this.nome = nome;
   this.email = email;
   this.cpf = cpf;
   this.idade = idade;
   this.colaborador = colaborador;
   this.administrador = administrador;
   this.usuarioExterno = usuarioExterno;
}



}

   





