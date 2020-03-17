const BASE = `
class Main {
  public static void main(String[] args) {
    // int ans = new Solution().fib(4);
    // System.out.println(ans);
    testCase1();
    testCase2();
    testCase3();
    return;
  }

  private static void testCase1() {
    int input = 4;
    int expected = 3;
    int output = new Solution().fib(input);
    // check if output matches expected
    if (output == expected) {
      System.out.println("TEST CASE 1 PASSED");
    } else {
      System.out.println("TEST CASE 1 FAILED");
    }
  }

  private static void testCase2() {
    int input = 2;
    int expected = 1;
    int output = new Solution().fib(input);
    // check if output matches expected
    if (output == expected) {
      System.out.println("TEST CASE 2 PASSED");
    } else {
      System.out.println("TEST CASE 2 FAILED");
    }
  }

  private static void testCase3() {
    int input = 3;
    int expected = 2;
    int output = new Solution().fib(input);
    // check if output matches expected
    if (output == expected) {
      System.out.println("TEST CASE 3 PASSED");
    } else {
      System.out.println("TEST CASE 3 FAILED");
    }
  }
}
`

const PLACEHOLDER = 'PLACEHOLDER'

module.exports = { BASE, PLACEHOLDER }