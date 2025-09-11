import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

class Solution {
    static List<Boolean> visited = new ArrayList<>();
    static List<Integer> gyuyeong = new ArrayList<>();
    static List<Integer> inyeong = new ArrayList<>();

    static int win;
    static int lose;
    static int size = 9;

    static void permutation(int depth) {
        if (depth == size) {
            int gSum = 0;
            int iSum = 0;
            for (int i = 0; i < size; i++) {
                int gValue = gyuyeong.get(i);
                int iValue = inyeong.get(i);

                if (gValue > iValue) {
                    gSum += gValue + iValue;
                }
                if (gValue < iValue) {
                    iSum += gValue + iValue;
                }
            }

            if (gSum > iSum) win++;
            if (gSum < iSum) lose++;
            return;
        }


        for (int i = depth; i < size; i++) {

            swap(i, depth);
            permutation(depth + 1);
            swap(i, depth);

        }
    }

    public static void swap(int a, int b) {
        int temp = inyeong.get(a);
        inyeong.set(a, inyeong.get(b));
        inyeong.set(b, temp);
    }


    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        String T = br.readLine();
        for (int i = 0; i < Integer.parseInt(T); i++) {
            visited.clear();
            win = 0;
            lose = 0;
            gyuyeong.clear();
            inyeong.clear();

            for (int j = 0; j < size; j++) {
                visited.add(false);
            }

            String input = br.readLine();
            StringTokenizer st = new StringTokenizer(input);
            for (int j = 0; j < size; j++) {
                gyuyeong.add(Integer.parseInt(st.nextToken()));
            }
            for (int j = 1; j <= size * 2; j++) {
                int isExist = gyuyeong.indexOf(j);
                if (isExist == -1) {
                    inyeong.add(j);
                }
            }

            permutation(0);

            sb
                    .append("#").append(i + 1)
                    .append(" ").append(win)
                    .append(" ").append(lose)
                    .append("\n");
        }

        System.out.print(sb);

        br.close();
    }
}
