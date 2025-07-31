import sys

input = sys.stdin.readline

N, M = map(int, input().split(" "))
arr = []
visited = [[False]*M for _ in range(N)]
count = [[0]*M for _ in range(N)]
startIdx = []

for i in range(N):
    area = input().split(" ")
    if "2" in area:
        idx = area.index("2")
        startIdx = [idx, i]
    arr.append(list(map(int, area)))


def bfs(x, y):
    visited[y][x] = True
    queue = [[x, y]]
    while len(queue) > 0:
        curX, curY = queue[0]
        del queue[0]
        if (curX < M-1 and  not visited[curY][curX+1] and arr[curY][curX+1] != 0):
            queue.append([curX+1, curY])
            visited[curY][curX+1] = True
            count[curY][curX+1] = count[curY][curX] + 1
        if (curY < N-1 and  not visited[curY+1][curX] and arr[curY+1][curX] != 0):
            queue.append([curX, curY+1])
            visited[curY+1][curX] = True
            count[curY+1][curX] = count[curY][curX] + 1
        if (curX > 0 and  not visited[curY][curX-1] and arr[curY][curX-1] != 0):
            visited[curY][curX-1] = True
            queue.append([curX-1, curY])
            count[curY][curX-1] = count[curY][curX] + 1
        if (curY > 0 and  not visited[curY-1][curX] and arr[curY-1][curX] != 0):
            queue.append([curX, curY-1])
            visited[curY-1][curX] = True
            count[curY-1][curX] = count[curY][curX] + 1

bfs(startIdx[0], startIdx[1])

for i in range(N):
    for j in range(M):
        if (not visited[i][j] and arr[i][j] != 0):
            count[i][j] = -1


tempAns = []
for item in count:
    tempAns.append(" ".join(map(str, item)))

ans = ""

for item in tempAns:
    ans += item + '\n'

print(ans)