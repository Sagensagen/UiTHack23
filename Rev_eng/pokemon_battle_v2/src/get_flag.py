class Flag:
    def __init__(self):
        self.key = b"1amG0ingOn4n4dv3ntuuuuuuuuuuuuuuuuuuur3"

    def print_flag(self, flag):
        enc_flag = self.xor(flag, self.key)
        print(f"""
        ___________________________________________________________________________________________________
       |                                                                                                   |
       | {bytes(enc_flag)} |
       |___________________________________________________________________________________________________|
        """)

    def xor(self, data, key):
        return bytearray(a^b for a, b in zip(*map(bytearray, [data, key])))
