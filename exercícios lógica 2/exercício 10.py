def eh_primo(numero):
    if numero < 1:
        return False
    for i in range(2, int(numero**0.5) + 1):
        if numero % i == 0:
            return False
    return True

def encontrar_primos(inicio, fim):
    primos = []
    for numero in range(inicio, fim + 1):
        if eh_primo(numero):
            primos.append(numero)
    return primos


inicio = int(input("digite o número inicial: "))
fim = int(input("digite o número final: "))
primos = encontrar_primos(inicio, fim)
print(f"Números primos no intervalo de {inicio} a {fim}: {primos}")
