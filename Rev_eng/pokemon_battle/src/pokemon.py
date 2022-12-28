import random

pokemon = {"Charmander": {"type": ["fire"]}, "Squirtle": {"type": ["water"]}, "Bulbasaur": {"type": ["grass", "poison"]}, "Pikachu": {"type": ["electric"]}, "Gengar": {"type": ["ghost", "poison", "electric"]}, "Rhydon": {"type": ["ground", "rock"]}, "Snorlax": {"type": ["normal"]}}
moves = {"fire": ["ember", "flamethrower", "fire spin"], "water": ["water gun", "water fall", "bubble"], "grass": ["razor leaf", "petal dance", "solar beam"], "rock": ["rock slide", "rock throw"], "ground": ["earthquake", "bone club", "bonemerang"], "ghost": ["lick"], "normal": ["mega kick", "pound", "quick attack", "thrash"], "poison": ["sludge", "smog", "acid"], "electric":["thunder", "thunderbolt"]}

class Pokemon:
    def __init__(self):
        self.name = None
        self.moves = None
        self.hp = 0
        self.base_hp = 0

    def choose_pokemon(self, level):
        if level == 0:
            print("Choose a pokemon to battle with:\n")
            mons = list(pokemon.keys())
            for a,b,c in zip(mons[::3], mons[1::3], mons[2::3]):
                print(f"{a:<30}{b:<30}{c:<}")
            chosen_pokemon = input(">> ").strip()
            if not chosen_pokemon in mons:
                print("No cheating!")
                exit()
        else:
            chosen_pokemon = random.sample(list(pokemon.keys()), k=1)[0]
        lineup = self.create_pokemon(chosen_pokemon, level)
        return lineup

    def create_pokemon(self, chosen_pokemon, level):
        poke_attr = {"moves": []}
        avail_moves = set(moves["normal"])
        move_types = random.choices(pokemon[chosen_pokemon]["type"], k=4)
        for type in move_types:
            avail_moves = avail_moves.union(set(moves[type]))

        self.name = chosen_pokemon
        self.moves = random.sample(avail_moves, k=4)
        self.hp = random.randint(20, 100)
        self.base_hp = self.hp

        if level != 0:
            self.hp = int(self.hp * level / 1.5)
