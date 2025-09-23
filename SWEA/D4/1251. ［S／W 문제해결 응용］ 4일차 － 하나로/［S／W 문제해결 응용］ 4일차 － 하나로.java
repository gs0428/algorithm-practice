import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

class Solution {
    static int T, N, xCoord, yCoord, tmp, count;
    static double E, result;
    static Edge[] edgeList;
    static Location[] locations;
    static int[] parents;

    static void make() {
        for (int i = 0; i < N; i++) {
            parents[i] = i;
        }
    }

    static int find(int v) {
        if (parents[v] == v) return v;

        return parents[v] = find(parents[v]);
    }

    static boolean union(int a, int b) {
        int aRoot = find(a);
        int bRoot = find(b);

        if (aRoot == bRoot) return false;

        parents[aRoot] = bRoot;
        return true;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        StringTokenizer st;

        T = Integer.parseInt(in.readLine());

        for (int i = 0; i < T; i++) {
            N = Integer.parseInt(in.readLine());
            edgeList = new Edge[(N * (N - 1)) / 2];
            parents = new int[N];
            locations = new Location[N];

            // X 좌표 받는 과정
            st = new StringTokenizer(in.readLine());
            for (int j = 0; j < N; j++) {
                xCoord = Integer.parseInt(st.nextToken());
                locations[j] = new Location();
                locations[j].x = xCoord;
            }

            // Y 좌표 받는 과정
            st = new StringTokenizer(in.readLine());
            for (int j = 0; j < N; j++) {
                yCoord = Integer.parseInt(st.nextToken());
                locations[j].y = yCoord;
            }

            E = Double.parseDouble(in.readLine());

            tmp = 0;
            for (int j = 0; j < N - 1; j++) {
                for (int k = j + 1; k < N; k++) {
                    edgeList[tmp++] = new Edge(j, k);
                }
            }

            make();

            Arrays.sort(edgeList);

            result = 0;
            count = 0;

            for (Edge e : edgeList) {
                if (union(e.from, e.to)) {
                    result += e.cost;
                    if (++count == edgeList.length - 1) {
                        break;
                    }
                }
            }

            sb.append("#").append(i + 1).append(" ").append(Math.round(result * E)).append("\n");
        }

        System.out.println(sb);
    }

    static class Location {
        int x, y;
    }

    static class Edge implements Comparable<Edge> {
        int from, to;
        double cost;

        public Edge(int from, int to) {
            this.from = from;
            this.to = to;

            this.cost = calculate(from, to);
        }

        private double calculate(int a, int b) {
            return Math.pow((locations[a].x - locations[b].x),2) + Math.pow((locations[a].y - locations[b].y), 2);
        }

        @Override
        public int compareTo(Edge o) {
            return Double.compare(cost, o.cost);
        }
    }
}