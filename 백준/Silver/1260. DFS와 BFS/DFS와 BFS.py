from collections import deque

n, m, v = map(int, input().split())

graph = [[0] * (n + 1) for _ in range(n + 1)]
visited_dfs = [False] * (n + 1)
visited_bfs = [False] * (n + 1)


def dfs(graph, v, visited):
    visited[v] = True
    print(v, end=" ")

    for i in range(n + 1):
        if graph[v][i] == 1 and not visited[i]:
            dfs(graph, i, visited)


def bfs(graph, v, visited):
    queue = deque([v])
    visited[v] = True

    while queue:
        next = queue.popleft()
        print(next, end=" ")

        for i in range(n + 1):
            if graph[next][i] == 1 and not visited[i]:
                queue.append(i)
                visited[i] = True


for _ in range(m):
    x, y = map(int, input().split())
    graph[x][y] = 1
    graph[y][x] = 1

dfs(graph, v, visited_dfs)
print()
bfs(graph, v, visited_bfs)
