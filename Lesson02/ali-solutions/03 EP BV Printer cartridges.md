### Printer cartridges
A wholesaler sells printer cartridges. The minimum order quantity is 5. There is a 20% discount for orders of 100 or more printer cartridges. You have been asked to prepare test cases using various values for the number of printer cartridges ordered.

Use black-box analysis to identify a comprehensive series of test cases:
1. Identify the corresponding equivalence partitions and propose test cases based on them
2. Use 3-value boundary value analysis to identify further test cases
3. Write down the full resulting list of test cases
4. Implement the discount calculation function in code and write the corresponding unit tests in the language and unit test framework of your choice

----

#### Valid input partitions:

- 5-99 cartridges = 0% discount
- 100-infinity cartridges = 20%

### Invalid input partitions
- 0-4 cartridges
- 0 cartridges

#### Partitions test cases:

func name: discount() returns boolean

- 50 = 0
- 150 = 20%

#### Partition:

##### valid

- 5,6,98,99
- 100,101

##### invalid

Throw error

- 1-4
- 0
- Negative number


Partition type, Partitions, Test case values, Expected output, Boundary values, Test case values,

| Partition type | Partitions         | Test case values | Expected output | Boundary values | Test case values |
|----------------|-------------------|------------------|-----------------|-----------------|------------------|
| Invalid        | 0-4               | 2                | Error           | 0, 4            | 0, 1, 3, 4, 5    |
| Valid          | 5-99              | 47               | 0               | 5, 99           | 4, 5, 6, 98, 99, 100 |
| Valid          | 100-MAX INTEGER   | 167              | 20              | 100             | 99, 100, 101     |

