import sys
import heapq # heapq 모듈 임포트

input = sys.stdin.readline

# 음수를 위한 최대 힙 (실제로는 음수를 저장하는 최소 힙)
# 양수를 위한 최소 힙
neg_heap = []
pos_heap = []
ans = []

N = int(input())

for _ in range(N):
    x = int(input())

    if x == 0:
        # 두 힙이 모두 비어있는 경우
        if not neg_heap and not pos_heap:
            ans.append(0)
            continue

        # 양수 힙이 비어있고 음수 힙만 있는 경우
        if not pos_heap:
            # 음수 힙에서 가장 작은 값 (절대값이 가장 큰 음수)을 꺼냄
            # heapq는 최소 힙이므로, 음수를 넣었을 때 가장 작은 값이 음수 중 가장 큰 절대값을 가짐
            val = -heapq.heappop(neg_heap) # 다시 양수로 변환
            ans.append(val)
        # 음수 힙이 비어있고 양수 힙만 있는 경우
        elif not neg_heap:
            val = heapq.heappop(pos_heap)
            ans.append(val)
        # 양수 힙과 음수 힙 모두에 값이 있는 경우
        else:
            # 음수 힙의 가장 작은 값 (절대값은 가장 큼)
            neg_abs_val = abs(neg_heap[0]) # 힙의 0번째 요소는 가장 작은 값 (음수)
            # 양수 힙의 가장 작은 값
            pos_val = pos_heap[0]

            if neg_abs_val <= pos_val: # 절대값이 같거나 음수 쪽이 더 작으면
                val = -heapq.heappop(neg_heap) # 음수 힙에서 꺼냄 (원래 값으로 복원)
                ans.append(val)
            else: # 양수 쪽이 절대값이 더 작으면
                val = heapq.heappop(pos_heap)
                ans.append(val)
    else:
        # 0이 아니면 각 힙에 추가
        if x > 0:
            heapq.heappush(pos_heap, x) # 양수는 그대로 최소 힙에
        else:
            heapq.heappush(neg_heap, -x) # 음수는 절대값을 취해서 최소 힙에 넣음 (음수 중 절대값이 큰 것이 우선순위가 높으므로)

print("\n".join(map(str, ans)))