import sys

input = sys.stdin.readline
n = int(input())

arr = [0] * 10001

maxNum = 0
for i in range(n):
    num = int(input())
    maxNum = max(maxNum, num)
    arr[num] += 1


for i in range(10001):
    if arr[i] > 0:
        for j in range(arr[i]):
            print(i)