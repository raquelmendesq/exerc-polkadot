n = int(input("Digite um número: "))

soma = 0
n += 1

for i in range(n):
    soma = soma + i

print("a soma dos números anteriores ao", n-1,"é:", soma)
