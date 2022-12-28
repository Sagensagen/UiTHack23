from random import choice, randint
import sys
from time import sleep
from get_flag import Flag

class Battle:
    def __init__(self, user, ai):
        self.user = user
        self.ai = ai
        self.gym_leaders = ["Brock", "Misty", "Sabrina", "Blaine", "Champion Blue"]

    def start(self, level):
        self.battle_text(f"\n{self.gym_leaders[level-1]} wants to fight!\n")
        self.battle_text(f"{self.gym_leaders[level-1]} sent out {self.ai.name}!\n")
        self.battle_text(f"Go {self.user.name}!\n")

        self.battle_text(f"\n{self.ai.name} has {self.ai.hp} hp!\n")
        self.battle_text(f"{self.user.name} has {self.user.hp} hp!\n")

        while True:
            self.battle_text("\nChoose a move:\n")
            for a,b in zip(self.user.moves[::2], self.user.moves[1::2]):
                print(f"{a:<20}{b:<}")
            move = input("\n>> ")
            if not move in self.user.moves:
                self.battle_text("Your pokemon does not know this move!\n")
                continue

            self.attack(self.user, self.ai, move)
            if self.ai.hp <= 0:
                self.win(self.gym_leaders[level-1])
                break

            self.attack(self.ai, self.user, choice(self.ai.moves))
            if self.user.hp <= 0:
                self.lose(self.gym_leaders[level-1])

    def attack(self, attacker, defender, move):
        dmg = randint(10,60)
        defender.hp -= dmg
        if defender.hp <= 0:
            defender.hp = 0
        self.battle_text(f"{attacker.name} used {move}!\n")
        self.battle_text(f"{defender.name} has {defender.hp} hp!\n")

    def battle_text(self, text):
        for char in text:
            sys.stdout.write(char)
            sys.stdout.flush()
            sleep(0.08)

    def win(self, opponent):
        self.battle_text(f"You have defeated {opponent}!\n")
        self.user.hp = self.user.base_hp

    def lose(self, opponent):
        self.battle_text(f"You lost to {opponent}!\n")
        self.battle_text(f"GAME OVER!\n")
        exit()
