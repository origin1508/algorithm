N = int(input())
graph = [[] for _ in range(N)]
start = 0
count = 0
parent = list(map(int, input().split()))
for i, node in enumerate(parent):
    if node != -1:
        graph[node].append(i)
    else:
        start = i
X = int(input())

def dfs(graph, start, X):
    global count
    if start != X:
        if len(graph[start]) == 0:
            count += 1
        else:
            for i in graph[start]:
                if i == X and len(graph[start]) == 1:
                    count += 1
                else:
                    dfs(graph, i, X)

dfs(graph, start, X)
print(count)