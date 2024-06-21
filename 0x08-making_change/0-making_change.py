#!/usr/bin/python3
''' Module 0: Change comes from within'''


def makeChange(coins, total):
    '''A method that determines the fewest number of coins needed
    to meet a given amount total

    args:
        coins:  is a list of the values of the coins in your possession
        total: is the given amount of coins

    return: fewest number of coins needed to meet total
    '''
    if total <= 0:
        return 0
    rem = total
    coins_count = 0
    coin_idx = 0
    sorted_coins = sorted(coins, reverse=True)
    n = len(coins)
    while rem > 0:
        if coin_idx >= n:
            return -1
        if rem - sorted_coins[coin_idx] >= 0:
            rem -= sorted_coins[coin_idx]
            coins_count += 1
        else:
            coin_idx += 1
    return coins_count
