import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

class Solution {
    static List<Integer> input = new ArrayList<>();
    static List<Integer> prices = new ArrayList<>();
    static List<Integer> numbers = new ArrayList<>();
    static int minMoney;

    static void dfs(int month, int money) {
        if (month > 11) {
            minMoney = Integer.min(money, minMoney);
            return;
        }

        int dayPrices = prices.get(0) * input.get(month);

        dfs(month + 3, money + prices.get(2));
        int additionalMoney = dayPrices >= prices.get(1) ? prices.get(1) : dayPrices;
        dfs(month + 1, money + additionalMoney);

    }

    public static void main(String[] args) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int T = Integer.parseInt(in.readLine());

        for (int i = 0; i < T; i++) {
            input.clear();
            prices.clear();
            numbers.clear();
            minMoney = Integer.MAX_VALUE;

            StringTokenizer st = new StringTokenizer(in.readLine());

            for (int j = 0; j < 4; j++) {
                int count = Integer.parseInt(st.nextToken());
                prices.add(count);
            }

            st = new StringTokenizer(in.readLine());

            for (int j = 0; j < 12; j++) {
                int count = Integer.parseInt(st.nextToken());
                input.add(count);
            }

            dfs(0, 0);

            sb.append("#").append(i +1).append(" ").append(Integer.min(prices.get(3), minMoney)).append("\n");
        }

        System.out.println(sb.toString());
    }

}
