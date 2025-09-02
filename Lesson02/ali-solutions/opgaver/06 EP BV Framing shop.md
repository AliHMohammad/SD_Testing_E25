### Framing shop
The system calculates the price of picture framing based on the given parameters: width and height of the picture (in centimeters). The valid width of the picture is between 30 and 100 cm inclusive. The valid height of the picture is between 30 and 60 cm inclusive. The system calculates the area of the image as the product of width and height. If the surface area exceeds 1600 cm<sup>2</sup>, the framing price is 3500 kr. Otherwise, the framing price is 3000 kr.

Use black-box analysis to identify a comprehensive series of test cases:
1. Identify the corresponding equivalence partitions and propose test cases based on them
2. Use 3-value boundary value analysis to identify further test cases
3. Write down the full resulting list of test case values
4. Implement the discount calculation function in code and write the corresponding unit tests in the language and unit test framework of your choice


----

Width:

| Partition type | Partitions        | Test case values | Expected output | Boundary values | Test case values |
|----------------|-------------------|------------------|-----------------|-----------------|------------------|
| Invalid        | MINUS INFINITY- -1| -10              | Error           | -1              | -2, -1, 0        |
| Invalid        | 0                 | 0                | Error           | --              | --               |
| Invalid        | 1-29               | 15               | Error          | 1, 29            | 0, 1, 2, 28, 29, 30    |
| Invalid        | 101-INFINITY       | 150               | Error          | 101              | 100, 101, 102       |
| Valid          | 30-100              | 60               | --            | 30, 100           | 29, 30, 31, 99, 100, 101 |


Height:

| Partition type | Partitions        | Test case values | Expected output | Boundary values | Test case values |
|----------------|-------------------|------------------|-----------------|-----------------|------------------|
| Invalid        | MINUS INFINITY- -1| -10              | Error           | -1              | -2, -1, 0        |
| Invalid        | 0                 | 0                | Error           | --              | --               |
| Invalid        | 1-29               | 15               | Error          | 1, 29            | 0, 1, 2, 28, 29, 30    |
| Invalid        | 61-INFINITY       | 120               | Error          | 61              | 60, 61, 62       |
| Valid          | 30-60              | 45                | --            | 30, 60           | 29, 30, 31, 59, 60, 61 |


Surface:

| Partition type | Partitions        | Test case values | Expected output | Boundary values   | Test case values           |
|----------------|-------------------|------------------|-----------------|-----------------|------------------|
| Valid          | 0-1600            | 800              | 3000            | 0, 1600           | -1, 0, 1, 1599, 1600, 1601 |
| Valid          | 1601-INFINITY     | 2000             | 3500            | 160½              | 1600, 1601, 1602           |
