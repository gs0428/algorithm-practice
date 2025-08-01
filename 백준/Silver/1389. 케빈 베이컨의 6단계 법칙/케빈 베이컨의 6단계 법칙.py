import sys

input = sys.stdin.readline

N, M = map(int, input().split(" "))

friends = [[] for _ in range(N+1)]

# 0번은 케빈 베이컨 수, 1번은 사람 번호
minimum = [sys.maxsize, sys.maxsize]

for _ in range(M):
    a, b = map(int, input().split(" "))
    friends[a].append(b)
    friends[b].append(a)


for i in range(1, N+1):
    visited = [False] * (N+1)

    def bfs(x):
        # 0번은 케빈 베이컨 수, 1번은 사람 번호
        visited[x] = True
        currentCnt = 0
        queue = [[0, x]]

        while len(queue) > 0:
            baconCnt, peopleNum = queue[0]
            currentCnt += baconCnt
            del queue[0]

            for friend in friends[peopleNum]:
                if visited[friend]:
                    continue
                queue.append([baconCnt + 1, friend])
                visited[friend] = True

        return currentCnt

    cnt = bfs(i)

    curMinBacon, curMinPeopleNum = minimum
    if curMinBacon > cnt:
        minimum = [cnt, i]

print(minimum[1])
