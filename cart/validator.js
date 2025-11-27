/* ========================================================================= */

/* Nome */

function NameIsValid(name, errorId, silent = false) {
  const isValid = name.replace(/\s+/g, "").length >= 3;

  if (!silent && errorId) {
    const errorEl = document.getElementById(errorId);
    errorEl.style.display = isValid ? "none" : "block";
    errorEl.textContent = isValid ? "" : "Nome inválido — mínimo 3 letras.";
  }

  return isValid;
}

/* ========================================================================= */
/* CPF */

/* CPF */

function formatCPF(raw) {
  const nums = String(raw).replace(/\D/g, "").slice(0, 11);
  if (nums.length <= 3) return nums;
  if (nums.length <= 6) return nums.replace(/(\d{3})(\d+)/, "$1.$2");
  if (nums.length <= 9) return nums.replace(/(\d{3})(\d{3})(\d+)/, "$1.$2.$3");
  return nums.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
}

function CPFIsValid(raw, errorId, silent = false) {
  const cpf = raw.replace(/\D/g, "");
  let isValid = true;

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) isValid = false;

  if (isValid) {
    let soma = 0;
    for (let i = 0; i < 9; i++) soma += cpf[i] * (10 - i);
    let resto = (soma * 10) % 11;
    if (resto === 10) resto = 0;
    if (resto !== Number(cpf[9])) isValid = false;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += cpf[i] * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10) resto = 0;
    if (resto !== Number(cpf[10])) isValid = false;
  }

  if (!silent && errorId) {
    const errorEl = document.getElementById(errorId);
    errorEl.style.display = isValid ? "none" : "block";
    errorEl.textContent = isValid ? "" : "CPF inválido.";
  }

  return isValid;
}
