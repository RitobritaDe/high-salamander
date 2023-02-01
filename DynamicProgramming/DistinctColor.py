# There is a row of N houses, each house can be painted with one of the three colors: red, blue or green. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color. Find the minimum cost to paint all houses.

# The cost of painting each house in red, blue or green colour is given in the array r[], g[] and b[] respectively.


# Example 1:

# Input:
# N = 3
# r[] = {1, 1, 1}
# g[] = {2, 2, 2}
# b[] = {3, 3, 3}
# Output: 4
# Explanation: We can color the houses 
# in RGR manner to incur minimum cost.
# We could have obtained a cost of 3 if 
# we coloured all houses red, but we 
# cannot color adjacent houses with 
# the same color.



# Example 2:

# Input:
# N = 3
# r[] = {2, 1, 3}
# g[] = {3, 2, 1}
# b[] = {1, 3, 2} 
# Output: 3
# Explanation: We can color the houses
# in BRG manner to incur minimum cost.


def distinctColoring(N: int, r: List[int], g: List[int], b: List[int]) -> int:
    dp = [[0] * 3 for _ in range(N)]
    dp[0] = [r[0], g[0], b[0]]
    
    for i in range(1, N):
        dp[i][0] = min(dp[i-1][1], dp[i-1][2]) + r[i]
        dp[i][1] = min(dp[i-1][0], dp[i-1][2]) + g[i]
        dp[i][2] = min(dp[i-1][0], dp[i-1][1]) + b[i]
    
    return min(dp[N-1])