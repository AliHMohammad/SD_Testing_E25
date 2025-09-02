### Bank account
Suppose you have a bank account that offers variable interest rates:

- 0.5 per cent for the first 10000 kr credit
- 1 per cent for the next 10000 kr
- 1.5 per cent for the rest

If you wanted to check that the bank was handling your account correctly: 
1. What input partitions might you use?
2. What test case values could be inferred from said partitions?


-----



1. Three partitions listed as:
- 0.01-10000
- 10000.01-20000
- 20000.01-infinity

2. Examples:
- 5000
- 15000
- 25000


| Invalid / Valid    | Partition         | Test case value |
| --------           | ----------------- | --------|
| Valid            | 0.01 - 10000        |  5000   |
| Valid           | 10000.01 - 20000    |  15000  |
| Valid              | 20000.01 - infinity |  25000  |
| Invalid              | negative infinity - -0.01 |  -5000  |


