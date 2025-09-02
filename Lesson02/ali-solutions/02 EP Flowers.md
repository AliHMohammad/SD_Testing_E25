### Flowers
A mail-order company selling flower seeds charges 30 kr for postage and packing on all orders up to and including 150 kr value and 40 kr for orders above 150 kr value and up to and including 300 kr value. For orders above 300 kr value there is no charge for postage and packing.

If you were using equivalence partitioning to prepare test cases for the postage and packing charges:
1. What valid input partitions might you use?
2. What test case values could be inferred from said partitions?
3. With the information provided, would there be any invalid partitions?


------

30kr package for orders op til 150kr including
40kr package for orders fra 151 til 300kr including
0kr package for 301kr til infinity

1. There would be three valid partitions
- 0.01-150
- 150.01-300
- 300.01-infinity

2. Eksempler
- 75
- 225
- 400

3. Invalid partitions
- 0
- Negative number
- String
