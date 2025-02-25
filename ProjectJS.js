function showRecovery() {
    document.getElementById("title").innerText = "Recuperar Senha";
    document.getElementById("form-content").innerHTML = `
        <p>Digite seu e-mail para receber as instruções de recuperação.</p>
        <div class="input-container">
            <input class="input" type="email" id="recovery-email" placeholder=" ">
            <label for="email" class="input-label">E-mail</label>
        </div>
        <button class="button" onclick="recoverPassword()">Enviar Link de Recuperação</button>
        <span class="link" onclick="showLogin()">Voltar para login</span>
    `;
}
function showRegister() {
    document.getElementById("title").innerText = "Criar Conta";
    document.getElementById("form-content").innerHTML = `
    <div class="input-container">
        <input class="input" type="text" id="name" placeholder=" ">
        <label for="name" class="input-label">Nome Completo</label>
    </div>
          <div class="input-container">
                <input class="input" type="email" id="email" placeholder=" " required />
                <label for="email" class="input-label">E-mail</label>
            </div>
         <div class="input-container">
                <input class="input" type="password" id="password" placeholder=" " required />
                <label for="password" class="input-label">Senha</label>
            </div>
        <button class="button" onclick="register()">Registrar</button>
        <span class="link" onclick="showLogin()">Já tem uma conta? Faça login</span>
    `;
}

function showLogin() {
    document.getElementById("title").innerText = "Login";
    document.getElementById("form-content").innerHTML = `
        <div class="input-container">
            <input class="input" type="email" id="email" placeholder=" ">
            <label for="email" class="input-label">E-mail</label>
        </div>
        <div class="input-container">
            <input class="input" type="password" id="password" placeholder=" ">
            <label for="password" class="input-label">Senha</label>
        </div>
            <button class="button" onclick="login()">Entrar</button>
            <span class="link" onclick="showRecovery()">Esqueceu sua senha?</span>
            <span class="link" onclick="showRegister()">Criar uma conta</span>
    `;
}

// Valida o formato do e-mail (simples)
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Valida a senha (mínimo de 6 caracteres)
function isValidPassword(password) {
    return password.length >= 6;
}

function recoverPassword() {
    const email = document.getElementById("recovery-email").value;
    
    // Valida o e-mail
    if (!isValidEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    alert("Um link de recuperação foi enviado para seu e-mail.");
}

function register() {
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    // Valida o e-mail
    if (!isValidEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Valida a senha
    if (!isValidPassword(password)) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    alert("Conta criada com sucesso! Agora você pode fazer login.");
    showLogin();
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Valida o e-mail
    if (!isValidEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Valida a senha
    if (!isValidPassword(password)) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    alert("Login realizado com sucesso!");
}
