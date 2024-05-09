function maxProfit(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    // Update the minimum price seen so far
    minPrice = Math.min(minPrice, prices[i]);

    // Calculate the profit if selling at the current price
    const profit = prices[i] - minPrice;

    // Update maxProfit if the profit is greater
    maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
}

// Example usage:
const prices = [7, 1, 5, 3, 6, 4];
console.log("Maximum profit:", maxProfit(prices)); // Output: 5 (buy at 1, sell at 6)
