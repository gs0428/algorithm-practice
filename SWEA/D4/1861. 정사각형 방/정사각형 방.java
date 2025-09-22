import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

class Solution {
    static int T, N, minNum, maxCnt;
    static int[][] room;
    static boolean[][] visited;
    static Queue<Location> q = new LinkedList<>();

    public static void main(String[] args) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        T = Integer.parseInt(in.readLine());

        for (int i = 0; i < T; i++) {
            N = Integer.parseInt(in.readLine());
            maxCnt = Integer.MIN_VALUE;
            minNum = Integer.MAX_VALUE;
            room = new int[N][N];
            q.clear();

            for (int j = 0; j < N; j++) {
                StringTokenizer st = new StringTokenizer(in.readLine());
                for (int k = 0; k < N; k++) {
                    room[j][k] = Integer.parseInt(st.nextToken());
                }
            }

            for (int j = 0; j < N; j++) {
                for (int k = 0; k < N; k++) {
                    visited = new boolean[N][N];

                    // j가 y, k가 x
                    bfs(k, j);

                }
            }

            sb.append("#").append(i + 1).append(" ").append(minNum).append(" ").append(maxCnt).append("\n");
        }

        System.out.println(sb);

    }

    static void bfs(int x, int y) {
        visited[y][x] = true;
        q.add(new Location(x, y, 1));

        while (!q.isEmpty()) {
            Location loc = q.poll();
            int curX = loc.getX();
            int curY = loc.getY();
            int curCnt = loc.getCnt();

            if (curCnt >= maxCnt) {
                int prevCnt = maxCnt;
                maxCnt = curCnt;
                if (prevCnt < maxCnt) {
                    minNum = room[y][x];
                } else {
                    minNum = Math.min(room[y][x], minNum);
                }
            }

            if (curX > 0 && !visited[curY][curX - 1] && (room[curY][curX - 1] == 1 + room[curY][curX])) {
                visited[curY][curX - 1] = true;
                q.add(new Location(curX - 1, curY, curCnt + 1));
            }
            if (curY > 0 && !visited[curY - 1][curX] && (room[curY - 1][curX] == 1 + room[curY][curX])) {
                visited[curY - 1][curX] = true;
                q.add(new Location(curX, curY - 1, curCnt + 1));
            }
            if (curX < N - 1 && !visited[curY][curX + 1] && (room[curY][curX + 1] == 1 + room[curY][curX])) {
                visited[curY][curX + 1] = true;
                q.add(new Location(curX + 1, curY, curCnt + 1));
            }
            if (curY < N - 1 && !visited[curY + 1][curX] && (room[curY + 1][curX] == 1 + room[curY][curX])) {
                visited[curY + 1][curX] = true;
                q.add(new Location(curX, curY + 1, curCnt + 1));
            }

        }
    }

    static class Location {
        int x, y, cnt;

        public Location(int x, int y, int cnt) {
            this.x = x;
            this.y = y;
            this.cnt = cnt;
        }

        public int getX() {
            return x;
        }

        public int getY() {
            return y;
        }

        public int getCnt() {
            return cnt;
        }
    }
}
