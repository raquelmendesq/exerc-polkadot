
def par():


    numero = int(input("Digite um número: "))

    if numero % 2 == 0:
        return "Par"
    else:
        return "Ímpar"
resultado = par()
print("O número digitado é:", resultado)
