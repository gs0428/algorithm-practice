import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

class Solution {
    static int T, N, K, maxHeight, ans;
    static int[][] trails;
    static boolean[][] visited;
    static Queue<Location> q = new LinkedList<>();
    static Queue<Location> highestTrails = new LinkedList<>();

    public static void main(String[] args) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        StringTokenizer st;

        T = Integer.parseInt(in.readLine());

        for (int i = 0; i < T; i++) {
            st = new StringTokenizer(in.readLine());
            N = Integer.parseInt(st.nextToken());
            trails = new int[N][N];
            visited = new boolean[N][N];
            K = Integer.parseInt(st.nextToken());
            maxHeight = Integer.MIN_VALUE;
            ans = Integer.MIN_VALUE;
            q.clear();

            for (int j = 0; j < N; j++) {
                st = new StringTokenizer(in.readLine());

                for (int k = 0; k < N; k++) {
                    int height = Integer.parseInt(st.nextToken());
                    trails[j][k] = height;
                    if (height > maxHeight) {
                        maxHeight = height;
                        highestTrails.clear();
                    }
                    if (height == maxHeight) {
                        highestTrails.add(new Location(k, j, height, 1, K));
                    }
                }
            }

            while (!highestTrails.isEmpty()) {
                Location tmp = highestTrails.poll();
                visited[tmp.getY()][tmp.getX()] = true;
                dfs(tmp);
                visited[tmp.getY()][tmp.getX()] = false;
            }

            sb.append("#").append(i + 1).append(" ").append(ans).append("\n");
        }

        System.out.println(sb);

    }

    static void dfs(Location tmp) {
        int curX = tmp.getX();
        int curY = tmp.getY();
        int curHeight = tmp.getHeight();
        int curCnt = tmp.getCnt();
        int curDigCnt = tmp.getDigCnt();
        boolean canDig = curDigCnt == K;

        int nextDigCnt, nextHeight;

        ans = Math.max(ans, curCnt);


        if (curX > 0 && !visited[curY][curX - 1]) {
            nextHeight = trails[curY][curX - 1];
            nextDigCnt = 0;
            if (trails[curY][curX - 1] >= curHeight && canDig) {
                int digCnt = trails[curY][curX - 1] - (curHeight - 1);
                if (digCnt <= K) {
                    nextDigCnt = 1;
                }
                nextHeight = curHeight - nextDigCnt;
            }
            if (nextHeight < curHeight) {
                visited[curY][curX - 1] = true;
                dfs(new Location(curX - 1, curY, nextHeight, curCnt + 1, curDigCnt - nextDigCnt));
                visited[curY][curX - 1] = false;
            }
        }
        if (curY > 0 && !visited[curY - 1][curX]) {
            nextHeight = trails[curY - 1][curX];
            nextDigCnt = 0;
            if (trails[curY - 1][curX] >= curHeight && canDig) {
                int digCnt = trails[curY - 1][curX] - (curHeight - 1);
                if (digCnt <= K) {
                    nextDigCnt = 1;
                }
                nextHeight = curHeight - nextDigCnt;
            }
            if (nextHeight < curHeight) {
                visited[curY - 1][curX] = true;
                dfs(new Location(curX, curY - 1, nextHeight, curCnt + 1, curDigCnt - nextDigCnt));
                visited[curY - 1][curX] = false;
            }
        }
        if (curX < N - 1 && !visited[curY][curX + 1]) {
            nextHeight = trails[curY][curX + 1];
            nextDigCnt = 0;
            if (trails[curY][curX + 1] >= curHeight && canDig) {
                int digCnt = trails[curY][curX + 1] - (curHeight - 1);
                if (digCnt <= K) {
                    nextDigCnt = 1;
                }
                nextHeight = curHeight - nextDigCnt;
            }
            if (nextHeight < curHeight) {
                visited[curY][curX + 1] = true;
                dfs(new Location(curX + 1, curY, nextHeight, curCnt + 1, curDigCnt - nextDigCnt));
                visited[curY][curX + 1] = false;
            }
        }
        if (curY < N - 1 && !visited[curY + 1][curX]) {
            nextHeight = trails[curY + 1][curX];
            nextDigCnt = 0;
            if (trails[curY + 1][curX] >= curHeight && canDig) {
                int digCnt = trails[curY + 1][curX] - (curHeight - 1);
                if (digCnt <= K) {
                    nextDigCnt = 1;
                }
                nextHeight = curHeight - nextDigCnt;
            }
            if (nextHeight < curHeight) {
                visited[curY + 1][curX] = true;
                dfs(new Location(curX, curY + 1, nextHeight, curCnt + 1, curDigCnt - nextDigCnt));
                visited[curY + 1][curX] = false;
            }
        }

    }

    static class Location {
        int x, y, height, cnt, digCnt;

        public Location(int x, int y, int height, int cnt, int digCnt) {
            this.x = x;
            this.y = y;
            this.height = height;
            this.cnt = cnt;
            this.digCnt = digCnt;
        }

        public int getX() {
            return x;
        }

        public int getY() {
            return y;
        }

        public int getHeight() {
            return height;
        }

        public int getCnt() {
            return cnt;
        }

        public int getDigCnt() {
            return digCnt;
        }
    }
}
