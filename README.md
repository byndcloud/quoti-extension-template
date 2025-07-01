# Quoti Extension Template

Este é um modelo criado para facilitar a construção de extensões voltadas às diversas organizações que utilizam o **Quoti**.

> ⚠️ **Importante**  
> Para trabalhar com suas extensões, **é indispensável utilizar o `quoti-cli`**.

## 🛠️ Setup (Configuração Inicial)

Siga os passos abaixo para configurar seu ambiente corretamente:

1. **Verifique a versão do Node.js**  
   É necessário utilizar o **Node.js versão 20 ou superior**.  
   Execute o seguinte comando para verificar sua versão instalada:

   ```bash
   node -v

   ```

2. **Instale as dependências do projeto**  
   Após garantir a versão correta do Node.js, instale as dependências com o comando:

   ```bash
   npm i

   ```

3. **Desenvolva suas extensões**  
   Para trabalhar em alguma extensão basta utilizar os comandos do **quoti-cli** :
   ```bash
   qt login -f #fazer login na organização
   qt link <path-da-extensão> #fazer o link do arquivo
   qt serve <path-da-extensão> #fazer a extensão rodar no modo develop na organização
   qt deploy <path-da-extensão> #para fazer upload da extensão na organização
   ```

## Automações

Existe uma pasta chamada **.scripts/** onde você pode criar automações de forma programática de acordo com necessidade da equipe de desenvolvimento pode ser executada através de um packageManager como o `npm`, `yarn` ou `pnpm`.

> ⚠️ **Observação**  
>  A automação `start:dev` possui algumas limitações como o `hot reload`.
