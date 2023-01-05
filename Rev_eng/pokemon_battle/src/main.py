from pokemon import Pokemon
from battle import Battle
from get_flag import Flag

def main():
    user = Pokemon()
    user.choose_pokemon(0)

    for level in range(1, 6):
        ai = Pokemon()
        ai.choose_pokemon(level)

        battle = Battle(user, ai)
        battle.start(level)

    Flag().print_flag()

if __name__ == '__main__':
    main()
