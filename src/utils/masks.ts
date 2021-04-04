// Usando RegExp

function maskCartaoCredito(value: string) {
  value = value.replace(/\D/g, ''); // Permite apenas dígitos
  value = value.replace(/(\d{4})/g, '$1 '); // Coloca um espaço a cada 4 caracteres
  value = value.replace(/\ $/, ''); // Remove o espaço se estiver sobrando
  value = value.substring(0, 19); // Limita o tamanho

  return value;
}

function maskCvv(value: string) {
  value = value.replace(/\D/g, ''); // Permite apenas dígitos
  value = value.substring(0, 3); // Limita o tamanho
  return value;
}

function maskValidade(value: string) {
  value = value.replace(/\D/g, ''); // Permite apenas dígitos
  value = value.replace(/(\d{2})(\d{2})/g, '$1/$2'); // Coloca um espaço a cada 4 caracteres
  value = value.substring(0, 5); // Limita o tamanho
  return value;
}

function maskString(value: string) {
  value = value.replace(/\W{30}/);
  value = value.substring(0, 30); // Limita o tamanho
  return value;
}

export {
  maskCartaoCredito, maskCvv, maskString, maskValidade,
};
