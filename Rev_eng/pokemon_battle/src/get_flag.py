class Flag:
    def __init__(self):
        self.enc_flag = b"a\x1a<#RT\x08ZF\x16SC\x1c\\Rh\x00\\B\x0e\\,[\x06l\x03\x0f\x04*\\\x01B\x15"
        self.key = b"4shk37chum4shk37chum4shk37chum4sh"

    def print_flag(self):
        flag = self.xor(self.enc_flag, self.key)
        print(f"""
        ____________________________________
       |                                   |
       | {flag.decode("utf-8")} |
       |___________________________________|
        """)

    def xor(self, data, key):
        return bytearray(a^b for a, b in zip(*map(bytearray, [data, key])))
