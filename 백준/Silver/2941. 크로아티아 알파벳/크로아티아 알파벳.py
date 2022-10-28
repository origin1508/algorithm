x = input()
alphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]

for c in alphabet:
  x = x.replace(c, "*")

print(len(x))