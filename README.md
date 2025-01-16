# My-Portfolio

Este é o código-fonte do meu portfólio pessoal, onde mostro meus projetos, habilidades e informações de contato.

## Tecnologias Utilizadas

- **HTML**: Usei HTML para a estruturação das páginas.
- **CSS**: Apliquei CSS para estilização e layout das páginas.
- **JavaScript**: Adicionei interatividade e funcionalidades usando JavaScript.
- **EmailJS**: Integrei o EmailJS para o formulário de contato.
- **Font Awesome**: Utilizei ícones do Font Awesome.

## Estrutura do Projeto

- **index.html**: Criei a estrutura principal do portfólio neste arquivo.
- **style.css**: Escrevi os estilos e layout no arquivo style.css.
- **script.js**: Adicionei a interatividade e funcionalidades no arquivo script.js.

## Funcionalidades

1. **Menu de Navegação**: Criei um menu fixo no topo da página que permite navegar para diferentes seções do portfólio.
2. **Seção de Home**: Escrevi uma breve introdução sobre mim como desenvolvedor backend.
3. **Seção Sobre Mim**: Adicionei mais informações sobre minha trajetória, habilidades e experiência.
4. **Seção de Projetos**: Apresentei meus projetos práticos com links para os repositórios no GitHub e outros detalhes.
5. **Formulário de Contato**: Implementei um formulário funcional para que visitantes possam enviar mensagens diretamente para meu email.

## Configuração e Execução

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/IsisMarieli/portfolio.git
    ```

2. **Abra o arquivo `index.html`** no seu navegador para visualizar o portfólio.

## Integração com EmailJS

Configurei o formulário de contato para integrar com o EmailJS, permitindo que as mensagens sejam enviadas diretamente para meu email. Para configurar o EmailJS:

1. Crie uma conta no [EmailJS](https://www.emailjs.com/).
2. Configure seu serviço, modelo e obtenha o ID do usuário.
3. Inicialize o EmailJS no arquivo `script.js` com seu ID de usuário:
    ```javascript
    emailjs.init("Seu_User_ID");
    ```

4. Adicionei o código para enviar o email quando o formulário for submetido.

## Estilos e Responsividade

O design do meu portfólio é responsivo para garantir uma boa experiência em diferentes dispositivos. Utilizei `@media queries` para adaptar o layout em telas menores.

### Exemplo de CSS Utilizado

```css
body {
    background: linear-gradient(135deg, #360568, #5B2A86, #7785AC);
    color: #fff;
    font-family: 'Raleway', sans-serif;
}

header {
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    padding: 10px 30px;
    background-color: rgba(55, 5, 104, 0.74);
}
