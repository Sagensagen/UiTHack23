import os
from random import randint

def calculate(a, b, oper):
    equation = f"{a} {oper} {b}"
    print(f"What is: {equation}", flush=True)
    answer = input()
    if not correct_answer(answer, equation):
        os._exit(0)

def correct_answer(answer, equation):
    correct = str(int(eval(equation)))
    if answer == correct:
        return True
    print(f"Wrong answer!\nThe correct answer was: {correct}", flush=True)
    return False

def start():
    operators = ["+", "-", "*", "/"]
    for i in range(300):
        a = randint(1, 50)
        b = randint(1, 50)
        oper = operators[randint(0,3)]
        calculate(a, b, oper)

    with open("flag.txt", "r") as f:
        flag = f.read()
    print(f"I think you can math: {flag}", flush=True)

if __name__ == '__main__':
    print("So you think you can math?\nShow me by answering 500 questions correct!\nThe answer must be an integer, Ready?", flush=True)
    _ = input()
    start()
