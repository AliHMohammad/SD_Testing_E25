### Password field
A password field accepts a minimum of 6 characters and a maximum of 10 characters. Define:

1. Its corresponding equivalence partitions and test case values
2. The boundary values and resulting test case values with a 3-boundary value approach
3. The final list of test case values


-----


Svar på alle 3

| Partition type | Partitions        | Test case values | Expected output | Boundary values | Test case values |
|----------------|-------------------|------------------|-----------------|-----------------|------------------|
| Invalid        | 1-5               | 3                | false           | 1, 5            | 0, 1, 2, 4, 5, 6 |
| Invalid        | 0                 | 0                | false           |  --             | --               |
| Invalid        | 11-INFINITY       | 20               | false           | 11              | 10, 11, 12       |
| Valid          | 6-10              | 7                | true            | 5, 10           | 5, 6, 7, 9, 10, 11 |
