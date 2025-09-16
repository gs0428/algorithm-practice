import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

class Solution {
    static Queue<Integer> queue = new LinkedList<>();
    static int T = 10;
    static int cycle;

    public static void main(String[] args) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < T; i++) {
            queue.clear();
            cycle = 1;
            int tc = Integer.parseInt(in.readLine());
            StringTokenizer st = new StringTokenizer(in.readLine());

            for (int j = 0; j < 8; j++) {
                int num = Integer.parseInt(st.nextToken());
                queue.add(num);
            }

            while (true) {
                int num = queue.poll();
                num -= cycle;
                if (num <= 0) {
                    queue.add(0);
                    break;
                }
                queue.add(num);
                cycle = cycle == 5 ? 1 : cycle + 1;
            }

            sb.append("#").append(tc);
            for(int j = 0;j<8;j++) {
                sb.append(" ").append(queue.poll());
            }
            sb.append("\n");
        }

        System.out.println(sb);

    }
}
