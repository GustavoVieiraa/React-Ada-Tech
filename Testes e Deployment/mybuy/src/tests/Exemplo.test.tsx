function operacao(num1: number, num2: number) {
  return num1 + num2;
}

test("Exemplo 1", () => {
  const num1 = 10;
  const num2 = 20;

  const soma = operacao(num1, num2);

  expect(soma).toBe(30);
});
