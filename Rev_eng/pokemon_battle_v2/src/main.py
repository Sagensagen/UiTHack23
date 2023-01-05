from pokemon import Pokemon
from battle import Battle
from get_flag import Flag
from time import sleep
import sys

def battle_text(text):
    for char in text:
        sys.stdout.write(char)
        sys.stdout.flush()
        sleep(0.05)

def main():
    code = input("Secret Code?: ")
    if code == "C0mpl3te_P0ked3x":
        battle_text("\nWelcome back Champion!\n")
        Flag().print_flag(b"UiTHack23{Y0u_ar3_7he_p0k3mon_ch4mpi0n}")
        return

    user = Pokemon()
    user.choose_pokemon(0)

    for level in range(1, 4):
        ai = Pokemon()
        ai.choose_pokemon(level)

        battle = Battle(user, ai)
        battle.start(level)

    battle_text("\nYou are the new Pokemon Champion!\n")
    battle_text("\nThis might be useful for you")
    print(f"""
        _______________________________
       |                               |
       | Secret Code: C0mpl3te_P0ked3x |
       |_______________________________|""")
    battle_text("\nHere is your flag:")
    Flag().print_flag(b"UiTHack23{Y0u_ar3_7he_p0k3mon_ch4mpi0n}")

if __name__ == '__main__':
    main()
