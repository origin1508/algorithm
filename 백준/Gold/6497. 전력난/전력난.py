import sys

sys.setrecursionlimit(10 ** 6)
input = sys.stdin.readline


def find_parent(parent, x):
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]


def union_parent(parent, a, b):
    a = find_parent(parent, a)
    b = find_parent(parent, b)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b

while True:
    m, n = map(int, input().split())
    if m == 0 and n == 0:
        break
    else:
        parent = [0] * (m + 1)
        edges = []
        cost = 0
        result = 0

        for i in range(1, m + 1):
            parent[i] = i

        for _ in range(n):
            x, y, z = map(int, input().split())
            cost += z
            edges.append((z, x, y))

        edges.sort()
        for edge in edges:
            z, x, y = edge
            if find_parent(parent, x) != find_parent(parent, y):
                result += z
                union_parent(parent, x, y)

        print(cost - result)