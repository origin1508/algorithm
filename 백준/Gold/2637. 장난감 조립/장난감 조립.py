from collections import deque
import sys
input = sys.stdin.readline

N = int(input())
M = int(input())
basis = []

indegree = [0] * (N + 1)
graph = [[] for _ in range(N + 1)]

for _ in range(M):
    X, Y, K = map(int, input().split())
    indegree[X] += 1
    graph[Y].append((X, K))


def topology_sort():
    result = [[0] * (N + 1) for _ in range(N + 1)]
    q = deque()

    for i in range(1, N + 1):
        if indegree[i] == 0:
            q.append(i)
            basis.append(i)

    while q:
        now = q.popleft()

        for i in graph[now]:
            X, K = i
            indegree[X] -= 1
            if now in basis:
                result[X][now] += K
            else:
                for j in basis:
                    result[X][j] += result[now][j] * K
            if indegree[X] == 0:
                q.append(X)

    for i in basis:
        print(i, result[N][i])

topology_sort()
