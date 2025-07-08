import sys
input = sys.stdin.readline

N = int(input())
M = int(input())
S = input().strip()

pattern = "I" + "OI" * N
p_len = len(pattern)

cnt = 0
start = S.find("I")     

while start != -1 and start <= M - p_len:
    if S[start:start + p_len] == pattern:
        cnt += 1
    start += 1

print(cnt)