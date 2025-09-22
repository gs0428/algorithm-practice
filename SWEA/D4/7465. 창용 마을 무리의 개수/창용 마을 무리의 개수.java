import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

class Solution {
    static int T, N, M, A, B, cnt;
    static int[] people;

    static void make() {
        for (int i = 0; i < N + 1; i++) {
            people[i] = i;
        }
    }

    static int find(int x) {
        if (people[x] == x) {
            return x;
        }
        return find(people[x]);
    }

    static void union(int a, int b) {
        int rootA = find(a);
        int rootB = find(b);

        if (rootA != rootB) {
            for (int i = 1; i <= N; i++) {
                if (people[i] == rootA) {
                    people[i] = rootB;
                }
            }
            cnt--;
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        StringBuilder sb = new StringBuilder();

        T = Integer.parseInt(in.readLine());

        for (int i = 0; i < T; i++) {
            st = new StringTokenizer(in.readLine());
            N = Integer.parseInt(st.nextToken());
            people = new int[N + 1];
            M = Integer.parseInt(st.nextToken());
            cnt = N;
            make();

            for (int j = 0; j < M; j++) {
                st = new StringTokenizer(in.readLine());
                A = Integer.parseInt(st.nextToken());
                B = Integer.parseInt(st.nextToken());
                union(A, B);
            }

            sb.append("#").append(i + 1).append(" ").append(cnt).append("\n");
        }

        System.out.println(sb);
    }
}
