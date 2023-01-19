import sys
import heapq
input = sys.stdin.readline
INF = int(1e9)

N = int(input())
M = int(input())
cost = [INF] * (N + 1)
graph = [[] for _ in range(N + 1)]

for _ in range(M):
    s, e, c = map(int, input().split())
    graph[s].append((e, c))
start, end = map(int, input().split())
def dijkstra(start):
    q = []
    cost[start] = 0
    heapq.heappush(q, (0, start))
    while q:
        now_cost, now = heapq.heappop(q)
        if cost[now] < now_cost:
            continue
        for i in graph[now]:
            next_cost = now_cost + i[1]
            if next_cost < cost[i[0]]:
                cost[i[0]] = next_cost
                heapq.heappush(q, (next_cost, i[0]))

dijkstra(start)
print(cost[end])